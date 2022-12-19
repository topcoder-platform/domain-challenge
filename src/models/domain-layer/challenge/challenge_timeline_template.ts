/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Boolean, booleanFromJSON, booleanToJSON } from "../../common/common";

export interface ChallengeTimelineTemplate {
  id: string;
  trackId: string;
  typeId: string;
  timelineTemplateId: string;
  isDefault?: Boolean | undefined;
}

export interface CreateChallengeTimelineTemplateInput {
  challengeTimelineTemplate?: ChallengeTimelineTemplate;
}

export interface UpdateChallengeTimelineTemplateInput {
  challengeTimelineTemplate?: ChallengeTimelineTemplate;
}

export interface RemoveChallengeTimelineTemplateInput {
  id: string;
}

function createBaseChallengeTimelineTemplate(): ChallengeTimelineTemplate {
  return { id: "", trackId: "", typeId: "", timelineTemplateId: "", isDefault: undefined };
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
    if (message.isDefault !== undefined) {
      writer.uint32(40).int32(message.isDefault);
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
          message.isDefault = reader.int32() as any;
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
      isDefault: isSet(object.isDefault) ? booleanFromJSON(object.isDefault) : undefined,
    };
  },

  toJSON(message: ChallengeTimelineTemplate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.isDefault !== undefined &&
      (obj.isDefault = message.isDefault !== undefined ? booleanToJSON(message.isDefault) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeTimelineTemplate>, I>>(object: I): ChallengeTimelineTemplate {
    const message = createBaseChallengeTimelineTemplate();
    message.id = object.id ?? "";
    message.trackId = object.trackId ?? "";
    message.typeId = object.typeId ?? "";
    message.timelineTemplateId = object.timelineTemplateId ?? "";
    message.isDefault = object.isDefault ?? undefined;
    return message;
  },
};

function createBaseCreateChallengeTimelineTemplateInput(): CreateChallengeTimelineTemplateInput {
  return { challengeTimelineTemplate: undefined };
}

export const CreateChallengeTimelineTemplateInput = {
  encode(message: CreateChallengeTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeTimelineTemplate !== undefined) {
      ChallengeTimelineTemplate.encode(message.challengeTimelineTemplate, writer.uint32(10).fork()).ldelim();
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
          message.challengeTimelineTemplate = ChallengeTimelineTemplate.decode(reader, reader.uint32());
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
      challengeTimelineTemplate: isSet(object.challengeTimelineTemplate)
        ? ChallengeTimelineTemplate.fromJSON(object.challengeTimelineTemplate)
        : undefined,
    };
  },

  toJSON(message: CreateChallengeTimelineTemplateInput): unknown {
    const obj: any = {};
    message.challengeTimelineTemplate !== undefined &&
      (obj.challengeTimelineTemplate = message.challengeTimelineTemplate
        ? ChallengeTimelineTemplate.toJSON(message.challengeTimelineTemplate)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeTimelineTemplateInput>, I>>(
    object: I,
  ): CreateChallengeTimelineTemplateInput {
    const message = createBaseCreateChallengeTimelineTemplateInput();
    message.challengeTimelineTemplate =
      (object.challengeTimelineTemplate !== undefined && object.challengeTimelineTemplate !== null)
        ? ChallengeTimelineTemplate.fromPartial(object.challengeTimelineTemplate)
        : undefined;
    return message;
  },
};

function createBaseUpdateChallengeTimelineTemplateInput(): UpdateChallengeTimelineTemplateInput {
  return { challengeTimelineTemplate: undefined };
}

export const UpdateChallengeTimelineTemplateInput = {
  encode(message: UpdateChallengeTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeTimelineTemplate !== undefined) {
      ChallengeTimelineTemplate.encode(message.challengeTimelineTemplate, writer.uint32(10).fork()).ldelim();
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
          message.challengeTimelineTemplate = ChallengeTimelineTemplate.decode(reader, reader.uint32());
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
      challengeTimelineTemplate: isSet(object.challengeTimelineTemplate)
        ? ChallengeTimelineTemplate.fromJSON(object.challengeTimelineTemplate)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeTimelineTemplateInput): unknown {
    const obj: any = {};
    message.challengeTimelineTemplate !== undefined &&
      (obj.challengeTimelineTemplate = message.challengeTimelineTemplate
        ? ChallengeTimelineTemplate.toJSON(message.challengeTimelineTemplate)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTimelineTemplateInput>, I>>(
    object: I,
  ): UpdateChallengeTimelineTemplateInput {
    const message = createBaseUpdateChallengeTimelineTemplateInput();
    message.challengeTimelineTemplate =
      (object.challengeTimelineTemplate !== undefined && object.challengeTimelineTemplate !== null)
        ? ChallengeTimelineTemplate.fromPartial(object.challengeTimelineTemplate)
        : undefined;
    return message;
  },
};

function createBaseRemoveChallengeTimelineTemplateInput(): RemoveChallengeTimelineTemplateInput {
  return { id: "" };
}

export const RemoveChallengeTimelineTemplateInput = {
  encode(message: RemoveChallengeTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveChallengeTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveChallengeTimelineTemplateInput();
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

  fromJSON(object: any): RemoveChallengeTimelineTemplateInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RemoveChallengeTimelineTemplateInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveChallengeTimelineTemplateInput>, I>>(
    object: I,
  ): RemoveChallengeTimelineTemplateInput {
    const message = createBaseRemoveChallengeTimelineTemplateInput();
    message.id = object.id ?? "";
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
