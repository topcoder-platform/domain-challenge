// TODO: Move this to @topcoder-framework
import { noSqlClient } from "../dal/client/nosql";

// TODO: Import from @topcoder-framework/lib-common
import { LookupCriteria, ScanCriteria, ScanResult } from "../models/common/common";

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
import _ from "lodash";

abstract class CoreOperations<T extends { [key: string]: any }, I extends { [key: string]: any }> {
  #tableAttributes: Attribute[];
  #attributes: string[];

  public constructor(private entitySchema: Schema) {
    this.#attributes = Object.keys(this.entitySchema.attributes);
    this.#tableAttributes = Object.entries(this.entitySchema.attributes).map(
      ([key, value]) =>
        ({
          name: key,
          type: value.type,
        } as Attribute)
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

  public async lookup(lookupCriteria: LookupCriteria): Promise<T> {
    const selectQuery: SelectQuery = {
      table: this.entitySchema.tableName,
      attributes: this.#attributes,
      filters: [this.toFilter(lookupCriteria)],
    };

    if (
      this.entitySchema.indices != null &&
      this.entitySchema.indices[lookupCriteria.key] != null
    ) {
      selectQuery.index = this.entitySchema.indices[lookupCriteria.key].index;
    }

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
                .filter(([, value]) => (Array.isArray(value) ? value.length > 0 : value != null))
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
              updates: Object.entries(entity)
                .filter(([, value]) => value !== undefined)
                .map(([key, value]) => {
                  let actionToTake = UpdateAction.UPDATE_ACTION_SET;
                  let updateType = UpdateType.UPDATE_TYPE_VALUE;

                  // TODO: make this more generic, to check the data type and the length of the updates in case of delete the attribute
                  if (
                    [
                      DataType.DATA_TYPE_LIST,
                      DataType.DATA_TYPE_NUMBER_SET,
                      DataType.DATA_TYPE_STRING_SET,
                    ].includes(this.entitySchema.attributes[key].type) &&
                    value.length === 0
                  ) {
                    actionToTake = UpdateAction.UPDATE_ACTION_REMOVE;
                    updateType = UpdateType.UPDATE_TYPE_SET_DELETE;
                  }

                  return {
                    action: actionToTake, // TODO: Write a convenience method in @topcoder-framework/lib-common to support additional update operations like LIST_APPEND, SET_ADD, SET_REMOVE, etc
                    type: updateType,
                    attribute: {
                      name: key,
                      type: this.entitySchema.attributes[key].type,
                    },
                    value: this.marshallValue(this.entitySchema.attributes[key], value),
                  };
                }),
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
    let index: string | undefined = undefined;

    if (this.entitySchema.indices != null) {
      index = this.entitySchema.indices[lookupCriteria.key]?.index;
    }

    const queryRequest: QueryRequest = {
      kind: {
        $case: "query",
        query: {
          kind: {
            $case: "delete",
            delete: {
              index,
              table: this.entitySchema.tableName,
              filters: [this.toFilter(lookupCriteria)],
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
        .withDetails(`Entity not found: ${lookupCriteria.key} = ${lookupCriteria.value}`)
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

      return this.toFilter(criteria);
    });

    return {
      index,
      filters,
    };
  }

  private toFilter(lookupCriteria: LookupCriteria): Filter {
    return {
      name: lookupCriteria.key,
      operator: Operator.OPERATOR_EQUAL,
      value: this.marshallValue(
        this.entitySchema.attributes[lookupCriteria.key],
        lookupCriteria.value
      ),
    };
  }

  private marshallValue(definition: DataTypeDefinition, value: unknown): PartiQLValue {
    const dataType = definition.type;

    // TODO: This is temporary until all services update to @topcoder-framework/lib-common v0.0.14+
    if ((value as PartiQLValue).kind != null && (value as PartiQLValue).kind?.$case != null) {
      console.log(
        `Value likely created using older lib-common - it's already a PartiQLValue: ${JSON.stringify(
          value
        )}`
      );
      return value as PartiQLValue;
    }

    if (dataType == DataType.DATA_TYPE_STRING) {
      return {
        kind: {
          $case: "stringValue",
          stringValue: _.toString(value as string),
        },
      };
    }

    if (dataType == DataType.DATA_TYPE_NUMBER) {
      return {
        kind: {
          $case: "numberValue",
          numberValue: _.toNumber(value as number),
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
            values: (value as string[]).map((item) => _.toString(item)),
          },
        },
      };
    }

    if (dataType === DataType.DATA_TYPE_NUMBER_SET) {
      return {
        kind: {
          $case: "numberSetValue",
          numberSetValue: {
            values: (value as number[]).map((item) => _.toNumber(item)),
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
            values: Object.entries(value as { [key: string]: unknown })
              .filter(([, value]) => value != null)
              .reduce((acc, [key, value]) => {
                acc[key] = this.marshallValue(definition.items![key], value);
                return acc;
              }, {} as { [key: string]: PartiQLValue }),
          },
        },
      };
    }

    throw new Error(`Unsupported data type: ${dataType}`);
  }

  protected abstract toEntity(response: { [key: string]: PartiQLValue }): T;
}

export default CoreOperations;
