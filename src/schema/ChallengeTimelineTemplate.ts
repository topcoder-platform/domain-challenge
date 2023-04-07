import { Schema } from "../common/Interfaces";
import { DataType } from "../dal/models/nosql/parti_ql";

export const ChallengeTimelineTemplateSchema: Schema = {
  tableName: "ChallengeTimelineTemplate",
  attributes: {
    id: { type: DataType.DATA_TYPE_STRING },
    trackId: { type: DataType.DATA_TYPE_STRING },
    typeId: { type: DataType.DATA_TYPE_STRING },
    timelineTemplateId: { type: DataType.DATA_TYPE_STRING },
    isDefault: { type: DataType.DATA_TYPE_BOOLEAN },
  },
  indices: {},
};
