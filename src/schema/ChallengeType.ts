import { DataType } from "../dal/models/nosql/PartiQL";

export const ChallengeTypeSchema = {
  tableName: "ChallengeType",
  attributes: [
    {
      name: "id",
      type: DataType.STRING,
    },
    {
      name: "isActive",
      type: DataType.BOOLEAN,
    },
    {
      name: "isTask",
      type: DataType.BOOLEAN,
    },
    {
      name: "abbreviation",
      type: DataType.STRING,
    },
    {
      name: "description",
      type: DataType.STRING,
    },
    {
      name: "name",
      type: DataType.STRING,
    },
  ],
  indices: {},
};
