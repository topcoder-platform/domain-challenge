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
  updateInput?: UpdateTimelineTemplateInput_UpdateInput | undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimelineTemplatePhase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.phaseId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.defaultDuration = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): TimelineTemplatePhase {
    return {
      phaseId: isSet(object.phaseId) ? String(object.phaseId) : "",
      defaultDuration: isSet(object.defaultDuration) ? Number(object.defaultDuration) : 0,
      predecessor: isSet(object.predecessor) ? String(object.predecessor) : undefined,
    };
  },

  toJSON(message: TimelineTemplatePhase): unknown {
    const obj: any = {};
    if (message.phaseId !== "") {
      obj.phaseId = message.phaseId;
    }
    if (message.defaultDuration !== 0) {
      obj.defaultDuration = Math.round(message.defaultDuration);
    }
    if (message.predecessor !== undefined) {
      obj.predecessor = message.predecessor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimelineTemplatePhase>, I>>(base?: I): TimelineTemplatePhase {
    return TimelineTemplatePhase.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimelineTemplate();
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

          message.isActive = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.phases.push(TimelineTemplatePhase.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimelineTemplate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      phases: globalThis.Array.isArray(object?.phases)
        ? object.phases.map((e: any) => TimelineTemplatePhase.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TimelineTemplate): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    if (message.phases?.length) {
      obj.phases = message.phases.map((e) => TimelineTemplatePhase.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimelineTemplate>, I>>(base?: I): TimelineTemplate {
    return TimelineTemplate.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimelineTemplateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(TimelineTemplate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimelineTemplateList {
    return {
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => TimelineTemplate.fromJSON(e)) : [],
    };
  },

  toJSON(message: TimelineTemplateList): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => TimelineTemplate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimelineTemplateList>, I>>(base?: I): TimelineTemplateList {
    return TimelineTemplateList.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTimelineTemplateInput();
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

          message.isActive = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.phases.push(TimelineTemplatePhase.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTimelineTemplateInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      phases: globalThis.Array.isArray(object?.phases)
        ? object.phases.map((e: any) => TimelineTemplatePhase.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateTimelineTemplateInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    if (message.phases?.length) {
      obj.phases = message.phases.map((e) => TimelineTemplatePhase.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTimelineTemplateInput>, I>>(base?: I): CreateTimelineTemplateInput {
    return CreateTimelineTemplateInput.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTimelineTemplateInput();
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

          message.updateInput = UpdateTimelineTemplateInput_UpdateInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTimelineTemplateInput {
    return {
      filterCriteria: globalThis.Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateTimelineTemplateInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateTimelineTemplateInput): unknown {
    const obj: any = {};
    if (message.filterCriteria?.length) {
      obj.filterCriteria = message.filterCriteria.map((e) => ScanCriteria.toJSON(e));
    }
    if (message.updateInput !== undefined) {
      obj.updateInput = UpdateTimelineTemplateInput_UpdateInput.toJSON(message.updateInput);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTimelineTemplateInput>, I>>(base?: I): UpdateTimelineTemplateInput {
    return UpdateTimelineTemplateInput.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTimelineTemplateInput_UpdateInput();
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

          message.isActive = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.phases.push(TimelineTemplatePhase.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTimelineTemplateInput_UpdateInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      phases: globalThis.Array.isArray(object?.phases)
        ? object.phases.map((e: any) => TimelineTemplatePhase.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateTimelineTemplateInput_UpdateInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    if (message.phases?.length) {
      obj.phases = message.phases.map((e) => TimelineTemplatePhase.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTimelineTemplateInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateTimelineTemplateInput_UpdateInput {
    return UpdateTimelineTemplateInput_UpdateInput.fromPartial(base ?? ({} as any));
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
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
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
