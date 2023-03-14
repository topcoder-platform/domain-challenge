/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface LegacyChallenge {
  projectId: number;
  projectStatusId: number;
  projectCategoryId: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
  tcDirectProjectId: number;
}

export interface LegacyChallengeId {
  legacyChallengeId: number;
}

export interface LegacyChallengeList {
  legacyChallenges: LegacyChallenge[];
}

export interface CreateChallengeInput {
  name: string;
  projectStatusId: number;
  projectCategoryId: number;
  projectStudioSpecId?: number | undefined;
  projectMmSpecId?: number | undefined;
  tcDirectProjectId: number;
  winnerPrizes: CreateChallengeInput_Prize[];
  reviewType?: string | undefined;
  confidentialityType: string;
  billingProject: number;
  projectInfo: { [key: number]: string };
  phases: CreateChallengeInput_Phase[];
}

export interface CreateChallengeInput_ProjectInfoEntry {
  key: number;
  value: string;
}

export interface CreateChallengeInput_Prize {
  place: number;
  amount: number;
  type: string;
  numSubmissions: number;
}

export interface CreateChallengeInput_Phase {
  phaseTypeId: number;
  phaseStatusId: number;
  fixedStartTime?: string | undefined;
  scheduledStartTime: string;
  scheduledEndTime: string;
  actualStartTime?: string | undefined;
  actualEndTime?: string | undefined;
  duration: number;
  phaseCriteria: { [key: number]: string };
}

export interface CreateChallengeInput_Phase_PhaseCriteriaEntry {
  key: number;
  value: string;
}

export interface UpdateChallengeInput {
  projectId: number;
  projectStatusId: number;
}

export interface CloseChallengeInput {
  projectId: number;
  winnerId: number;
}

function createBaseLegacyChallenge(): LegacyChallenge {
  return {
    projectId: 0,
    projectStatusId: 0,
    projectCategoryId: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
    tcDirectProjectId: 0,
  };
}

