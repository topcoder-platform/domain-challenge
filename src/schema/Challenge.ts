import { DataType } from "../dal/models/nosql/parti_ql";

export const ChallengeSchema = {
  tableName: "Challenge",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "phases",
      type: DataType.DATA_TYPE_STRING,
    },
  ],
  indices: {},
};
