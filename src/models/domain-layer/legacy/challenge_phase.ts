/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface LegacyChallengePhase {
  projectPhaseId: number;
  projectId: number;
  phaseTypeId: number;
  phaseStatusId: number;
  fixedStartTime?: string | undefined;
  scheduledStartTime?: string | undefined;
  scheduledEndTime?: string | undefined;
  actualStartTime?: string | undefined;
  actualEndTime?: string | undefined;
  duration: number;
  createUser?: number | undefined;
  createDate?: string | undefined;
  modifyUser?: number | undefined;
  modifyDate?: string | undefined;
}

export interface PhaseType {
  phaseTypeId: number;
  name: string;
  description?: string | undefined;
  createUser?: number | undefined;
  createDate?: string | undefined;
  modifyUser?: number | undefined;
  modifyDate?: string | undefined;
}

export interface LegacyChallengePhaseList {
  phases: LegacyChallengePhase[];
}

export interface PhaseTypeList {
  items: PhaseType[];
}

export interface CreatePhaseInput {
  projectId: number;
  phaseTypeId: number;
  phaseStatusId: number;
  fixedStartTime?: string | undefined;
  scheduledStartTime?: string | undefined;
  scheduledEndTime?: string | undefined;
  actualStartTime?: string | undefined;
  actualEndTime?: string | undefined;
  duration: number;
  createUser: number;
  modifyUser?: number | undefined;
}

