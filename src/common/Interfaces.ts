// TODO: Move to @topcoder-framework/client-nosql

import { DataType } from "../dal/models/nosql/parti_ql";

export interface DataTypeDefinition {
  type: DataType;
  format?: "integer" | "float";
  precision?: number;
  itemType?: DataType;
  items?: Record<string, DataTypeDefinition>;
}

// prettier-ignore
export type TableIndexDefinition = Record<string,{ index: string; partitionKey: string; sortKey?: string }>;

export interface Schema {
  tableName: string;
  attributes: Record<string, DataTypeDefinition>;
  indices?: TableIndexDefinition;
}
