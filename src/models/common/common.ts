/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Struct, Value } from "../google/protobuf/struct";

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
  nextToken?: string | undefined;
  scanCriteria: ScanCriteria[];
}

export interface ScanResult {
  nextToken?: string | undefined;
  items: { [key: string]: any }[];
}

export interface FilterValue {
  value?: { $case: "stringValue"; stringValue: string } | { $case: "numberValue"; numberValue: number };
}

export interface LookupCriteria {
  key: string;
  value?: FilterValue;
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

  fromPartial<I extends Exact<DeepPartial<ScanCriteria>, I>>(object: I): ScanCriteria {
    const message = createBaseScanCriteria();
    message.key = object.key ?? "";
    message.operator = object.operator ?? undefined;
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseScanRequest(): ScanRequest {
  return { nextToken: undefined, scanCriteria: [] };
}

export const ScanRequest = {
  encode(message: ScanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextToken !== undefined) {
      writer.uint32(10).string(message.nextToken);
    }
    for (const v of message.scanCriteria) {
      ScanCriteria.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.nextToken = reader.string();
          break;
        case 2:
          message.scanCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
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
      nextToken: isSet(object.nextToken) ? String(object.nextToken) : undefined,
      scanCriteria: Array.isArray(object?.scanCriteria)
        ? object.scanCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ScanRequest): unknown {
    const obj: any = {};
    message.nextToken !== undefined && (obj.nextToken = message.nextToken);
    if (message.scanCriteria) {
      obj.scanCriteria = message.scanCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.scanCriteria = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScanRequest>, I>>(object: I): ScanRequest {
    const message = createBaseScanRequest();
    message.nextToken = object.nextToken ?? undefined;
    message.scanCriteria = object.scanCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
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

  fromPartial<I extends Exact<DeepPartial<ScanResult>, I>>(object: I): ScanResult {
    const message = createBaseScanResult();
    message.nextToken = object.nextToken ?? undefined;
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function createBaseFilterValue(): FilterValue {
  return { value: undefined };
}

export const FilterValue = {
  encode(message: FilterValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value?.$case === "stringValue") {
      writer.uint32(10).string(message.value.stringValue);
    }
    if (message.value?.$case === "numberValue") {
      writer.uint32(16).int64(message.value.numberValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilterValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilterValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = { $case: "stringValue", stringValue: reader.string() };
          break;
        case 2:
          message.value = { $case: "numberValue", numberValue: longToNumber(reader.int64() as Long) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FilterValue {
    return {
      value: isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: String(object.stringValue) }
        : isSet(object.numberValue)
        ? { $case: "numberValue", numberValue: Number(object.numberValue) }
        : undefined,
    };
  },

  toJSON(message: FilterValue): unknown {
    const obj: any = {};
    message.value?.$case === "stringValue" && (obj.stringValue = message.value?.stringValue);
    message.value?.$case === "numberValue" && (obj.numberValue = Math.round(message.value?.numberValue));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FilterValue>, I>>(object: I): FilterValue {
    const message = createBaseFilterValue();
    if (
      object.value?.$case === "stringValue" &&
      object.value?.stringValue !== undefined &&
      object.value?.stringValue !== null
    ) {
      message.value = { $case: "stringValue", stringValue: object.value.stringValue };
    }
    if (
      object.value?.$case === "numberValue" &&
      object.value?.numberValue !== undefined &&
      object.value?.numberValue !== null
    ) {
      message.value = { $case: "numberValue", numberValue: object.value.numberValue };
    }
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
      FilterValue.encode(message.value, writer.uint32(18).fork()).ldelim();
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
        case 2:
          message.value = FilterValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LookupCriteria {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? FilterValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LookupCriteria): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? FilterValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LookupCriteria>, I>>(object: I): LookupCriteria {
    const message = createBaseLookupCriteria();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? FilterValue.fromPartial(object.value)
      : undefined;
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
