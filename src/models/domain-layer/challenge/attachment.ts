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
  updateInput?: UpdateAttachmentInput_UpdateInput | undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachment();
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

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fileSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.challengeId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.fileSize !== 0) {
      obj.fileSize = Math.round(message.fileSize);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.challengeId !== "") {
      obj.challengeId = message.challengeId;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attachment>, I>>(base?: I): Attachment {
    return Attachment.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachmentList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Attachment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachmentList {
    return {
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => Attachment.fromJSON(e)) : [],
    };
  },

  toJSON(message: AttachmentList): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => Attachment.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachmentList>, I>>(base?: I): AttachmentList {
    return AttachmentList.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAttachmentInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fileSize = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.challengeId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.fileSize !== 0) {
      obj.fileSize = Math.round(message.fileSize);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.challengeId !== "") {
      obj.challengeId = message.challengeId;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAttachmentInput>, I>>(base?: I): CreateAttachmentInput {
    return CreateAttachmentInput.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAttachmentInput();
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

          message.updateInput = UpdateAttachmentInput_UpdateInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAttachmentInput {
    return {
      filterCriteria: globalThis.Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateAttachmentInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateAttachmentInput): unknown {
    const obj: any = {};
    if (message.filterCriteria?.length) {
      obj.filterCriteria = message.filterCriteria.map((e) => ScanCriteria.toJSON(e));
    }
    if (message.updateInput !== undefined) {
      obj.updateInput = UpdateAttachmentInput_UpdateInput.toJSON(message.updateInput);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAttachmentInput>, I>>(base?: I): UpdateAttachmentInput {
    return UpdateAttachmentInput.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAttachmentInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fileSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.challengeId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.fileSize !== 0) {
      obj.fileSize = Math.round(message.fileSize);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.challengeId !== "") {
      obj.challengeId = message.challengeId;
    }
    if (message.description !== undefined) {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAttachmentInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateAttachmentInput_UpdateInput {
    return UpdateAttachmentInput_UpdateInput.fromPartial(base ?? ({} as any));
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
