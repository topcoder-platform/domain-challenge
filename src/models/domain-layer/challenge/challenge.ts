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
  startDate?: string | undefined;
  endDate?: string | undefined;
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
  id?: number | undefined;
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
  /** challenge */
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
  constraints: Challenge_Phase_Constraint[];
  description?: string | undefined;
  predecessor?: string | undefined;
}

export interface Challenge_Phase_Constraint {
  name: string;
  value: number;
}

export interface Challenge_Winner {
  handle: string;
  placement: number;
  userId: number;
  type?: string | undefined;
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
  amountInCents?: number | undefined;
  value?: number | undefined;
  type: string;
}

export interface Challenge_Overview {
  totalPrizesInCents?: number | undefined;
  totalPrizes?: number | undefined;
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
  description?: string | undefined;
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
  startDate?: string | undefined;
  endDate?: string | undefined;
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
  name?: string | undefined;
  typeId?: string | undefined;
  trackId?: string | undefined;
  timelineTemplateId?: string | undefined;
  legacy?: Challenge_Legacy | undefined;
  billing?: Challenge_Billing | undefined;
  description?: string | undefined;
  privateDescription?: string | undefined;
  descriptionFormat?: string | undefined;
  task?: Challenge_Task | undefined;
  winnerUpdate?: UpdateChallengeInput_UpdateInput_WinnerUpdate | undefined;
  discussionUpdate?: UpdateChallengeInput_UpdateInput_DiscussionUpdate | undefined;
  metadataUpdate?: UpdateChallengeInput_UpdateInput_MetadataUpdate | undefined;
  phaseUpdate?: UpdateChallengeInput_UpdateInput_PhaseUpdate | undefined;
  eventUpdate?: UpdateChallengeInput_UpdateInput_EventUpdate | undefined;
  termUpdate?: UpdateChallengeInput_UpdateInput_TermUpdate | undefined;
  prizeSetUpdate?: UpdateChallengeInput_UpdateInput_PrizeSetUpdate | undefined;
  tagUpdate?: UpdateChallengeInput_UpdateInput_TagsUpdate | undefined;
  attachmentUpdate?: UpdateChallengeInput_UpdateInput_AttachmentsUpdate | undefined;
  groupUpdate?: UpdateChallengeInput_UpdateInput_GroupsUpdate | undefined;
  projectId?: number | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
  status?: string | undefined;
  overview?: Challenge_Overview | undefined;
}

export interface UpdateChallengeInput_UpdateInput_WinnerUpdate {
  winners: Challenge_Winner[];
}

export interface UpdateChallengeInput_UpdateInput_DiscussionUpdate {
  discussions: Challenge_Discussion[];
}

export interface UpdateChallengeInput_UpdateInput_MetadataUpdate {
  metadata: Challenge_Metadata[];
}

export interface UpdateChallengeInput_UpdateInput_PhaseUpdate {
  phases: Challenge_Phase[];
}

export interface UpdateChallengeInput_UpdateInput_EventUpdate {
  events: Challenge_Event[];
}

export interface UpdateChallengeInput_UpdateInput_TermUpdate {
  terms: Challenge_Term[];
}

export interface UpdateChallengeInput_UpdateInput_PrizeSetUpdate {
  prizeSets: Challenge_PrizeSet[];
}

export interface UpdateChallengeInput_UpdateInput_TagsUpdate {
  tags: string[];
}

export interface UpdateChallengeInput_UpdateInput_AttachmentsUpdate {
  attachments: string[];
}

export interface UpdateChallengeInput_UpdateInput_GroupsUpdate {
  groups: string[];
}

export interface UpdateChallengeInputForACL {
  filterCriteria: ScanCriteria[];
  updateInputForAcl?: UpdateChallengeInputForACL_UpdateInputForACL;
}

export interface UpdateChallengeInputForACL_UpdateInputForACL {
  status?: string | undefined;
  phases?: UpdateChallengeInputForACL_PhasesACL | undefined;
  currentPhase?: Challenge_Phase | undefined;
  currentPhaseNames?: UpdateChallengeInputForACL_CurrentPhaseNamesACL | undefined;
  registrationStartDate?: string | undefined;
  registrationEndDate?: string | undefined;
  submissionStartDate?: string | undefined;
  submissionEndDate?: string | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
  legacy?: UpdateChallengeInputForACL_LegacyACL | undefined;
  prizeSets?: UpdateChallengeInputForACL_PrizeSetsACL | undefined;
  overview?: Challenge_Overview | undefined;
  winners?: UpdateChallengeInputForACL_WinnersACL | undefined;
}

export interface UpdateChallengeInputForACL_PhasesACL {
  phases: Challenge_Phase[];
}

export interface UpdateChallengeInputForACL_CurrentPhaseNamesACL {
  currentPhaseNames: string[];
}

export interface UpdateChallengeInputForACL_LegacyACL {
  reviewScorecardId?: number | undefined;
  screeningScorecardId?: number | undefined;
}

export interface UpdateChallengeInputForACL_PrizeSetsACL {
  prizeSets: Challenge_PrizeSet[];
}

export interface UpdateChallengeInputForACL_WinnersACL {
  winners: UpdateChallengeInputForACL_WinnerACL[];
}

