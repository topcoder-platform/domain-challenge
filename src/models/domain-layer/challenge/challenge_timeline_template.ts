/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface ChallengeTimelineTemplate {
  id: string;
  trackId: string;
  typeId: string;
  timelineTemplateId: string;
  isDefault: boolean;
}

export interface CreateChallengeTimelineTemplateInput {
  trackId: string;
  typeId: string;
  timelineTemplateId: string;
  isDefault: boolean;
}

export interface UpdateChallengeTimelineTemplateInput {
  id: string;
  trackId?: string | undefined;
  typeId?: string | undefined;
  timelineTemplateId?: string | undefined;
  isDefault: boolean;
}

export interface ChallengeTimelineTemplateList {
  challengeTimelineTemplates: ChallengeTimelineTemplate[];
}

function createBaseChallengeTimelineTemplate(): ChallengeTimelineTemplate {
  return { id: "", trackId: "", typeId: "", timelineTemplateId: "", isDefault: false };
}

export const ChallengeTimelineTemplate = {
  encode(message: ChallengeTimelineTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.trackId !== "") {
      writer.uint32(18).string(message.trackId);
    }
    if (message.typeId !== "") {
      writer.uint32(26).string(message.typeId);
    }
    if (message.timelineTemplateId !== "") {
      writer.uint32(34).string(message.timelineTemplateId);
    }
    if (message.isDefault === true) {
      writer.uint32(40).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTimelineTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTimelineTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.trackId = reader.string();
          break;
        case 3:
          message.typeId = reader.string();
          break;
        case 4:
          message.timelineTemplateId = reader.string();
          break;
        case 5:
          message.isDefault = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeTimelineTemplate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : "",
      isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
    };
  },

  toJSON(message: ChallengeTimelineTemplate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.isDefault !== undefined && (obj.isDefault = message.isDefault);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeTimelineTemplate>, I>>(object: I): ChallengeTimelineTemplate {
    const message = createBaseChallengeTimelineTemplate();
    message.id = object.id ?? "";
    message.trackId = object.trackId ?? "";
    message.typeId = object.typeId ?? "";
    message.timelineTemplateId = object.timelineTemplateId ?? "";
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseCreateChallengeTimelineTemplateInput(): CreateChallengeTimelineTemplateInput {
  return { trackId: "", typeId: "", timelineTemplateId: "", isDefault: false };
}

export const CreateChallengeTimelineTemplateInput = {
  encode(message: CreateChallengeTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackId !== "") {
      writer.uint32(10).string(message.trackId);
    }
    if (message.typeId !== "") {
      writer.uint32(18).string(message.typeId);
    }
    if (message.timelineTemplateId !== "") {
      writer.uint32(26).string(message.timelineTemplateId);
    }
    if (message.isDefault === true) {
      writer.uint32(32).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeTimelineTemplateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackId = reader.string();
          break;
        case 2:
          message.typeId = reader.string();
          break;
        case 3:
          message.timelineTemplateId = reader.string();
          break;
        case 4:
          message.isDefault = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeTimelineTemplateInput {
    return {
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : "",
      isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
    };
  },

  toJSON(message: CreateChallengeTimelineTemplateInput): unknown {
    const obj: any = {};
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.isDefault !== undefined && (obj.isDefault = message.isDefault);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeTimelineTemplateInput>, I>>(
    object: I,
  ): CreateChallengeTimelineTemplateInput {
    const message = createBaseCreateChallengeTimelineTemplateInput();
    message.trackId = object.trackId ?? "";
    message.typeId = object.typeId ?? "";
    message.timelineTemplateId = object.timelineTemplateId ?? "";
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseUpdateChallengeTimelineTemplateInput(): UpdateChallengeTimelineTemplateInput {
  return { id: "", trackId: undefined, typeId: undefined, timelineTemplateId: undefined, isDefault: false };
}

export const UpdateChallengeTimelineTemplateInput = {
  encode(message: UpdateChallengeTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.trackId !== undefined) {
      writer.uint32(18).string(message.trackId);
    }
    if (message.typeId !== undefined) {
      writer.uint32(26).string(message.typeId);
    }
    if (message.timelineTemplateId !== undefined) {
      writer.uint32(34).string(message.timelineTemplateId);
    }
    if (message.isDefault === true) {
      writer.uint32(40).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTimelineTemplateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.trackId = reader.string();
          break;
        case 3:
          message.typeId = reader.string();
          break;
        case 4:
          message.timelineTemplateId = reader.string();
          break;
        case 5:
          message.isDefault = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTimelineTemplateInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      trackId: isSet(object.trackId) ? String(object.trackId) : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : undefined,
      isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
    };
  },

  toJSON(message: UpdateChallengeTimelineTemplateInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.isDefault !== undefined && (obj.isDefault = message.isDefault);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTimelineTemplateInput>, I>>(
    object: I,
  ): UpdateChallengeTimelineTemplateInput {
    const message = createBaseUpdateChallengeTimelineTemplateInput();
    message.id = object.id ?? "";
    message.trackId = object.trackId ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseChallengeTimelineTemplateList(): ChallengeTimelineTemplateList {
  return { challengeTimelineTemplates: [] };
}

export const ChallengeTimelineTemplateList = {
  encode(message: ChallengeTimelineTemplateList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.challengeTimelineTemplates) {
      ChallengeTimelineTemplate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTimelineTemplateList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTimelineTemplateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeTimelineTemplates.push(ChallengeTimelineTemplate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeTimelineTemplateList {
    return {
      challengeTimelineTemplates: Array.isArray(object?.challengeTimelineTemplates)
        ? object.challengeTimelineTemplates.map((e: any) => ChallengeTimelineTemplate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ChallengeTimelineTemplateList): unknown {
    const obj: any = {};
    if (message.challengeTimelineTemplates) {
      obj.challengeTimelineTemplates = message.challengeTimelineTemplates.map((e) =>
        e ? ChallengeTimelineTemplate.toJSON(e) : undefined
      );
    } else {
      obj.challengeTimelineTemplates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeTimelineTemplateList>, I>>(
    object: I,
  ): ChallengeTimelineTemplateList {
    const message = createBaseChallengeTimelineTemplateList();
    message.challengeTimelineTemplates =
      object.challengeTimelineTemplates?.map((e) => ChallengeTimelineTemplate.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
