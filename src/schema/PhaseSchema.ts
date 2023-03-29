import { Schema } from "../common/Interfaces";
import { DataType } from "../dal/models/nosql/parti_ql";

export const PhaseSchema: Schema = {
  tableName: "Phase",
  attributes: {
    id: { type: DataType.DATA_TYPE_STRING },
    name: { type: DataType.DATA_TYPE_STRING },
    description: { type: DataType.DATA_TYPE_STRING },
    isOpen: { type: DataType.DATA_TYPE_BOOLEAN },
    duration: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
  },
  indices: {},
};