export const LegacyChallenge = {
  encode(message: LegacyChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectStatusId !== 0) {
      writer.uint32(16).int32(message.projectStatusId);
    }
    if (message.projectCategoryId !== 0) {
      writer.uint32(24).int32(message.projectCategoryId);
    }
    if (message.createUser !== 0) {
      writer.uint32(32).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(40).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(56).int64(message.modifyDate);
    }
    if (message.tcDirectProjectId !== 0) {
      writer.uint32(64).int64(message.tcDirectProjectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectStatusId = reader.int32();
          break;
        case 3:
          message.projectCategoryId = reader.int32();
          break;
        case 4:
          message.createUser = reader.int32();
          break;
        case 5:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.modifyUser = reader.int32();
          break;
        case 7:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.tcDirectProjectId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallenge {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectStatusId: isSet(object.projectStatusId) ? Number(object.projectStatusId) : 0,
      projectCategoryId: isSet(object.projectCategoryId) ? Number(object.projectCategoryId) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
      tcDirectProjectId: isSet(object.tcDirectProjectId) ? Number(object.tcDirectProjectId) : 0,
    };
  },

  toJSON(message: LegacyChallenge): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectStatusId !== undefined && (obj.projectStatusId = Math.round(message.projectStatusId));
    message.projectCategoryId !== undefined && (obj.projectCategoryId = Math.round(message.projectCategoryId));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    message.tcDirectProjectId !== undefined && (obj.tcDirectProjectId = Math.round(message.tcDirectProjectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyChallenge>, I>>(base?: I): LegacyChallenge {
    return LegacyChallenge.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallenge>, I>>(object: I): LegacyChallenge {
    const message = createBaseLegacyChallenge();
    message.projectId = object.projectId ?? 0;
    message.projectStatusId = object.projectStatusId ?? 0;
    message.projectCategoryId = object.projectCategoryId ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    message.tcDirectProjectId = object.tcDirectProjectId ?? 0;
    return message;
  },
};

function createBaseLegacyChallengeId(): LegacyChallengeId {
  return { legacyChallengeId: 0 };
}

export const LegacyChallengeId = {
  encode(message: LegacyChallengeId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyChallengeId !== 0) {
      writer.uint32(8).int32(message.legacyChallengeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyChallengeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeId {
    return { legacyChallengeId: isSet(object.legacyChallengeId) ? Number(object.legacyChallengeId) : 0 };
  },

  toJSON(message: LegacyChallengeId): unknown {
    const obj: any = {};
    message.legacyChallengeId !== undefined && (obj.legacyChallengeId = Math.round(message.legacyChallengeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyChallengeId>, I>>(base?: I): LegacyChallengeId {
    return LegacyChallengeId.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeId>, I>>(object: I): LegacyChallengeId {
    const message = createBaseLegacyChallengeId();
    message.legacyChallengeId = object.legacyChallengeId ?? 0;
    return message;
  },
};

function createBaseLegacyChallengeList(): LegacyChallengeList {
  return { legacyChallenges: [] };
}

export const LegacyChallengeList = {
  encode(message: LegacyChallengeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.legacyChallenges) {
      LegacyChallenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyChallenges.push(LegacyChallenge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeList {
    return {
      legacyChallenges: Array.isArray(object?.legacyChallenges)
        ? object.legacyChallenges.map((e: any) => LegacyChallenge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LegacyChallengeList): unknown {
    const obj: any = {};
    if (message.legacyChallenges) {
      obj.legacyChallenges = message.legacyChallenges.map((e) => e ? LegacyChallenge.toJSON(e) : undefined);
    } else {
      obj.legacyChallenges = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyChallengeList>, I>>(base?: I): LegacyChallengeList {
    return LegacyChallengeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeList>, I>>(object: I): LegacyChallengeList {
    const message = createBaseLegacyChallengeList();
    message.legacyChallenges = object.legacyChallenges?.map((e) => LegacyChallenge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeInput(): CreateChallengeInput {
  return {
    name: "",
    projectStatusId: 0,
    projectCategoryId: 0,
    projectStudioSpecId: undefined,
    projectMmSpecId: undefined,
    tcDirectProjectId: 0,
    winnerPrizes: [],
    reviewType: undefined,
    confidentialityType: "",
    billingProject: 0,
    projectInfo: {},
    phases: [],
  };
}

export const CreateChallengeInput = {
  encode(message: CreateChallengeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.projectStatusId !== 0) {
      writer.uint32(16).int32(message.projectStatusId);
    }
    if (message.projectCategoryId !== 0) {
      writer.uint32(24).int32(message.projectCategoryId);
    }
    if (message.projectStudioSpecId !== undefined) {
      writer.uint32(32).int32(message.projectStudioSpecId);
    }
    if (message.projectMmSpecId !== undefined) {
      writer.uint32(40).int32(message.projectMmSpecId);
    }
    if (message.tcDirectProjectId !== 0) {
      writer.uint32(48).int64(message.tcDirectProjectId);
    }
    for (const v of message.winnerPrizes) {
      CreateChallengeInput_Prize.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.reviewType !== undefined) {
      writer.uint32(66).string(message.reviewType);
    }
    if (message.confidentialityType !== "") {
      writer.uint32(74).string(message.confidentialityType);
    }
    if (message.billingProject !== 0) {
      writer.uint32(80).int32(message.billingProject);
    }
    Object.entries(message.projectInfo).forEach(([key, value]) => {
      CreateChallengeInput_ProjectInfoEntry.encode({ key: key as any, value }, writer.uint32(90).fork()).ldelim();
    });
    for (const v of message.phases) {
      CreateChallengeInput_Phase.encode(v!, writer.uint32(106).fork()).ldelim();
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
          message.projectStatusId = reader.int32();
          break;
        case 3:
          message.projectCategoryId = reader.int32();
          break;
        case 4:
          message.projectStudioSpecId = reader.int32();
          break;
        case 5:
          message.projectMmSpecId = reader.int32();
          break;
        case 6:
          message.tcDirectProjectId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.winnerPrizes.push(CreateChallengeInput_Prize.decode(reader, reader.uint32()));
          break;
        case 8:
          message.reviewType = reader.string();
          break;
        case 9:
          message.confidentialityType = reader.string();
          break;
        case 10:
          message.billingProject = reader.int32();
          break;
        case 11:
          const entry11 = CreateChallengeInput_ProjectInfoEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.projectInfo[entry11.key] = entry11.value;
          }
          break;
        case 13:
          message.phases.push(CreateChallengeInput_Phase.decode(reader, reader.uint32()));
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
      projectStatusId: isSet(object.projectStatusId) ? Number(object.projectStatusId) : 0,
      projectCategoryId: isSet(object.projectCategoryId) ? Number(object.projectCategoryId) : 0,
      projectStudioSpecId: isSet(object.projectStudioSpecId) ? Number(object.projectStudioSpecId) : undefined,
      projectMmSpecId: isSet(object.projectMmSpecId) ? Number(object.projectMmSpecId) : undefined,
      tcDirectProjectId: isSet(object.tcDirectProjectId) ? Number(object.tcDirectProjectId) : 0,
      winnerPrizes: Array.isArray(object?.winnerPrizes)
        ? object.winnerPrizes.map((e: any) => CreateChallengeInput_Prize.fromJSON(e))
        : [],
      reviewType: isSet(object.reviewType) ? String(object.reviewType) : undefined,
      confidentialityType: isSet(object.confidentialityType) ? String(object.confidentialityType) : "",
      billingProject: isSet(object.billingProject) ? Number(object.billingProject) : 0,
      projectInfo: isObject(object.projectInfo)
        ? Object.entries(object.projectInfo).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[Number(key)] = String(value);
          return acc;
        }, {})
        : {},
      phases: Array.isArray(object?.phases)
        ? object.phases.map((e: any) => CreateChallengeInput_Phase.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateChallengeInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.projectStatusId !== undefined && (obj.projectStatusId = Math.round(message.projectStatusId));
    message.projectCategoryId !== undefined && (obj.projectCategoryId = Math.round(message.projectCategoryId));
    message.projectStudioSpecId !== undefined && (obj.projectStudioSpecId = Math.round(message.projectStudioSpecId));
    message.projectMmSpecId !== undefined && (obj.projectMmSpecId = Math.round(message.projectMmSpecId));
    message.tcDirectProjectId !== undefined && (obj.tcDirectProjectId = Math.round(message.tcDirectProjectId));
    if (message.winnerPrizes) {
      obj.winnerPrizes = message.winnerPrizes.map((e) => e ? CreateChallengeInput_Prize.toJSON(e) : undefined);
    } else {
      obj.winnerPrizes = [];
    }
    message.reviewType !== undefined && (obj.reviewType = message.reviewType);
    message.confidentialityType !== undefined && (obj.confidentialityType = message.confidentialityType);
    message.billingProject !== undefined && (obj.billingProject = Math.round(message.billingProject));
    obj.projectInfo = {};
    if (message.projectInfo) {
      Object.entries(message.projectInfo).forEach(([k, v]) => {
        obj.projectInfo[k] = v;
      });
    }
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? CreateChallengeInput_Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput>, I>>(base?: I): CreateChallengeInput {
    return CreateChallengeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput>, I>>(object: I): CreateChallengeInput {
    const message = createBaseCreateChallengeInput();
    message.name = object.name ?? "";
    message.projectStatusId = object.projectStatusId ?? 0;
    message.projectCategoryId = object.projectCategoryId ?? 0;
    message.projectStudioSpecId = object.projectStudioSpecId ?? undefined;
    message.projectMmSpecId = object.projectMmSpecId ?? undefined;
    message.tcDirectProjectId = object.tcDirectProjectId ?? 0;
    message.winnerPrizes = object.winnerPrizes?.map((e) => CreateChallengeInput_Prize.fromPartial(e)) || [];
    message.reviewType = object.reviewType ?? undefined;
    message.confidentialityType = object.confidentialityType ?? "";
    message.billingProject = object.billingProject ?? 0;
    message.projectInfo = Object.entries(object.projectInfo ?? {}).reduce<{ [key: number]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = String(value);
        }
        return acc;
      },
      {},
    );
    message.phases = object.phases?.map((e) => CreateChallengeInput_Phase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeInput_ProjectInfoEntry(): CreateChallengeInput_ProjectInfoEntry {
  return { key: 0, value: "" };
}

export const CreateChallengeInput_ProjectInfoEntry = {
  encode(message: CreateChallengeInput_ProjectInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).sint32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeInput_ProjectInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput_ProjectInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.sint32();
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

  fromJSON(object: any): CreateChallengeInput_ProjectInfoEntry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateChallengeInput_ProjectInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput_ProjectInfoEntry>, I>>(
    base?: I,
  ): CreateChallengeInput_ProjectInfoEntry {
    return CreateChallengeInput_ProjectInfoEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput_ProjectInfoEntry>, I>>(
    object: I,
  ): CreateChallengeInput_ProjectInfoEntry {
    const message = createBaseCreateChallengeInput_ProjectInfoEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCreateChallengeInput_Prize(): CreateChallengeInput_Prize {
  return { place: 0, amount: 0, type: "", numSubmissions: 0 };
}

export const CreateChallengeInput_Prize = {
  encode(message: CreateChallengeInput_Prize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== 0) {
      writer.uint32(8).int32(message.place);
    }
    if (message.amount !== 0) {
      writer.uint32(21).float(message.amount);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.numSubmissions !== 0) {
      writer.uint32(32).int32(message.numSubmissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeInput_Prize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput_Prize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.place = reader.int32();
          break;
        case 2:
          message.amount = reader.float();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.numSubmissions = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeInput_Prize {
    return {
      place: isSet(object.place) ? Number(object.place) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      numSubmissions: isSet(object.numSubmissions) ? Number(object.numSubmissions) : 0,
    };
  },

  toJSON(message: CreateChallengeInput_Prize): unknown {
    const obj: any = {};
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.amount !== undefined && (obj.amount = message.amount);
    message.type !== undefined && (obj.type = message.type);
    message.numSubmissions !== undefined && (obj.numSubmissions = Math.round(message.numSubmissions));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput_Prize>, I>>(base?: I): CreateChallengeInput_Prize {
    return CreateChallengeInput_Prize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput_Prize>, I>>(object: I): CreateChallengeInput_Prize {
    const message = createBaseCreateChallengeInput_Prize();
    message.place = object.place ?? 0;
    message.amount = object.amount ?? 0;
    message.type = object.type ?? "";
    message.numSubmissions = object.numSubmissions ?? 0;
    return message;
  },
};

function createBaseCreateChallengeInput_Phase(): CreateChallengeInput_Phase {
  return {
    phaseTypeId: 0,
    phaseStatusId: 0,
    fixedStartTime: undefined,
    scheduledStartTime: "",
    scheduledEndTime: "",
    actualStartTime: undefined,
    actualEndTime: undefined,
    duration: 0,
    phaseCriteria: {},
  };
}

export const CreateChallengeInput_Phase = {
  encode(message: CreateChallengeInput_Phase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phaseTypeId !== 0) {
      writer.uint32(8).sint32(message.phaseTypeId);
    }
    if (message.phaseStatusId !== 0) {
      writer.uint32(16).sint32(message.phaseStatusId);
    }
    if (message.fixedStartTime !== undefined) {
      writer.uint32(26).string(message.fixedStartTime);
    }
    if (message.scheduledStartTime !== "") {
      writer.uint32(34).string(message.scheduledStartTime);
    }
    if (message.scheduledEndTime !== "") {
      writer.uint32(42).string(message.scheduledEndTime);
    }
    if (message.actualStartTime !== undefined) {
      writer.uint32(50).string(message.actualStartTime);
    }
    if (message.actualEndTime !== undefined) {
      writer.uint32(58).string(message.actualEndTime);
    }
    if (message.duration !== 0) {
      writer.uint32(64).int32(message.duration);
    }
    Object.entries(message.phaseCriteria).forEach(([key, value]) => {
      CreateChallengeInput_Phase_PhaseCriteriaEntry.encode({ key: key as any, value }, writer.uint32(74).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeInput_Phase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput_Phase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phaseTypeId = reader.sint32();
          break;
        case 2:
          message.phaseStatusId = reader.sint32();
          break;
        case 3:
          message.fixedStartTime = reader.string();
          break;
        case 4:
          message.scheduledStartTime = reader.string();
          break;
        case 5:
          message.scheduledEndTime = reader.string();
          break;
        case 6:
          message.actualStartTime = reader.string();
          break;
        case 7:
          message.actualEndTime = reader.string();
          break;
        case 8:
          message.duration = reader.int32();
          break;
        case 9:
          const entry9 = CreateChallengeInput_Phase_PhaseCriteriaEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.phaseCriteria[entry9.key] = entry9.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeInput_Phase {
    return {
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : 0,
      phaseStatusId: isSet(object.phaseStatusId) ? Number(object.phaseStatusId) : 0,
      fixedStartTime: isSet(object.fixedStartTime) ? String(object.fixedStartTime) : undefined,
      scheduledStartTime: isSet(object.scheduledStartTime) ? String(object.scheduledStartTime) : "",
      scheduledEndTime: isSet(object.scheduledEndTime) ? String(object.scheduledEndTime) : "",
      actualStartTime: isSet(object.actualStartTime) ? String(object.actualStartTime) : undefined,
      actualEndTime: isSet(object.actualEndTime) ? String(object.actualEndTime) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      phaseCriteria: isObject(object.phaseCriteria)
        ? Object.entries(object.phaseCriteria).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[Number(key)] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateChallengeInput_Phase): unknown {
    const obj: any = {};
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    message.phaseStatusId !== undefined && (obj.phaseStatusId = Math.round(message.phaseStatusId));
    message.fixedStartTime !== undefined && (obj.fixedStartTime = message.fixedStartTime);
    message.scheduledStartTime !== undefined && (obj.scheduledStartTime = message.scheduledStartTime);
    message.scheduledEndTime !== undefined && (obj.scheduledEndTime = message.scheduledEndTime);
    message.actualStartTime !== undefined && (obj.actualStartTime = message.actualStartTime);
    message.actualEndTime !== undefined && (obj.actualEndTime = message.actualEndTime);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    obj.phaseCriteria = {};
    if (message.phaseCriteria) {
      Object.entries(message.phaseCriteria).forEach(([k, v]) => {
        obj.phaseCriteria[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput_Phase>, I>>(base?: I): CreateChallengeInput_Phase {
    return CreateChallengeInput_Phase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput_Phase>, I>>(object: I): CreateChallengeInput_Phase {
    const message = createBaseCreateChallengeInput_Phase();
    message.phaseTypeId = object.phaseTypeId ?? 0;
    message.phaseStatusId = object.phaseStatusId ?? 0;
    message.fixedStartTime = object.fixedStartTime ?? undefined;
    message.scheduledStartTime = object.scheduledStartTime ?? "";
    message.scheduledEndTime = object.scheduledEndTime ?? "";
    message.actualStartTime = object.actualStartTime ?? undefined;
    message.actualEndTime = object.actualEndTime ?? undefined;
    message.duration = object.duration ?? 0;
    message.phaseCriteria = Object.entries(object.phaseCriteria ?? {}).reduce<{ [key: number]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseCreateChallengeInput_Phase_PhaseCriteriaEntry(): CreateChallengeInput_Phase_PhaseCriteriaEntry {
  return { key: 0, value: "" };
}

export const CreateChallengeInput_Phase_PhaseCriteriaEntry = {
  encode(message: CreateChallengeInput_Phase_PhaseCriteriaEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).sint32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeInput_Phase_PhaseCriteriaEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeInput_Phase_PhaseCriteriaEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.sint32();
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

  fromJSON(object: any): CreateChallengeInput_Phase_PhaseCriteriaEntry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateChallengeInput_Phase_PhaseCriteriaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeInput_Phase_PhaseCriteriaEntry>, I>>(
    base?: I,
  ): CreateChallengeInput_Phase_PhaseCriteriaEntry {
    return CreateChallengeInput_Phase_PhaseCriteriaEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeInput_Phase_PhaseCriteriaEntry>, I>>(
    object: I,
  ): CreateChallengeInput_Phase_PhaseCriteriaEntry {
    const message = createBaseCreateChallengeInput_Phase_PhaseCriteriaEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpdateChallengeInput(): UpdateChallengeInput {
  return { projectId: 0, projectStatusId: 0 };
}

export const UpdateChallengeInput = {
  encode(message: UpdateChallengeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectStatusId !== 0) {
      writer.uint32(16).int32(message.projectStatusId);
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
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectStatusId = reader.int32();
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
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectStatusId: isSet(object.projectStatusId) ? Number(object.projectStatusId) : 0,
    };
  },

  toJSON(message: UpdateChallengeInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectStatusId !== undefined && (obj.projectStatusId = Math.round(message.projectStatusId));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeInput>, I>>(base?: I): UpdateChallengeInput {
    return UpdateChallengeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeInput>, I>>(object: I): UpdateChallengeInput {
    const message = createBaseUpdateChallengeInput();
    message.projectId = object.projectId ?? 0;
    message.projectStatusId = object.projectStatusId ?? 0;
    return message;
  },
};

function createBaseCloseChallengeInput(): CloseChallengeInput {
  return { projectId: 0, winnerId: 0 };
}

export const CloseChallengeInput = {
  encode(message: CloseChallengeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.winnerId !== 0) {
      writer.uint32(16).int32(message.winnerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseChallengeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseChallengeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.winnerId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CloseChallengeInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      winnerId: isSet(object.winnerId) ? Number(object.winnerId) : 0,
    };
  },

  toJSON(message: CloseChallengeInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.winnerId !== undefined && (obj.winnerId = Math.round(message.winnerId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CloseChallengeInput>, I>>(base?: I): CloseChallengeInput {
    return CloseChallengeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CloseChallengeInput>, I>>(object: I): CloseChallengeInput {
    const message = createBaseCloseChallengeInput();
    message.projectId = object.projectId ?? 0;
    message.winnerId = object.winnerId ?? 0;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
