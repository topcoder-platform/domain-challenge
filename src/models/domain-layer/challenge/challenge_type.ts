/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface ChallengeType {
  id: string;
  name: string;
  description?: string | undefined;
  isActive: boolean;
  isTask: boolean;
  abbreviation: string;
}

export interface CreateChallengeTypeInput {
  challengeType?: ChallengeType;
}

export interface UpdateChallengeTypeInput {
  challengeType?: ChallengeType;
}

export interface RemoveChallengeTypeInput {
  id: string;
}

function createBaseChallengeType(): ChallengeType {
  return { id: "", name: "", description: undefined, isActive: false, isTask: false, abbreviation: "" };
}

export const ChallengeType = {
  encode(message: ChallengeType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.isTask === true) {
      writer.uint32(40).bool(message.isTask);
    }
    if (message.abbreviation !== "") {
      writer.uint32(50).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeType();
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
          message.isTask = reader.bool();
          break;
        case 6:
          message.abbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeType {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      isTask: isSet(object.isTask) ? Boolean(object.isTask) : false,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
    };
  },

  toJSON(message: ChallengeType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isTask !== undefined && (obj.isTask = message.isTask);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeType>, I>>(object: I): ChallengeType {
    const message = createBaseChallengeType();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.isTask = object.isTask ?? false;
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },
};

function createBaseCreateChallengeTypeInput(): CreateChallengeTypeInput {
  return { challengeType: undefined };
}

export const CreateChallengeTypeInput = {
  encode(message: CreateChallengeTypeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeType !== undefined) {
      ChallengeType.encode(message.challengeType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeTypeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeTypeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeType = ChallengeType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeTypeInput {
    return { challengeType: isSet(object.challengeType) ? ChallengeType.fromJSON(object.challengeType) : undefined };
  },

  toJSON(message: CreateChallengeTypeInput): unknown {
    const obj: any = {};
    message.challengeType !== undefined &&
      (obj.challengeType = message.challengeType ? ChallengeType.toJSON(message.challengeType) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeTypeInput>, I>>(object: I): CreateChallengeTypeInput {
    const message = createBaseCreateChallengeTypeInput();
    message.challengeType = (object.challengeType !== undefined && object.challengeType !== null)
      ? ChallengeType.fromPartial(object.challengeType)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeTypeInput(): UpdateChallengeTypeInput {
  return { challengeType: undefined };
}

export const UpdateChallengeTypeInput = {
  encode(message: UpdateChallengeTypeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeType !== undefined) {
      ChallengeType.encode(message.challengeType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTypeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTypeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeType = ChallengeType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTypeInput {
    return { challengeType: isSet(object.challengeType) ? ChallengeType.fromJSON(object.challengeType) : undefined };
  },

  toJSON(message: UpdateChallengeTypeInput): unknown {
    const obj: any = {};
    message.challengeType !== undefined &&
      (obj.challengeType = message.challengeType ? ChallengeType.toJSON(message.challengeType) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTypeInput>, I>>(object: I): UpdateChallengeTypeInput {
    const message = createBaseUpdateChallengeTypeInput();
    message.challengeType = (object.challengeType !== undefined && object.challengeType !== null)
      ? ChallengeType.fromPartial(object.challengeType)
      : undefined;
    return message;
  },
};

function createBaseRemoveChallengeTypeInput(): RemoveChallengeTypeInput {
  return { id: "" };
}

export const RemoveChallengeTypeInput = {
  encode(message: RemoveChallengeTypeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveChallengeTypeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveChallengeTypeInput();
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

  fromJSON(object: any): RemoveChallengeTypeInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RemoveChallengeTypeInput): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveChallengeTypeInput>, I>>(object: I): RemoveChallengeTypeInput {
    const message = createBaseRemoveChallengeTypeInput();
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
