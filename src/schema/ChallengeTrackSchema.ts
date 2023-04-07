import { Schema } from "../common/Interfaces";
import { DataType } from "../dal/models/nosql/parti_ql";

export const ChallengeTrackSchema: Schema = {
  tableName: "ChallengeTrack",
  attributes: {
    id: { type: DataType.DATA_TYPE_STRING },
    name: { type: DataType.DATA_TYPE_STRING },
    description: { type: DataType.DATA_TYPE_STRING },
    isActive: { type: DataType.DATA_TYPE_BOOLEAN },
    abbreviation: { type: DataType.DATA_TYPE_STRING },
  },
  indices: {},
};
