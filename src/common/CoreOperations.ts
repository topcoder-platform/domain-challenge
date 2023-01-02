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
  Filter,
  Operator,
  QueryRequest,
  QueryResponse,
  Response,
  ReturnValues,
  SelectQuery,
  Value as PartiQLValue,
} from "../../dist/dal/models/nosql/PartiQL";
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

abstract class CoreOperations<T extends { [key: string]: any }> {
  public constructor(
    private entityName: string,
    private entityAttributes: Attribute[],
    private entityIndexList: DynamoTableIndex
  ) {}

  public async lookup(lookupCriteria: LookupCriteria): Promise<T> {
    const selectQuery: SelectQuery = {
      table: this.entityName,
      attributes: this.entityAttributes,
      filters: [
        {
          name: lookupCriteria.key,
          operator: Operator.EQUAL,
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
    let index: string | null = null;

    const filters: Filter[] = scanCriteria.map((criteria) => {
      if (index == null && this.entityIndexList[criteria.key] != null) {
        index = this.entityIndexList[criteria.key].index!;
      }

      return Filter.fromJSON({
        name: criteria.key,
        // TODO: Move "Operator" from domain and PartiQL to common definitions
        operator: Operator.EQUAL, // operatorFromJSON(criteria.operator),
        value: {
          stringValue: criteria.value,
        },
      });
    });

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
      items: response?.items!,
    };
  }

  public async create(entity: T): Promise<T> {
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

    return entity;
  }

  public async update() {
    // TODO: Handle Update
  }

  public async delete(lookupCriteria: LookupCriteria): Promise<T[]> {
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
                  operator: Operator.EQUAL,
                  value: this.getFilterValue(lookupCriteria.value),
                },
              ],
              returnValues: ReturnValues.ALL_OLD,
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

    return response.items.map((item) => this.toEntity(item));
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

  protected abstract toEntity(response: { [key: string]: PartiQLValue }): T;
}

export default CoreOperations;
