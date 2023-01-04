import { DataType } from "../dal/models/nosql/parti_ql";

export const ChallengeTimelineTemplateSchema = {
  tableName: "ChallengeTimelineTemplate",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "isDefault",
      type: DataType.DATA_TYPE_BOOLEAN,
    },
    {
      name: "timelineTemplateId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "trackId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "typeId",
      type: DataType.DATA_TYPE_STRING,
    },
  ],
  indices: {},
};
