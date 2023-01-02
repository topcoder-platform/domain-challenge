/* eslint-disable */
import _m0 from "protobufjs/minimal";
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

export interface LookupCriteria {
  key: string;
  value?: any;
}

export interface GoogleProtobufTypesPlaceholder {
  timestamp?: Date;
}

function createBaseScanCriteria(): ScanCriteria {
  return { key: "", operator: undefined, value: undefined };
}

export const ScanCriteria = {
  encode(
    message: ScanCriteria,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.operator !== undefined) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(26).fork()
      ).ldelim();
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
      operator: isSet(object.operator)
        ? operatorFromJSON(object.operator)
        : undefined,
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: ScanCriteria): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.operator !== undefined &&
      (obj.operator =
        message.operator !== undefined
          ? operatorToJSON(message.operator)
          : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScanCriteria>, I>>(
    object: I
  ): ScanCriteria {
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
  encode(
    message: ScanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.scanCriteria.push(
            ScanCriteria.decode(reader, reader.uint32())
          );
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
      obj.scanCriteria = message.scanCriteria.map((e) =>
        e ? ScanCriteria.toJSON(e) : undefined
      );
    } else {
      obj.scanCriteria = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScanRequest>, I>>(
    object: I
  ): ScanRequest {
    const message = createBaseScanRequest();
    message.nextToken = object.nextToken ?? undefined;
    message.scanCriteria =
      object.scanCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    return message;
  },
};

function createBaseScanResult(): ScanResult {
  return { nextToken: undefined, items: [] };
}

export const ScanResult = {
  encode(
    message: ScanResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.items.push(
            Struct.unwrap(Struct.decode(reader, reader.uint32()))
          );
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

  fromPartial<I extends Exact<DeepPartial<ScanResult>, I>>(
    object: I
  ): ScanResult {
    const message = createBaseScanResult();
    message.nextToken = object.nextToken ?? undefined;
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function createBaseLookupCriteria(): LookupCriteria {
  return { key: "", value: undefined };
}

export const LookupCriteria = {
  encode(
    message: LookupCriteria,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(26).fork()
      ).ldelim();
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
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: LookupCriteria): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LookupCriteria>, I>>(
    object: I
  ): LookupCriteria {
    const message = createBaseLookupCriteria();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseGoogleProtobufTypesPlaceholder(): GoogleProtobufTypesPlaceholder {
  return { timestamp: undefined };
}

export const GoogleProtobufTypesPlaceholder = {
  encode(
    message: GoogleProtobufTypesPlaceholder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GoogleProtobufTypesPlaceholder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleProtobufTypesPlaceholder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: GoogleProtobufTypesPlaceholder): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GoogleProtobufTypesPlaceholder>, I>>(
    object: I
  ): GoogleProtobufTypesPlaceholder {
    const message = createBaseGoogleProtobufTypesPlaceholder();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
