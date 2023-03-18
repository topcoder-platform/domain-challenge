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
  updateInput?: UpdateChallengeTypeInput_UpdateInput;
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

  create<I extends Exact<DeepPartial<ChallengeType>, I>>(base?: I): ChallengeType {
    return ChallengeType.fromPartial(base ?? {});
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
          message.items.push(ChallengeType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeTypeList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => ChallengeType.fromJSON(e)) : [] };
  },

  toJSON(message: ChallengeTypeList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ChallengeType.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeTypeList>, I>>(base?: I): ChallengeTypeList {
    return ChallengeTypeList.fromPartial(base ?? {});
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
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.isActive = reader.bool();
          break;
        case 4:
          message.isTask = reader.bool();
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
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isTask !== undefined && (obj.isTask = message.isTask);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeTypeInput>, I>>(base?: I): CreateChallengeTypeInput {
    return CreateChallengeTypeInput.fromPartial(base ?? {});
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
          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updateInput = UpdateChallengeTypeInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTypeInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateChallengeTypeInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeTypeInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined && (obj.updateInput = message.updateInput
      ? UpdateChallengeTypeInput_UpdateInput.toJSON(message.updateInput)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTypeInput>, I>>(base?: I): UpdateChallengeTypeInput {
    return UpdateChallengeTypeInput.fromPartial(base ?? {});
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
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isTask !== undefined && (obj.isTask = message.isTask);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTypeInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateChallengeTypeInput_UpdateInput {
    return UpdateChallengeTypeInput_UpdateInput.fromPartial(base ?? {});
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
