// TODO: Move this to @topcoder-framework
import { noSqlClient } from "../dal/client/nosql";

// TODO: Import from @topcoder-framework/lib-common
import {
  LookupCriteria,
  ScanCriteria,
  ScanResult,
} from "../models/common/common";

// TODO: Import from @topcoder-framework/lib-common
import { Value } from "../models/google/protobuf/struct";

import {
  Attribute,
  DataType,
  Filter,
  Operator,
  QueryRequest,
  QueryResponse,
  Response,
  ReturnValue,
  SelectQuery,
  UpdateAction,
  UpdateType,
  Value as PartiQLValue,
} from "../dal/models/nosql/parti_ql";
import { StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { GrpcError } from "./GrpcError";

export type ValueType =
  | "nullValue"
  | "numberValue"
  | "stringValue"
  | "boolValue"
  | "structValue"
  | "listValue";

export type DynamoTableIndex = {
  [key: string]: {
    index: string;
    partitionKey: string;
    sortKey?: string;
  };
};

abstract class CoreOperations<
  T extends { [key: string]: any },
  I extends { [key: string]: any }
> {
  public constructor(
    private entityName: string,
    private entityAttributes: Attribute[],
    private entityIndexList: DynamoTableIndex
  ) {}

  private attributesKeyTypeMap: { [key: string]: DataType } =
    this.entityAttributes.reduce(
      (map, attribute) => ({
        ...map,
        [attribute.name]: attribute.type,
      }),
      {}
    );

  public async lookup(lookupCriteria: LookupCriteria): Promise<T> {
    const selectQuery: SelectQuery = {
      table: this.entityName,
      attributes: this.entityAttributes,
      filters: [
        {
          name: lookupCriteria.key,
          operator: Operator.OPERATOR_EQUAL,
          value: this.getFilterValue(lookupCriteria.value),
        },
      ],
    };

    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "select",
            select: selectQuery,
          },
        },
      },
    };

    const queryResponse: QueryResponse = await noSqlClient.query(queryRequest);

    switch (queryResponse.kind?.$case) {
      case "error":
        throw new GrpcError(
          new StatusBuilder()
            .withCode(Status.INTERNAL) // TODO: Map error code
            .withDetails(queryResponse.kind?.error?.message)
            .build()
        );
      case "response":
        if (queryResponse.kind?.response?.items?.length > 0) {
          return this.toEntity(queryResponse.kind?.response?.items[0]);
        }
    }

    throw new GrpcError(
      new StatusBuilder()
        .withCode(Status.NOT_FOUND)
        .withDetails(
          `Entity not found: ${lookupCriteria.key} = ${Value.unwrap(
            (lookupCriteria.value as { value: Value }).value
          )}`
        )
        .build()
    );
  }

  public async scan(
    scanCriteria: ScanCriteria[],
    nextToken: string | undefined
  ): Promise<ScanResult> {
    const { index, filters } = this.toFilters(scanCriteria);

    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "select",
            select: {
              table: this.entityName,
              index: index ?? undefined,
              attributes: this.entityAttributes,
              filters,
              nextToken,
            },
          },
        },
      },
    };

    const queryRespose: QueryResponse = await noSqlClient.query(queryRequest);

    if (queryRespose.kind?.$case === "error") {
      throw new Error(queryRespose.kind?.error?.message);
    }

    const response = queryRespose.kind?.response;

    return {
      nextToken: response?.nextToken,
      items: response?.items.map((item) => this.toEntity(item)) ?? [],
    };
  }

  protected async create(entity: I & T): Promise<T> {
    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "insert",
            insert: {
              table: this.entityName,
              attributes: entity,
            },
          },
        },
      },
    };

    const queryResponse: QueryResponse = await noSqlClient.query(queryRequest);

    if (queryResponse.kind?.$case === "error") {
      throw new Error(queryResponse.kind?.error?.message);
    }

    return this.toEntity(entity);
  }

  public async update(
    scanCriteria: ScanCriteria[],
    entity: unknown
  ): Promise<{ items: T[] }> {
    if (typeof entity != "object" || entity == null) {
      throw new Error("Expected key-value pairs to update");
    }

    const { filters } = this.toFilters(scanCriteria);
    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "update",
            update: {
              table: this.entityName,
              // TODO: Write a convenience method in @topcoder-framework/lib-common to support additional update operations like LIST_APPEND, SET_ADD, SET_REMOVE, etc
              updates: Object.entries(entity).map(([key, value]) => ({
                action: UpdateAction.UPDATE_ACTION_SET,
                type: UpdateType.UPDATE_TYPE_VALUE,
                attribute: key,
                value: this.toValue(key, value),
              })),
              filters,
              returnValue: ReturnValue.RETURN_VALUE_ALL_NEW,
            },
          },
        },
      },
    };

    const queryResponse: QueryResponse = await noSqlClient.query(queryRequest);

    if (queryResponse.kind?.$case === "error") {
      throw new Error(queryResponse.kind?.error?.message);
    }
    const response: Response = queryResponse.kind?.response!;
    if (response.items?.length === 0) {
      throw new GrpcError(
        new StatusBuilder()
          .withCode(Status.NOT_FOUND)
          .withDetails(`No record matched the filter criteria`)
          .build()
      );
    }

    return {
      items: response.items.map((item) => this.toEntity(item)),
    };
  }

  public async delete(lookupCriteria: LookupCriteria): Promise<{ items: T[] }> {
    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "delete",
            delete: {
              table: this.entityName,
              filters: [
                {
                  name: lookupCriteria.key,
                  operator: Operator.OPERATOR_EQUAL,
                  value: this.getFilterValue(lookupCriteria.value),
                },
              ],
              returnValues: ReturnValue.RETURN_VALUE_ALL_OLD,
            },
          },
        },
      },
    };

    const queryResponse: QueryResponse = await noSqlClient.query(queryRequest);

    if (queryResponse.kind?.$case === "error") {
      throw new GrpcError(
        new StatusBuilder()
          .withCode(Status.INTERNAL)
          .withDetails(queryResponse.kind?.error?.message)
          .build()
      );
    }

    const response: Response = queryResponse.kind?.response!;

    if (response.items?.length === 0) {
      throw new GrpcError(
        new StatusBuilder()
          .withCode(Status.NOT_FOUND)
          .withDetails(
            `Entity not found: ${lookupCriteria.key} = ${Value.unwrap(
              (lookupCriteria.value as { value: Value }).value
            )}`
          )
          .build()
      );
    }

    return {
      items: response.items.map((item) => this.toEntity(item)),
    };
  }

  private toFilters(scanCriteria: ScanCriteria[]): {
    index: string | null;
    filters: Filter[];
  } {
    let index: string | null = null;
    const filters: Filter[] = scanCriteria.map((criteria) => {
      if (index == null && this.entityIndexList[criteria.key] != null) {
        index = this.entityIndexList[criteria.key].index!;
      }

      return Filter.fromJSON({
        name: criteria.key,
        // TODO: Map operator from topcoder.common.Operator to PartiQL.Operator
        operator: Operator.OPERATOR_EQUAL,
        value: {
          stringValue: criteria.value,
        },
      });
    });

    return {
      index,
      filters,
    };
  }

  private getFilterValue(filter: unknown): PartiQLValue {
    const filterValue = (filter as { value: Value }).value;
    let value: PartiQLValue;

    switch (filterValue.kind?.$case) {
      case "numberValue":
        value = {
          kind: {
            $case: "numberValue",
            numberValue: filterValue.kind.numberValue,
          },
        };
        break;
      case "stringValue":
        value = {
          kind: {
            $case: "stringValue",
            stringValue: filterValue.kind.stringValue,
          },
        };
        break;
      case "boolValue":
        value = {
          kind: {
            $case: "boolean",
            boolean: filterValue.kind.boolValue,
          },
        };
        break;

      default:
        throw new Error(
          "Lookups are only supported for string, number & boolean value"
        );
    }

    return value;
  }

  private toValue(key: string, value: unknown): PartiQLValue {
    const dataType: DataType = this.attributesKeyTypeMap[key];

    if (dataType == null) {
      throw new Error(`Unknown attribute: ${key}`);
    }

    if (dataType == DataType.DATA_TYPE_STRING) {
      return {
        kind: {
          $case: "stringValue",
          stringValue: value as string,
        },
      };
    }

    if (dataType == DataType.DATA_TYPE_NUMBER) {
      return {
        kind: {
          $case: "numberValue",
          numberValue: value as number,
        },
      };
    }

    if (dataType == DataType.DATA_TYPE_BOOLEAN) {
      return {
        kind: {
          $case: "boolean",
          boolean: value as boolean,
        },
      };
    }

    if (dataType == DataType.DATA_TYPE_LIST) {
      return {
        kind: {
          $case: "listValue",
          listValue: (value as unknown[]).map((item) => item),
        },
      };
    }

    if (dataType == DataType.DATA_TYPE_MAP) {
      return {
        kind: {
          $case: "mapValue",
          mapValue: value as { [key: string]: unknown },
        },
      };
    }

    if (dataType === DataType.DATA_TYPE_STRING_SET) {
      return {
        kind: {
          $case: "stringSetValue",
          stringSetValue: {
            values: value as string[],
          },
        },
      };
    }

    if (dataType === DataType.DATA_TYPE_NUMBER_SET) {
      return {
        kind: {
          $case: "numberSetValue",
          numberSetValue: {
            values: value as number[],
          },
        },
      };
    }

    throw new Error(`Unsupported data type: ${dataType}`);
  }

  // TODO: Use defined schema to do the conversion
  protected toInsertAttributes(model: T): any {
    return model;
  }

  protected abstract toEntity(response: { [key: string]: PartiQLValue }): T;
}

export default CoreOperations;
