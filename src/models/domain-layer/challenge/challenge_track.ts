/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";

export interface ChallengeTrack {
  id: string;
  name: string;
  description?: string | undefined;
  isActive: boolean;
  abbreviation: string;
}

export interface ChallengeTrackList {
  items: ChallengeTrack[];
}

export interface CreateChallengeTrackInput {
  name: string;
  description?: string | undefined;
  isActive: boolean;
  abbreviation: string;
}

export interface UpdateChallengeTrackInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateChallengeTrackInput_UpdateInput | undefined;
}

export interface UpdateChallengeTrackInput_UpdateInput {
  name: string;
  description?: string | undefined;
  isActive: boolean;
  abbreviation: string;
}

function createBaseChallengeTrack(): ChallengeTrack {
  return { id: "", name: "", description: undefined, isActive: false, abbreviation: "" };
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
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive);
    }
    if (message.abbreviation !== "") {
      writer.uint32(42).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTrack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTrack();
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

          message.abbreviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeTrack {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      isActive: isSet(object.isActive) ? globalThis.Boolean(object.isActive) : false,
      abbreviation: isSet(object.abbreviation) ? globalThis.String(object.abbreviation) : "",
    };
  },

  toJSON(message: ChallengeTrack): unknown {
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
    if (message.abbreviation !== "") {
      obj.abbreviation = message.abbreviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeTrack>, I>>(base?: I): ChallengeTrack {
    return ChallengeTrack.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeTrack>, I>>(object: I): ChallengeTrack {
    const message = createBaseChallengeTrack();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },
};

function createBaseChallengeTrackList(): ChallengeTrackList {
  return { items: [] };
}

export const ChallengeTrackList = {
  encode(message: ChallengeTrackList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ChallengeTrack.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTrackList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTrackList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ChallengeTrack.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeTrackList {
    return {
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => ChallengeTrack.fromJSON(e)) : [],
    };
  },

  toJSON(message: ChallengeTrackList): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => ChallengeTrack.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeTrackList>, I>>(base?: I): ChallengeTrackList {
    return ChallengeTrackList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeTrackList>, I>>(object: I): ChallengeTrackList {
    const message = createBaseChallengeTrackList();
    message.items = object.items?.map((e) => ChallengeTrack.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeTrackInput(): CreateChallengeTrackInput {
  return { name: "", description: undefined, isActive: false, abbreviation: "" };
}

export const CreateChallengeTrackInput = {
  encode(message: CreateChallengeTrackInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.isActive === true) {
      writer.uint32(24).bool(message.isActive);
    }
    if (message.abbreviation !== "") {
      writer.uint32(34).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeTrackInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeTrackInput();
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

          message.abbreviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeTrackInput {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      isActive: isSet(object.isActive) ? globalThis.Boolean(object.isActive) : false,
      abbreviation: isSet(object.abbreviation) ? globalThis.String(object.abbreviation) : "",
    };
  },

  toJSON(message: CreateChallengeTrackInput): unknown {
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
    if (message.abbreviation !== "") {
      obj.abbreviation = message.abbreviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeTrackInput>, I>>(base?: I): CreateChallengeTrackInput {
    return CreateChallengeTrackInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChallengeTrackInput>, I>>(object: I): CreateChallengeTrackInput {
    const message = createBaseCreateChallengeTrackInput();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },
};

function createBaseUpdateChallengeTrackInput(): UpdateChallengeTrackInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateChallengeTrackInput = {
  encode(message: UpdateChallengeTrackInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateChallengeTrackInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTrackInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTrackInput();
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

          message.updateInput = UpdateChallengeTrackInput_UpdateInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTrackInput {
    return {
      filterCriteria: globalThis.Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateChallengeTrackInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeTrackInput): unknown {
    const obj: any = {};
    if (message.filterCriteria?.length) {
      obj.filterCriteria = message.filterCriteria.map((e) => ScanCriteria.toJSON(e));
    }
    if (message.updateInput !== undefined) {
      obj.updateInput = UpdateChallengeTrackInput_UpdateInput.toJSON(message.updateInput);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTrackInput>, I>>(base?: I): UpdateChallengeTrackInput {
    return UpdateChallengeTrackInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTrackInput>, I>>(object: I): UpdateChallengeTrackInput {
    const message = createBaseUpdateChallengeTrackInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateChallengeTrackInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeTrackInput_UpdateInput(): UpdateChallengeTrackInput_UpdateInput {
  return { name: "", description: undefined, isActive: false, abbreviation: "" };
}

export const UpdateChallengeTrackInput_UpdateInput = {
  encode(message: UpdateChallengeTrackInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive);
    }
    if (message.abbreviation !== "") {
      writer.uint32(42).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTrackInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTrackInput_UpdateInput();
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

          message.abbreviation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTrackInput_UpdateInput {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : undefined,
      isActive: isSet(object.isActive) ? globalThis.Boolean(object.isActive) : false,
      abbreviation: isSet(object.abbreviation) ? globalThis.String(object.abbreviation) : "",
    };
  },

  toJSON(message: UpdateChallengeTrackInput_UpdateInput): unknown {
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
    if (message.abbreviation !== "") {
      obj.abbreviation = message.abbreviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTrackInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateChallengeTrackInput_UpdateInput {
    return UpdateChallengeTrackInput_UpdateInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTrackInput_UpdateInput>, I>>(
    object: I,
  ): UpdateChallengeTrackInput_UpdateInput {
    const message = createBaseUpdateChallengeTrackInput_UpdateInput();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
