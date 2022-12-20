import { DataType } from "../dal/models/nosql/PartiQL";

export const ChallengeTimelineTemplateSchema = {
  tableName: "ChallengeTimelineTemplate",
  attributes: [
    {
      name: "id",
      type: DataType.STRING,
    },
    {
      name: "isDefault",
      type: DataType.BOOLEAN,
    },
    {
      name: "timelineTemplateId",
      type: DataType.STRING,
    },
    {
      name: "trackId",
      type: DataType.STRING,
    },
    {
      name: "typeId",
      type: DataType.STRING,
    },
  ],
  indices: {},
};
