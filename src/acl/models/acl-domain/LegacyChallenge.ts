/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface LegacyChallenge {
  projectId: number;
  projectStatusId: number;
  projectCategoryId: number;
  createUser: number;
  createDate: string;
  modifyUser: number;
  modifyDate: string;
  tcDirectProjectId: number;
  projectStudioSpecId: number;
  projectMmSpecId: number;
  projectSubCategoryId: number;
}

export interface LegacyChallengeList {
  legacyChallenges: LegacyChallenge[];
}

export interface LegacyChallengeId {
  legacyChallengeId: number;
}

export interface LegacyChallengeInfo {
  projectId: number;
  projectInfoTypeId: number;
  value: string;
  createUser: number;
  createDate: string;
  modifyUser: number;
  modifyDate: string;
}

export interface LegacyChallengeInfoList {
  legacyChallengeInfos: LegacyChallengeInfo[];
}

export interface LegacyChallengeInfoType {
  projectInfoTypeId: number;
  name: string;
  description: string;
  createUser: number;
  createDate: string;
  modifyUser: number;
  modifyDate: string;
}

export interface LegacyChallengeInfoTypeList {
  legacyChallengeInfoTypes: LegacyChallengeInfoType[];
}

export interface LegacyChallengePhase {
  projectPhaseId: number;
  projectId?: number | undefined;
  phaseTypeId?: number | undefined;
  name?: string | undefined;
  phaseStatusId: number;
  scheduledStartTime?: string | undefined;
  scheduledEndTime?: string | undefined;
  actualStartTime?: string | undefined;
  actualEndTime?: string | undefined;
  fixedStartTime?: string | undefined;
  duration?: number | undefined;
  createUser?: number | undefined;
  createDate?: string | undefined;
  modifyUser?: number | undefined;
  modifyDate?: string | undefined;
}

export interface LegacyChallengePhaseList {
  legacyChallengePhases: LegacyChallengePhase[];
}

export interface LegacyChallengeInfoRequest {
  legacyChallengeId: number;
  infoKey: string;
  infoValue: string;
}

export interface LegacyChallengeInfoAudit {
  projectId: number;
  projectInfoTypeId: number;
  value: string;
  auditActionTypeId: number;
  actionDate: string;
  actionUser: number;
}

