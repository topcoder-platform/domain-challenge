/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface ResourceInfo {
  resourceId: number;
  resourceInfoTypeId: number;
  value: string;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

function createBaseResourceInfo(): ResourceInfo {
  return {
    resourceId: 0,
    resourceInfoTypeId: 0,
    value: "",
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const ResourceInfo = {
  encode(message: ResourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.resourceInfoTypeId !== 0) {
      writer.uint32(16).int32(message.resourceInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.createUser !== 0) {
      writer.uint32(32).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(40).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(56).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.resourceInfoTypeId = reader.int32();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.createUser = reader.int32();
          break;
        case 5:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.modifyUser = reader.int32();
          break;
        case 7:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceInfo {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      resourceInfoTypeId: isSet(object.resourceInfoTypeId) ? Number(object.resourceInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: ResourceInfo): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.resourceInfoTypeId !== undefined && (obj.resourceInfoTypeId = Math.round(message.resourceInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceInfo>, I>>(base?: I): ResourceInfo {
    return ResourceInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResourceInfo>, I>>(object: I): ResourceInfo {
    const message = createBaseResourceInfo();
    message.resourceId = object.resourceId ?? 0;
    message.resourceInfoTypeId = object.resourceInfoTypeId ?? 0;
    message.value = object.value ?? "";
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
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
