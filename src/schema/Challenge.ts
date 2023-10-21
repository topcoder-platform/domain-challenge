import { Schema } from "../common/Interfaces";
import { DataType } from "../dal/models/nosql/parti_ql";

export const ChallengeSchema: Schema = {
  tableName: "Challenge",
  attributes: {
    id: { type: DataType.DATA_TYPE_STRING },
    legacyId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
    name: { type: DataType.DATA_TYPE_STRING },
    typeId: { type: DataType.DATA_TYPE_STRING },
    trackId: { type: DataType.DATA_TYPE_STRING },
    legacy: {
      type: DataType.DATA_TYPE_MAP,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        track: { type: DataType.DATA_TYPE_STRING },
        subTrack: { type: DataType.DATA_TYPE_STRING },
        forumId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        directProjectId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        reviewType: { type: DataType.DATA_TYPE_STRING },
        confidentialityType: { type: DataType.DATA_TYPE_STRING },
        reviewScorecardId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        screeningScorecardId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        pureV5Task: { type: DataType.DATA_TYPE_BOOLEAN },
        selfService: { type: DataType.DATA_TYPE_BOOLEAN },
        selfServiceCopilot: { type: DataType.DATA_TYPE_STRING },
      },
    },
    billing: {
      type: DataType.DATA_TYPE_MAP,
      items: {
        billingAccountId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        markup: { type: DataType.DATA_TYPE_NUMBER, format: "float", precision: 2 },
      },
    },
    description: { type: DataType.DATA_TYPE_STRING },
    privateDescription: { type: DataType.DATA_TYPE_STRING },
    descriptionFormat: { type: DataType.DATA_TYPE_STRING },
    metadata: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        name: { type: DataType.DATA_TYPE_STRING },
        value: { type: DataType.DATA_TYPE_STRING },
      },
    },
    task: {
      type: DataType.DATA_TYPE_MAP,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        isTask: { type: DataType.DATA_TYPE_BOOLEAN },
        isAssigned: { type: DataType.DATA_TYPE_BOOLEAN },
        memberId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
      },
    },
    timelineTemplateId: { type: DataType.DATA_TYPE_STRING },
    phases: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        duration: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        scheduledStartDate: { type: DataType.DATA_TYPE_STRING },
        scheduledEndDate: { type: DataType.DATA_TYPE_STRING },
        actualStartDate: { type: DataType.DATA_TYPE_STRING },
        actualEndDate: { type: DataType.DATA_TYPE_STRING },
        name: { type: DataType.DATA_TYPE_STRING },
        phaseId: { type: DataType.DATA_TYPE_STRING },
        id: { type: DataType.DATA_TYPE_STRING },
        isOpen: { type: DataType.DATA_TYPE_BOOLEAN },
        constraints: {
          type: DataType.DATA_TYPE_LIST,
          itemType: DataType.DATA_TYPE_MAP,
          items: {
            name: { type: DataType.DATA_TYPE_STRING },
            value: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
          },
        },
        description: { type: DataType.DATA_TYPE_STRING },
        predecessor: { type: DataType.DATA_TYPE_STRING },
      },
    },
    events: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        id: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        name: { type: DataType.DATA_TYPE_STRING },
        key: { type: DataType.DATA_TYPE_STRING },
      },
    },
    terms: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        id: { type: DataType.DATA_TYPE_STRING },
        roleId: { type: DataType.DATA_TYPE_STRING },
      },
    },
    prizeSets: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        type: { type: DataType.DATA_TYPE_STRING },
        description: { type: DataType.DATA_TYPE_STRING },
        prizes: {
          type: DataType.DATA_TYPE_LIST,
          itemType: DataType.DATA_TYPE_MAP,
          items: {
            type: { type: DataType.DATA_TYPE_STRING },
            value: { type: DataType.DATA_TYPE_NUMBER, format: "float", precision: 2 },
            amountInCents: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
          },
        },
      },
    },
    tags: { type: DataType.DATA_TYPE_LIST, itemType: DataType.DATA_TYPE_STRING },
    projectId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
    startDate: { type: DataType.DATA_TYPE_STRING },
    endDate: { type: DataType.DATA_TYPE_STRING },
    status: { type: DataType.DATA_TYPE_STRING },
    attachments: { type: DataType.DATA_TYPE_LIST, itemType: DataType.DATA_TYPE_STRING },
    groups: { type: DataType.DATA_TYPE_STRING_SET, itemType: DataType.DATA_TYPE_STRING },
    winners: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        handle: { type: DataType.DATA_TYPE_STRING },
        placement: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        userId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        type: { type: DataType.DATA_TYPE_STRING },
      },
    },
    payments: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        handle: { type: DataType.DATA_TYPE_STRING },
        amount: { type: DataType.DATA_TYPE_NUMBER, format: "float" },
        userId: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
        type: { type: DataType.DATA_TYPE_STRING },
      },
    },
    discussions: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        id: { type: DataType.DATA_TYPE_STRING },
        name: { type: DataType.DATA_TYPE_STRING },
        type: { type: DataType.DATA_TYPE_STRING },
        provider: { type: DataType.DATA_TYPE_STRING },
        url: { type: DataType.DATA_TYPE_STRING },
      },
    },
    createdBy: { type: DataType.DATA_TYPE_STRING },
    updatedBy: { type: DataType.DATA_TYPE_STRING },
    created: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
    updated: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
    overview: {
      type: DataType.DATA_TYPE_MAP,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        totalPrizes: { type: DataType.DATA_TYPE_NUMBER, format: "float", precision: 2 },
        totalPrizesInCents: { type: DataType.DATA_TYPE_NUMBER, format: "integer" },
      },
    },
    constraints: {
      type: DataType.DATA_TYPE_MAP,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        allowedRegistrants: { type: DataType.DATA_TYPE_LIST, itemType: DataType.DATA_TYPE_STRING },
      },
    },
    skills: {
      type: DataType.DATA_TYPE_LIST,
      itemType: DataType.DATA_TYPE_MAP,
      items: {
        id: { type: DataType.DATA_TYPE_STRING },
        name: { type: DataType.DATA_TYPE_STRING },
        category: {
          type: DataType.DATA_TYPE_MAP,
          items: {
            id: { type: DataType.DATA_TYPE_STRING },
            name: { type: DataType.DATA_TYPE_STRING },
          },
        },
      },
    },
  },
  indices: {
    legacyId: {
      index: "legacyId-index",
      partitionKey: "legacyId",
    },
  },
};
