import { DataType } from "../dal/models/nosql/parti_ql";

export const TimelineTemplateSchema = {
  tableName: "TimelineTemplate",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "isActive",
      type: DataType.DATA_TYPE_BOOLEAN,
    },
    {
      name: "phases",
      type: DataType.DATA_TYPE_LIST,
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
