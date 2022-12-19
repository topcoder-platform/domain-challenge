/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Boolean, booleanFromJSON, booleanToJSON } from "../../common/common";

export interface ChallengeTrack {
  id: string;
  name: string;
  description?: string | undefined;
  isActive: Boolean;
  abbreviation: string;
}

export interface CreateChallengeTrackInput {
  challengeTrack?: ChallengeTrack;
}

export interface UpdateChallengeTrackInput {
  challengeTrack?: ChallengeTrack;
}

export interface RemoveChallengeTrackInput {
  id: string;
}

function createBaseChallengeTrack(): ChallengeTrack {
  return { id: "", name: "", description: undefined, isActive: 0, abbreviation: "" };
}

export const ChallengeTrack = {
  encode(message: ChallengeTrack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.isActive !== 0) {
      writer.uint32(32).int32(message.isActive);
    }
    if (message.abbreviation !== "") {
      writer.uint32(42).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTrack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTrack();
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
          message.isActive = reader.int32() as any;
          break;
        case 5:
          message.abbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeTrack {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? booleanFromJSON(object.isActive) : 0,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
    };
  },

  toJSON(message: ChallengeTrack): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isActive !== undefined && (obj.isActive = booleanToJSON(message.isActive));
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeTrack>, I>>(object: I): ChallengeTrack {
    const message = createBaseChallengeTrack();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? 0;
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },
};

function createBaseCreateChallengeTrackInput(): CreateChallengeTrackInput {
  return { challengeTrack: undefined };
}

export const CreateChallengeTrackInput = {
  encode(message: CreateChallengeTrackInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeTrack !== undefined) {
      ChallengeTrack.encode(message.challengeTrack, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeTrackInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeTrackInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeTrack = ChallengeTrack.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeTrackInput {
    return {
      challengeTrack: isSet(object.challengeTrack) ? ChallengeTrack.fromJSON(object.challengeTrack) : undefined,
    };
  },

  toJSON(message: CreateChallengeTrackInput): unknown {
    const obj: any = {};
    message.challengeTrack !== undefined &&
      (obj.challengeTrack = message.challengeTrack ? ChallengeTrack.toJSON(message.challengeTrack) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeTrackInput>, I>>(object: I): CreateChallengeTrackInput {
    const message = createBaseCreateChallengeTrackInput();
    message.challengeTrack = (object.challengeTrack !== undefined && object.challengeTrack !== null)
      ? ChallengeTrack.fromPartial(object.challengeTrack)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeTrackInput(): UpdateChallengeTrackInput {
  return { challengeTrack: undefined };
}

export const UpdateChallengeTrackInput = {
  encode(message: UpdateChallengeTrackInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeTrack !== undefined) {
      ChallengeTrack.encode(message.challengeTrack, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTrackInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTrackInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeTrack = ChallengeTrack.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTrackInput {
    return {
      challengeTrack: isSet(object.challengeTrack) ? ChallengeTrack.fromJSON(object.challengeTrack) : undefined,
    };
  },

  toJSON(message: UpdateChallengeTrackInput): unknown {
    const obj: any = {};
    message.challengeTrack !== undefined &&
      (obj.challengeTrack = message.challengeTrack ? ChallengeTrack.toJSON(message.challengeTrack) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTrackInput>, I>>(object: I): UpdateChallengeTrackInput {
    const message = createBaseUpdateChallengeTrackInput();
    message.challengeTrack = (object.challengeTrack !== undefined && object.challengeTrack !== null)
      ? ChallengeTrack.fromPartial(object.challengeTrack)
      : undefined;
    return message;
  },
};

function createBaseRemoveChallengeTrackInput(): RemoveChallengeTrackInput {
  return { id: "" };
}

export const RemoveChallengeTrackInput = {
  encode(message: RemoveChallengeTrackInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveChallengeTrackInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveChallengeTrackInput();
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

  fromJSON(object: any): RemoveChallengeTrackInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RemoveChallengeTrackInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveChallengeTrackInput>, I>>(object: I): RemoveChallengeTrackInput {
    const message = createBaseRemoveChallengeTrackInput();
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
