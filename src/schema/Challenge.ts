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
      type: DataType.DATA_TYPE_LIST,
    },
    {
      name: "legacyId",
      type: DataType.DATA_TYPE_NUMBER,
    },
    {
      name: "name",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "typeId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "trackId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "legacy",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "billing",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "description",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "privateDescription",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "descriptionFormat",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "metadata",
      type: DataType.DATA_TYPE_LIST,
    },
    {
      name: "task",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "timelineTemplateId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "events",
      type: DataType.DATA_TYPE_LIST,
    },
    {
      name: "terms",
      type: DataType.DATA_TYPE_LIST,
    },
    {
      name: "prizeSets",
      type: DataType.DATA_TYPE_STRING_SET,
    },
    {
      name: "tags",
      type: DataType.DATA_TYPE_STRING_SET,
    },
    {
      name: "projectId",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "startDate",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "endDate",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "status",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "attachments",
      type: DataType.DATA_TYPE_LIST,
    },
    {
      name: "groups",
      type: DataType.DATA_TYPE_STRING_SET,
    },
    {
      name: "winners",
      type: DataType.DATA_TYPE_LIST,
    },
    {
      name: "discussions",
      type: DataType.DATA_TYPE_LIST,
    },
    {
      name: "createdBy",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "created",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "updatedBy",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "updated",
      type: DataType.DATA_TYPE_STRING,
    },
    {
      name: "overview",
      type: DataType.DATA_TYPE_STRING,
    },
  ],
  indices: {},
};
