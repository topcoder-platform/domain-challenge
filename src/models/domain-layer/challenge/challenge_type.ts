/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";

export interface ChallengeType {
  id: string;
  name: string;
  description?: string | undefined;
  isActive: boolean;
  isTask: boolean;
  abbreviation: string;
}

export interface ChallengeTypeList {
  items: ChallengeType[];
}

export interface CreateChallengeTypeInput {
  name: string;
  description?: string | undefined;
  isActive: boolean;
  isTask: boolean;
  abbreviation: string;
}

export interface UpdateChallengeTypeInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateChallengeTypeInput_UpdateInput | undefined;
}

export interface UpdateChallengeTypeInput_UpdateInput {
  name: string;
  description?: string | undefined;
  isActive: boolean;
  isTask: boolean;
  abbreviation: string;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeType();
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
          if (tag !== 40) {
            break;
          }

          message.isTask = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
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
    if (message.isTask === true) {
      obj.isTask = message.isTask;
    }
    if (message.abbreviation !== "") {
      obj.abbreviation = message.abbreviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeType>, I>>(base?: I): ChallengeType {
    return ChallengeType.fromPartial(base ?? ({} as any));
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

function createBaseChallengeTypeList(): ChallengeTypeList {
  return { items: [] };
}

export const ChallengeTypeList = {
  encode(message: ChallengeTypeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ChallengeType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTypeList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTypeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ChallengeType.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeTypeList {
    return {
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => ChallengeType.fromJSON(e)) : [],
    };
  },

  toJSON(message: ChallengeTypeList): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => ChallengeType.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeTypeList>, I>>(base?: I): ChallengeTypeList {
    return ChallengeTypeList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeTypeList>, I>>(object: I): ChallengeTypeList {
    const message = createBaseChallengeTypeList();
    message.items = object.items?.map((e) => ChallengeType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeTypeInput(): CreateChallengeTypeInput {
  return { name: "", description: undefined, isActive: false, isTask: false, abbreviation: "" };
}

export const CreateChallengeTypeInput = {
  encode(message: CreateChallengeTypeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.isActive === true) {
      writer.uint32(24).bool(message.isActive);
    }
    if (message.isTask === true) {
      writer.uint32(32).bool(message.isTask);
    }
    if (message.abbreviation !== "") {
      writer.uint32(42).string(message.abbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeTypeInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeTypeInput();
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
          if (tag !== 32) {
            break;
          }

          message.isTask = reader.bool();
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

  fromJSON(object: any): CreateChallengeTypeInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      isTask: isSet(object.isTask) ? Boolean(object.isTask) : false,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
    };
  },

  toJSON(message: CreateChallengeTypeInput): unknown {
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
    if (message.isTask === true) {
      obj.isTask = message.isTask;
    }
    if (message.abbreviation !== "") {
      obj.abbreviation = message.abbreviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeTypeInput>, I>>(base?: I): CreateChallengeTypeInput {
    return CreateChallengeTypeInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChallengeTypeInput>, I>>(object: I): CreateChallengeTypeInput {
    const message = createBaseCreateChallengeTypeInput();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.isTask = object.isTask ?? false;
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },
};

function createBaseUpdateChallengeTypeInput(): UpdateChallengeTypeInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateChallengeTypeInput = {
  encode(message: UpdateChallengeTypeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateChallengeTypeInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTypeInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTypeInput();
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

          message.updateInput = UpdateChallengeTypeInput_UpdateInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTypeInput {
    return {
      filterCriteria: globalThis.Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateChallengeTypeInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeTypeInput): unknown {
    const obj: any = {};
    if (message.filterCriteria?.length) {
      obj.filterCriteria = message.filterCriteria.map((e) => ScanCriteria.toJSON(e));
    }
    if (message.updateInput !== undefined) {
      obj.updateInput = UpdateChallengeTypeInput_UpdateInput.toJSON(message.updateInput);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTypeInput>, I>>(base?: I): UpdateChallengeTypeInput {
    return UpdateChallengeTypeInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTypeInput>, I>>(object: I): UpdateChallengeTypeInput {
    const message = createBaseUpdateChallengeTypeInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateChallengeTypeInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeTypeInput_UpdateInput(): UpdateChallengeTypeInput_UpdateInput {
  return { name: "", description: undefined, isActive: false, isTask: false, abbreviation: "" };
}

export const UpdateChallengeTypeInput_UpdateInput = {
  encode(message: UpdateChallengeTypeInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTypeInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTypeInput_UpdateInput();
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
          if (tag !== 40) {
            break;
          }

          message.isTask = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): UpdateChallengeTypeInput_UpdateInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      isTask: isSet(object.isTask) ? Boolean(object.isTask) : false,
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
    };
  },

  toJSON(message: UpdateChallengeTypeInput_UpdateInput): unknown {
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
    if (message.isTask === true) {
      obj.isTask = message.isTask;
    }
    if (message.abbreviation !== "") {
      obj.abbreviation = message.abbreviation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTypeInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateChallengeTypeInput_UpdateInput {
    return UpdateChallengeTypeInput_UpdateInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTypeInput_UpdateInput>, I>>(
    object: I,
  ): UpdateChallengeTypeInput_UpdateInput {
    const message = createBaseUpdateChallengeTypeInput_UpdateInput();
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.isActive = object.isActive ?? false;
    message.isTask = object.isTask ?? false;
    message.abbreviation = object.abbreviation ?? "";
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