function createBaseLegacyChallengePhase(): LegacyChallengePhase {
  return {
    projectPhaseId: 0,
    projectId: 0,
    phaseTypeId: 0,
    phaseStatusId: 0,
    fixedStartTime: undefined,
    scheduledStartTime: undefined,
    scheduledEndTime: undefined,
    actualStartTime: undefined,
    actualEndTime: undefined,
    duration: 0,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const LegacyChallengePhase = {
  encode(message: LegacyChallengePhase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int64(message.projectPhaseId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int64(message.projectId);
    }
    if (message.phaseTypeId !== 0) {
      writer.uint32(24).int64(message.phaseTypeId);
    }
    if (message.phaseStatusId !== 0) {
      writer.uint32(32).int64(message.phaseStatusId);
    }
    if (message.fixedStartTime !== undefined) {
      writer.uint32(42).string(message.fixedStartTime);
    }
    if (message.scheduledStartTime !== undefined) {
      writer.uint32(50).string(message.scheduledStartTime);
    }
    if (message.scheduledEndTime !== undefined) {
      writer.uint32(58).string(message.scheduledEndTime);
    }
    if (message.actualStartTime !== undefined) {
      writer.uint32(66).string(message.actualStartTime);
    }
    if (message.actualEndTime !== undefined) {
      writer.uint32(74).string(message.actualEndTime);
    }
    if (message.duration !== 0) {
      writer.uint32(80).int32(message.duration);
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
          message.projectPhaseId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.projectId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.phaseTypeId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.phaseStatusId = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.fixedStartTime = reader.string();
          break;
        case 6:
          message.scheduledStartTime = reader.string();
          break;
        case 7:
          message.scheduledEndTime = reader.string();
          break;
        case 8:
          message.actualStartTime = reader.string();
          break;
        case 9:
          message.actualEndTime = reader.string();
          break;
        case 10:
          message.duration = reader.int32();
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
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : 0,
      phaseStatusId: isSet(object.phaseStatusId) ? Number(object.phaseStatusId) : 0,
      fixedStartTime: isSet(object.fixedStartTime) ? String(object.fixedStartTime) : undefined,
      scheduledStartTime: isSet(object.scheduledStartTime) ? String(object.scheduledStartTime) : undefined,
      scheduledEndTime: isSet(object.scheduledEndTime) ? String(object.scheduledEndTime) : undefined,
      actualStartTime: isSet(object.actualStartTime) ? String(object.actualStartTime) : undefined,
      actualEndTime: isSet(object.actualEndTime) ? String(object.actualEndTime) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
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
    message.phaseStatusId !== undefined && (obj.phaseStatusId = Math.round(message.phaseStatusId));
    message.fixedStartTime !== undefined && (obj.fixedStartTime = message.fixedStartTime);
    message.scheduledStartTime !== undefined && (obj.scheduledStartTime = message.scheduledStartTime);
    message.scheduledEndTime !== undefined && (obj.scheduledEndTime = message.scheduledEndTime);
    message.actualStartTime !== undefined && (obj.actualStartTime = message.actualStartTime);
    message.actualEndTime !== undefined && (obj.actualEndTime = message.actualEndTime);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyChallengePhase>, I>>(base?: I): LegacyChallengePhase {
    return LegacyChallengePhase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengePhase>, I>>(object: I): LegacyChallengePhase {
    const message = createBaseLegacyChallengePhase();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.phaseTypeId = object.phaseTypeId ?? 0;
    message.phaseStatusId = object.phaseStatusId ?? 0;
    message.fixedStartTime = object.fixedStartTime ?? undefined;
    message.scheduledStartTime = object.scheduledStartTime ?? undefined;
    message.scheduledEndTime = object.scheduledEndTime ?? undefined;
    message.actualStartTime = object.actualStartTime ?? undefined;
    message.actualEndTime = object.actualEndTime ?? undefined;
    message.duration = object.duration ?? 0;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBasePhaseType(): PhaseType {
  return {
    phaseTypeId: 0,
    name: "",
    description: undefined,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const PhaseType = {
  encode(message: PhaseType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phaseTypeId !== 0) {
      writer.uint32(8).int64(message.phaseTypeId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.createUser !== undefined) {
      writer.uint32(32).int32(message.createUser);
    }
    if (message.createDate !== undefined) {
      writer.uint32(42).string(message.createDate);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== undefined) {
      writer.uint32(58).string(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phaseTypeId = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): PhaseType {
    return {
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? String(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : undefined,
    };
  },

  toJSON(message: PhaseType): unknown {
    const obj: any = {};
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseType>, I>>(base?: I): PhaseType {
    return PhaseType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseType>, I>>(object: I): PhaseType {
    const message = createBasePhaseType();
    message.phaseTypeId = object.phaseTypeId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseLegacyChallengePhaseList(): LegacyChallengePhaseList {
  return { phases: [] };
}

export const LegacyChallengePhaseList = {
  encode(message: LegacyChallengePhaseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.phases) {
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
          message.phases.push(LegacyChallengePhase.decode(reader, reader.uint32()));
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
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => LegacyChallengePhase.fromJSON(e)) : [],
    };
  },

  toJSON(message: LegacyChallengePhaseList): unknown {
    const obj: any = {};
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? LegacyChallengePhase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyChallengePhaseList>, I>>(base?: I): LegacyChallengePhaseList {
    return LegacyChallengePhaseList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengePhaseList>, I>>(object: I): LegacyChallengePhaseList {
    const message = createBaseLegacyChallengePhaseList();
    message.phases = object.phases?.map((e) => LegacyChallengePhase.fromPartial(e)) || [];
    return message;
  },
};

function createBasePhaseTypeList(): PhaseTypeList {
  return { items: [] };
}

export const PhaseTypeList = {
  encode(message: PhaseTypeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PhaseType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseTypeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseTypeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(PhaseType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhaseTypeList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => PhaseType.fromJSON(e)) : [] };
  },

  toJSON(message: PhaseTypeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PhaseType.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseTypeList>, I>>(base?: I): PhaseTypeList {
    return PhaseTypeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseTypeList>, I>>(object: I): PhaseTypeList {
    const message = createBasePhaseTypeList();
    message.items = object.items?.map((e) => PhaseType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePhaseInput(): CreatePhaseInput {
  return {
    projectId: 0,
    phaseTypeId: 0,
    phaseStatusId: 0,
    fixedStartTime: undefined,
    scheduledStartTime: undefined,
    scheduledEndTime: undefined,
    actualStartTime: undefined,
    actualEndTime: undefined,
    duration: 0,
    createUser: 0,
    modifyUser: undefined,
  };
}

export const CreatePhaseInput = {
  encode(message: CreatePhaseInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int64(message.projectId);
    }
    if (message.phaseTypeId !== 0) {
      writer.uint32(16).int64(message.phaseTypeId);
    }
    if (message.phaseStatusId !== 0) {
      writer.uint32(24).int64(message.phaseStatusId);
    }
    if (message.fixedStartTime !== undefined) {
      writer.uint32(34).string(message.fixedStartTime);
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
    if (message.duration !== 0) {
      writer.uint32(72).int32(message.duration);
    }
    if (message.createUser !== 0) {
      writer.uint32(80).int32(message.createUser);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(88).int32(message.modifyUser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePhaseInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePhaseInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.phaseTypeId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.phaseStatusId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.fixedStartTime = reader.string();
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
          message.duration = reader.int32();
          break;
        case 10:
          message.createUser = reader.int32();
          break;
        case 11:
          message.modifyUser = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePhaseInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : 0,
      phaseStatusId: isSet(object.phaseStatusId) ? Number(object.phaseStatusId) : 0,
      fixedStartTime: isSet(object.fixedStartTime) ? String(object.fixedStartTime) : undefined,
      scheduledStartTime: isSet(object.scheduledStartTime) ? String(object.scheduledStartTime) : undefined,
      scheduledEndTime: isSet(object.scheduledEndTime) ? String(object.scheduledEndTime) : undefined,
      actualStartTime: isSet(object.actualStartTime) ? String(object.actualStartTime) : undefined,
      actualEndTime: isSet(object.actualEndTime) ? String(object.actualEndTime) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
    };
  },

  toJSON(message: CreatePhaseInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    message.phaseStatusId !== undefined && (obj.phaseStatusId = Math.round(message.phaseStatusId));
    message.fixedStartTime !== undefined && (obj.fixedStartTime = message.fixedStartTime);
    message.scheduledStartTime !== undefined && (obj.scheduledStartTime = message.scheduledStartTime);
    message.scheduledEndTime !== undefined && (obj.scheduledEndTime = message.scheduledEndTime);
    message.actualStartTime !== undefined && (obj.actualStartTime = message.actualStartTime);
    message.actualEndTime !== undefined && (obj.actualEndTime = message.actualEndTime);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePhaseInput>, I>>(base?: I): CreatePhaseInput {
    return CreatePhaseInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePhaseInput>, I>>(object: I): CreatePhaseInput {
    const message = createBaseCreatePhaseInput();
    message.projectId = object.projectId ?? 0;
    message.phaseTypeId = object.phaseTypeId ?? 0;
    message.phaseStatusId = object.phaseStatusId ?? 0;
    message.fixedStartTime = object.fixedStartTime ?? undefined;
    message.scheduledStartTime = object.scheduledStartTime ?? undefined;
    message.scheduledEndTime = object.scheduledEndTime ?? undefined;
    message.actualStartTime = object.actualStartTime ?? undefined;
    message.actualEndTime = object.actualEndTime ?? undefined;
    message.duration = object.duration ?? 0;
    message.createUser = object.createUser ?? 0;
    message.modifyUser = object.modifyUser ?? undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