function createBaseLegacyChallenge(): LegacyChallenge {
  return {
    projectId: 0,
    projectStatusId: 0,
    projectCategoryId: 0,
    createUser: 0,
    createDate: "",
    modifyUser: 0,
    modifyDate: "",
    tcDirectProjectId: 0,
    projectStudioSpecId: 0,
    projectMmSpecId: 0,
    projectSubCategoryId: 0,
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
    if (message.createDate !== "") {
      writer.uint32(42).string(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== "") {
      writer.uint32(58).string(message.modifyDate);
    }
    if (message.tcDirectProjectId !== 0) {
      writer.uint32(64).int64(message.tcDirectProjectId);
    }
    if (message.projectStudioSpecId !== 0) {
      writer.uint32(72).int64(message.projectStudioSpecId);
    }
    if (message.projectMmSpecId !== 0) {
      writer.uint32(80).int64(message.projectMmSpecId);
    }
    if (message.projectSubCategoryId !== 0) {
      writer.uint32(88).int64(message.projectSubCategoryId);
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
          message.createDate = reader.string();
          break;
        case 6:
          message.modifyUser = reader.int32();
          break;
        case 7:
          message.modifyDate = reader.string();
          break;
        case 8:
          message.tcDirectProjectId = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.projectStudioSpecId = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.projectMmSpecId = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.projectSubCategoryId = longToNumber(reader.int64() as Long);
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
      createDate: isSet(object.createDate) ? String(object.createDate) : "",
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : "",
      tcDirectProjectId: isSet(object.tcDirectProjectId) ? Number(object.tcDirectProjectId) : 0,
      projectStudioSpecId: isSet(object.projectStudioSpecId) ? Number(object.projectStudioSpecId) : 0,
      projectMmSpecId: isSet(object.projectMmSpecId) ? Number(object.projectMmSpecId) : 0,
      projectSubCategoryId: isSet(object.projectSubCategoryId) ? Number(object.projectSubCategoryId) : 0,
    };
  },

  toJSON(message: LegacyChallenge): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectStatusId !== undefined && (obj.projectStatusId = Math.round(message.projectStatusId));
    message.projectCategoryId !== undefined && (obj.projectCategoryId = Math.round(message.projectCategoryId));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    message.tcDirectProjectId !== undefined && (obj.tcDirectProjectId = Math.round(message.tcDirectProjectId));
    message.projectStudioSpecId !== undefined && (obj.projectStudioSpecId = Math.round(message.projectStudioSpecId));
    message.projectMmSpecId !== undefined && (obj.projectMmSpecId = Math.round(message.projectMmSpecId));
    message.projectSubCategoryId !== undefined && (obj.projectSubCategoryId = Math.round(message.projectSubCategoryId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallenge>, I>>(object: I): LegacyChallenge {
    const message = createBaseLegacyChallenge();
    message.projectId = object.projectId ?? 0;
    message.projectStatusId = object.projectStatusId ?? 0;
    message.projectCategoryId = object.projectCategoryId ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? "";
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? "";
    message.tcDirectProjectId = object.tcDirectProjectId ?? 0;
    message.projectStudioSpecId = object.projectStudioSpecId ?? 0;
    message.projectMmSpecId = object.projectMmSpecId ?? 0;
    message.projectSubCategoryId = object.projectSubCategoryId ?? 0;
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

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeList>, I>>(object: I): LegacyChallengeList {
    const message = createBaseLegacyChallengeList();
    message.legacyChallenges = object.legacyChallenges?.map((e) => LegacyChallenge.fromPartial(e)) || [];
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

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeId>, I>>(object: I): LegacyChallengeId {
    const message = createBaseLegacyChallengeId();
    message.legacyChallengeId = object.legacyChallengeId ?? 0;
    return message;
  },
};

function createBaseLegacyChallengeInfo(): LegacyChallengeInfo {
  return {
    projectId: 0,
    projectInfoTypeId: 0,
    value: "",
    createUser: 0,
    createDate: "",
    modifyUser: 0,
    modifyDate: "",
  };
}

export const LegacyChallengeInfo = {
  encode(message: LegacyChallengeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(16).int32(message.projectInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.createUser !== 0) {
      writer.uint32(32).int32(message.createUser);
    }
    if (message.createDate !== "") {
      writer.uint32(42).string(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== "") {
      writer.uint32(58).string(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectInfoTypeId = reader.int32();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.createUser = reader.int32();
          break;
        case 5:
          message.createDate = reader.string();
          break;
        case 6:
          message.modifyUser = reader.int32();
          break;
        case 7:
          message.modifyDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeInfo {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? String(object.createDate) : "",
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : "",
    };
  },

  toJSON(message: LegacyChallengeInfo): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeInfo>, I>>(object: I): LegacyChallengeInfo {
    const message = createBaseLegacyChallengeInfo();
    message.projectId = object.projectId ?? 0;
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    message.value = object.value ?? "";
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? "";
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? "";
    return message;
  },
};

function createBaseLegacyChallengeInfoList(): LegacyChallengeInfoList {
  return { legacyChallengeInfos: [] };
}

export const LegacyChallengeInfoList = {
  encode(message: LegacyChallengeInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.legacyChallengeInfos) {
      LegacyChallengeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeInfoList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyChallengeInfos.push(LegacyChallengeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeInfoList {
    return {
      legacyChallengeInfos: Array.isArray(object?.legacyChallengeInfos)
        ? object.legacyChallengeInfos.map((e: any) => LegacyChallengeInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LegacyChallengeInfoList): unknown {
    const obj: any = {};
    if (message.legacyChallengeInfos) {
      obj.legacyChallengeInfos = message.legacyChallengeInfos.map((e) => e ? LegacyChallengeInfo.toJSON(e) : undefined);
    } else {
      obj.legacyChallengeInfos = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeInfoList>, I>>(object: I): LegacyChallengeInfoList {
    const message = createBaseLegacyChallengeInfoList();
    message.legacyChallengeInfos = object.legacyChallengeInfos?.map((e) => LegacyChallengeInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLegacyChallengeInfoType(): LegacyChallengeInfoType {
  return {
    projectInfoTypeId: 0,
    name: "",
    description: "",
    createUser: 0,
    createDate: "",
    modifyUser: 0,
    modifyDate: "",
  };
}

export const LegacyChallengeInfoType = {
  encode(message: LegacyChallengeInfoType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(8).int32(message.projectInfoTypeId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createUser !== 0) {
      writer.uint32(32).int32(message.createUser);
    }
    if (message.createDate !== "") {
      writer.uint32(42).string(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== "") {
      writer.uint32(58).string(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeInfoType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeInfoType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectInfoTypeId = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.createUser = reader.int32();
          break;
        case 5:
          message.createDate = reader.string();
          break;
        case 6:
          message.modifyUser = reader.int32();
          break;
        case 7:
          message.modifyDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeInfoType {
    return {
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? String(object.createDate) : "",
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : "",
    };
  },

  toJSON(message: LegacyChallengeInfoType): unknown {
    const obj: any = {};
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeInfoType>, I>>(object: I): LegacyChallengeInfoType {
    const message = createBaseLegacyChallengeInfoType();
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? "";
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? "";
    return message;
  },
};

function createBaseLegacyChallengeInfoTypeList(): LegacyChallengeInfoTypeList {
  return { legacyChallengeInfoTypes: [] };
}

export const LegacyChallengeInfoTypeList = {
  encode(message: LegacyChallengeInfoTypeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.legacyChallengeInfoTypes) {
      LegacyChallengeInfoType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeInfoTypeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeInfoTypeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyChallengeInfoTypes.push(LegacyChallengeInfoType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeInfoTypeList {
    return {
      legacyChallengeInfoTypes: Array.isArray(object?.legacyChallengeInfoTypes)
        ? object.legacyChallengeInfoTypes.map((e: any) => LegacyChallengeInfoType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LegacyChallengeInfoTypeList): unknown {
    const obj: any = {};
    if (message.legacyChallengeInfoTypes) {
      obj.legacyChallengeInfoTypes = message.legacyChallengeInfoTypes.map((e) =>
        e ? LegacyChallengeInfoType.toJSON(e) : undefined
      );
    } else {
      obj.legacyChallengeInfoTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeInfoTypeList>, I>>(object: I): LegacyChallengeInfoTypeList {
    const message = createBaseLegacyChallengeInfoTypeList();
    message.legacyChallengeInfoTypes =
      object.legacyChallengeInfoTypes?.map((e) => LegacyChallengeInfoType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLegacyChallengePhase(): LegacyChallengePhase {
  return {
    projectPhaseId: 0,
    projectId: undefined,
    phaseTypeId: undefined,
    name: undefined,
    phaseStatusId: 0,
    scheduledStartTime: undefined,
    scheduledEndTime: undefined,
    actualStartTime: undefined,
    actualEndTime: undefined,
    fixedStartTime: undefined,
    duration: undefined,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const LegacyChallengePhase = {
  encode(message: LegacyChallengePhase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int32(message.projectPhaseId);
    }
    if (message.projectId !== undefined) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.phaseTypeId !== undefined) {
      writer.uint32(24).int32(message.phaseTypeId);
    }
    if (message.name !== undefined) {
      writer.uint32(122).string(message.name);
    }
    if (message.phaseStatusId !== 0) {
      writer.uint32(32).int32(message.phaseStatusId);
    }
    if (message.scheduledStartTime !== undefined) {
      writer.uint32(42).string(message.scheduledStartTime);
    }
    if (message.scheduledEndTime !== undefined) {
      writer.uint32(50).string(message.scheduledEndTime);
    }
    if (message.actualStartTime !== undefined) {
      writer.uint32(58).string(message.actualStartTime);
    }
    if (message.actualEndTime !== undefined) {
      writer.uint32(66).string(message.actualEndTime);
    }
    if (message.fixedStartTime !== undefined) {
      writer.uint32(74).string(message.fixedStartTime);
    }
    if (message.duration !== undefined) {
      writer.uint32(80).int64(message.duration);
    }
    if (message.createUser !== undefined) {
      writer.uint32(88).int32(message.createUser);
    }
    if (message.createDate !== undefined) {
      writer.uint32(98).string(message.createDate);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(104).int32(message.modifyUser);
    }
    if (message.modifyDate !== undefined) {
      writer.uint32(114).string(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengePhase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengePhase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhaseId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.phaseTypeId = reader.int32();
          break;
        case 15:
          message.name = reader.string();
          break;
        case 4:
          message.phaseStatusId = reader.int32();
          break;
        case 5:
          message.scheduledStartTime = reader.string();
          break;
        case 6:
          message.scheduledEndTime = reader.string();
          break;
        case 7:
          message.actualStartTime = reader.string();
          break;
        case 8:
          message.actualEndTime = reader.string();
          break;
        case 9:
          message.fixedStartTime = reader.string();
          break;
        case 10:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.createUser = reader.int32();
          break;
        case 12:
          message.createDate = reader.string();
          break;
        case 13:
          message.modifyUser = reader.int32();
          break;
        case 14:
          message.modifyDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengePhase {
    return {
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      phaseStatusId: isSet(object.phaseStatusId) ? Number(object.phaseStatusId) : 0,
      scheduledStartTime: isSet(object.scheduledStartTime) ? String(object.scheduledStartTime) : undefined,
      scheduledEndTime: isSet(object.scheduledEndTime) ? String(object.scheduledEndTime) : undefined,
      actualStartTime: isSet(object.actualStartTime) ? String(object.actualStartTime) : undefined,
      actualEndTime: isSet(object.actualEndTime) ? String(object.actualEndTime) : undefined,
      fixedStartTime: isSet(object.fixedStartTime) ? String(object.fixedStartTime) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : undefined,
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? String(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : undefined,
    };
  },

  toJSON(message: LegacyChallengePhase): unknown {
    const obj: any = {};
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    message.name !== undefined && (obj.name = message.name);
    message.phaseStatusId !== undefined && (obj.phaseStatusId = Math.round(message.phaseStatusId));
    message.scheduledStartTime !== undefined && (obj.scheduledStartTime = message.scheduledStartTime);
    message.scheduledEndTime !== undefined && (obj.scheduledEndTime = message.scheduledEndTime);
    message.actualStartTime !== undefined && (obj.actualStartTime = message.actualStartTime);
    message.actualEndTime !== undefined && (obj.actualEndTime = message.actualEndTime);
    message.fixedStartTime !== undefined && (obj.fixedStartTime = message.fixedStartTime);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengePhase>, I>>(object: I): LegacyChallengePhase {
    const message = createBaseLegacyChallengePhase();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.projectId = object.projectId ?? undefined;
    message.phaseTypeId = object.phaseTypeId ?? undefined;
    message.name = object.name ?? undefined;
    message.phaseStatusId = object.phaseStatusId ?? 0;
    message.scheduledStartTime = object.scheduledStartTime ?? undefined;
    message.scheduledEndTime = object.scheduledEndTime ?? undefined;
    message.actualStartTime = object.actualStartTime ?? undefined;
    message.actualEndTime = object.actualEndTime ?? undefined;
    message.fixedStartTime = object.fixedStartTime ?? undefined;
    message.duration = object.duration ?? undefined;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseLegacyChallengePhaseList(): LegacyChallengePhaseList {
  return { legacyChallengePhases: [] };
}

export const LegacyChallengePhaseList = {
  encode(message: LegacyChallengePhaseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.legacyChallengePhases) {
      LegacyChallengePhase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengePhaseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengePhaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyChallengePhases.push(LegacyChallengePhase.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengePhaseList {
    return {
      legacyChallengePhases: Array.isArray(object?.legacyChallengePhases)
        ? object.legacyChallengePhases.map((e: any) => LegacyChallengePhase.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LegacyChallengePhaseList): unknown {
    const obj: any = {};
    if (message.legacyChallengePhases) {
      obj.legacyChallengePhases = message.legacyChallengePhases.map((e) =>
        e ? LegacyChallengePhase.toJSON(e) : undefined
      );
    } else {
      obj.legacyChallengePhases = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengePhaseList>, I>>(object: I): LegacyChallengePhaseList {
    const message = createBaseLegacyChallengePhaseList();
    message.legacyChallengePhases = object.legacyChallengePhases?.map((e) => LegacyChallengePhase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLegacyChallengeInfoRequest(): LegacyChallengeInfoRequest {
  return { legacyChallengeId: 0, infoKey: "", infoValue: "" };
}

export const LegacyChallengeInfoRequest = {
  encode(message: LegacyChallengeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyChallengeId !== 0) {
      writer.uint32(8).int32(message.legacyChallengeId);
    }
    if (message.infoKey !== "") {
      writer.uint32(18).string(message.infoKey);
    }
    if (message.infoValue !== "") {
      writer.uint32(26).string(message.infoValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyChallengeId = reader.int32();
          break;
        case 2:
          message.infoKey = reader.string();
          break;
        case 3:
          message.infoValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeInfoRequest {
    return {
      legacyChallengeId: isSet(object.legacyChallengeId) ? Number(object.legacyChallengeId) : 0,
      infoKey: isSet(object.infoKey) ? String(object.infoKey) : "",
      infoValue: isSet(object.infoValue) ? String(object.infoValue) : "",
    };
  },

  toJSON(message: LegacyChallengeInfoRequest): unknown {
    const obj: any = {};
    message.legacyChallengeId !== undefined && (obj.legacyChallengeId = Math.round(message.legacyChallengeId));
    message.infoKey !== undefined && (obj.infoKey = message.infoKey);
    message.infoValue !== undefined && (obj.infoValue = message.infoValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeInfoRequest>, I>>(object: I): LegacyChallengeInfoRequest {
    const message = createBaseLegacyChallengeInfoRequest();
    message.legacyChallengeId = object.legacyChallengeId ?? 0;
    message.infoKey = object.infoKey ?? "";
    message.infoValue = object.infoValue ?? "";
    return message;
  },
};

function createBaseLegacyChallengeInfoAudit(): LegacyChallengeInfoAudit {
  return { projectId: 0, projectInfoTypeId: 0, value: "", auditActionTypeId: 0, actionDate: "", actionUser: 0 };
}

export const LegacyChallengeInfoAudit = {
  encode(message: LegacyChallengeInfoAudit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(16).int32(message.projectInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.auditActionTypeId !== 0) {
      writer.uint32(32).int32(message.auditActionTypeId);
    }
    if (message.actionDate !== "") {
      writer.uint32(42).string(message.actionDate);
    }
    if (message.actionUser !== 0) {
      writer.uint32(48).int32(message.actionUser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengeInfoAudit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengeInfoAudit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectInfoTypeId = reader.int32();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.auditActionTypeId = reader.int32();
          break;
        case 5:
          message.actionDate = reader.string();
          break;
        case 6:
          message.actionUser = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengeInfoAudit {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      auditActionTypeId: isSet(object.auditActionTypeId) ? Number(object.auditActionTypeId) : 0,
      actionDate: isSet(object.actionDate) ? String(object.actionDate) : "",
      actionUser: isSet(object.actionUser) ? Number(object.actionUser) : 0,
    };
  },

  toJSON(message: LegacyChallengeInfoAudit): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    message.auditActionTypeId !== undefined && (obj.auditActionTypeId = Math.round(message.auditActionTypeId));
    message.actionDate !== undefined && (obj.actionDate = message.actionDate);
    message.actionUser !== undefined && (obj.actionUser = Math.round(message.actionUser));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengeInfoAudit>, I>>(object: I): LegacyChallengeInfoAudit {
    const message = createBaseLegacyChallengeInfoAudit();
    message.projectId = object.projectId ?? 0;
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    message.value = object.value ?? "";
    message.auditActionTypeId = object.auditActionTypeId ?? 0;
    message.actionDate = object.actionDate ?? "";
    message.actionUser = object.actionUser ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
