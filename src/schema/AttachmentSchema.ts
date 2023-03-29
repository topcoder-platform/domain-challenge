import { Schema } from "../common/Interfaces";
import { DataType } from "../dal/models/nosql/parti_ql";

export const AttachmentSchema: Schema = {
  tableName: "Attachment",
  attributes: {
    id: { type: DataType.DATA_TYPE_STRING },
    url: { type: DataType.DATA_TYPE_STRING },
    fileSize: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
    name: { type: DataType.DATA_TYPE_STRING },
    challengeId: { type: DataType.DATA_TYPE_STRING },
    description: { type: DataType.DATA_TYPE_STRING },
  },
  indices: {},
};