export interface UpdateChallengeInputForACL_WinnerACL {
  handle: string;
  placement: number;
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
      writer.uint32(162).string(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(170).string(message.endDate);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.legacyId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.trackId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.legacy = Challenge_Legacy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.billing = Challenge_Billing.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.description = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.privateDescription = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.descriptionFormat = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.metadata.push(Challenge_Metadata.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.task = Challenge_Task.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.timelineTemplateId = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.phases.push(Challenge_Phase.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.events.push(Challenge_Event.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.terms.push(Challenge_Term.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.prizeSets.push(Challenge_PrizeSet.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.projectId = reader.int32();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.startDate = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.endDate = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.status = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.attachments.push(reader.string());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.groups.push(reader.string());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.winners.push(Challenge_Winner.decode(reader, reader.uint32()));
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.discussions.push(Challenge_Discussion.decode(reader, reader.uint32()));
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.createdBy = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.updatedBy = reader.string();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.created = longToNumber(reader.int64() as Long);
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.updated = longToNumber(reader.int64() as Long);
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.overview = Challenge_Overview.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      startDate: isSet(object.startDate) ? String(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? String(object.endDate) : undefined,
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
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Legacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.track = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subTrack = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.forumId = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.directProjectId = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.reviewType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.confidentialityType = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.reviewScorecardId = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.screeningScorecardId = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.pureV5Task = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.selfService = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.selfServiceCopilot = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Billing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.billingAccountId = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.markup = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  return { id: undefined, name: "", key: "" };
}

export const Challenge_Event = {
  encode(message: Challenge_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge_Event {
    return {
      id: isSet(object.id) ? Number(object.id) : undefined,
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
    message.id = object.id ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Term();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.roleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Discussion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    constraints: [],
    description: undefined,
    predecessor: undefined,
  };
}

export const Challenge_Phase = {
  encode(message: Challenge_Phase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int64(message.duration);
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
    for (const v of message.constraints) {
      Challenge_Phase_Constraint.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.description !== undefined) {
      writer.uint32(90).string(message.description);
    }
    if (message.predecessor !== undefined) {
      writer.uint32(98).string(message.predecessor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Phase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Phase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.duration = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scheduledStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scheduledEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.actualStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.actualEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.phaseId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.id = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isOpen = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.constraints.push(Challenge_Phase_Constraint.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.description = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.predecessor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      constraints: Array.isArray(object?.constraints)
        ? object.constraints.map((e: any) => Challenge_Phase_Constraint.fromJSON(e))
        : [],
      description: isSet(object.description) ? String(object.description) : undefined,
      predecessor: isSet(object.predecessor) ? String(object.predecessor) : undefined,
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
    if (message.constraints) {
      obj.constraints = message.constraints.map((e) => e ? Challenge_Phase_Constraint.toJSON(e) : undefined);
    } else {
      obj.constraints = [];
    }
    message.description !== undefined && (obj.description = message.description);
    message.predecessor !== undefined && (obj.predecessor = message.predecessor);
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
    message.constraints = object.constraints?.map((e) => Challenge_Phase_Constraint.fromPartial(e)) || [];
    message.description = object.description ?? undefined;
    message.predecessor = object.predecessor ?? undefined;
    return message;
  },
};

function createBaseChallenge_Phase_Constraint(): Challenge_Phase_Constraint {
  return { name: "", value: 0 };
}

export const Challenge_Phase_Constraint = {
  encode(message: Challenge_Phase_Constraint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Phase_Constraint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Phase_Constraint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge_Phase_Constraint {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Challenge_Phase_Constraint): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Phase_Constraint>, I>>(base?: I): Challenge_Phase_Constraint {
    return Challenge_Phase_Constraint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Phase_Constraint>, I>>(object: I): Challenge_Phase_Constraint {
    const message = createBaseChallenge_Phase_Constraint();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseChallenge_Winner(): Challenge_Winner {
  return { handle: "", placement: 0, userId: 0, type: undefined };
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
    if (message.type !== undefined) {
      writer.uint32(34).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Winner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Winner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.handle = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.placement = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.userId = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge_Winner {
    return {
      handle: isSet(object.handle) ? String(object.handle) : "",
      placement: isSet(object.placement) ? Number(object.placement) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      type: isSet(object.type) ? String(object.type) : undefined,
    };
  },

  toJSON(message: Challenge_Winner): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.type !== undefined && (obj.type = message.type);
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
    message.type = object.type ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Task();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isTask = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isAssigned = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.memberId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_PrizeSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prizes.push(Challenge_PrizeSet_Prize.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  return { amountInCents: undefined, value: undefined, type: "" };
}

export const Challenge_PrizeSet_Prize = {
  encode(message: Challenge_PrizeSet_Prize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountInCents !== undefined) {
      writer.uint32(8).int64(message.amountInCents);
    }
    if (message.value !== undefined) {
      writer.uint32(21).float(message.value);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_PrizeSet_Prize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_PrizeSet_Prize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amountInCents = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.value = reader.float();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge_PrizeSet_Prize {
    return {
      amountInCents: isSet(object.amountInCents) ? Number(object.amountInCents) : undefined,
      value: isSet(object.value) ? Number(object.value) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Challenge_PrizeSet_Prize): unknown {
    const obj: any = {};
    message.amountInCents !== undefined && (obj.amountInCents = Math.round(message.amountInCents));
    message.value !== undefined && (obj.value = message.value);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_PrizeSet_Prize>, I>>(base?: I): Challenge_PrizeSet_Prize {
    return Challenge_PrizeSet_Prize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_PrizeSet_Prize>, I>>(object: I): Challenge_PrizeSet_Prize {
    const message = createBaseChallenge_PrizeSet_Prize();
    message.amountInCents = object.amountInCents ?? undefined;
    message.value = object.value ?? undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseChallenge_Overview(): Challenge_Overview {
  return { totalPrizesInCents: undefined, totalPrizes: undefined };
}

export const Challenge_Overview = {
  encode(message: Challenge_Overview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalPrizesInCents !== undefined) {
      writer.uint32(8).int64(message.totalPrizesInCents);
    }
    if (message.totalPrizes !== undefined) {
      writer.uint32(21).float(message.totalPrizes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_Overview {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_Overview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalPrizesInCents = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.totalPrizes = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge_Overview {
    return {
      totalPrizesInCents: isSet(object.totalPrizesInCents) ? Number(object.totalPrizesInCents) : undefined,
      totalPrizes: isSet(object.totalPrizes) ? Number(object.totalPrizes) : undefined,
    };
  },

  toJSON(message: Challenge_Overview): unknown {
    const obj: any = {};
    message.totalPrizesInCents !== undefined && (obj.totalPrizesInCents = Math.round(message.totalPrizesInCents));
    message.totalPrizes !== undefined && (obj.totalPrizes = message.totalPrizes);
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_Overview>, I>>(base?: I): Challenge_Overview {
    return Challenge_Overview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Challenge_Overview>, I>>(object: I): Challenge_Overview {
    const message = createBaseChallenge_Overview();
    message.totalPrizesInCents = object.totalPrizesInCents ?? undefined;
    message.totalPrizes = object.totalPrizes ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Challenge.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    description: undefined,
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
    if (message.description !== undefined) {
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
      writer.uint32(146).string(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(154).string(message.endDate);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.trackId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timelineTemplateId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.legacy = Challenge_Legacy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.billing = Challenge_Billing.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.privateDescription = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.descriptionFormat = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.metadata.push(Challenge_Metadata.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.task = Challenge_Task.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.phases.push(Challenge_Phase.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.events.push(Challenge_Event.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.terms.push(Challenge_Term.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.prizeSets.push(Challenge_PrizeSet.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.projectId = reader.int32();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.startDate = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.endDate = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.status = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.attachments.push(reader.string());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.groups.push(reader.string());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.discussions.push(Challenge_Discussion.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      description: isSet(object.description) ? String(object.description) : undefined,
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
      startDate: isSet(object.startDate) ? String(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? String(object.endDate) : undefined,
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
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
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
    message.description = object.description ?? undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateInput = UpdateChallengeInput_UpdateInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    name: undefined,
    typeId: undefined,
    trackId: undefined,
    timelineTemplateId: undefined,
    legacy: undefined,
    billing: undefined,
    description: undefined,
    privateDescription: undefined,
    descriptionFormat: undefined,
    task: undefined,
    winnerUpdate: undefined,
    discussionUpdate: undefined,
    metadataUpdate: undefined,
    phaseUpdate: undefined,
    eventUpdate: undefined,
    termUpdate: undefined,
    prizeSetUpdate: undefined,
    tagUpdate: undefined,
    attachmentUpdate: undefined,
    groupUpdate: undefined,
    projectId: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
    overview: undefined,
  };
}

export const UpdateChallengeInput_UpdateInput = {
  encode(message: UpdateChallengeInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.typeId !== undefined) {
      writer.uint32(18).string(message.typeId);
    }
    if (message.trackId !== undefined) {
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
    if (message.description !== undefined) {
      writer.uint32(58).string(message.description);
    }
    if (message.privateDescription !== undefined) {
      writer.uint32(66).string(message.privateDescription);
    }
    if (message.descriptionFormat !== undefined) {
      writer.uint32(74).string(message.descriptionFormat);
    }
    if (message.task !== undefined) {
      Challenge_Task.encode(message.task, writer.uint32(82).fork()).ldelim();
    }
    if (message.winnerUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_WinnerUpdate.encode(message.winnerUpdate, writer.uint32(90).fork()).ldelim();
    }
    if (message.discussionUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_DiscussionUpdate.encode(message.discussionUpdate, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.metadataUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_MetadataUpdate.encode(message.metadataUpdate, writer.uint32(106).fork())
        .ldelim();
    }
    if (message.phaseUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_PhaseUpdate.encode(message.phaseUpdate, writer.uint32(114).fork()).ldelim();
    }
    if (message.eventUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_EventUpdate.encode(message.eventUpdate, writer.uint32(122).fork()).ldelim();
    }
    if (message.termUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_TermUpdate.encode(message.termUpdate, writer.uint32(130).fork()).ldelim();
    }
    if (message.prizeSetUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_PrizeSetUpdate.encode(message.prizeSetUpdate, writer.uint32(138).fork())
        .ldelim();
    }
    if (message.tagUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_TagsUpdate.encode(message.tagUpdate, writer.uint32(146).fork()).ldelim();
    }
    if (message.attachmentUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_AttachmentsUpdate.encode(message.attachmentUpdate, writer.uint32(154).fork())
        .ldelim();
    }
    if (message.groupUpdate !== undefined) {
      UpdateChallengeInput_UpdateInput_GroupsUpdate.encode(message.groupUpdate, writer.uint32(162).fork()).ldelim();
    }
    if (message.projectId !== undefined) {
      writer.uint32(168).int32(message.projectId);
    }
    if (message.startDate !== undefined) {
      writer.uint32(178).string(message.startDate);
    }
    if (message.endDate !== undefined) {
      writer.uint32(186).string(message.endDate);
    }
    if (message.status !== undefined) {
      writer.uint32(194).string(message.status);
    }
    if (message.overview !== undefined) {
      Challenge_Overview.encode(message.overview, writer.uint32(202).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.trackId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timelineTemplateId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.legacy = Challenge_Legacy.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.billing = Challenge_Billing.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.privateDescription = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.descriptionFormat = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.task = Challenge_Task.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.winnerUpdate = UpdateChallengeInput_UpdateInput_WinnerUpdate.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.discussionUpdate = UpdateChallengeInput_UpdateInput_DiscussionUpdate.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.metadataUpdate = UpdateChallengeInput_UpdateInput_MetadataUpdate.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.phaseUpdate = UpdateChallengeInput_UpdateInput_PhaseUpdate.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.eventUpdate = UpdateChallengeInput_UpdateInput_EventUpdate.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.termUpdate = UpdateChallengeInput_UpdateInput_TermUpdate.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.prizeSetUpdate = UpdateChallengeInput_UpdateInput_PrizeSetUpdate.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.tagUpdate = UpdateChallengeInput_UpdateInput_TagsUpdate.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.attachmentUpdate = UpdateChallengeInput_UpdateInput_AttachmentsUpdate.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.groupUpdate = UpdateChallengeInput_UpdateInput_GroupsUpdate.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.projectId = reader.int32();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.startDate = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.endDate = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.status = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.overview = Challenge_Overview.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      trackId: isSet(object.trackId) ? String(object.trackId) : undefined,
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : undefined,
      legacy: isSet(object.legacy) ? Challenge_Legacy.fromJSON(object.legacy) : undefined,
      billing: isSet(object.billing) ? Challenge_Billing.fromJSON(object.billing) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      privateDescription: isSet(object.privateDescription) ? String(object.privateDescription) : undefined,
      descriptionFormat: isSet(object.descriptionFormat) ? String(object.descriptionFormat) : undefined,
      task: isSet(object.task) ? Challenge_Task.fromJSON(object.task) : undefined,
      winnerUpdate: isSet(object.winnerUpdate)
        ? UpdateChallengeInput_UpdateInput_WinnerUpdate.fromJSON(object.winnerUpdate)
        : undefined,
      discussionUpdate: isSet(object.discussionUpdate)
        ? UpdateChallengeInput_UpdateInput_DiscussionUpdate.fromJSON(object.discussionUpdate)
        : undefined,
      metadataUpdate: isSet(object.metadataUpdate)
        ? UpdateChallengeInput_UpdateInput_MetadataUpdate.fromJSON(object.metadataUpdate)
        : undefined,
      phaseUpdate: isSet(object.phaseUpdate)
        ? UpdateChallengeInput_UpdateInput_PhaseUpdate.fromJSON(object.phaseUpdate)
        : undefined,
      eventUpdate: isSet(object.eventUpdate)
        ? UpdateChallengeInput_UpdateInput_EventUpdate.fromJSON(object.eventUpdate)
        : undefined,
      termUpdate: isSet(object.termUpdate)
        ? UpdateChallengeInput_UpdateInput_TermUpdate.fromJSON(object.termUpdate)
        : undefined,
      prizeSetUpdate: isSet(object.prizeSetUpdate)
        ? UpdateChallengeInput_UpdateInput_PrizeSetUpdate.fromJSON(object.prizeSetUpdate)
        : undefined,
      tagUpdate: isSet(object.tagUpdate)
        ? UpdateChallengeInput_UpdateInput_TagsUpdate.fromJSON(object.tagUpdate)
        : undefined,
      attachmentUpdate: isSet(object.attachmentUpdate)
        ? UpdateChallengeInput_UpdateInput_AttachmentsUpdate.fromJSON(object.attachmentUpdate)
        : undefined,
      groupUpdate: isSet(object.groupUpdate)
        ? UpdateChallengeInput_UpdateInput_GroupsUpdate.fromJSON(object.groupUpdate)
        : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      startDate: isSet(object.startDate) ? String(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? String(object.endDate) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      overview: isSet(object.overview) ? Challenge_Overview.fromJSON(object.overview) : undefined,
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput): unknown {
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
    message.task !== undefined && (obj.task = message.task ? Challenge_Task.toJSON(message.task) : undefined);
    message.winnerUpdate !== undefined && (obj.winnerUpdate = message.winnerUpdate
      ? UpdateChallengeInput_UpdateInput_WinnerUpdate.toJSON(message.winnerUpdate)
      : undefined);
    message.discussionUpdate !== undefined && (obj.discussionUpdate = message.discussionUpdate
      ? UpdateChallengeInput_UpdateInput_DiscussionUpdate.toJSON(message.discussionUpdate)
      : undefined);
    message.metadataUpdate !== undefined && (obj.metadataUpdate = message.metadataUpdate
      ? UpdateChallengeInput_UpdateInput_MetadataUpdate.toJSON(message.metadataUpdate)
      : undefined);
    message.phaseUpdate !== undefined && (obj.phaseUpdate = message.phaseUpdate
      ? UpdateChallengeInput_UpdateInput_PhaseUpdate.toJSON(message.phaseUpdate)
      : undefined);
    message.eventUpdate !== undefined && (obj.eventUpdate = message.eventUpdate
      ? UpdateChallengeInput_UpdateInput_EventUpdate.toJSON(message.eventUpdate)
      : undefined);
    message.termUpdate !== undefined && (obj.termUpdate = message.termUpdate
      ? UpdateChallengeInput_UpdateInput_TermUpdate.toJSON(message.termUpdate)
      : undefined);
    message.prizeSetUpdate !== undefined && (obj.prizeSetUpdate = message.prizeSetUpdate
      ? UpdateChallengeInput_UpdateInput_PrizeSetUpdate.toJSON(message.prizeSetUpdate)
      : undefined);
    message.tagUpdate !== undefined && (obj.tagUpdate = message.tagUpdate
      ? UpdateChallengeInput_UpdateInput_TagsUpdate.toJSON(message.tagUpdate)
      : undefined);
    message.attachmentUpdate !== undefined && (obj.attachmentUpdate = message.attachmentUpdate
      ? UpdateChallengeInput_UpdateInput_AttachmentsUpdate.toJSON(message.attachmentUpdate)
      : undefined);
    message.groupUpdate !== undefined && (obj.groupUpdate = message.groupUpdate
      ? UpdateChallengeInput_UpdateInput_GroupsUpdate.toJSON(message.groupUpdate)
      : undefined);
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
    message.status !== undefined && (obj.status = message.status);
    message.overview !== undefined &&
      (obj.overview = message.overview ? Challenge_Overview.toJSON(message.overview) : undefined);
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
    message.name = object.name ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.trackId = object.trackId ?? undefined;
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.legacy = (object.legacy !== undefined && object.legacy !== null)
      ? Challenge_Legacy.fromPartial(object.legacy)
      : undefined;
    message.billing = (object.billing !== undefined && object.billing !== null)
      ? Challenge_Billing.fromPartial(object.billing)
      : undefined;
    message.description = object.description ?? undefined;
    message.privateDescription = object.privateDescription ?? undefined;
    message.descriptionFormat = object.descriptionFormat ?? undefined;
    message.task = (object.task !== undefined && object.task !== null)
      ? Challenge_Task.fromPartial(object.task)
      : undefined;
    message.winnerUpdate = (object.winnerUpdate !== undefined && object.winnerUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_WinnerUpdate.fromPartial(object.winnerUpdate)
      : undefined;
    message.discussionUpdate = (object.discussionUpdate !== undefined && object.discussionUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_DiscussionUpdate.fromPartial(object.discussionUpdate)
      : undefined;
    message.metadataUpdate = (object.metadataUpdate !== undefined && object.metadataUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_MetadataUpdate.fromPartial(object.metadataUpdate)
      : undefined;
    message.phaseUpdate = (object.phaseUpdate !== undefined && object.phaseUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_PhaseUpdate.fromPartial(object.phaseUpdate)
      : undefined;
    message.eventUpdate = (object.eventUpdate !== undefined && object.eventUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_EventUpdate.fromPartial(object.eventUpdate)
      : undefined;
    message.termUpdate = (object.termUpdate !== undefined && object.termUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_TermUpdate.fromPartial(object.termUpdate)
      : undefined;
    message.prizeSetUpdate = (object.prizeSetUpdate !== undefined && object.prizeSetUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_PrizeSetUpdate.fromPartial(object.prizeSetUpdate)
      : undefined;
    message.tagUpdate = (object.tagUpdate !== undefined && object.tagUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_TagsUpdate.fromPartial(object.tagUpdate)
      : undefined;
    message.attachmentUpdate = (object.attachmentUpdate !== undefined && object.attachmentUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_AttachmentsUpdate.fromPartial(object.attachmentUpdate)
      : undefined;
    message.groupUpdate = (object.groupUpdate !== undefined && object.groupUpdate !== null)
      ? UpdateChallengeInput_UpdateInput_GroupsUpdate.fromPartial(object.groupUpdate)
      : undefined;
    message.projectId = object.projectId ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.status = object.status ?? undefined;
    message.overview = (object.overview !== undefined && object.overview !== null)
      ? Challenge_Overview.fromPartial(object.overview)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_WinnerUpdate(): UpdateChallengeInput_UpdateInput_WinnerUpdate {
  return { winners: [] };
}

export const UpdateChallengeInput_UpdateInput_WinnerUpdate = {
  encode(message: UpdateChallengeInput_UpdateInput_WinnerUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.winners) {
      Challenge_Winner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_WinnerUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_WinnerUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.winners.push(Challenge_Winner.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_WinnerUpdate {
    return {
      winners: Array.isArray(object?.winners) ? object.winners.map((e: any) => Challenge_Winner.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_WinnerUpdate): unknown {
    const obj: any = {};
    if (message.winners) {
      obj.winners = message.winners.map((e) => e ? Challenge_Winner.toJSON(e) : undefined);
    } else {
      obj.winners = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_WinnerUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_WinnerUpdate {
    return UpdateChallengeInput_UpdateInput_WinnerUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_WinnerUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_WinnerUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_WinnerUpdate();
    message.winners = object.winners?.map((e) => Challenge_Winner.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_DiscussionUpdate(): UpdateChallengeInput_UpdateInput_DiscussionUpdate {
  return { discussions: [] };
}

export const UpdateChallengeInput_UpdateInput_DiscussionUpdate = {
  encode(
    message: UpdateChallengeInput_UpdateInput_DiscussionUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.discussions) {
      Challenge_Discussion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_DiscussionUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_DiscussionUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.discussions.push(Challenge_Discussion.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_DiscussionUpdate {
    return {
      discussions: Array.isArray(object?.discussions)
        ? object.discussions.map((e: any) => Challenge_Discussion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_DiscussionUpdate): unknown {
    const obj: any = {};
    if (message.discussions) {
      obj.discussions = message.discussions.map((e) => e ? Challenge_Discussion.toJSON(e) : undefined);
    } else {
      obj.discussions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_DiscussionUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_DiscussionUpdate {
    return UpdateChallengeInput_UpdateInput_DiscussionUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_DiscussionUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_DiscussionUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_DiscussionUpdate();
    message.discussions = object.discussions?.map((e) => Challenge_Discussion.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_MetadataUpdate(): UpdateChallengeInput_UpdateInput_MetadataUpdate {
  return { metadata: [] };
}

export const UpdateChallengeInput_UpdateInput_MetadataUpdate = {
  encode(
    message: UpdateChallengeInput_UpdateInput_MetadataUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.metadata) {
      Challenge_Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_MetadataUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_MetadataUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata.push(Challenge_Metadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_MetadataUpdate {
    return {
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Challenge_Metadata.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_MetadataUpdate): unknown {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e ? Challenge_Metadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_MetadataUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_MetadataUpdate {
    return UpdateChallengeInput_UpdateInput_MetadataUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_MetadataUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_MetadataUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_MetadataUpdate();
    message.metadata = object.metadata?.map((e) => Challenge_Metadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_PhaseUpdate(): UpdateChallengeInput_UpdateInput_PhaseUpdate {
  return { phases: [] };
}

export const UpdateChallengeInput_UpdateInput_PhaseUpdate = {
  encode(message: UpdateChallengeInput_UpdateInput_PhaseUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.phases) {
      Challenge_Phase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_PhaseUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_PhaseUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phases.push(Challenge_Phase.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_PhaseUpdate {
    return { phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => Challenge_Phase.fromJSON(e)) : [] };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_PhaseUpdate): unknown {
    const obj: any = {};
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? Challenge_Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PhaseUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_PhaseUpdate {
    return UpdateChallengeInput_UpdateInput_PhaseUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PhaseUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_PhaseUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_PhaseUpdate();
    message.phases = object.phases?.map((e) => Challenge_Phase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_EventUpdate(): UpdateChallengeInput_UpdateInput_EventUpdate {
  return { events: [] };
}

export const UpdateChallengeInput_UpdateInput_EventUpdate = {
  encode(message: UpdateChallengeInput_UpdateInput_EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Challenge_Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_EventUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_EventUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.events.push(Challenge_Event.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_EventUpdate {
    return { events: Array.isArray(object?.events) ? object.events.map((e: any) => Challenge_Event.fromJSON(e)) : [] };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_EventUpdate): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? Challenge_Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_EventUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_EventUpdate {
    return UpdateChallengeInput_UpdateInput_EventUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_EventUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_EventUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_EventUpdate();
    message.events = object.events?.map((e) => Challenge_Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_TermUpdate(): UpdateChallengeInput_UpdateInput_TermUpdate {
  return { terms: [] };
}

export const UpdateChallengeInput_UpdateInput_TermUpdate = {
  encode(message: UpdateChallengeInput_UpdateInput_TermUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.terms) {
      Challenge_Term.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_TermUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_TermUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.terms.push(Challenge_Term.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_TermUpdate {
    return { terms: Array.isArray(object?.terms) ? object.terms.map((e: any) => Challenge_Term.fromJSON(e)) : [] };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_TermUpdate): unknown {
    const obj: any = {};
    if (message.terms) {
      obj.terms = message.terms.map((e) => e ? Challenge_Term.toJSON(e) : undefined);
    } else {
      obj.terms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_TermUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_TermUpdate {
    return UpdateChallengeInput_UpdateInput_TermUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_TermUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_TermUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_TermUpdate();
    message.terms = object.terms?.map((e) => Challenge_Term.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_PrizeSetUpdate(): UpdateChallengeInput_UpdateInput_PrizeSetUpdate {
  return { prizeSets: [] };
}

export const UpdateChallengeInput_UpdateInput_PrizeSetUpdate = {
  encode(
    message: UpdateChallengeInput_UpdateInput_PrizeSetUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.prizeSets) {
      Challenge_PrizeSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_PrizeSetUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_PrizeSetUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prizeSets.push(Challenge_PrizeSet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_PrizeSetUpdate {
    return {
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => Challenge_PrizeSet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_PrizeSetUpdate): unknown {
    const obj: any = {};
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) => e ? Challenge_PrizeSet.toJSON(e) : undefined);
    } else {
      obj.prizeSets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PrizeSetUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_PrizeSetUpdate {
    return UpdateChallengeInput_UpdateInput_PrizeSetUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_PrizeSetUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_PrizeSetUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_PrizeSetUpdate();
    message.prizeSets = object.prizeSets?.map((e) => Challenge_PrizeSet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_TagsUpdate(): UpdateChallengeInput_UpdateInput_TagsUpdate {
  return { tags: [] };
}

export const UpdateChallengeInput_UpdateInput_TagsUpdate = {
  encode(message: UpdateChallengeInput_UpdateInput_TagsUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_TagsUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_TagsUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_TagsUpdate {
    return { tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [] };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_TagsUpdate): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_TagsUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_TagsUpdate {
    return UpdateChallengeInput_UpdateInput_TagsUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_TagsUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_TagsUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_TagsUpdate();
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_AttachmentsUpdate(): UpdateChallengeInput_UpdateInput_AttachmentsUpdate {
  return { attachments: [] };
}

export const UpdateChallengeInput_UpdateInput_AttachmentsUpdate = {
  encode(
    message: UpdateChallengeInput_UpdateInput_AttachmentsUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.attachments) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_AttachmentsUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_AttachmentsUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attachments.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_AttachmentsUpdate {
    return { attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => String(e)) : [] };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_AttachmentsUpdate): unknown {
    const obj: any = {};
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) => e);
    } else {
      obj.attachments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_AttachmentsUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_AttachmentsUpdate {
    return UpdateChallengeInput_UpdateInput_AttachmentsUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_AttachmentsUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_AttachmentsUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_AttachmentsUpdate();
    message.attachments = object.attachments?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateChallengeInput_UpdateInput_GroupsUpdate(): UpdateChallengeInput_UpdateInput_GroupsUpdate {
  return { groups: [] };
}

export const UpdateChallengeInput_UpdateInput_GroupsUpdate = {
  encode(message: UpdateChallengeInput_UpdateInput_GroupsUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInput_UpdateInput_GroupsUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInput_UpdateInput_GroupsUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInput_UpdateInput_GroupsUpdate {
    return { groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => String(e)) : [] };
  },

  toJSON(message: UpdateChallengeInput_UpdateInput_GroupsUpdate): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e);
    } else {
      obj.groups = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_GroupsUpdate>, I>>(
    base?: I,
  ): UpdateChallengeInput_UpdateInput_GroupsUpdate {
    return UpdateChallengeInput_UpdateInput_GroupsUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput_UpdateInput_GroupsUpdate>, I>>(
    object: I,
  ): UpdateChallengeInput_UpdateInput_GroupsUpdate {
    const message = createBaseUpdateChallengeInput_UpdateInput_GroupsUpdate();
    message.groups = object.groups?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateChallengeInputForACL(): UpdateChallengeInputForACL {
  return { filterCriteria: [], updateInputForAcl: undefined };
}

export const UpdateChallengeInputForACL = {
  encode(message: UpdateChallengeInputForACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInputForAcl !== undefined) {
      UpdateChallengeInputForACL_UpdateInputForACL.encode(message.updateInputForAcl, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateInputForAcl = UpdateChallengeInputForACL_UpdateInputForACL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInputForAcl: isSet(object.updateInputForAcl)
        ? UpdateChallengeInputForACL_UpdateInputForACL.fromJSON(object.updateInputForAcl)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeInputForACL): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInputForAcl !== undefined && (obj.updateInputForAcl = message.updateInputForAcl
      ? UpdateChallengeInputForACL_UpdateInputForACL.toJSON(message.updateInputForAcl)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL>, I>>(base?: I): UpdateChallengeInputForACL {
    return UpdateChallengeInputForACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL>, I>>(object: I): UpdateChallengeInputForACL {
    const message = createBaseUpdateChallengeInputForACL();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInputForAcl = (object.updateInputForAcl !== undefined && object.updateInputForAcl !== null)
      ? UpdateChallengeInputForACL_UpdateInputForACL.fromPartial(object.updateInputForAcl)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeInputForACL_UpdateInputForACL(): UpdateChallengeInputForACL_UpdateInputForACL {
  return {
    status: undefined,
    phases: undefined,
    currentPhase: undefined,
    currentPhaseNames: undefined,
    registrationStartDate: undefined,
    registrationEndDate: undefined,
    submissionStartDate: undefined,
    submissionEndDate: undefined,
    startDate: undefined,
    endDate: undefined,
    legacy: undefined,
    prizeSets: undefined,
    overview: undefined,
    winners: undefined,
  };
}

export const UpdateChallengeInputForACL_UpdateInputForACL = {
  encode(message: UpdateChallengeInputForACL_UpdateInputForACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      writer.uint32(10).string(message.status);
    }
    if (message.phases !== undefined) {
      UpdateChallengeInputForACL_PhasesACL.encode(message.phases, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentPhase !== undefined) {
      Challenge_Phase.encode(message.currentPhase, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentPhaseNames !== undefined) {
      UpdateChallengeInputForACL_CurrentPhaseNamesACL.encode(message.currentPhaseNames, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.registrationStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.registrationStartDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.registrationEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.registrationEndDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.submissionStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.submissionStartDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.submissionEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.submissionEndDate), writer.uint32(66).fork()).ldelim();
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(74).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(82).fork()).ldelim();
    }
    if (message.legacy !== undefined) {
      UpdateChallengeInputForACL_LegacyACL.encode(message.legacy, writer.uint32(90).fork()).ldelim();
    }
    if (message.prizeSets !== undefined) {
      UpdateChallengeInputForACL_PrizeSetsACL.encode(message.prizeSets, writer.uint32(98).fork()).ldelim();
    }
    if (message.overview !== undefined) {
      Challenge_Overview.encode(message.overview, writer.uint32(106).fork()).ldelim();
    }
    if (message.winners !== undefined) {
      UpdateChallengeInputForACL_WinnersACL.encode(message.winners, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL_UpdateInputForACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL_UpdateInputForACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.phases = UpdateChallengeInputForACL_PhasesACL.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currentPhase = Challenge_Phase.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.currentPhaseNames = UpdateChallengeInputForACL_CurrentPhaseNamesACL.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.registrationStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.registrationEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.submissionStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.submissionEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.legacy = UpdateChallengeInputForACL_LegacyACL.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.prizeSets = UpdateChallengeInputForACL_PrizeSetsACL.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.overview = Challenge_Overview.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.winners = UpdateChallengeInputForACL_WinnersACL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL_UpdateInputForACL {
    return {
      status: isSet(object.status) ? String(object.status) : undefined,
      phases: isSet(object.phases) ? UpdateChallengeInputForACL_PhasesACL.fromJSON(object.phases) : undefined,
      currentPhase: isSet(object.currentPhase) ? Challenge_Phase.fromJSON(object.currentPhase) : undefined,
      currentPhaseNames: isSet(object.currentPhaseNames)
        ? UpdateChallengeInputForACL_CurrentPhaseNamesACL.fromJSON(object.currentPhaseNames)
        : undefined,
      registrationStartDate: isSet(object.registrationStartDate) ? String(object.registrationStartDate) : undefined,
      registrationEndDate: isSet(object.registrationEndDate) ? String(object.registrationEndDate) : undefined,
      submissionStartDate: isSet(object.submissionStartDate) ? String(object.submissionStartDate) : undefined,
      submissionEndDate: isSet(object.submissionEndDate) ? String(object.submissionEndDate) : undefined,
      startDate: isSet(object.startDate) ? String(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? String(object.endDate) : undefined,
      legacy: isSet(object.legacy) ? UpdateChallengeInputForACL_LegacyACL.fromJSON(object.legacy) : undefined,
      prizeSets: isSet(object.prizeSets)
        ? UpdateChallengeInputForACL_PrizeSetsACL.fromJSON(object.prizeSets)
        : undefined,
      overview: isSet(object.overview) ? Challenge_Overview.fromJSON(object.overview) : undefined,
      winners: isSet(object.winners) ? UpdateChallengeInputForACL_WinnersACL.fromJSON(object.winners) : undefined,
    };
  },

  toJSON(message: UpdateChallengeInputForACL_UpdateInputForACL): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.phases !== undefined &&
      (obj.phases = message.phases ? UpdateChallengeInputForACL_PhasesACL.toJSON(message.phases) : undefined);
    message.currentPhase !== undefined &&
      (obj.currentPhase = message.currentPhase ? Challenge_Phase.toJSON(message.currentPhase) : undefined);
    message.currentPhaseNames !== undefined && (obj.currentPhaseNames = message.currentPhaseNames
      ? UpdateChallengeInputForACL_CurrentPhaseNamesACL.toJSON(message.currentPhaseNames)
      : undefined);
    message.registrationStartDate !== undefined && (obj.registrationStartDate = message.registrationStartDate);
    message.registrationEndDate !== undefined && (obj.registrationEndDate = message.registrationEndDate);
    message.submissionStartDate !== undefined && (obj.submissionStartDate = message.submissionStartDate);
    message.submissionEndDate !== undefined && (obj.submissionEndDate = message.submissionEndDate);
    message.startDate !== undefined && (obj.startDate = message.startDate);
    message.endDate !== undefined && (obj.endDate = message.endDate);
    message.legacy !== undefined &&
      (obj.legacy = message.legacy ? UpdateChallengeInputForACL_LegacyACL.toJSON(message.legacy) : undefined);
    message.prizeSets !== undefined &&
      (obj.prizeSets = message.prizeSets
        ? UpdateChallengeInputForACL_PrizeSetsACL.toJSON(message.prizeSets)
        : undefined);
    message.overview !== undefined &&
      (obj.overview = message.overview ? Challenge_Overview.toJSON(message.overview) : undefined);
    message.winners !== undefined &&
      (obj.winners = message.winners ? UpdateChallengeInputForACL_WinnersACL.toJSON(message.winners) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL_UpdateInputForACL>, I>>(
    base?: I,
  ): UpdateChallengeInputForACL_UpdateInputForACL {
    return UpdateChallengeInputForACL_UpdateInputForACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL_UpdateInputForACL>, I>>(
    object: I,
  ): UpdateChallengeInputForACL_UpdateInputForACL {
    const message = createBaseUpdateChallengeInputForACL_UpdateInputForACL();
    message.status = object.status ?? undefined;
    message.phases = (object.phases !== undefined && object.phases !== null)
      ? UpdateChallengeInputForACL_PhasesACL.fromPartial(object.phases)
      : undefined;
    message.currentPhase = (object.currentPhase !== undefined && object.currentPhase !== null)
      ? Challenge_Phase.fromPartial(object.currentPhase)
      : undefined;
    message.currentPhaseNames = (object.currentPhaseNames !== undefined && object.currentPhaseNames !== null)
      ? UpdateChallengeInputForACL_CurrentPhaseNamesACL.fromPartial(object.currentPhaseNames)
      : undefined;
    message.registrationStartDate = object.registrationStartDate ?? undefined;
    message.registrationEndDate = object.registrationEndDate ?? undefined;
    message.submissionStartDate = object.submissionStartDate ?? undefined;
    message.submissionEndDate = object.submissionEndDate ?? undefined;
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.legacy = (object.legacy !== undefined && object.legacy !== null)
      ? UpdateChallengeInputForACL_LegacyACL.fromPartial(object.legacy)
      : undefined;
    message.prizeSets = (object.prizeSets !== undefined && object.prizeSets !== null)
      ? UpdateChallengeInputForACL_PrizeSetsACL.fromPartial(object.prizeSets)
      : undefined;
    message.overview = (object.overview !== undefined && object.overview !== null)
      ? Challenge_Overview.fromPartial(object.overview)
      : undefined;
    message.winners = (object.winners !== undefined && object.winners !== null)
      ? UpdateChallengeInputForACL_WinnersACL.fromPartial(object.winners)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeInputForACL_PhasesACL(): UpdateChallengeInputForACL_PhasesACL {
  return { phases: [] };
}

export const UpdateChallengeInputForACL_PhasesACL = {
  encode(message: UpdateChallengeInputForACL_PhasesACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.phases) {
      Challenge_Phase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL_PhasesACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL_PhasesACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phases.push(Challenge_Phase.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL_PhasesACL {
    return { phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => Challenge_Phase.fromJSON(e)) : [] };
  },

  toJSON(message: UpdateChallengeInputForACL_PhasesACL): unknown {
    const obj: any = {};
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? Challenge_Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL_PhasesACL>, I>>(
    base?: I,
  ): UpdateChallengeInputForACL_PhasesACL {
    return UpdateChallengeInputForACL_PhasesACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL_PhasesACL>, I>>(
    object: I,
  ): UpdateChallengeInputForACL_PhasesACL {
    const message = createBaseUpdateChallengeInputForACL_PhasesACL();
    message.phases = object.phases?.map((e) => Challenge_Phase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInputForACL_CurrentPhaseNamesACL(): UpdateChallengeInputForACL_CurrentPhaseNamesACL {
  return { currentPhaseNames: [] };
}

export const UpdateChallengeInputForACL_CurrentPhaseNamesACL = {
  encode(
    message: UpdateChallengeInputForACL_CurrentPhaseNamesACL,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.currentPhaseNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL_CurrentPhaseNamesACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL_CurrentPhaseNamesACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currentPhaseNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL_CurrentPhaseNamesACL {
    return {
      currentPhaseNames: Array.isArray(object?.currentPhaseNames)
        ? object.currentPhaseNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: UpdateChallengeInputForACL_CurrentPhaseNamesACL): unknown {
    const obj: any = {};
    if (message.currentPhaseNames) {
      obj.currentPhaseNames = message.currentPhaseNames.map((e) => e);
    } else {
      obj.currentPhaseNames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL_CurrentPhaseNamesACL>, I>>(
    base?: I,
  ): UpdateChallengeInputForACL_CurrentPhaseNamesACL {
    return UpdateChallengeInputForACL_CurrentPhaseNamesACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL_CurrentPhaseNamesACL>, I>>(
    object: I,
  ): UpdateChallengeInputForACL_CurrentPhaseNamesACL {
    const message = createBaseUpdateChallengeInputForACL_CurrentPhaseNamesACL();
    message.currentPhaseNames = object.currentPhaseNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateChallengeInputForACL_LegacyACL(): UpdateChallengeInputForACL_LegacyACL {
  return { reviewScorecardId: undefined, screeningScorecardId: undefined };
}

export const UpdateChallengeInputForACL_LegacyACL = {
  encode(message: UpdateChallengeInputForACL_LegacyACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewScorecardId !== undefined) {
      writer.uint32(8).int32(message.reviewScorecardId);
    }
    if (message.screeningScorecardId !== undefined) {
      writer.uint32(16).int32(message.screeningScorecardId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL_LegacyACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL_LegacyACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reviewScorecardId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.screeningScorecardId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL_LegacyACL {
    return {
      reviewScorecardId: isSet(object.reviewScorecardId) ? Number(object.reviewScorecardId) : undefined,
      screeningScorecardId: isSet(object.screeningScorecardId) ? Number(object.screeningScorecardId) : undefined,
    };
  },

  toJSON(message: UpdateChallengeInputForACL_LegacyACL): unknown {
    const obj: any = {};
    message.reviewScorecardId !== undefined && (obj.reviewScorecardId = Math.round(message.reviewScorecardId));
    message.screeningScorecardId !== undefined && (obj.screeningScorecardId = Math.round(message.screeningScorecardId));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL_LegacyACL>, I>>(
    base?: I,
  ): UpdateChallengeInputForACL_LegacyACL {
    return UpdateChallengeInputForACL_LegacyACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL_LegacyACL>, I>>(
    object: I,
  ): UpdateChallengeInputForACL_LegacyACL {
    const message = createBaseUpdateChallengeInputForACL_LegacyACL();
    message.reviewScorecardId = object.reviewScorecardId ?? undefined;
    message.screeningScorecardId = object.screeningScorecardId ?? undefined;
    return message;
  },
};

function createBaseUpdateChallengeInputForACL_PrizeSetsACL(): UpdateChallengeInputForACL_PrizeSetsACL {
  return { prizeSets: [] };
}

export const UpdateChallengeInputForACL_PrizeSetsACL = {
  encode(message: UpdateChallengeInputForACL_PrizeSetsACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prizeSets) {
      Challenge_PrizeSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL_PrizeSetsACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL_PrizeSetsACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prizeSets.push(Challenge_PrizeSet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL_PrizeSetsACL {
    return {
      prizeSets: Array.isArray(object?.prizeSets)
        ? object.prizeSets.map((e: any) => Challenge_PrizeSet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateChallengeInputForACL_PrizeSetsACL): unknown {
    const obj: any = {};
    if (message.prizeSets) {
      obj.prizeSets = message.prizeSets.map((e) => e ? Challenge_PrizeSet.toJSON(e) : undefined);
    } else {
      obj.prizeSets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL_PrizeSetsACL>, I>>(
    base?: I,
  ): UpdateChallengeInputForACL_PrizeSetsACL {
    return UpdateChallengeInputForACL_PrizeSetsACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL_PrizeSetsACL>, I>>(
    object: I,
  ): UpdateChallengeInputForACL_PrizeSetsACL {
    const message = createBaseUpdateChallengeInputForACL_PrizeSetsACL();
    message.prizeSets = object.prizeSets?.map((e) => Challenge_PrizeSet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInputForACL_WinnersACL(): UpdateChallengeInputForACL_WinnersACL {
  return { winners: [] };
}

export const UpdateChallengeInputForACL_WinnersACL = {
  encode(message: UpdateChallengeInputForACL_WinnersACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.winners) {
      UpdateChallengeInputForACL_WinnerACL.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL_WinnersACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL_WinnersACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.winners.push(UpdateChallengeInputForACL_WinnerACL.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL_WinnersACL {
    return {
      winners: Array.isArray(object?.winners)
        ? object.winners.map((e: any) => UpdateChallengeInputForACL_WinnerACL.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateChallengeInputForACL_WinnersACL): unknown {
    const obj: any = {};
    if (message.winners) {
      obj.winners = message.winners.map((e) => e ? UpdateChallengeInputForACL_WinnerACL.toJSON(e) : undefined);
    } else {
      obj.winners = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL_WinnersACL>, I>>(
    base?: I,
  ): UpdateChallengeInputForACL_WinnersACL {
    return UpdateChallengeInputForACL_WinnersACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL_WinnersACL>, I>>(
    object: I,
  ): UpdateChallengeInputForACL_WinnersACL {
    const message = createBaseUpdateChallengeInputForACL_WinnersACL();
    message.winners = object.winners?.map((e) => UpdateChallengeInputForACL_WinnerACL.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateChallengeInputForACL_WinnerACL(): UpdateChallengeInputForACL_WinnerACL {
  return { handle: "", placement: 0 };
}

export const UpdateChallengeInputForACL_WinnerACL = {
  encode(message: UpdateChallengeInputForACL_WinnerACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.handle !== "") {
      writer.uint32(10).string(message.handle);
    }
    if (message.placement !== 0) {
      writer.uint32(16).int32(message.placement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeInputForACL_WinnerACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeInputForACL_WinnerACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.handle = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.placement = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeInputForACL_WinnerACL {
    return {
      handle: isSet(object.handle) ? String(object.handle) : "",
      placement: isSet(object.placement) ? Number(object.placement) : 0,
    };
  },

  toJSON(message: UpdateChallengeInputForACL_WinnerACL): unknown {
    const obj: any = {};
    message.handle !== undefined && (obj.handle = message.handle);
    message.placement !== undefined && (obj.placement = Math.round(message.placement));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInputForACL_WinnerACL>, I>>(
    base?: I,
  ): UpdateChallengeInputForACL_WinnerACL {
    return UpdateChallengeInputForACL_WinnerACL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInputForACL_WinnerACL>, I>>(
    object: I,
  ): UpdateChallengeInputForACL_WinnerACL {
    const message = createBaseUpdateChallengeInputForACL_WinnerACL();
    message.handle = object.handle ?? "";
    message.placement = object.placement ?? 0;
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
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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
