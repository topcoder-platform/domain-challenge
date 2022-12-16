import { DataType } from "../dal/models/nosql/PartiQL";

export const ChallengeSchema = {
  tableName: "Challenge",
  attributes: [
    {
      name: "id",
      type: DataType.STRING,
    },
    {
      name: "phases",
      type: DataType.STRING,
    },
  ],
  indices: {},
};
