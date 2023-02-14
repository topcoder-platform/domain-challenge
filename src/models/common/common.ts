/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../google/protobuf/empty";
import { Struct, Value } from "../google/protobuf/struct";
import { Timestamp } from "../google/protobuf/timestamp";

export enum Operator {
  OPERATOR_UNSPECIFIED = 0,
  OPERATOR_EQUAL = 1,
  OPERATOR_NOT_EQUAL = 2,
  OPERATOR_GREATER_THAN = 3,
  OPERATOR_GREATER_THAN_OR_EQUAL = 4,
  OPERATOR_LESS_THAN = 5,
  OPERATOR_LESS_THAN_OR_EQUAL = 6,
  OPERATOR_AND = 7,
  OPERATOR_BETWEEN = 8,
  OPERATOR_IN = 9,
  OPERATOR_IS = 10,
  OPERATOR_NOT = 11,
  OPERATOR_OR = 12,
  UNRECOGNIZED = -1,
}

export function operatorFromJSON(object: any): Operator {
  switch (object) {
    case 0:
    case "OPERATOR_UNSPECIFIED":
      return Operator.OPERATOR_UNSPECIFIED;
    case 1:
    case "OPERATOR_EQUAL":
      return Operator.OPERATOR_EQUAL;
    case 2:
    case "OPERATOR_NOT_EQUAL":
      return Operator.OPERATOR_NOT_EQUAL;
    case 3:
    case "OPERATOR_GREATER_THAN":
      return Operator.OPERATOR_GREATER_THAN;
    case 4:
    case "OPERATOR_GREATER_THAN_OR_EQUAL":
      return Operator.OPERATOR_GREATER_THAN_OR_EQUAL;
    case 5:
    case "OPERATOR_LESS_THAN":
      return Operator.OPERATOR_LESS_THAN;
    case 6:
    case "OPERATOR_LESS_THAN_OR_EQUAL":
      return Operator.OPERATOR_LESS_THAN_OR_EQUAL;
    case 7:
    case "OPERATOR_AND":
      return Operator.OPERATOR_AND;
    case 8:
    case "OPERATOR_BETWEEN":
      return Operator.OPERATOR_BETWEEN;
    case 9:
    case "OPERATOR_IN":
      return Operator.OPERATOR_IN;
    case 10:
    case "OPERATOR_IS":
      return Operator.OPERATOR_IS;
    case 11:
    case "OPERATOR_NOT":
      return Operator.OPERATOR_NOT;
    case 12:
    case "OPERATOR_OR":
      return Operator.OPERATOR_OR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Operator.UNRECOGNIZED;
  }
}

