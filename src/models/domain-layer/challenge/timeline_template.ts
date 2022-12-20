/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

export interface CreateTimelineTemplateInput {
  timelineTemplate?: TimelineTemplate;
}

export interface UpdateTimelineTemplateInput {
  timelineTemplate?: TimelineTemplate;
}

export interface RemoveTimelineTemplateInput {
  id: string;
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

function createBaseCreateTimelineTemplateInput(): CreateTimelineTemplateInput {
  return { timelineTemplate: undefined };
}

export const CreateTimelineTemplateInput = {
  encode(message: CreateTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timelineTemplate !== undefined) {
      TimelineTemplate.encode(message.timelineTemplate, writer.uint32(10).fork()).ldelim();
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
          message.timelineTemplate = TimelineTemplate.decode(reader, reader.uint32());
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
      timelineTemplate: isSet(object.timelineTemplate) ? TimelineTemplate.fromJSON(object.timelineTemplate) : undefined,
    };
  },

  toJSON(message: CreateTimelineTemplateInput): unknown {
    const obj: any = {};
    message.timelineTemplate !== undefined &&
      (obj.timelineTemplate = message.timelineTemplate ? TimelineTemplate.toJSON(message.timelineTemplate) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTimelineTemplateInput>, I>>(object: I): CreateTimelineTemplateInput {
    const message = createBaseCreateTimelineTemplateInput();
    message.timelineTemplate = (object.timelineTemplate !== undefined && object.timelineTemplate !== null)
      ? TimelineTemplate.fromPartial(object.timelineTemplate)
      : undefined;
    return message;
  },
};

function createBaseUpdateTimelineTemplateInput(): UpdateTimelineTemplateInput {
  return { timelineTemplate: undefined };
}

export const UpdateTimelineTemplateInput = {
  encode(message: UpdateTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timelineTemplate !== undefined) {
      TimelineTemplate.encode(message.timelineTemplate, writer.uint32(10).fork()).ldelim();
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
          message.timelineTemplate = TimelineTemplate.decode(reader, reader.uint32());
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
      timelineTemplate: isSet(object.timelineTemplate) ? TimelineTemplate.fromJSON(object.timelineTemplate) : undefined,
    };
  },

  toJSON(message: UpdateTimelineTemplateInput): unknown {
    const obj: any = {};
    message.timelineTemplate !== undefined &&
      (obj.timelineTemplate = message.timelineTemplate ? TimelineTemplate.toJSON(message.timelineTemplate) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTimelineTemplateInput>, I>>(object: I): UpdateTimelineTemplateInput {
    const message = createBaseUpdateTimelineTemplateInput();
    message.timelineTemplate = (object.timelineTemplate !== undefined && object.timelineTemplate !== null)
      ? TimelineTemplate.fromPartial(object.timelineTemplate)
      : undefined;
    return message;
  },
};

function createBaseRemoveTimelineTemplateInput(): RemoveTimelineTemplateInput {
  return { id: "" };
}

export const RemoveTimelineTemplateInput = {
  encode(message: RemoveTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTimelineTemplateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveTimelineTemplateInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RemoveTimelineTemplateInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveTimelineTemplateInput>, I>>(object: I): RemoveTimelineTemplateInput {
    const message = createBaseRemoveTimelineTemplateInput();
    message.id = object.id ?? "";
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
