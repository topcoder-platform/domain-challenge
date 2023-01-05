import { DataType } from "../dal/models/nosql/parti_ql";

export const PhaseSchema = {
  tableName: "Phase",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "isOpen",
      type: DataType.DATA_TYPE_BOOLEAN,
    },
    {
      name: "duration",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "name",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "description",
      type: DataType.DATA_TYPE_STRING,
    },
  ],
  indices: {},
};