export function operatorToJSON(object: Operator): string {
  switch (object) {
    case Operator.OPERATOR_UNSPECIFIED:
      return "OPERATOR_UNSPECIFIED";
    case Operator.OPERATOR_EQUAL:
      return "OPERATOR_EQUAL";
    case Operator.OPERATOR_NOT_EQUAL:
      return "OPERATOR_NOT_EQUAL";
    case Operator.OPERATOR_GREATER_THAN:
      return "OPERATOR_GREATER_THAN";
    case Operator.OPERATOR_GREATER_THAN_OR_EQUAL:
      return "OPERATOR_GREATER_THAN_OR_EQUAL";
    case Operator.OPERATOR_LESS_THAN:
      return "OPERATOR_LESS_THAN";
    case Operator.OPERATOR_LESS_THAN_OR_EQUAL:
      return "OPERATOR_LESS_THAN_OR_EQUAL";
    case Operator.OPERATOR_AND:
      return "OPERATOR_AND";
    case Operator.OPERATOR_BETWEEN:
      return "OPERATOR_BETWEEN";
    case Operator.OPERATOR_IN:
      return "OPERATOR_IN";
    case Operator.OPERATOR_IS:
      return "OPERATOR_IS";
    case Operator.OPERATOR_NOT:
      return "OPERATOR_NOT";
    case Operator.OPERATOR_OR:
      return "OPERATOR_OR";
    case Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Domain {
  DOMAIN_UNSPECIFIED = 0,
  DOMAIN_RESOURCE = 1,
  DOMAIN_RESOURCE_ROLE = 2,
  DOMAIN_RESOURCE_ROLE_PHASE_DEPENDENCY = 3,
  DOMAIN_CHALLENGE = 4,
  DOMAIN_CHALLENGE_TYPE = 5,
  DOMAIN_CHALLENG_TIMELINE_TEMPLATE = 6,
  DOMAIN_CHALLENGE_TRACK = 7,
  DOMAIN_CHALLENGE_PHASE = 8,
  DOMAIN_CHALLENGE_TIMELINE_TEMPLATE = 9,
  DOMAIN_SUBMISSION = 10,
  UNRECOGNIZED = -1,
}

export function domainFromJSON(object: any): Domain {
  switch (object) {
    case 0:
    case "DOMAIN_UNSPECIFIED":
      return Domain.DOMAIN_UNSPECIFIED;
    case 1:
    case "DOMAIN_RESOURCE":
      return Domain.DOMAIN_RESOURCE;
    case 2:
    case "DOMAIN_RESOURCE_ROLE":
      return Domain.DOMAIN_RESOURCE_ROLE;
    case 3:
    case "DOMAIN_RESOURCE_ROLE_PHASE_DEPENDENCY":
      return Domain.DOMAIN_RESOURCE_ROLE_PHASE_DEPENDENCY;
    case 4:
    case "DOMAIN_CHALLENGE":
      return Domain.DOMAIN_CHALLENGE;
    case 5:
    case "DOMAIN_CHALLENGE_TYPE":
      return Domain.DOMAIN_CHALLENGE_TYPE;
    case 6:
    case "DOMAIN_CHALLENG_TIMELINE_TEMPLATE":
      return Domain.DOMAIN_CHALLENG_TIMELINE_TEMPLATE;
    case 7:
    case "DOMAIN_CHALLENGE_TRACK":
      return Domain.DOMAIN_CHALLENGE_TRACK;
    case 8:
    case "DOMAIN_CHALLENGE_PHASE":
      return Domain.DOMAIN_CHALLENGE_PHASE;
    case 9:
    case "DOMAIN_CHALLENGE_TIMELINE_TEMPLATE":
      return Domain.DOMAIN_CHALLENGE_TIMELINE_TEMPLATE;
    case 10:
    case "DOMAIN_SUBMISSION":
      return Domain.DOMAIN_SUBMISSION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Domain.UNRECOGNIZED;
  }
}

export function domainToJSON(object: Domain): string {
  switch (object) {
    case Domain.DOMAIN_UNSPECIFIED:
      return "DOMAIN_UNSPECIFIED";
    case Domain.DOMAIN_RESOURCE:
      return "DOMAIN_RESOURCE";
    case Domain.DOMAIN_RESOURCE_ROLE:
      return "DOMAIN_RESOURCE_ROLE";
    case Domain.DOMAIN_RESOURCE_ROLE_PHASE_DEPENDENCY:
      return "DOMAIN_RESOURCE_ROLE_PHASE_DEPENDENCY";
    case Domain.DOMAIN_CHALLENGE:
      return "DOMAIN_CHALLENGE";
    case Domain.DOMAIN_CHALLENGE_TYPE:
      return "DOMAIN_CHALLENGE_TYPE";
    case Domain.DOMAIN_CHALLENG_TIMELINE_TEMPLATE:
      return "DOMAIN_CHALLENG_TIMELINE_TEMPLATE";
    case Domain.DOMAIN_CHALLENGE_TRACK:
      return "DOMAIN_CHALLENGE_TRACK";
    case Domain.DOMAIN_CHALLENGE_PHASE:
      return "DOMAIN_CHALLENGE_PHASE";
    case Domain.DOMAIN_CHALLENGE_TIMELINE_TEMPLATE:
      return "DOMAIN_CHALLENGE_TIMELINE_TEMPLATE";
    case Domain.DOMAIN_SUBMISSION:
      return "DOMAIN_SUBMISSION";
    case Domain.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ScanCriteria {
  key: string;
  operator?: Operator | undefined;
  value?: any;
}

export interface ScanRequest {
  criteria: ScanCriteria[];
  nextToken?: string | undefined;
}

export interface ScanResult {
  nextToken?: string | undefined;
  items: { [key: string]: any }[];
}

export interface CreateResult {
  kind?: { $case: "integerId"; integerId: number } | { $case: "stringId"; stringId: string };
}

export interface UpdateResult {
  updatedCount: number;
  message?: string | undefined;
}

export interface CheckExistsResult {
  exists: boolean;
}

export interface LookupCriteria {
  key: string;
  value?: any;
}

/** TODO: There has to be a better way to do this. */
export interface GoogleProtobufTypesPlaceholder {
  timestamp?: string;
  empty?: Empty;
}

function createBaseScanCriteria(): ScanCriteria {
  return { key: "", operator: undefined, value: undefined };
}

export const ScanCriteria = {
  encode(message: ScanCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.operator !== undefined) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.operator = reader.int32() as any;
          break;
        case 3:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScanCriteria {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      operator: isSet(object.operator) ? operatorFromJSON(object.operator) : undefined,
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: ScanCriteria): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.operator !== undefined &&
      (obj.operator = message.operator !== undefined ? operatorToJSON(message.operator) : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanCriteria>, I>>(base?: I): ScanCriteria {
    return ScanCriteria.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScanCriteria>, I>>(object: I): ScanCriteria {
    const message = createBaseScanCriteria();
    message.key = object.key ?? "";
    message.operator = object.operator ?? undefined;
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseScanRequest(): ScanRequest {
  return { criteria: [], nextToken: undefined };
}

export const ScanRequest = {
  encode(message: ScanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.criteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextToken !== undefined) {
      writer.uint32(18).string(message.nextToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.criteria.push(ScanCriteria.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScanRequest {
    return {
      criteria: Array.isArray(object?.criteria) ? object.criteria.map((e: any) => ScanCriteria.fromJSON(e)) : [],
      nextToken: isSet(object.nextToken) ? String(object.nextToken) : undefined,
    };
  },

  toJSON(message: ScanRequest): unknown {
    const obj: any = {};
    if (message.criteria) {
      obj.criteria = message.criteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.criteria = [];
    }
    message.nextToken !== undefined && (obj.nextToken = message.nextToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanRequest>, I>>(base?: I): ScanRequest {
    return ScanRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScanRequest>, I>>(object: I): ScanRequest {
    const message = createBaseScanRequest();
    message.criteria = object.criteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.nextToken = object.nextToken ?? undefined;
    return message;
  },
};

function createBaseScanResult(): ScanResult {
  return { nextToken: undefined, items: [] };
}

export const ScanResult = {
  encode(message: ScanResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextToken !== undefined) {
      writer.uint32(10).string(message.nextToken);
    }
    for (const v of message.items) {
      Struct.encode(Struct.wrap(v!), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScanResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScanResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextToken = reader.string();
          break;
        case 2:
          message.items.push(Struct.unwrap(Struct.decode(reader, reader.uint32())));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScanResult {
    return {
      nextToken: isSet(object.nextToken) ? String(object.nextToken) : undefined,
      items: Array.isArray(object?.items) ? [...object.items] : [],
    };
  },

  toJSON(message: ScanResult): unknown {
    const obj: any = {};
    message.nextToken !== undefined && (obj.nextToken = message.nextToken);
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScanResult>, I>>(base?: I): ScanResult {
    return ScanResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScanResult>, I>>(object: I): ScanResult {
    const message = createBaseScanResult();
    message.nextToken = object.nextToken ?? undefined;
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateResult(): CreateResult {
  return { kind: undefined };
}

export const CreateResult = {
  encode(message: CreateResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "integerId":
        writer.uint32(8).int64(message.kind.integerId);
        break;
      case "stringId":
        writer.uint32(18).string(message.kind.stringId);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "integerId", integerId: longToNumber(reader.int64() as Long) };
          break;
        case 2:
          message.kind = { $case: "stringId", stringId: reader.string() };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateResult {
    return {
      kind: isSet(object.integerId)
        ? { $case: "integerId", integerId: Number(object.integerId) }
        : isSet(object.stringId)
        ? { $case: "stringId", stringId: String(object.stringId) }
        : undefined,
    };
  },

  toJSON(message: CreateResult): unknown {
    const obj: any = {};
    message.kind?.$case === "integerId" && (obj.integerId = Math.round(message.kind?.integerId));
    message.kind?.$case === "stringId" && (obj.stringId = message.kind?.stringId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResult>, I>>(base?: I): CreateResult {
    return CreateResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateResult>, I>>(object: I): CreateResult {
    const message = createBaseCreateResult();
    if (object.kind?.$case === "integerId" && object.kind?.integerId !== undefined && object.kind?.integerId !== null) {
      message.kind = { $case: "integerId", integerId: object.kind.integerId };
    }
    if (object.kind?.$case === "stringId" && object.kind?.stringId !== undefined && object.kind?.stringId !== null) {
      message.kind = { $case: "stringId", stringId: object.kind.stringId };
    }
    return message;
  },
};

function createBaseUpdateResult(): UpdateResult {
  return { updatedCount: 0, message: undefined };
}

export const UpdateResult = {
  encode(message: UpdateResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updatedCount !== 0) {
      writer.uint32(8).int64(message.updatedCount);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updatedCount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateResult {
    return {
      updatedCount: isSet(object.updatedCount) ? Number(object.updatedCount) : 0,
      message: isSet(object.message) ? String(object.message) : undefined,
    };
  },

  toJSON(message: UpdateResult): unknown {
    const obj: any = {};
    message.updatedCount !== undefined && (obj.updatedCount = Math.round(message.updatedCount));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResult>, I>>(base?: I): UpdateResult {
    return UpdateResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateResult>, I>>(object: I): UpdateResult {
    const message = createBaseUpdateResult();
    message.updatedCount = object.updatedCount ?? 0;
    message.message = object.message ?? undefined;
    return message;
  },
};

function createBaseCheckExistsResult(): CheckExistsResult {
  return { exists: false };
}

export const CheckExistsResult = {
  encode(message: CheckExistsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckExistsResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckExistsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckExistsResult {
    return { exists: isSet(object.exists) ? Boolean(object.exists) : false };
  },

  toJSON(message: CheckExistsResult): unknown {
    const obj: any = {};
    message.exists !== undefined && (obj.exists = message.exists);
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckExistsResult>, I>>(base?: I): CheckExistsResult {
    return CheckExistsResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckExistsResult>, I>>(object: I): CheckExistsResult {
    const message = createBaseCheckExistsResult();
    message.exists = object.exists ?? false;
    return message;
  },
};

function createBaseLookupCriteria(): LookupCriteria {
  return { key: "", value: undefined };
}

export const LookupCriteria = {
  encode(message: LookupCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LookupCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 3:
          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LookupCriteria {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: LookupCriteria): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<LookupCriteria>, I>>(base?: I): LookupCriteria {
    return LookupCriteria.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LookupCriteria>, I>>(object: I): LookupCriteria {
    const message = createBaseLookupCriteria();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseGoogleProtobufTypesPlaceholder(): GoogleProtobufTypesPlaceholder {
  return { timestamp: undefined, empty: undefined };
}

export const GoogleProtobufTypesPlaceholder = {
  encode(message: GoogleProtobufTypesPlaceholder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.empty !== undefined) {
      Empty.encode(message.empty, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleProtobufTypesPlaceholder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleProtobufTypesPlaceholder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.empty = Empty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GoogleProtobufTypesPlaceholder {
    return {
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : undefined,
      empty: isSet(object.empty) ? Empty.fromJSON(object.empty) : undefined,
    };
  },

  toJSON(message: GoogleProtobufTypesPlaceholder): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.empty !== undefined && (obj.empty = message.empty ? Empty.toJSON(message.empty) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GoogleProtobufTypesPlaceholder>, I>>(base?: I): GoogleProtobufTypesPlaceholder {
    return GoogleProtobufTypesPlaceholder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GoogleProtobufTypesPlaceholder>, I>>(
    object: I,
  ): GoogleProtobufTypesPlaceholder {
    const message = createBaseGoogleProtobufTypesPlaceholder();
    message.timestamp = object.timestamp ?? undefined;
    message.empty = (object.empty !== undefined && object.empty !== null) ? Empty.fromPartial(object.empty) : undefined;
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

function toTimestamp(dateStr: string): Timestamp {
  const date = new Date(dateStr);
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): string {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis).toISOString();
}

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
