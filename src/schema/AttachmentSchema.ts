import { DataType } from "../dal/models/nosql/parti_ql";

export const AttachmentSchema = {
  tableName: "Attachment",
  attributes: [
    {
      name: "id",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "url",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "fileSize",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "name",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "challengeId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "description",
      type: DataType.DATA_TYPE_STRING,
    },
  ],
  indices: {},
};
