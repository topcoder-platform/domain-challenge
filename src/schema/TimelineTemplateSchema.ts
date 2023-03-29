import { Schema } from "../common/Interfaces";
import { DataType } from "../dal/models/nosql/parti_ql";

export const TimelineTemplateSchema: Schema = {
  tableName: "TimelineTemplate",
  attributes: {
    id: { type: DataType.DATA_TYPE_STRING },
    name: { type: DataType.DATA_TYPE_STRING },
    description: { type: DataType.DATA_TYPE_STRING },
    isActive: { type: DataType.DATA_TYPE_BOOLEAN },
    phases: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        phaseId: { type: DataType.DATA_TYPE_STRING },
        defaultDuration: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        predecessor: { type: DataType.DATA_TYPE_STRING },
      },
    },
  },
  indices: {},
};
