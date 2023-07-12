/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";

export interface Phase {
  id: string;
  name: string;
  description?: string | undefined;
  isOpen: boolean;
  duration: number;
}

export interface PhaseList {
  items: Phase[];
}

export interface CreatePhaseInput {
  name: string;
  description?: string | undefined;
  isOpen: boolean;
  duration: number;
}

export interface UpdatePhaseInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdatePhaseInput_UpdateInput;
}

export interface UpdatePhaseInput_UpdateInput {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhase();
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

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isOpen = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.duration = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<Phase>, I>>(base?: I): Phase {
    return Phase.fromPartial(base ?? {});
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
  return { items: [] };
}

export const PhaseList = {
  encode(message: PhaseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Phase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Phase.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PhaseList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => Phase.fromJSON(e)) : [] };
  },

  toJSON(message: PhaseList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Phase.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseList>, I>>(base?: I): PhaseList {
    return PhaseList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseList>, I>>(object: I): PhaseList {
    const message = createBasePhaseList();
    message.items = object.items?.map((e) => Phase.fromPartial(e)) || [];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePhaseInput();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isOpen = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.duration = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<CreatePhaseInput>, I>>(base?: I): CreatePhaseInput {
    return CreatePhaseInput.fromPartial(base ?? {});
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
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdatePhaseInput = {
  encode(message: UpdatePhaseInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdatePhaseInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePhaseInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePhaseInput();
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

          message.updateInput = UpdatePhaseInput_UpdateInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePhaseInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput) ? UpdatePhaseInput_UpdateInput.fromJSON(object.updateInput) : undefined,
    };
  },

  toJSON(message: UpdatePhaseInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined &&
      (obj.updateInput = message.updateInput ? UpdatePhaseInput_UpdateInput.toJSON(message.updateInput) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePhaseInput>, I>>(base?: I): UpdatePhaseInput {
    return UpdatePhaseInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePhaseInput>, I>>(object: I): UpdatePhaseInput {
    const message = createBaseUpdatePhaseInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdatePhaseInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdatePhaseInput_UpdateInput(): UpdatePhaseInput_UpdateInput {
  return { name: "", description: undefined, isOpen: false, duration: 0 };
}

export const UpdatePhaseInput_UpdateInput = {
  encode(message: UpdatePhaseInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePhaseInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePhaseInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isOpen = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.duration = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePhaseInput_UpdateInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isOpen: isSet(object.isOpen) ? Boolean(object.isOpen) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: UpdatePhaseInput_UpdateInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isOpen !== undefined && (obj.isOpen = message.isOpen);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePhaseInput_UpdateInput>, I>>(base?: I): UpdatePhaseInput_UpdateInput {
    return UpdatePhaseInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePhaseInput_UpdateInput>, I>>(object: I): UpdatePhaseInput_UpdateInput {
    const message = createBaseUpdatePhaseInput_UpdateInput();
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
