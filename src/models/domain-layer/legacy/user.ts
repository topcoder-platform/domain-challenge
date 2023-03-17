/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  createDate: number;
  modifyDate: number;
  handle: string;
  status: string;
  handleLower: string;
}

function createBaseUser(): User {
  return {
    userId: 0,
    firstName: "",
    lastName: "",
    createDate: 0,
    modifyDate: 0,
    handle: "",
    status: "",
    handleLower: "",
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.createDate !== 0) {
      writer.uint32(32).int64(message.createDate);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(40).int64(message.modifyDate);
    }
    if (message.handle !== "") {
      writer.uint32(50).string(message.handle);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    if (message.handleLower !== "") {
      writer.uint32(90).string(message.handleLower);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.handle = reader.string();
          break;
        case 8:
          message.status = reader.string();
          break;
        case 11:
          message.handleLower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
      handle: isSet(object.handle) ? String(object.handle) : "",
      status: isSet(object.status) ? String(object.status) : "",
      handleLower: isSet(object.handleLower) ? String(object.handleLower) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    message.handle !== undefined && (obj.handle = message.handle);
    message.status !== undefined && (obj.status = message.status);
    message.handleLower !== undefined && (obj.handleLower = message.handleLower);
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.userId = object.userId ?? 0;
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.createDate = object.createDate ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    message.handle = object.handle ?? "";
    message.status = object.status ?? "";
    message.handleLower = object.handleLower ?? "";
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
