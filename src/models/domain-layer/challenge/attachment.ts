/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";

export interface Attachment {
  id: string;
  url: string;
  fileSize: number;
  name: string;
  challengeId: string;
  description?: string | undefined;
}

export interface AttachmentList {
  items: Attachment[];
}

export interface CreateAttachmentInput {
  url: string;
  fileSize: number;
  name: string;
  challengeId: string;
  description?: string | undefined;
}

export interface UpdateAttachmentInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateAttachmentInput_UpdateInput;
}

export interface UpdateAttachmentInput_UpdateInput {
  url: string;
  fileSize: number;
  name: string;
  challengeId: string;
  description?: string | undefined;
}

function createBaseAttachment(): Attachment {
  return { id: "", url: "", fileSize: 0, name: "", challengeId: "", description: undefined };
}

export const Attachment = {
  encode(message: Attachment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.fileSize !== 0) {
      writer.uint32(24).int64(message.fileSize);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.challengeId !== "") {
      writer.uint32(42).string(message.challengeId);
    }
    if (message.description !== undefined) {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.fileSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.challengeId = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attachment {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      url: isSet(object.url) ? String(object.url) : "",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
    };
  },

  toJSON(message: Attachment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.url !== undefined && (obj.url = message.url);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.name !== undefined && (obj.name = message.name);
    message.challengeId !== undefined && (obj.challengeId = message.challengeId);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attachment>, I>>(object: I): Attachment {
    const message = createBaseAttachment();
    message.id = object.id ?? "";
    message.url = object.url ?? "";
    message.fileSize = object.fileSize ?? 0;
    message.name = object.name ?? "";
    message.challengeId = object.challengeId ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseAttachmentList(): AttachmentList {
  return { items: [] };
}

export const AttachmentList = {
  encode(message: AttachmentList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Attachment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachmentList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachmentList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Attachment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachmentList {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => Attachment.fromJSON(e)) : [] };
  },

  toJSON(message: AttachmentList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? Attachment.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachmentList>, I>>(object: I): AttachmentList {
    const message = createBaseAttachmentList();
    message.items = object.items?.map((e) => Attachment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateAttachmentInput(): CreateAttachmentInput {
  return { url: "", fileSize: 0, name: "", challengeId: "", description: undefined };
}

export const CreateAttachmentInput = {
  encode(message: CreateAttachmentInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.fileSize !== 0) {
      writer.uint32(16).int64(message.fileSize);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.challengeId !== "") {
      writer.uint32(34).string(message.challengeId);
    }
    if (message.description !== undefined) {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAttachmentInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAttachmentInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.fileSize = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.challengeId = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAttachmentInput {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
    };
  },

  toJSON(message: CreateAttachmentInput): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.name !== undefined && (obj.name = message.name);
    message.challengeId !== undefined && (obj.challengeId = message.challengeId);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAttachmentInput>, I>>(object: I): CreateAttachmentInput {
    const message = createBaseCreateAttachmentInput();
    message.url = object.url ?? "";
    message.fileSize = object.fileSize ?? 0;
    message.name = object.name ?? "";
    message.challengeId = object.challengeId ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseUpdateAttachmentInput(): UpdateAttachmentInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateAttachmentInput = {
  encode(message: UpdateAttachmentInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateAttachmentInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAttachmentInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAttachmentInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updateInput = UpdateAttachmentInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAttachmentInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateAttachmentInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateAttachmentInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined &&
      (obj.updateInput = message.updateInput
        ? UpdateAttachmentInput_UpdateInput.toJSON(message.updateInput)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAttachmentInput>, I>>(object: I): UpdateAttachmentInput {
    const message = createBaseUpdateAttachmentInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateAttachmentInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateAttachmentInput_UpdateInput(): UpdateAttachmentInput_UpdateInput {
  return { url: "", fileSize: 0, name: "", challengeId: "", description: undefined };
}

export const UpdateAttachmentInput_UpdateInput = {
  encode(message: UpdateAttachmentInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.fileSize !== 0) {
      writer.uint32(24).int64(message.fileSize);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.challengeId !== "") {
      writer.uint32(42).string(message.challengeId);
    }
    if (message.description !== undefined) {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAttachmentInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAttachmentInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.fileSize = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.challengeId = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAttachmentInput_UpdateInput {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      challengeId: isSet(object.challengeId) ? String(object.challengeId) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
    };
  },

  toJSON(message: UpdateAttachmentInput_UpdateInput): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.name !== undefined && (obj.name = message.name);
    message.challengeId !== undefined && (obj.challengeId = message.challengeId);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAttachmentInput_UpdateInput>, I>>(
    object: I,
  ): UpdateAttachmentInput_UpdateInput {
    const message = createBaseUpdateAttachmentInput_UpdateInput();
    message.url = object.url ?? "";
    message.fileSize = object.fileSize ?? 0;
    message.name = object.name ?? "";
    message.challengeId = object.challengeId ?? "";
    message.description = object.description ?? undefined;
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
