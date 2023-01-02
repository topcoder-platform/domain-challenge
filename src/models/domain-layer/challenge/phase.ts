/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Phase {
  id: string;
  name: string;
  description?: string | undefined;
  isOpen: boolean;
  duration: number;
}

export interface PhaseList {
  phases: Phase[];
}

export interface CreatePhaseInput {
  name: string;
  description?: string | undefined;
  isOpen: boolean;
  duration: number;
}

export interface UpdatePhaseInput {
  id: string;
  name: string;
  description?: string | undefined;
  isOpen: boolean;
  duration: number;
}

function createBasePhase(): Phase {
  return { id: "", name: "", description: undefined, isOpen: false, duration: 0 };
}

export const Phase = {
  encode(message: Phase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.isOpen === true) {
      writer.uint32(32).bool(message.isOpen);
    }
    if (message.duration !== 0) {
      writer.uint32(40).int64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Phase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhase();
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
          message.description = reader.string();
          break;
        case 4:
          message.isOpen = reader.bool();
          break;
        case 5:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Phase {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: Phase): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Phase>, I>>(object: I): Phase {
    const message = createBasePhase();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isOpen = object.isOpen ?? false;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBasePhaseList(): PhaseList {
  return { phases: [] };
}

export const PhaseList = {
  encode(message: PhaseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.phases) {
      Phase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phases.push(Phase.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhaseList {
    return { phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => Phase.fromJSON(e)) : [] };
  },

  toJSON(message: PhaseList): unknown {
    const obj: any = {};
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? Phase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PhaseList>, I>>(object: I): PhaseList {
    const message = createBasePhaseList();
    message.phases = object.phases?.map((e) => Phase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePhaseInput(): CreatePhaseInput {
  return { name: "", description: undefined, isOpen: false, duration: 0 };
}

export const CreatePhaseInput = {
  encode(message: CreatePhaseInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.isOpen === true) {
      writer.uint32(24).bool(message.isOpen);
    }
    if (message.duration !== 0) {
      writer.uint32(32).int64(message.duration);
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
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.isOpen = reader.bool();
          break;
        case 4:
          message.duration = longToNumber(reader.int64() as Long);
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
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CreatePhaseInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePhaseInput>, I>>(object: I): CreatePhaseInput {
    const message = createBaseCreatePhaseInput();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isOpen = object.isOpen ?? false;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseUpdatePhaseInput(): UpdatePhaseInput {
  return { id: "", name: "", description: undefined, isOpen: false, duration: 0 };
}

export const UpdatePhaseInput = {
  encode(message: UpdatePhaseInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.isOpen === true) {
      writer.uint32(32).bool(message.isOpen);
    }
    if (message.duration !== 0) {
      writer.uint32(40).int64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePhaseInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePhaseInput();
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
          message.description = reader.string();
          break;
        case 4:
          message.isOpen = reader.bool();
          break;
        case 5:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePhaseInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: UpdatePhaseInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePhaseInput>, I>>(object: I): UpdatePhaseInput {
    const message = createBaseUpdatePhaseInput();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isOpen = object.isOpen ?? false;
    message.duration = object.duration ?? 0;
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
