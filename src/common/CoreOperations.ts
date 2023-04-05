// TODO: Move this to @topcoder-framework
import { noSqlClient } from "../dal/client/nosql";

// TODO: Import from @topcoder-framework/lib-common
import { LookupCriteria, ScanCriteria, ScanResult } from "../models/common/common";

// TODO: Import from @topcoder-framework/lib-common
import { Value } from "../models/google/protobuf/struct";

import { Metadata, StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import {
  Attribute,
  DataType,
  Filter,
  Operator,
  ListValue,
  Value as PartiQLValue,
  QueryRequest,
  QueryResponse,
  Response,
  ReturnValue,
  SelectQuery,
  UpdateAction,
  UpdateType,
} from "../dal/models/nosql/parti_ql";
import { DataTypeDefinition, Schema } from "./Interfaces";

abstract class CoreOperations<T extends { [key: string]: any }, I extends { [key: string]: any }> {
  #tableAttributes: Attribute[];

  public constructor(private entitySchema: Schema) {
    this.#tableAttributes = Object.entries(this.entitySchema.attributes).map(
      ([key, value]) =>
        ({
          name: key,
          type: value.type,
        } as Attribute)
    );
  }

  public async lookup(lookupCriteria: LookupCriteria): Promise<T> {
    let index: string | undefined = undefined;

    if (this.entitySchema.indices != null) {
      index = this.entitySchema.indices[lookupCriteria.key]?.index;
    }

    const selectQuery: SelectQuery = {
      index,
      table: this.entitySchema.tableName,
      attributes: Object.keys(this.entitySchema.attributes),
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
        throw new StatusBuilder()
          .withCode(Status.INTERNAL)
          .withDetails(queryResponse.kind?.error?.message)
          .build();
      case "response":
        if (queryResponse.kind?.response?.items?.length > 0) {
          return this.toEntity(queryResponse.kind?.response?.items[0]);
        }
    }

    throw new StatusBuilder()
      .withCode(Status.NOT_FOUND)
      .withDetails(`Entity not found: ${lookupCriteria.key} = ${lookupCriteria.value}`)
      .build();
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
              table: this.entitySchema.tableName,
              attributes: this.#tableAttributes.map((attr) => attr.name),
              index: index ?? undefined,
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

  protected async create(entity: I & T, metadata?: Metadata): Promise<T> {
    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "insert",
            insert: {
              table: this.entitySchema.tableName,
              attributes: Object.entries(entity)
                .filter(([, value]) => value !== undefined)
                .map(([key, value]) => ({
                  attribute: {
                    name: key,
                    type: this.entitySchema.attributes[key].type,
                  },
                  value: this.marshallValue(this.entitySchema.attributes[key], value),
                })),
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
    entity: unknown,
    metadata?: Metadata
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
              table: this.entitySchema.tableName,
              // TODO: Write a convenience method in @topcoder-framework/lib-common to support additional update operations like LIST_APPEND, SET_ADD, SET_REMOVE, etc
              updates: Object.entries(entity)
                .filter(([key, value]) => value !== undefined)
                .map(([key, value]) => ({
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
      throw new StatusBuilder()
        .withCode(Status.NOT_FOUND)
        .withDetails(`No record matched the filter criteria`)
        .build();
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
              table: this.entitySchema.tableName,
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
      throw new StatusBuilder()
        .withCode(Status.INTERNAL)
        .withDetails(queryResponse.kind?.error?.message)
        .build();
    }

    const response: Response = queryResponse.kind?.response!;

    if (response.items?.length === 0) {
      throw new StatusBuilder()
        .withCode(Status.NOT_FOUND)
        .withDetails(
          `Entity not found: ${lookupCriteria.key} = ${Value.unwrap(
            (lookupCriteria.value as { value: Value }).value
          )}`
        )
        .build();
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
      if (
        index == null &&
        this.entitySchema.indices != null &&
        this.entitySchema.indices[criteria.key] != null
      ) {
        index = this.entitySchema.indices[criteria.key].index!;
      }

      return {
        name: criteria.key,
        // TODO: Map operator from topcoder.common.Operator to PartiQL.Operator
        operator: Operator.OPERATOR_EQUAL,
        value: this.toValue(criteria.key, criteria.value),
      };
    });

    return {
      index,
      filters,
    };
  }

  private getFilterValue(filter: Value): PartiQLValue {
    let value: PartiQLValue;

    switch (filter.kind?.$case) {
      case "numberValue":
        value = {
          kind: {
            $case: "numberValue",
            numberValue: filter.kind.numberValue,
          },
        };
        break;
      case "stringValue":
        value = {
          kind: {
            $case: "stringValue",
            stringValue: filter.kind.stringValue,
          },
        };
        break;
      case "boolValue":
        value = {
          kind: {
            $case: "boolean",
            boolean: filter.kind.boolValue,
          },
        };
        break;

      default:
        throw new Error("Lookups are only supported for string, number & boolean value");
    }

    return value;
  }

  private marshallValue(definition: DataTypeDefinition, value: unknown): PartiQLValue {
    const dataType = definition.type;

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
          boolean: value as unknown as boolean,
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

    if (dataType == DataType.DATA_TYPE_LIST) {
      const listValue: ListValue = {
        values: [],
      };

      switch (definition.itemType) {
        case DataType.DATA_TYPE_STRING:
        case DataType.DATA_TYPE_NUMBER:
        case DataType.DATA_TYPE_BOOLEAN:
        case DataType.DATA_TYPE_STRING_SET:
        case DataType.DATA_TYPE_NUMBER_SET:
          listValue.values = (value as unknown[]).map((item) =>
            this.marshallValue(
              {
                type: definition.itemType!,
              },
              item
            )
          );
          break;
        case DataType.DATA_TYPE_MAP:
          listValue.values = (value as { [key: string]: unknown }[]).map((item) =>
            this.marshallValue(
              {
                type: DataType.DATA_TYPE_MAP,
                items: definition.items,
              },
              item
            )
          );
          break;
        case DataType.DATA_TYPE_LIST:
          listValue.values = (value as unknown[]).map((item) =>
            this.marshallValue(
              {
                type: definition.itemType!,
                itemType: definition.itemType,
                items: definition.items,
              },
              item
            )
          );
      }

      return {
        kind: {
          $case: "listValue",
          listValue,
        },
      };
    }

    if (dataType == DataType.DATA_TYPE_MAP) {
      return {
        kind: {
          $case: "mapValue",
          mapValue: {
            values: Object.entries(value as { [key: string]: unknown }).reduce(
              (acc, [key, value]) => {
                acc[key] = this.marshallValue(definition.items![key], value);
                return acc;
              },
              {} as { [key: string]: PartiQLValue }
            ),
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
