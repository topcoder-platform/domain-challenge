/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";

export interface TimelineTemplatePhase {
  phaseId: string;
  defaultDuration: number;
  predecessor?: string | undefined;
}

export interface TimelineTemplate {
  id: string;
  name: string;
  description?: string | undefined;
  isActive: boolean;
  phases: TimelineTemplatePhase[];
}

export interface TimelineTemplateList {
  items: TimelineTemplate[];
}

export interface CreateTimelineTemplateInput {
  name: string;
  description?: string | undefined;
  isActive: boolean;
  phases: TimelineTemplatePhase[];
}

export interface UpdateTimelineTemplateInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateTimelineTemplateInput_UpdateInput;
}

export interface UpdateTimelineTemplateInput_UpdateInput {
  name: string;
  description?: string | undefined;
  isActive: boolean;
  phases: TimelineTemplatePhase[];
}

function createBaseTimelineTemplatePhase(): TimelineTemplatePhase {
  return { phaseId: "", defaultDuration: 0, predecessor: undefined };
}

export const TimelineTemplatePhase = {
  encode(message: TimelineTemplatePhase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phaseId !== "") {
      writer.uint32(10).string(message.phaseId);
    }
    if (message.defaultDuration !== 0) {
      writer.uint32(16).int64(message.defaultDuration);
    }
    if (message.predecessor !== undefined) {
      writer.uint32(26).string(message.predecessor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimelineTemplatePhase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimelineTemplatePhase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phaseId = reader.string();
          break;
        case 2:
          message.defaultDuration = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.predecessor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimelineTemplatePhase {
    return {
      phaseId: isSet(object.phaseId) ? String(object.phaseId) : "",
      defaultDuration: isSet(object.defaultDuration) ? Number(object.defaultDuration) : 0,
      predecessor: isSet(object.predecessor) ? String(object.predecessor) : undefined,
    };
  },

  toJSON(message: TimelineTemplatePhase): unknown {
    const obj: any = {};
    message.phaseId !== undefined && (obj.phaseId = message.phaseId);
    message.defaultDuration !== undefined && (obj.defaultDuration = Math.round(message.defaultDuration));
    message.predecessor !== undefined && (obj.predecessor = message.predecessor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimelineTemplatePhase>, I>>(object: I): TimelineTemplatePhase {
    const message = createBaseTimelineTemplatePhase();
    message.phaseId = object.phaseId ?? "";
    message.defaultDuration = object.defaultDuration ?? 0;
    message.predecessor = object.predecessor ?? undefined;
    return message;
  },
};

function createBaseTimelineTemplate(): TimelineTemplate {
  return { id: "", name: "", description: undefined, isActive: false, phases: [] };
}

export const TimelineTemplate = {
  encode(message: TimelineTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive);
    }
    for (const v of message.phases) {
      TimelineTemplatePhase.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimelineTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimelineTemplate();
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
          message.isActive = reader.bool();
          break;
        case 5:
          message.phases.push(TimelineTemplatePhase.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimelineTemplate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => TimelineTemplatePhase.fromJSON(e)) : [],
    };
  },

  toJSON(message: TimelineTemplate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? TimelineTemplatePhase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimelineTemplate>, I>>(object: I): TimelineTemplate {
    const message = createBaseTimelineTemplate();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.phases = object.phases?.map((e) => TimelineTemplatePhase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTimelineTemplateList(): TimelineTemplateList {
  return { items: [] };
}

export const TimelineTemplateList = {
  encode(message: TimelineTemplateList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      TimelineTemplate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimelineTemplateList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimelineTemplateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(TimelineTemplate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimelineTemplateList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => TimelineTemplate.fromJSON(e)) : [] };
  },

  toJSON(message: TimelineTemplateList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? TimelineTemplate.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimelineTemplateList>, I>>(object: I): TimelineTemplateList {
    const message = createBaseTimelineTemplateList();
    message.items = object.items?.map((e) => TimelineTemplate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateTimelineTemplateInput(): CreateTimelineTemplateInput {
  return { name: "", description: undefined, isActive: false, phases: [] };
}

export const CreateTimelineTemplateInput = {
  encode(message: CreateTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.isActive === true) {
      writer.uint32(24).bool(message.isActive);
    }
    for (const v of message.phases) {
      TimelineTemplatePhase.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTimelineTemplateInput();
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
          message.isActive = reader.bool();
          break;
        case 4:
          message.phases.push(TimelineTemplatePhase.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTimelineTemplateInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => TimelineTemplatePhase.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreateTimelineTemplateInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? TimelineTemplatePhase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTimelineTemplateInput>, I>>(object: I): CreateTimelineTemplateInput {
    const message = createBaseCreateTimelineTemplateInput();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.phases = object.phases?.map((e) => TimelineTemplatePhase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateTimelineTemplateInput(): UpdateTimelineTemplateInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateTimelineTemplateInput = {
  encode(message: UpdateTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateTimelineTemplateInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTimelineTemplateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updateInput = UpdateTimelineTemplateInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTimelineTemplateInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateTimelineTemplateInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateTimelineTemplateInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined && (obj.updateInput = message.updateInput
      ? UpdateTimelineTemplateInput_UpdateInput.toJSON(message.updateInput)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTimelineTemplateInput>, I>>(object: I): UpdateTimelineTemplateInput {
    const message = createBaseUpdateTimelineTemplateInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateTimelineTemplateInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateTimelineTemplateInput_UpdateInput(): UpdateTimelineTemplateInput_UpdateInput {
  return { name: "", description: undefined, isActive: false, phases: [] };
}

export const UpdateTimelineTemplateInput_UpdateInput = {
  encode(message: UpdateTimelineTemplateInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive);
    }
    for (const v of message.phases) {
      TimelineTemplatePhase.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTimelineTemplateInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTimelineTemplateInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.isActive = reader.bool();
          break;
        case 5:
          message.phases.push(TimelineTemplatePhase.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateTimelineTemplateInput_UpdateInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      phases: Array.isArray(object?.phases) ? object.phases.map((e: any) => TimelineTemplatePhase.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdateTimelineTemplateInput_UpdateInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    if (message.phases) {
      obj.phases = message.phases.map((e) => e ? TimelineTemplatePhase.toJSON(e) : undefined);
    } else {
      obj.phases = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTimelineTemplateInput_UpdateInput>, I>>(
    object: I,
  ): UpdateTimelineTemplateInput_UpdateInput {
    const message = createBaseUpdateTimelineTemplateInput_UpdateInput();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.phases = object.phases?.map((e) => TimelineTemplatePhase.fromPartial(e)) || [];
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
