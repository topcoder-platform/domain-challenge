/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";
import { Timestamp } from "../../google/protobuf/timestamp";

export interface Challenge {
  id: string;
  legacyId?: number | undefined;
  name: string;
  typeId: string;
  trackId: string;
  legacy?: Challenge_Legacy | undefined;
  billing?: Challenge_Billing | undefined;
  description: string;
  privateDescription?: string | undefined;
  descriptionFormat?: string | undefined;
  metadata: Challenge_Metadata[];
  task?: Challenge_Task | undefined;
  timelineTemplateId?: string | undefined;
  phases: Challenge_Phase[];
  events: Challenge_Event[];
  terms: Challenge_Term[];
  prizeSets: Challenge_PrizeSet[];
  tags: string[];
  projectId?: number | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  status: string;
  attachments: string[];
  groups: string[];
  winners: Challenge_Winner[];
  discussions: Challenge_Discussion[];
  createdBy: string;
  updatedBy?: string | undefined;
  created: number;
  updated?: number | undefined;
  overview?: Challenge_Overview;
}

export interface Challenge_Legacy {
  /** Develop, Design, Data Science, QA */
  track?: string | undefined;
  subTrack?: string | undefined;
  forumId?: number | undefined;
  directProjectId: number;
  /** COMMUNITY, INTERNAL */
  reviewType: string;
  /** public, private */
  confidentialityType: string;
  reviewScorecardId?: number | undefined;
  screeningScorecardId?: number | undefined;
  pureV5Task?: boolean | undefined;
  selfService?: boolean | undefined;
  selfServiceCopilot?: string | undefined;
}

export interface Challenge_Billing {
  billingAccountId: number;
  markup: number;
}

export interface Challenge_Event {
  id: number;
  name: string;
  key: string;
}

export interface Challenge_Term {
  id: string;
  roleId: string;
}

export interface Challenge_Metadata {
  name: string;
  value: string;
}

export interface Challenge_Discussion {
  id?: string | undefined;
  name: string;
  /** Challenge */
  type: string;
  provider: string;
  url?: string | undefined;
}

export interface Challenge_Phase {
  duration: number;
  scheduledStartDate?: string | undefined;
  scheduledEndDate?: string | undefined;
  actualStartDate?: string | undefined;
  actualEndDate?: string | undefined;
  name: string;
  phaseId: string;
  id: string;
  isOpen: boolean;
}

export interface Challenge_Winner {
  handle: string;
  placement: number;
  userId: number;
}

export interface Challenge_Task {
  isTask: boolean;
  isAssigned: boolean;
  memberId?: number | undefined;
}

export interface Challenge_PrizeSet {
  /** Placement, Copilot, Reviewer */
  type: string;
  description?: string | undefined;
  prizes: Challenge_PrizeSet_Prize[];
}

export interface Challenge_PrizeSet_Prize {
  value: number;
  type: string;
}

export interface Challenge_Overview {
  totalPrizes: number;
}

export interface ChallengeList {
  items: Challenge[];
}

export interface CreateChallengeInput {
  name: string;
  typeId: string;
  trackId: string;
  timelineTemplateId?: string | undefined;
  legacy?: Challenge_Legacy;
  billing?: Challenge_Billing;
  description: string;
  privateDescription?: string | undefined;
  descriptionFormat?: string | undefined;
  metadata: Challenge_Metadata[];
  task?: Challenge_Task | undefined;
  phases: Challenge_Phase[];
  events: Challenge_Event[];
  terms: Challenge_Term[];
  prizeSets: Challenge_PrizeSet[];
  tags: string[];
  projectId?: number | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  status: string;
  attachments: string[];
  groups: string[];
  discussions: Challenge_Discussion[];
}

export interface UpdateChallengeInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateChallengeInput_UpdateInput;
}

export interface UpdateChallengeInput_UpdateInput {
  id: string;
  legacyId?: number | undefined;
  name?: string | undefined;
  typeId?: string | undefined;
  trackId?: string | undefined;
  legacy?: UpdateChallengeInput_UpdateInput_Legacy | undefined;
  billing?: UpdateChallengeInput_UpdateInput_Billing | undefined;
  description?: string | undefined;
  privateDescription?: string | undefined;
  descriptionFormat?: string | undefined;
  metadata: UpdateChallengeInput_UpdateInput_Metadata[];
  task?: UpdateChallengeInput_UpdateInput_Task | undefined;
  timelineTemplateId?: string | undefined;
  phases: UpdateChallengeInput_UpdateInput_Phase[];
  events: UpdateChallengeInput_UpdateInput_Event[];
  terms: UpdateChallengeInput_UpdateInput_Term[];
  prizeSets: UpdateChallengeInput_UpdateInput_PrizeSet[];
  tags: string[];
  projectId?: number | undefined;
  startDate?: number | undefined;
  endDate?: number | undefined;
  status?: string | undefined;
  attachments: string[];
  groups: string[];
  winners: UpdateChallengeInput_UpdateInput_Winner[];
  discussions: UpdateChallengeInput_UpdateInput_Discussion[];
  createdBy?: string | undefined;
  updatedBy?: string | undefined;
  created?: number | undefined;
  updated?: number | undefined;
  overview?: UpdateChallengeInput_UpdateInput_Overview | undefined;
}

export interface UpdateChallengeInput_UpdateInput_Legacy {
  /** Develop, Design, Data Science, QA */
  track?: string | undefined;
  subTrack?: string | undefined;
  forumId?: number | undefined;
  directProjectId: number;
  /** COMMUNITY, INTERNAL */
  reviewType: string;
  /** public, private */
  confidentialityType: string;
  reviewScorecardId?: number | undefined;
  screeningScorecardId?: number | undefined;
  pureV5Task?: boolean | undefined;
  selfService?: boolean | undefined;
  selfServiceCopilot?: string | undefined;
}

export interface UpdateChallengeInput_UpdateInput_Billing {
  billingAccountId: number;
  markup: number;
}

export interface UpdateChallengeInput_UpdateInput_Event {
  id: number;
  name: string;
  key: string;
}

export interface UpdateChallengeInput_UpdateInput_Term {
  id: string;
  roleId: string;
}

export interface UpdateChallengeInput_UpdateInput_Metadata {
  name: string;
  value: string;
}

export interface UpdateChallengeInput_UpdateInput_Discussion {
  id?: string | undefined;
  name: string;
  /** Challenge */
  type: string;
  provider: string;
  url?: string | undefined;
}

export interface UpdateChallengeInput_UpdateInput_Phase {
  duration: number;
  scheduledStartDate?: string | undefined;
  scheduledEndDate?: string | undefined;
  actualStartDate?: string | undefined;
  actualEndDate?: string | undefined;
  name: string;
  phaseId: string;
  id: string;
  isOpen: boolean;
}

export interface UpdateChallengeInput_UpdateInput_Winner {
  handle: string;
  placement: number;
  userId: number;
}

export interface UpdateChallengeInput_UpdateInput_Task {
  isTask: boolean;
  isAssigned: boolean;
  memberId?: number | undefined;
}

export interface UpdateChallengeInput_UpdateInput_PrizeSet {
  /** Placement, Copilot, Reviewer */
  type: string;
  description?: string | undefined;
  prizes: UpdateChallengeInput_UpdateInput_PrizeSet_Prize[];
}

export interface UpdateChallengeInput_UpdateInput_PrizeSet_Prize {
  value: number;
  type: string;
}

export interface UpdateChallengeInput_UpdateInput_Overview {
  totalPrizes: number;
}

function createBaseChallenge(): Challenge {
  return {
    id: "",
    legacyId: undefined,
    name: "",
    typeId: "",
    trackId: "",
    legacy: undefined,
    billing: undefined,
    description: "",
    privateDescription: undefined,
    descriptionFormat: undefined,
    metadata: [],
    task: undefined,
    timelineTemplateId: undefined,
    phases: [],
    events: [],
    terms: [],
    prizeSets: [],
    tags: [],
    projectId: undefined,
    startDate: undefined,
    endDate: undefined,
    status: "",
    attachments: [],
    groups: [],
    winners: [],
    discussions: [],
    createdBy: "",
    updatedBy: undefined,
    created: 0,
    updated: undefined,
    overview: undefined,
  };
}

