import { DataType } from "../dal/models/nosql/parti_ql";

export const ChallengeTrackSchema = {
  tableName: "ChallengeTrack",
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
      name: "abbreviation",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "description",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "name",
      type: DataType.DATA_TYPE_STRING,
    },
  ],
  indices: {},
};