export const Challenge = {
  encode(message: Challenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.legacyId !== undefined) {
      writer.uint32(16).int32(message.legacyId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.typeId !== "") {
      writer.uint32(34).string(message.typeId);
    }
    if (message.trackId !== "") {
      writer.uint32(42).string(message.trackId);
    }
    if (message.legacy !== undefined) {
      Challenge_Legacy.encode(message.legacy, writer.uint32(50).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      Challenge_Billing.encode(message.billing, writer.uint32(58).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.privateDescription !== undefined) {
      writer.uint32(74).string(message.privateDescription);
    }
    if (message.descriptionFormat !== undefined) {
      writer.uint32(82).string(message.descriptionFormat);
    }
    for (const v of message.metadata) {
      Challenge_Metadata.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.task !== undefined) {
      Challenge_Task.encode(message.task, writer.uint32(98).fork()).ldelim();
    }
    if (message.timelineTemplateId !== undefined) {
      writer.uint32(106).string(message.timelineTemplateId);
    }
    for (const v of message.phases) {
      Challenge_Phase.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.events) {
      Challenge_Event.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.terms) {
      Challenge_Term.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.prizeSets) {
      Challenge_PrizeSet.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(146).string(v!);
    }
    if (message.projectId !== undefined) {
      writer.uint32(152).int32(message.projectId);
    }
    if (message.startDate !== undefined) {
      writer.uint32(160).int64(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(168).int64(message.endDate);
    }
    if (message.status !== "") {
      writer.uint32(178).string(message.status);
    }
    for (const v of message.attachments) {
      writer.uint32(186).string(v!);
    }
    for (const v of message.groups) {
      writer.uint32(194).string(v!);
    }
    for (const v of message.winners) {
      Challenge_Winner.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.discussions) {
      Challenge_Discussion.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.createdBy !== "") {
      writer.uint32(218).string(message.createdBy);
    }
    if (message.updatedBy !== undefined) {
      writer.uint32(226).string(message.updatedBy);
    }
    if (message.created !== 0) {
      writer.uint32(232).int64(message.created);
    }
    if (message.updated !== undefined) {
      writer.uint32(240).int64(message.updated);
    }
    if (message.overview !== undefined) {
      Challenge_Overview.encode(message.overview, writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.legacyId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.typeId = reader.string();
          break;
        case 5:
          message.trackId = reader.string();
          break;
        case 6:
          message.legacy = Challenge_Legacy.decode(reader, reader.uint32());
          break;
        case 7:
          message.billing = Challenge_Billing.decode(reader, reader.uint32());
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.privateDescription = reader.string();
          break;
        case 10:
          message.descriptionFormat = reader.string();
          break;
        case 11:
          message.metadata.push(Challenge_Metadata.decode(reader, reader.uint32()));
          break;
        case 12:
          message.task = Challenge_Task.decode(reader, reader.uint32());
          break;
        case 13:
          message.timelineTemplateId = reader.string();
          break;
        case 14:
          message.phases.push(Challenge_Phase.decode(reader, reader.uint32()));
          break;
        case 15:
          message.events.push(Challenge_Event.decode(reader, reader.uint32()));
          break;
        case 16:
          message.terms.push(Challenge_Term.decode(reader, reader.uint32()));
          break;
        case 17:
          message.prizeSets.push(Challenge_PrizeSet.decode(reader, reader.uint32()));
          break;
        case 18:
          message.tags.push(reader.string());
          break;
        case 19:
          message.projectId = reader.int32();
          break;
        case 20:
          message.startDate = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.endDate = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.status = reader.string();
          break;
        case 23:
          message.attachments.push(reader.string());
          break;
        case 24:
          message.groups.push(reader.string());
          break;
        case 25:
          message.winners.push(Challenge_Winner.decode(reader, reader.uint32()));
          break;
        case 26:
          message.discussions.push(Challenge_Discussion.decode(reader, reader.uint32()));
          break;
        case 27:
          message.createdBy = reader.string();
          break;
        case 28:
          message.updatedBy = reader.string();
          break;
        case 29:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 30:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 31:
          message.overview = Challenge_Overview.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      legacyId: isSet(object.legacyId) ? Number(object.legacyId) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      legacy: isSet(object.legacy) ? Challenge_Legacy.fromJSON(object.legacy) : undefined,
      billing: isSet(object.billing) ? Challenge_Billing.fromJSON(object.billing) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      privateDescription: isSet(object.privateDescription) ? String(object.privateDescription) : undefined,
      descriptionFormat: isSet(object.descriptionFormat) ? String(object.descriptionFormat) : undefined,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Challenge_Metadata.fromJSON(e)) : [],
      task: isSet(object.task) ? Challenge_Task.fromJSON(object.task) : undefined,
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : undefined,
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => Challenge_Phase.fromJSON(e)) : [],
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Challenge_Event.fromJSON(e)) : [],
      terms: Array.isArray(object?.terms) ? object.terms.map((e: any) => Challenge_Term.fromJSON(e)) : [],
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => Challenge_PrizeSet.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      startDate: isSet(object.startDate) ? Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? Number(object.endDate) : undefined,
      status: isSet(object.status) ? String(object.status) : "",
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => String(e)) : [],
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => String(e)) : [],
      winners: Array.isArray(object?.winners) ? object.winners.map((e: any) => Challenge_Winner.fromJSON(e)) : [],
      discussions: Array.isArray(object?.discussions)
        ? object.discussions.map((e: any) => Challenge_Discussion.fromJSON(e))
        : [],
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : undefined,
      created: isSet(object.created) ? Number(object.created) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : undefined,
      overview: isSet(object.overview) ? Challenge_Overview.fromJSON(object.overview) : undefined,
    };
  },

  toJSON(message: Challenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.legacyId !== undefined && (obj.legacyId = Math.round(message.legacyId));
    message.name !== undefined && (obj.name = message.name);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.legacy !== undefined && (obj.legacy = message.legacy ? Challenge_Legacy.toJSON(message.legacy) : undefined);
    message.billing !== undefined &&
      (obj.billing = message.billing ? Challenge_Billing.toJSON(message.billing) : undefined);
    message.description !== undefined && (obj.description = message.description);
    message.privateDescription !== undefined && (obj.privateDescription = message.privateDescription);
    message.descriptionFormat !== undefined && (obj.descriptionFormat = message.descriptionFormat);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e ? Challenge_Metadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    message.task !== undefined && (obj.task = message.task ? Challenge_Task.toJSON(message.task) : undefined);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? Challenge_Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) => e ? Challenge_Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.terms) {
      obj.terms = message.terms.map((e) => e ? Challenge_Term.toJSON(e) : undefined);
    } else {
      obj.terms = [];
    }
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) => e ? Challenge_PrizeSet.toJSON(e) : undefined);
    } else {
      obj.prizeSets = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.startDate !== undefined && (obj.startDate = Math.round(message.startDate));
    message.endDate !== undefined && (obj.endDate = Math.round(message.endDate));
    message.status !== undefined && (obj.status = message.status);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) => e);
    } else {
      obj.attachments = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => e);
    } else {
      obj.groups = [];
    }
    if (message.winners) {
      obj.winners = message.winners.map((e) => e ? Challenge_Winner.toJSON(e) : undefined);
    } else {
      obj.winners = [];
    }
    if (message.discussions) {
      obj.discussions = message.discussions.map((e) => e ? Challenge_Discussion.toJSON(e) : undefined);
    } else {
      obj.discussions = [];
    }
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.created !== undefined && (obj.created = Math.round(message.created));
    message.updated !== undefined && (obj.updated = Math.round(message.updated));
    message.overview !== undefined &&
      (obj.overview = message.overview ? Challenge_Overview.toJSON(message.overview) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge>, I>>(base?: I): Challenge {
    return Challenge.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge>, I>>(object: I): Challenge {
    const message = createBaseChallenge();
    message.id = object.id ?? "";
    message.legacyId = object.legacyId ?? undefined;
    message.name = object.name ?? "";
    message.typeId = object.typeId ?? "";
    message.trackId = object.trackId ?? "";
    message.legacy = (object.legacy !== undefined && object.legacy !== null)
      ? Challenge_Legacy.fromPartial(object.legacy)
      : undefined;
    message.billing = (object.billing !== undefined && object.billing !== null)
      ? Challenge_Billing.fromPartial(object.billing)
      : undefined;
    message.description = object.description ?? "";
    message.privateDescription = object.privateDescription ?? undefined;
    message.descriptionFormat = object.descriptionFormat ?? undefined;
    message.metadata = object.metadata?.map((e) => Challenge_Metadata.fromPartial(e)) || [];
    message.task = (object.task !== undefined && object.task !== null)
      ? Challenge_Task.fromPartial(object.task)
      : undefined;
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.phases = object.phases?.map((e) => Challenge_Phase.fromPartial(e)) || [];
    message.events = object.events?.map((e) => Challenge_Event.fromPartial(e)) || [];
    message.terms = object.terms?.map((e) => Challenge_Term.fromPartial(e)) || [];
    message.prizeSets = object.prizeSets?.map((e) => Challenge_PrizeSet.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.projectId = object.projectId ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status = object.status ?? "";
    message.attachments = object.attachments?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.winners = object.winners?.map((e) => Challenge_Winner.fromPartial(e)) || [];
    message.discussions = object.discussions?.map((e) => Challenge_Discussion.fromPartial(e)) || [];
    message.createdBy = object.createdBy ?? "";
    message.updatedBy = object.updatedBy ?? undefined;
    message.created = object.created ?? 0;
    message.updated = object.updated ?? undefined;
    message.overview = (object.overview !== undefined && object.overview !== null)
      ? Challenge_Overview.fromPartial(object.overview)
      : undefined;
    return message;
  },
};

function createBaseChallenge_Legacy(): Challenge_Legacy {
  return {
    track: undefined,
    subTrack: undefined,
    forumId: undefined,
    directProjectId: 0,
    reviewType: "",
    confidentialityType: "",
    reviewScorecardId: undefined,
    screeningScorecardId: undefined,
    pureV5Task: undefined,
    selfService: undefined,
    selfServiceCopilot: undefined,
  };
}

export const Challenge_Legacy = {
  encode(message: Challenge_Legacy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.track !== undefined) {
      writer.uint32(10).string(message.track);
    }
    if (message.subTrack !== undefined) {
      writer.uint32(18).string(message.subTrack);
    }
    if (message.forumId !== undefined) {
      writer.uint32(24).int32(message.forumId);
    }
    if (message.directProjectId !== 0) {
      writer.uint32(32).int32(message.directProjectId);
    }
    if (message.reviewType !== "") {
      writer.uint32(42).string(message.reviewType);
    }
    if (message.confidentialityType !== "") {
      writer.uint32(50).string(message.confidentialityType);
    }
    if (message.reviewScorecardId !== undefined) {
      writer.uint32(56).int32(message.reviewScorecardId);
    }
    if (message.screeningScorecardId !== undefined) {
      writer.uint32(64).int32(message.screeningScorecardId);
    }
    if (message.pureV5Task !== undefined) {
      writer.uint32(72).bool(message.pureV5Task);
    }
    if (message.selfService !== undefined) {
      writer.uint32(80).bool(message.selfService);
    }
    if (message.selfServiceCopilot !== undefined) {
      writer.uint32(90).string(message.selfServiceCopilot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Legacy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Legacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = reader.string();
          break;
        case 2:
          message.subTrack = reader.string();
          break;
        case 3:
          message.forumId = reader.int32();
          break;
        case 4:
          message.directProjectId = reader.int32();
          break;
        case 5:
          message.reviewType = reader.string();
          break;
        case 6:
          message.confidentialityType = reader.string();
          break;
        case 7:
          message.reviewScorecardId = reader.int32();
          break;
        case 8:
          message.screeningScorecardId = reader.int32();
          break;
        case 9:
          message.pureV5Task = reader.bool();
          break;
        case 10:
          message.selfService = reader.bool();
          break;
        case 11:
          message.selfServiceCopilot = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Legacy {
    return {
      track: isSet(object.track) ? String(object.track) : undefined,
      subTrack: isSet(object.subTrack) ? String(object.subTrack) : undefined,
      forumId: isSet(object.forumId) ? Number(object.forumId) : undefined,
      directProjectId: isSet(object.directProjectId) ? Number(object.directProjectId) : 0,
      reviewType: isSet(object.reviewType) ? String(object.reviewType) : "",
      confidentialityType: isSet(object.confidentialityType) ? String(object.confidentialityType) : "",
      reviewScorecardId: isSet(object.reviewScorecardId) ? Number(object.reviewScorecardId) : undefined,
      screeningScorecardId: isSet(object.screeningScorecardId) ? Number(object.screeningScorecardId) : undefined,
      pureV5Task: isSet(object.pureV5Task) ? Boolean(object.pureV5Task) : undefined,
      selfService: isSet(object.selfService) ? Boolean(object.selfService) : undefined,
      selfServiceCopilot: isSet(object.selfServiceCopilot) ? String(object.selfServiceCopilot) : undefined,
    };
  },

  toJSON(message: Challenge_Legacy): unknown {
    const obj: any = {};
    message.track !== undefined && (obj.track = message.track);
    message.subTrack !== undefined && (obj.subTrack = message.subTrack);
    message.forumId !== undefined && (obj.forumId = Math.round(message.forumId));
    message.directProjectId !== undefined && (obj.directProjectId = Math.round(message.directProjectId));
    message.reviewType !== undefined && (obj.reviewType = message.reviewType);
    message.confidentialityType !== undefined && (obj.confidentialityType = message.confidentialityType);
    message.reviewScorecardId !== undefined && (obj.reviewScorecardId = Math.round(message.reviewScorecardId));
    message.screeningScorecardId !== undefined && (obj.screeningScorecardId = Math.round(message.screeningScorecardId));
    message.pureV5Task !== undefined && (obj.pureV5Task = message.pureV5Task);
    message.selfService !== undefined && (obj.selfService = message.selfService);
    message.selfServiceCopilot !== undefined && (obj.selfServiceCopilot = message.selfServiceCopilot);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Legacy>, I>>(base?: I): Challenge_Legacy {
    return Challenge_Legacy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Legacy>, I>>(object: I): Challenge_Legacy {
    const message = createBaseChallenge_Legacy();
    message.track = object.track ?? undefined;
    message.subTrack = object.subTrack ?? undefined;
    message.forumId = object.forumId ?? undefined;
    message.directProjectId = object.directProjectId ?? 0;
    message.reviewType = object.reviewType ?? "";
    message.confidentialityType = object.confidentialityType ?? "";
    message.reviewScorecardId = object.reviewScorecardId ?? undefined;
    message.screeningScorecardId = object.screeningScorecardId ?? undefined;
    message.pureV5Task = object.pureV5Task ?? undefined;
    message.selfService = object.selfService ?? undefined;
    message.selfServiceCopilot = object.selfServiceCopilot ?? undefined;
    return message;
  },
};

function createBaseChallenge_Billing(): Challenge_Billing {
  return { billingAccountId: 0, markup: 0 };
}

export const Challenge_Billing = {
  encode(message: Challenge_Billing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingAccountId !== 0) {
      writer.uint32(8).int32(message.billingAccountId);
    }
    if (message.markup !== 0) {
      writer.uint32(21).float(message.markup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Billing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Billing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingAccountId = reader.int32();
          break;
        case 2:
          message.markup = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Billing {
    return {
      billingAccountId: isSet(object.billingAccountId) ? Number(object.billingAccountId) : 0,
      markup: isSet(object.markup) ? Number(object.markup) : 0,
    };
  },

  toJSON(message: Challenge_Billing): unknown {
    const obj: any = {};
    message.billingAccountId !== undefined && (obj.billingAccountId = Math.round(message.billingAccountId));
    message.markup !== undefined && (obj.markup = message.markup);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Billing>, I>>(base?: I): Challenge_Billing {
    return Challenge_Billing.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Billing>, I>>(object: I): Challenge_Billing {
    const message = createBaseChallenge_Billing();
    message.billingAccountId = object.billingAccountId ?? 0;
    message.markup = object.markup ?? 0;
    return message;
  },
};

function createBaseChallenge_Event(): Challenge_Event {
  return { id: 0, name: "", key: "" };
}

export const Challenge_Event = {
  encode(message: Challenge_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Event {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      key: isSet(object.key) ? String(object.key) : "",
    };
  },

  toJSON(message: Challenge_Event): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Event>, I>>(base?: I): Challenge_Event {
    return Challenge_Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Event>, I>>(object: I): Challenge_Event {
    const message = createBaseChallenge_Event();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseChallenge_Term(): Challenge_Term {
  return { id: "", roleId: "" };
}

export const Challenge_Term = {
  encode(message: Challenge_Term, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.roleId !== "") {
      writer.uint32(18).string(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Term {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Term();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Term {
    return { id: isSet(object.id) ? String(object.id) : "", roleId: isSet(object.roleId) ? String(object.roleId) : "" };
  },

  toJSON(message: Challenge_Term): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Term>, I>>(base?: I): Challenge_Term {
    return Challenge_Term.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Term>, I>>(object: I): Challenge_Term {
    const message = createBaseChallenge_Term();
    message.id = object.id ?? "";
    message.roleId = object.roleId ?? "";
    return message;
  },
};

function createBaseChallenge_Metadata(): Challenge_Metadata {
  return { name: "", value: "" };
}

export const Challenge_Metadata = {
  encode(message: Challenge_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Metadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Challenge_Metadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Metadata>, I>>(base?: I): Challenge_Metadata {
    return Challenge_Metadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Metadata>, I>>(object: I): Challenge_Metadata {
    const message = createBaseChallenge_Metadata();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseChallenge_Discussion(): Challenge_Discussion {
  return { id: undefined, name: "", type: "", provider: "", url: undefined };
}

export const Challenge_Discussion = {
  encode(message: Challenge_Discussion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.url !== undefined) {
      writer.uint32(42).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Discussion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Discussion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Discussion {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      url: isSet(object.url) ? String(object.url) : undefined,
    };
  },

  toJSON(message: Challenge_Discussion): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.provider !== undefined && (obj.provider = message.provider);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Discussion>, I>>(base?: I): Challenge_Discussion {
    return Challenge_Discussion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Discussion>, I>>(object: I): Challenge_Discussion {
    const message = createBaseChallenge_Discussion();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.provider = object.provider ?? "";
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBaseChallenge_Phase(): Challenge_Phase {
  return {
    duration: 0,
    scheduledStartDate: undefined,
    scheduledEndDate: undefined,
    actualStartDate: undefined,
    actualEndDate: undefined,
    name: "",
    phaseId: "",
    id: "",
    isOpen: false,
  };
}

export const Challenge_Phase = {
  encode(message: Challenge_Phase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.scheduledStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledStartDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.scheduledEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledEndDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.actualStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.actualStartDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.actualEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.actualEndDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.phaseId !== "") {
      writer.uint32(58).string(message.phaseId);
    }
    if (message.id !== "") {
      writer.uint32(66).string(message.id);
    }
    if (message.isOpen === true) {
      writer.uint32(72).bool(message.isOpen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Phase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Phase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32();
          break;
        case 2:
          message.scheduledStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.scheduledEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actualStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.actualEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.phaseId = reader.string();
          break;
        case 8:
          message.id = reader.string();
          break;
        case 9:
          message.isOpen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Phase {
    return {
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      scheduledStartDate: isSet(object.scheduledStartDate) ? String(object.scheduledStartDate) : undefined,
      scheduledEndDate: isSet(object.scheduledEndDate) ? String(object.scheduledEndDate) : undefined,
      actualStartDate: isSet(object.actualStartDate) ? String(object.actualStartDate) : undefined,
      actualEndDate: isSet(object.actualEndDate) ? String(object.actualEndDate) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      phaseId: isSet(object.phaseId) ? String(object.phaseId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false,
    };
  },

  toJSON(message: Challenge_Phase): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.scheduledStartDate !== undefined && (obj.scheduledStartDate = message.scheduledStartDate);
    message.scheduledEndDate !== undefined && (obj.scheduledEndDate = message.scheduledEndDate);
    message.actualStartDate !== undefined && (obj.actualStartDate = message.actualStartDate);
    message.actualEndDate !== undefined && (obj.actualEndDate = message.actualEndDate);
    message.name !== undefined && (obj.name = message.name);
    message.phaseId !== undefined && (obj.phaseId = message.phaseId);
    message.id !== undefined && (obj.id = message.id);
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Phase>, I>>(base?: I): Challenge_Phase {
    return Challenge_Phase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Phase>, I>>(object: I): Challenge_Phase {
    const message = createBaseChallenge_Phase();
    message.duration = object.duration ?? 0;
    message.scheduledStartDate = object.scheduledStartDate ?? undefined;
    message.scheduledEndDate = object.scheduledEndDate ?? undefined;
    message.actualStartDate = object.actualStartDate ?? undefined;
    message.actualEndDate = object.actualEndDate ?? undefined;
    message.name = object.name ?? "";
    message.phaseId = object.phaseId ?? "";
    message.id = object.id ?? "";
    message.isOpen = object.isOpen ?? false;
    return message;
  },
};

function createBaseChallenge_Winner(): Challenge_Winner {
  return { handle: "", placement: 0, userId: 0 };
}

export const Challenge_Winner = {
  encode(message: Challenge_Winner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    if (message.placement !== 0) {
      writer.uint32(16).int32(message.placement);
    }
    if (message.userId !== 0) {
      writer.uint32(24).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Winner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Winner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string();
          break;
        case 2:
          message.placement = reader.int32();
          break;
        case 3:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Winner {
    return {
      handle: isSet(object.handle) ? String(object.handle) : "",
      placement: isSet(object.placement) ? Number(object.placement) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: Challenge_Winner): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Winner>, I>>(base?: I): Challenge_Winner {
    return Challenge_Winner.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Winner>, I>>(object: I): Challenge_Winner {
    const message = createBaseChallenge_Winner();
    message.handle = object.handle ?? "";
    message.placement = object.placement ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseChallenge_Task(): Challenge_Task {
  return { isTask: false, isAssigned: false, memberId: undefined };
}

export const Challenge_Task = {
  encode(message: Challenge_Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isTask === true) {
      writer.uint32(8).bool(message.isTask);
    }
    if (message.isAssigned === true) {
      writer.uint32(16).bool(message.isAssigned);
    }
    if (message.memberId !== undefined) {
      writer.uint32(24).int32(message.memberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Task {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Task();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isTask = reader.bool();
          break;
        case 2:
          message.isAssigned = reader.bool();
          break;
        case 3:
          message.memberId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Task {
    return {
      isTask: isSet(object.isTask) ? Boolean(object.isTask) : false,
      isAssigned: isSet(object.isAssigned) ? Boolean(object.isAssigned) : false,
      memberId: isSet(object.memberId) ? Number(object.memberId) : undefined,
    };
  },

  toJSON(message: Challenge_Task): unknown {
    const obj: any = {};
    message.isTask !== undefined && (obj.isTask = message.isTask);
    message.isAssigned !== undefined && (obj.isAssigned = message.isAssigned);
    message.memberId !== undefined && (obj.memberId = Math.round(message.memberId));
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Task>, I>>(base?: I): Challenge_Task {
    return Challenge_Task.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Task>, I>>(object: I): Challenge_Task {
    const message = createBaseChallenge_Task();
    message.isTask = object.isTask ?? false;
    message.isAssigned = object.isAssigned ?? false;
    message.memberId = object.memberId ?? undefined;
    return message;
  },
};

function createBaseChallenge_PrizeSet(): Challenge_PrizeSet {
  return { type: "", description: undefined, prizes: [] };
}

export const Challenge_PrizeSet = {
  encode(message: Challenge_PrizeSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.prizes) {
      Challenge_PrizeSet_Prize.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_PrizeSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_PrizeSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.prizes.push(Challenge_PrizeSet_Prize.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_PrizeSet {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      prizes: Array.isArray(object?.prizes) ? object.prizes.map((e: any) => Challenge_PrizeSet_Prize.fromJSON(e)) : [],
    };
  },

  toJSON(message: Challenge_PrizeSet): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.description !== undefined && (obj.description = message.description);
    if (message.prizes) {
      obj.prizes = message.prizes.map((e) => e ? Challenge_PrizeSet_Prize.toJSON(e) : undefined);
    } else {
      obj.prizes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_PrizeSet>, I>>(base?: I): Challenge_PrizeSet {
    return Challenge_PrizeSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_PrizeSet>, I>>(object: I): Challenge_PrizeSet {
    const message = createBaseChallenge_PrizeSet();
    message.type = object.type ?? "";
    message.description = object.description ?? undefined;
    message.prizes = object.prizes?.map((e) => Challenge_PrizeSet_Prize.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChallenge_PrizeSet_Prize(): Challenge_PrizeSet_Prize {
  return { value: 0, type: "" };
}

export const Challenge_PrizeSet_Prize = {
  encode(message: Challenge_PrizeSet_Prize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_PrizeSet_Prize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_PrizeSet_Prize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_PrizeSet_Prize {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Challenge_PrizeSet_Prize): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_PrizeSet_Prize>, I>>(base?: I): Challenge_PrizeSet_Prize {
    return Challenge_PrizeSet_Prize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_PrizeSet_Prize>, I>>(object: I): Challenge_PrizeSet_Prize {
    const message = createBaseChallenge_PrizeSet_Prize();
    message.value = object.value ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseChallenge_Overview(): Challenge_Overview {
  return { totalPrizes: 0 };
}

export const Challenge_Overview = {
  encode(message: Challenge_Overview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalPrizes !== 0) {
      writer.uint32(8).int32(message.totalPrizes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Overview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Overview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrizes = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge_Overview {
    return { totalPrizes: isSet(object.totalPrizes) ? Number(object.totalPrizes) : 0 };
  },

  toJSON(message: Challenge_Overview): unknown {
    const obj: any = {};
    message.totalPrizes !== undefined && (obj.totalPrizes = Math.round(message.totalPrizes));
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Overview>, I>>(base?: I): Challenge_Overview {
    return Challenge_Overview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Overview>, I>>(object: I): Challenge_Overview {
    const message = createBaseChallenge_Overview();
    message.totalPrizes = object.totalPrizes ?? 0;
    return message;
  },
};

function createBaseChallengeList(): ChallengeList {
  return { items: [] };
}

export const ChallengeList = {
  encode(message: ChallengeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Challenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Challenge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => Challenge.fromJSON(e)) : [] };
  },

  toJSON(message: ChallengeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Challenge.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeList>, I>>(base?: I): ChallengeList {
    return ChallengeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeList>, I>>(object: I): ChallengeList {
    const message = createBaseChallengeList();
    message.items = object.items?.map((e) => Challenge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeInput(): CreateChallengeInput {
  return {
    name: "",
    typeId: "",
    trackId: "",
    timelineTemplateId: undefined,
    legacy: undefined,
    billing: undefined,
    description: "",
    privateDescription: undefined,
    descriptionFormat: undefined,
    metadata: [],
    task: undefined,
    phases: [],
    events: [],
    terms: [],
    prizeSets: [],
    tags: [],
    projectId: undefined,
    startDate: undefined,
    endDate: undefined,
    status: "",
    attachments: [],
    groups: [],
    discussions: [],
  };
}

export const CreateChallengeInput = {
  encode(message: CreateChallengeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.typeId !== "") {
      writer.uint32(18).string(message.typeId);
    }
    if (message.trackId !== "") {
      writer.uint32(26).string(message.trackId);
    }
    if (message.timelineTemplateId !== undefined) {
      writer.uint32(34).string(message.timelineTemplateId);
    }
    if (message.legacy !== undefined) {
      Challenge_Legacy.encode(message.legacy, writer.uint32(42).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      Challenge_Billing.encode(message.billing, writer.uint32(50).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.privateDescription !== undefined) {
      writer.uint32(66).string(message.privateDescription);
    }
    if (message.descriptionFormat !== undefined) {
      writer.uint32(74).string(message.descriptionFormat);
    }
    for (const v of message.metadata) {
      Challenge_Metadata.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.task !== undefined) {
      Challenge_Task.encode(message.task, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.phases) {
      Challenge_Phase.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.events) {
      Challenge_Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.terms) {
      Challenge_Term.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.prizeSets) {
      Challenge_PrizeSet.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(130).string(v!);
    }
    if (message.projectId !== undefined) {
      writer.uint32(136).int32(message.projectId);
    }
    if (message.startDate !== undefined) {
      writer.uint32(144).int64(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(152).int64(message.endDate);
    }
    if (message.status !== "") {
      writer.uint32(162).string(message.status);
    }
    for (const v of message.attachments) {
      writer.uint32(170).string(v!);
    }
    for (const v of message.groups) {
      writer.uint32(178).string(v!);
    }
    for (const v of message.discussions) {
      Challenge_Discussion.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.typeId = reader.string();
          break;
        case 3:
          message.trackId = reader.string();
          break;
        case 4:
          message.timelineTemplateId = reader.string();
          break;
        case 5:
          message.legacy = Challenge_Legacy.decode(reader, reader.uint32());
          break;
        case 6:
          message.billing = Challenge_Billing.decode(reader, reader.uint32());
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.privateDescription = reader.string();
          break;
        case 9:
          message.descriptionFormat = reader.string();
          break;
        case 10:
          message.metadata.push(Challenge_Metadata.decode(reader, reader.uint32()));
          break;
        case 11:
          message.task = Challenge_Task.decode(reader, reader.uint32());
          break;
        case 12:
          message.phases.push(Challenge_Phase.decode(reader, reader.uint32()));
          break;
        case 13:
          message.events.push(Challenge_Event.decode(reader, reader.uint32()));
          break;
        case 14:
          message.terms.push(Challenge_Term.decode(reader, reader.uint32()));
          break;
        case 15:
          message.prizeSets.push(Challenge_PrizeSet.decode(reader, reader.uint32()));
          break;
        case 16:
          message.tags.push(reader.string());
          break;
        case 17:
          message.projectId = reader.int32();
          break;
        case 18:
          message.startDate = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.endDate = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.status = reader.string();
          break;
        case 21:
          message.attachments.push(reader.string());
          break;
        case 22:
          message.groups.push(reader.string());
          break;
        case 23:
          message.discussions.push(Challenge_Discussion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : undefined,
      legacy: isSet(object.legacy) ? Challenge_Legacy.fromJSON(object.legacy) : undefined,
      billing: isSet(object.billing) ? Challenge_Billing.fromJSON(object.billing) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      privateDescription: isSet(object.privateDescription) ? String(object.privateDescription) : undefined,
      descriptionFormat: isSet(object.descriptionFormat) ? String(object.descriptionFormat) : undefined,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Challenge_Metadata.fromJSON(e)) : [],
      task: isSet(object.task) ? Challenge_Task.fromJSON(object.task) : undefined,
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => Challenge_Phase.fromJSON(e)) : [],
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Challenge_Event.fromJSON(e)) : [],
      terms: Array.isArray(object?.terms) ? object.terms.map((e: any) => Challenge_Term.fromJSON(e)) : [],
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => Challenge_PrizeSet.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      startDate: isSet(object.startDate) ? Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? Number(object.endDate) : undefined,
      status: isSet(object.status) ? String(object.status) : "",
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => String(e)) : [],
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => String(e)) : [],
      discussions: Array.isArray(object?.discussions)
        ? object.discussions.map((e: any) => Challenge_Discussion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateChallengeInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.legacy !== undefined && (obj.legacy = message.legacy ? Challenge_Legacy.toJSON(message.legacy) : undefined);
    message.billing !== undefined &&
      (obj.billing = message.billing ? Challenge_Billing.toJSON(message.billing) : undefined);
    message.description !== undefined && (obj.description = message.description);
    message.privateDescription !== undefined && (obj.privateDescription = message.privateDescription);
    message.descriptionFormat !== undefined && (obj.descriptionFormat = message.descriptionFormat);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e ? Challenge_Metadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    message.task !== undefined && (obj.task = message.task ? Challenge_Task.toJSON(message.task) : undefined);
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? Challenge_Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) => e ? Challenge_Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.terms) {
      obj.terms = message.terms.map((e) => e ? Challenge_Term.toJSON(e) : undefined);
    } else {
      obj.terms = [];
    }
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) => e ? Challenge_PrizeSet.toJSON(e) : undefined);
    } else {
      obj.prizeSets = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.startDate !== undefined && (obj.startDate = Math.round(message.startDate));
    message.endDate !== undefined && (obj.endDate = Math.round(message.endDate));
    message.status !== undefined && (obj.status = message.status);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) => e);
    } else {
      obj.attachments = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => e);
    } else {
      obj.groups = [];
    }
    if (message.discussions) {
      obj.discussions = message.discussions.map((e) => e ? Challenge_Discussion.toJSON(e) : undefined);
    } else {
      obj.discussions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput>, I>>(base?: I): CreateChallengeInput {
    return CreateChallengeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput>, I>>(object: I): CreateChallengeInput {
    const message = createBaseCreateChallengeInput();
    message.name = object.name ?? "";
    message.typeId = object.typeId ?? "";
    message.trackId = object.trackId ?? "";
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.legacy = (object.legacy !== undefined && object.legacy !== null)
      ? Challenge_Legacy.fromPartial(object.legacy)
      : undefined;
    message.billing = (object.billing !== undefined && object.billing !== null)
      ? Challenge_Billing.fromPartial(object.billing)
      : undefined;
    message.description = object.description ?? "";
    message.privateDescription = object.privateDescription ?? undefined;
    message.descriptionFormat = object.descriptionFormat ?? undefined;
    message.metadata = object.metadata?.map((e) => Challenge_Metadata.fromPartial(e)) || [];
    message.task = (object.task !== undefined && object.task !== null)
      ? Challenge_Task.fromPartial(object.task)
      : undefined;
    message.phases = object.phases?.map((e) => Challenge_Phase.fromPartial(e)) || [];
    message.events = object.events?.map((e) => Challenge_Event.fromPartial(e)) || [];
    message.terms = object.terms?.map((e) => Challenge_Term.fromPartial(e)) || [];
    message.prizeSets = object.prizeSets?.map((e) => Challenge_PrizeSet.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.projectId = object.projectId ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status = object.status ?? "";
    message.attachments = object.attachments?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.discussions = object.discussions?.map((e) => Challenge_Discussion.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput(): UpdateChallengeInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateChallengeInput = {
  encode(message: UpdateChallengeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateChallengeInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updateInput = UpdateChallengeInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateChallengeInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined &&
      (obj.updateInput = message.updateInput
        ? UpdateChallengeInput_UpdateInput.toJSON(message.updateInput)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput>, I>>(base?: I): UpdateChallengeInput {
    return UpdateChallengeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput>, I>>(object: I): UpdateChallengeInput {
    const message = createBaseUpdateChallengeInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateChallengeInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput(): UpdateChallengeInput_UpdateInput {
  return {
    id: "",
    legacyId: undefined,
    name: undefined,
    typeId: undefined,
    trackId: undefined,
    legacy: undefined,
    billing: undefined,
    description: undefined,
    privateDescription: undefined,
    descriptionFormat: undefined,
    metadata: [],
    task: undefined,
    timelineTemplateId: undefined,
    phases: [],
    events: [],
    terms: [],
    prizeSets: [],
    tags: [],
    projectId: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
    attachments: [],
    groups: [],
    winners: [],
    discussions: [],
    createdBy: undefined,
    updatedBy: undefined,
    created: undefined,
    updated: undefined,
    overview: undefined,
  };
}

export const UpdateChallengeInput_UpdateInput = {
  encode(message: UpdateChallengeInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.legacyId !== undefined) {
      writer.uint32(16).int32(message.legacyId);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.typeId !== undefined) {
      writer.uint32(34).string(message.typeId);
    }
    if (message.trackId !== undefined) {
      writer.uint32(42).string(message.trackId);
    }
    if (message.legacy !== undefined) {
      UpdateChallengeInput_UpdateInput_Legacy.encode(message.legacy, writer.uint32(50).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      UpdateChallengeInput_UpdateInput_Billing.encode(message.billing, writer.uint32(58).fork()).ldelim();
    }
    if (message.description !== undefined) {
      writer.uint32(66).string(message.description);
    }
    if (message.privateDescription !== undefined) {
      writer.uint32(74).string(message.privateDescription);
    }
    if (message.descriptionFormat !== undefined) {
      writer.uint32(82).string(message.descriptionFormat);
    }
    for (const v of message.metadata) {
      UpdateChallengeInput_UpdateInput_Metadata.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.task !== undefined) {
      UpdateChallengeInput_UpdateInput_Task.encode(message.task, writer.uint32(98).fork()).ldelim();
    }
    if (message.timelineTemplateId !== undefined) {
      writer.uint32(106).string(message.timelineTemplateId);
    }
    for (const v of message.phases) {
      UpdateChallengeInput_UpdateInput_Phase.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.events) {
      UpdateChallengeInput_UpdateInput_Event.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.terms) {
      UpdateChallengeInput_UpdateInput_Term.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.prizeSets) {
      UpdateChallengeInput_UpdateInput_PrizeSet.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(146).string(v!);
    }
    if (message.projectId !== undefined) {
      writer.uint32(152).int32(message.projectId);
    }
    if (message.startDate !== undefined) {
      writer.uint32(160).int64(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(168).int64(message.endDate);
    }
    if (message.status !== undefined) {
      writer.uint32(178).string(message.status);
    }
    for (const v of message.attachments) {
      writer.uint32(186).string(v!);
    }
    for (const v of message.groups) {
      writer.uint32(194).string(v!);
    }
    for (const v of message.winners) {
      UpdateChallengeInput_UpdateInput_Winner.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.discussions) {
      UpdateChallengeInput_UpdateInput_Discussion.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.createdBy !== undefined) {
      writer.uint32(218).string(message.createdBy);
    }
    if (message.updatedBy !== undefined) {
      writer.uint32(226).string(message.updatedBy);
    }
    if (message.created !== undefined) {
      writer.uint32(232).int64(message.created);
    }
    if (message.updated !== undefined) {
      writer.uint32(240).int64(message.updated);
    }
    if (message.overview !== undefined) {
      UpdateChallengeInput_UpdateInput_Overview.encode(message.overview, writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.legacyId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.typeId = reader.string();
          break;
        case 5:
          message.trackId = reader.string();
          break;
        case 6:
          message.legacy = UpdateChallengeInput_UpdateInput_Legacy.decode(reader, reader.uint32());
          break;
        case 7:
          message.billing = UpdateChallengeInput_UpdateInput_Billing.decode(reader, reader.uint32());
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.privateDescription = reader.string();
          break;
        case 10:
          message.descriptionFormat = reader.string();
          break;
        case 11:
          message.metadata.push(UpdateChallengeInput_UpdateInput_Metadata.decode(reader, reader.uint32()));
          break;
        case 12:
          message.task = UpdateChallengeInput_UpdateInput_Task.decode(reader, reader.uint32());
          break;
        case 13:
          message.timelineTemplateId = reader.string();
          break;
        case 14:
          message.phases.push(UpdateChallengeInput_UpdateInput_Phase.decode(reader, reader.uint32()));
          break;
        case 15:
          message.events.push(UpdateChallengeInput_UpdateInput_Event.decode(reader, reader.uint32()));
          break;
        case 16:
          message.terms.push(UpdateChallengeInput_UpdateInput_Term.decode(reader, reader.uint32()));
          break;
        case 17:
          message.prizeSets.push(UpdateChallengeInput_UpdateInput_PrizeSet.decode(reader, reader.uint32()));
          break;
        case 18:
          message.tags.push(reader.string());
          break;
        case 19:
          message.projectId = reader.int32();
          break;
        case 20:
          message.startDate = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.endDate = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.status = reader.string();
          break;
        case 23:
          message.attachments.push(reader.string());
          break;
        case 24:
          message.groups.push(reader.string());
          break;
        case 25:
          message.winners.push(UpdateChallengeInput_UpdateInput_Winner.decode(reader, reader.uint32()));
          break;
        case 26:
          message.discussions.push(UpdateChallengeInput_UpdateInput_Discussion.decode(reader, reader.uint32()));
          break;
        case 27:
          message.createdBy = reader.string();
          break;
        case 28:
          message.updatedBy = reader.string();
          break;
        case 29:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 30:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 31:
          message.overview = UpdateChallengeInput_UpdateInput_Overview.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      legacyId: isSet(object.legacyId) ? Number(object.legacyId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      trackId: isSet(object.trackId) ? String(object.trackId) : undefined,
      legacy: isSet(object.legacy) ? UpdateChallengeInput_UpdateInput_Legacy.fromJSON(object.legacy) : undefined,
      billing: isSet(object.billing) ? UpdateChallengeInput_UpdateInput_Billing.fromJSON(object.billing) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      privateDescription: isSet(object.privateDescription) ? String(object.privateDescription) : undefined,
      descriptionFormat: isSet(object.descriptionFormat) ? String(object.descriptionFormat) : undefined,
      metadata: Array.isArray(object?.metadata)
        ? object.metadata.map((e: any) => UpdateChallengeInput_UpdateInput_Metadata.fromJSON(e))
        : [],
      task: isSet(object.task) ? UpdateChallengeInput_UpdateInput_Task.fromJSON(object.task) : undefined,
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : undefined,
      phases: Array.isArray(object?.phases)
        ? object.phases.map((e: any) => UpdateChallengeInput_UpdateInput_Phase.fromJSON(e))
        : [],
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => UpdateChallengeInput_UpdateInput_Event.fromJSON(e))
        : [],
      terms: Array.isArray(object?.terms)
        ? object.terms.map((e: any) => UpdateChallengeInput_UpdateInput_Term.fromJSON(e))
        : [],
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => UpdateChallengeInput_UpdateInput_PrizeSet.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      startDate: isSet(object.startDate) ? Number(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? Number(object.endDate) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => String(e)) : [],
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => String(e)) : [],
      winners: Array.isArray(object?.winners)
        ? object.winners.map((e: any) => UpdateChallengeInput_UpdateInput_Winner.fromJSON(e))
        : [],
      discussions: Array.isArray(object?.discussions)
        ? object.discussions.map((e: any) => UpdateChallengeInput_UpdateInput_Discussion.fromJSON(e))
        : [],
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : undefined,
      updatedBy: isSet(object.updatedBy) ? String(object.updatedBy) : undefined,
      created: isSet(object.created) ? Number(object.created) : undefined,
      updated: isSet(object.updated) ? Number(object.updated) : undefined,
      overview: isSet(object.overview)
        ? UpdateChallengeInput_UpdateInput_Overview.fromJSON(object.overview)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.legacyId !== undefined && (obj.legacyId = Math.round(message.legacyId));
    message.name !== undefined && (obj.name = message.name);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.legacy !== undefined &&
      (obj.legacy = message.legacy ? UpdateChallengeInput_UpdateInput_Legacy.toJSON(message.legacy) : undefined);
    message.billing !== undefined &&
      (obj.billing = message.billing ? UpdateChallengeInput_UpdateInput_Billing.toJSON(message.billing) : undefined);
    message.description !== undefined && (obj.description = message.description);
    message.privateDescription !== undefined && (obj.privateDescription = message.privateDescription);
    message.descriptionFormat !== undefined && (obj.descriptionFormat = message.descriptionFormat);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e ? UpdateChallengeInput_UpdateInput_Metadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    message.task !== undefined &&
      (obj.task = message.task ? UpdateChallengeInput_UpdateInput_Task.toJSON(message.task) : undefined);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? UpdateChallengeInput_UpdateInput_Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    if (message.events) {
      obj.events = message.events.map((e) => e ? UpdateChallengeInput_UpdateInput_Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.terms) {
      obj.terms = message.terms.map((e) => e ? UpdateChallengeInput_UpdateInput_Term.toJSON(e) : undefined);
    } else {
      obj.terms = [];
    }
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) => e ? UpdateChallengeInput_UpdateInput_PrizeSet.toJSON(e) : undefined);
    } else {
      obj.prizeSets = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.startDate !== undefined && (obj.startDate = Math.round(message.startDate));
    message.endDate !== undefined && (obj.endDate = Math.round(message.endDate));
    message.status !== undefined && (obj.status = message.status);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) => e);
    } else {
      obj.attachments = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => e);
    } else {
      obj.groups = [];
    }
    if (message.winners) {
      obj.winners = message.winners.map((e) => e ? UpdateChallengeInput_UpdateInput_Winner.toJSON(e) : undefined);
    } else {
      obj.winners = [];
    }
    if (message.discussions) {
      obj.discussions = message.discussions.map((e) =>
        e ? UpdateChallengeInput_UpdateInput_Discussion.toJSON(e) : undefined
      );
    } else {
      obj.discussions = [];
    }
    message.createdBy !== undefined && (obj.createdBy = message.createdBy);
    message.updatedBy !== undefined && (obj.updatedBy = message.updatedBy);
    message.created !== undefined && (obj.created = Math.round(message.created));
    message.updated !== undefined && (obj.updated = Math.round(message.updated));
    message.overview !== undefined &&
      (obj.overview = message.overview
        ? UpdateChallengeInput_UpdateInput_Overview.toJSON(message.overview)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput {
    return UpdateChallengeInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput {
    const message = createBaseUpdateChallengeInput_UpdateInput();
    message.id = object.id ?? "";
    message.legacyId = object.legacyId ?? undefined;
    message.name = object.name ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.trackId = object.trackId ?? undefined;
    message.legacy = (object.legacy !== undefined && object.legacy !== null)
      ? UpdateChallengeInput_UpdateInput_Legacy.fromPartial(object.legacy)
      : undefined;
    message.billing = (object.billing !== undefined && object.billing !== null)
      ? UpdateChallengeInput_UpdateInput_Billing.fromPartial(object.billing)
      : undefined;
    message.description = object.description ?? undefined;
    message.privateDescription = object.privateDescription ?? undefined;
    message.descriptionFormat = object.descriptionFormat ?? undefined;
    message.metadata = object.metadata?.map((e) => UpdateChallengeInput_UpdateInput_Metadata.fromPartial(e)) || [];
    message.task = (object.task !== undefined && object.task !== null)
      ? UpdateChallengeInput_UpdateInput_Task.fromPartial(object.task)
      : undefined;
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.phases = object.phases?.map((e) => UpdateChallengeInput_UpdateInput_Phase.fromPartial(e)) || [];
    message.events = object.events?.map((e) => UpdateChallengeInput_UpdateInput_Event.fromPartial(e)) || [];
    message.terms = object.terms?.map((e) => UpdateChallengeInput_UpdateInput_Term.fromPartial(e)) || [];
    message.prizeSets = object.prizeSets?.map((e) => UpdateChallengeInput_UpdateInput_PrizeSet.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.projectId = object.projectId ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status = object.status ?? undefined;
    message.attachments = object.attachments?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.winners = object.winners?.map((e) => UpdateChallengeInput_UpdateInput_Winner.fromPartial(e)) || [];
    message.discussions = object.discussions?.map((e) => UpdateChallengeInput_UpdateInput_Discussion.fromPartial(e)) ||
      [];
    message.createdBy = object.createdBy ?? undefined;
    message.updatedBy = object.updatedBy ?? undefined;
    message.created = object.created ?? undefined;
    message.updated = object.updated ?? undefined;
    message.overview = (object.overview !== undefined && object.overview !== null)
      ? UpdateChallengeInput_UpdateInput_Overview.fromPartial(object.overview)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Legacy(): UpdateChallengeInput_UpdateInput_Legacy {
  return {
    track: undefined,
    subTrack: undefined,
    forumId: undefined,
    directProjectId: 0,
    reviewType: "",
    confidentialityType: "",
    reviewScorecardId: undefined,
    screeningScorecardId: undefined,
    pureV5Task: undefined,
    selfService: undefined,
    selfServiceCopilot: undefined,
  };
}

export const UpdateChallengeInput_UpdateInput_Legacy = {
  encode(message: UpdateChallengeInput_UpdateInput_Legacy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.track !== undefined) {
      writer.uint32(10).string(message.track);
    }
    if (message.subTrack !== undefined) {
      writer.uint32(18).string(message.subTrack);
    }
    if (message.forumId !== undefined) {
      writer.uint32(24).int32(message.forumId);
    }
    if (message.directProjectId !== 0) {
      writer.uint32(32).int32(message.directProjectId);
    }
    if (message.reviewType !== "") {
      writer.uint32(42).string(message.reviewType);
    }
    if (message.confidentialityType !== "") {
      writer.uint32(50).string(message.confidentialityType);
    }
    if (message.reviewScorecardId !== undefined) {
      writer.uint32(56).int32(message.reviewScorecardId);
    }
    if (message.screeningScorecardId !== undefined) {
      writer.uint32(64).int32(message.screeningScorecardId);
    }
    if (message.pureV5Task !== undefined) {
      writer.uint32(72).bool(message.pureV5Task);
    }
    if (message.selfService !== undefined) {
      writer.uint32(80).bool(message.selfService);
    }
    if (message.selfServiceCopilot !== undefined) {
      writer.uint32(90).string(message.selfServiceCopilot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Legacy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Legacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = reader.string();
          break;
        case 2:
          message.subTrack = reader.string();
          break;
        case 3:
          message.forumId = reader.int32();
          break;
        case 4:
          message.directProjectId = reader.int32();
          break;
        case 5:
          message.reviewType = reader.string();
          break;
        case 6:
          message.confidentialityType = reader.string();
          break;
        case 7:
          message.reviewScorecardId = reader.int32();
          break;
        case 8:
          message.screeningScorecardId = reader.int32();
          break;
        case 9:
          message.pureV5Task = reader.bool();
          break;
        case 10:
          message.selfService = reader.bool();
          break;
        case 11:
          message.selfServiceCopilot = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Legacy {
    return {
      track: isSet(object.track) ? String(object.track) : undefined,
      subTrack: isSet(object.subTrack) ? String(object.subTrack) : undefined,
      forumId: isSet(object.forumId) ? Number(object.forumId) : undefined,
      directProjectId: isSet(object.directProjectId) ? Number(object.directProjectId) : 0,
      reviewType: isSet(object.reviewType) ? String(object.reviewType) : "",
      confidentialityType: isSet(object.confidentialityType) ? String(object.confidentialityType) : "",
      reviewScorecardId: isSet(object.reviewScorecardId) ? Number(object.reviewScorecardId) : undefined,
      screeningScorecardId: isSet(object.screeningScorecardId) ? Number(object.screeningScorecardId) : undefined,
      pureV5Task: isSet(object.pureV5Task) ? Boolean(object.pureV5Task) : undefined,
      selfService: isSet(object.selfService) ? Boolean(object.selfService) : undefined,
      selfServiceCopilot: isSet(object.selfServiceCopilot) ? String(object.selfServiceCopilot) : undefined,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Legacy): unknown {
    const obj: any = {};
    message.track !== undefined && (obj.track = message.track);
    message.subTrack !== undefined && (obj.subTrack = message.subTrack);
    message.forumId !== undefined && (obj.forumId = Math.round(message.forumId));
    message.directProjectId !== undefined && (obj.directProjectId = Math.round(message.directProjectId));
    message.reviewType !== undefined && (obj.reviewType = message.reviewType);
    message.confidentialityType !== undefined && (obj.confidentialityType = message.confidentialityType);
    message.reviewScorecardId !== undefined && (obj.reviewScorecardId = Math.round(message.reviewScorecardId));
    message.screeningScorecardId !== undefined && (obj.screeningScorecardId = Math.round(message.screeningScorecardId));
    message.pureV5Task !== undefined && (obj.pureV5Task = message.pureV5Task);
    message.selfService !== undefined && (obj.selfService = message.selfService);
    message.selfServiceCopilot !== undefined && (obj.selfServiceCopilot = message.selfServiceCopilot);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Legacy>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Legacy {
    return UpdateChallengeInput_UpdateInput_Legacy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Legacy>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Legacy {
    const message = createBaseUpdateChallengeInput_UpdateInput_Legacy();
    message.track = object.track ?? undefined;
    message.subTrack = object.subTrack ?? undefined;
    message.forumId = object.forumId ?? undefined;
    message.directProjectId = object.directProjectId ?? 0;
    message.reviewType = object.reviewType ?? "";
    message.confidentialityType = object.confidentialityType ?? "";
    message.reviewScorecardId = object.reviewScorecardId ?? undefined;
    message.screeningScorecardId = object.screeningScorecardId ?? undefined;
    message.pureV5Task = object.pureV5Task ?? undefined;
    message.selfService = object.selfService ?? undefined;
    message.selfServiceCopilot = object.selfServiceCopilot ?? undefined;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Billing(): UpdateChallengeInput_UpdateInput_Billing {
  return { billingAccountId: 0, markup: 0 };
}

export const UpdateChallengeInput_UpdateInput_Billing = {
  encode(message: UpdateChallengeInput_UpdateInput_Billing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingAccountId !== 0) {
      writer.uint32(8).int32(message.billingAccountId);
    }
    if (message.markup !== 0) {
      writer.uint32(21).float(message.markup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Billing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Billing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingAccountId = reader.int32();
          break;
        case 2:
          message.markup = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Billing {
    return {
      billingAccountId: isSet(object.billingAccountId) ? Number(object.billingAccountId) : 0,
      markup: isSet(object.markup) ? Number(object.markup) : 0,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Billing): unknown {
    const obj: any = {};
    message.billingAccountId !== undefined && (obj.billingAccountId = Math.round(message.billingAccountId));
    message.markup !== undefined && (obj.markup = message.markup);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Billing>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Billing {
    return UpdateChallengeInput_UpdateInput_Billing.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Billing>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Billing {
    const message = createBaseUpdateChallengeInput_UpdateInput_Billing();
    message.billingAccountId = object.billingAccountId ?? 0;
    message.markup = object.markup ?? 0;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Event(): UpdateChallengeInput_UpdateInput_Event {
  return { id: 0, name: "", key: "" };
}

export const UpdateChallengeInput_UpdateInput_Event = {
  encode(message: UpdateChallengeInput_UpdateInput_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Event {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      key: isSet(object.key) ? String(object.key) : "",
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Event): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Event>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Event {
    return UpdateChallengeInput_UpdateInput_Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Event>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Event {
    const message = createBaseUpdateChallengeInput_UpdateInput_Event();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Term(): UpdateChallengeInput_UpdateInput_Term {
  return { id: "", roleId: "" };
}

export const UpdateChallengeInput_UpdateInput_Term = {
  encode(message: UpdateChallengeInput_UpdateInput_Term, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.roleId !== "") {
      writer.uint32(18).string(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Term {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Term();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Term {
    return { id: isSet(object.id) ? String(object.id) : "", roleId: isSet(object.roleId) ? String(object.roleId) : "" };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Term): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Term>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Term {
    return UpdateChallengeInput_UpdateInput_Term.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Term>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Term {
    const message = createBaseUpdateChallengeInput_UpdateInput_Term();
    message.id = object.id ?? "";
    message.roleId = object.roleId ?? "";
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Metadata(): UpdateChallengeInput_UpdateInput_Metadata {
  return { name: "", value: "" };
}

export const UpdateChallengeInput_UpdateInput_Metadata = {
  encode(message: UpdateChallengeInput_UpdateInput_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Metadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Metadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Metadata>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Metadata {
    return UpdateChallengeInput_UpdateInput_Metadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Metadata>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Metadata {
    const message = createBaseUpdateChallengeInput_UpdateInput_Metadata();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Discussion(): UpdateChallengeInput_UpdateInput_Discussion {
  return { id: undefined, name: "", type: "", provider: "", url: undefined };
}

export const UpdateChallengeInput_UpdateInput_Discussion = {
  encode(message: UpdateChallengeInput_UpdateInput_Discussion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    if (message.url !== undefined) {
      writer.uint32(42).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Discussion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Discussion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.provider = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Discussion {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      url: isSet(object.url) ? String(object.url) : undefined,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Discussion): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.provider !== undefined && (obj.provider = message.provider);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Discussion>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Discussion {
    return UpdateChallengeInput_UpdateInput_Discussion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Discussion>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Discussion {
    const message = createBaseUpdateChallengeInput_UpdateInput_Discussion();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.provider = object.provider ?? "";
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Phase(): UpdateChallengeInput_UpdateInput_Phase {
  return {
    duration: 0,
    scheduledStartDate: undefined,
    scheduledEndDate: undefined,
    actualStartDate: undefined,
    actualEndDate: undefined,
    name: "",
    phaseId: "",
    id: "",
    isOpen: false,
  };
}

export const UpdateChallengeInput_UpdateInput_Phase = {
  encode(message: UpdateChallengeInput_UpdateInput_Phase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.scheduledStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledStartDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.scheduledEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledEndDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.actualStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.actualStartDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.actualEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.actualEndDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.phaseId !== "") {
      writer.uint32(58).string(message.phaseId);
    }
    if (message.id !== "") {
      writer.uint32(66).string(message.id);
    }
    if (message.isOpen === true) {
      writer.uint32(72).bool(message.isOpen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Phase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Phase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32();
          break;
        case 2:
          message.scheduledStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.scheduledEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actualStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.actualEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.phaseId = reader.string();
          break;
        case 8:
          message.id = reader.string();
          break;
        case 9:
          message.isOpen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Phase {
    return {
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      scheduledStartDate: isSet(object.scheduledStartDate) ? String(object.scheduledStartDate) : undefined,
      scheduledEndDate: isSet(object.scheduledEndDate) ? String(object.scheduledEndDate) : undefined,
      actualStartDate: isSet(object.actualStartDate) ? String(object.actualStartDate) : undefined,
      actualEndDate: isSet(object.actualEndDate) ? String(object.actualEndDate) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      phaseId: isSet(object.phaseId) ? String(object.phaseId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Phase): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.scheduledStartDate !== undefined && (obj.scheduledStartDate = message.scheduledStartDate);
    message.scheduledEndDate !== undefined && (obj.scheduledEndDate = message.scheduledEndDate);
    message.actualStartDate !== undefined && (obj.actualStartDate = message.actualStartDate);
    message.actualEndDate !== undefined && (obj.actualEndDate = message.actualEndDate);
    message.name !== undefined && (obj.name = message.name);
    message.phaseId !== undefined && (obj.phaseId = message.phaseId);
    message.id !== undefined && (obj.id = message.id);
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Phase>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Phase {
    return UpdateChallengeInput_UpdateInput_Phase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Phase>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Phase {
    const message = createBaseUpdateChallengeInput_UpdateInput_Phase();
    message.duration = object.duration ?? 0;
    message.scheduledStartDate = object.scheduledStartDate ?? undefined;
    message.scheduledEndDate = object.scheduledEndDate ?? undefined;
    message.actualStartDate = object.actualStartDate ?? undefined;
    message.actualEndDate = object.actualEndDate ?? undefined;
    message.name = object.name ?? "";
    message.phaseId = object.phaseId ?? "";
    message.id = object.id ?? "";
    message.isOpen = object.isOpen ?? false;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Winner(): UpdateChallengeInput_UpdateInput_Winner {
  return { handle: "", placement: 0, userId: 0 };
}

export const UpdateChallengeInput_UpdateInput_Winner = {
  encode(message: UpdateChallengeInput_UpdateInput_Winner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    if (message.placement !== 0) {
      writer.uint32(16).int32(message.placement);
    }
    if (message.userId !== 0) {
      writer.uint32(24).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Winner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Winner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handle = reader.string();
          break;
        case 2:
          message.placement = reader.int32();
          break;
        case 3:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Winner {
    return {
      handle: isSet(object.handle) ? String(object.handle) : "",
      placement: isSet(object.placement) ? Number(object.placement) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Winner): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Winner>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Winner {
    return UpdateChallengeInput_UpdateInput_Winner.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Winner>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Winner {
    const message = createBaseUpdateChallengeInput_UpdateInput_Winner();
    message.handle = object.handle ?? "";
    message.placement = object.placement ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Task(): UpdateChallengeInput_UpdateInput_Task {
  return { isTask: false, isAssigned: false, memberId: undefined };
}

export const UpdateChallengeInput_UpdateInput_Task = {
  encode(message: UpdateChallengeInput_UpdateInput_Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isTask === true) {
      writer.uint32(8).bool(message.isTask);
    }
    if (message.isAssigned === true) {
      writer.uint32(16).bool(message.isAssigned);
    }
    if (message.memberId !== undefined) {
      writer.uint32(24).int32(message.memberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Task {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Task();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isTask = reader.bool();
          break;
        case 2:
          message.isAssigned = reader.bool();
          break;
        case 3:
          message.memberId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Task {
    return {
      isTask: isSet(object.isTask) ? Boolean(object.isTask) : false,
      isAssigned: isSet(object.isAssigned) ? Boolean(object.isAssigned) : false,
      memberId: isSet(object.memberId) ? Number(object.memberId) : undefined,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Task): unknown {
    const obj: any = {};
    message.isTask !== undefined && (obj.isTask = message.isTask);
    message.isAssigned !== undefined && (obj.isAssigned = message.isAssigned);
    message.memberId !== undefined && (obj.memberId = Math.round(message.memberId));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Task>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Task {
    return UpdateChallengeInput_UpdateInput_Task.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Task>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Task {
    const message = createBaseUpdateChallengeInput_UpdateInput_Task();
    message.isTask = object.isTask ?? false;
    message.isAssigned = object.isAssigned ?? false;
    message.memberId = object.memberId ?? undefined;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_PrizeSet(): UpdateChallengeInput_UpdateInput_PrizeSet {
  return { type: "", description: undefined, prizes: [] };
}

export const UpdateChallengeInput_UpdateInput_PrizeSet = {
  encode(message: UpdateChallengeInput_UpdateInput_PrizeSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.prizes) {
      UpdateChallengeInput_UpdateInput_PrizeSet_Prize.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_PrizeSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_PrizeSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.prizes.push(UpdateChallengeInput_UpdateInput_PrizeSet_Prize.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_PrizeSet {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      prizes: Array.isArray(object?.prizes)
        ? object.prizes.map((e: any) => UpdateChallengeInput_UpdateInput_PrizeSet_Prize.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_PrizeSet): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.description !== undefined && (obj.description = message.description);
    if (message.prizes) {
      obj.prizes = message.prizes.map((e) => e ? UpdateChallengeInput_UpdateInput_PrizeSet_Prize.toJSON(e) : undefined);
    } else {
      obj.prizes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PrizeSet>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_PrizeSet {
    return UpdateChallengeInput_UpdateInput_PrizeSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PrizeSet>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_PrizeSet {
    const message = createBaseUpdateChallengeInput_UpdateInput_PrizeSet();
    message.type = object.type ?? "";
    message.description = object.description ?? undefined;
    message.prizes = object.prizes?.map((e) => UpdateChallengeInput_UpdateInput_PrizeSet_Prize.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_PrizeSet_Prize(): UpdateChallengeInput_UpdateInput_PrizeSet_Prize {
  return { value: 0, type: "" };
}

export const UpdateChallengeInput_UpdateInput_PrizeSet_Prize = {
  encode(
    message: UpdateChallengeInput_UpdateInput_PrizeSet_Prize,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_PrizeSet_Prize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_PrizeSet_Prize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_PrizeSet_Prize {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_PrizeSet_Prize): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PrizeSet_Prize>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_PrizeSet_Prize {
    return UpdateChallengeInput_UpdateInput_PrizeSet_Prize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PrizeSet_Prize>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_PrizeSet_Prize {
    const message = createBaseUpdateChallengeInput_UpdateInput_PrizeSet_Prize();
    message.value = object.value ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_Overview(): UpdateChallengeInput_UpdateInput_Overview {
  return { totalPrizes: 0 };
}

export const UpdateChallengeInput_UpdateInput_Overview = {
  encode(message: UpdateChallengeInput_UpdateInput_Overview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalPrizes !== 0) {
      writer.uint32(8).int32(message.totalPrizes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_Overview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_Overview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrizes = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_Overview {
    return { totalPrizes: isSet(object.totalPrizes) ? Number(object.totalPrizes) : 0 };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_Overview): unknown {
    const obj: any = {};
    message.totalPrizes !== undefined && (obj.totalPrizes = Math.round(message.totalPrizes));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Overview>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_Overview {
    return UpdateChallengeInput_UpdateInput_Overview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_Overview>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_Overview {
    const message = createBaseUpdateChallengeInput_UpdateInput_Overview();
    message.totalPrizes = object.totalPrizes ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(dateStr: string): Timestamp {
  const date = new Date(dateStr);
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): string {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis).toISOString();
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
