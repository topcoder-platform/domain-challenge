/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  ListValue,
  NullValue,
  nullValueFromJSON,
  nullValueToJSON,
  nullValueToNumber,
  Struct,
} from "./google/protobuf/struct";

export enum DataType {
  DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED",
  DATA_TYPE_BOOLEAN = "DATA_TYPE_BOOLEAN",
  DATA_TYPE_BINARY = "DATA_TYPE_BINARY",
  DATA_TYPE_LIST = "DATA_TYPE_LIST",
  DATA_TYPE_MAP = "DATA_TYPE_MAP",
  DATA_TYPE_NULL = "DATA_TYPE_NULL",
  DATA_TYPE_NUMBER = "DATA_TYPE_NUMBER",
  DATA_TYPE_NUMBER_SET = "DATA_TYPE_NUMBER_SET",
  DATA_TYPE_STRING = "DATA_TYPE_STRING",
  DATA_TYPE_STRING_SET = "DATA_TYPE_STRING_SET",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNSPECIFIED":
      return DataType.DATA_TYPE_UNSPECIFIED;
    case 1:
    case "DATA_TYPE_BOOLEAN":
      return DataType.DATA_TYPE_BOOLEAN;
    case 2:
    case "DATA_TYPE_BINARY":
      return DataType.DATA_TYPE_BINARY;
    case 3:
    case "DATA_TYPE_LIST":
      return DataType.DATA_TYPE_LIST;
    case 4:
    case "DATA_TYPE_MAP":
      return DataType.DATA_TYPE_MAP;
    case 5:
    case "DATA_TYPE_NULL":
      return DataType.DATA_TYPE_NULL;
    case 6:
    case "DATA_TYPE_NUMBER":
      return DataType.DATA_TYPE_NUMBER;
    case 7:
    case "DATA_TYPE_NUMBER_SET":
      return DataType.DATA_TYPE_NUMBER_SET;
    case 8:
    case "DATA_TYPE_STRING":
      return DataType.DATA_TYPE_STRING;
    case 9:
    case "DATA_TYPE_STRING_SET":
      return DataType.DATA_TYPE_STRING_SET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}

export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNSPECIFIED:
      return "DATA_TYPE_UNSPECIFIED";
    case DataType.DATA_TYPE_BOOLEAN:
      return "DATA_TYPE_BOOLEAN";
    case DataType.DATA_TYPE_BINARY:
      return "DATA_TYPE_BINARY";
    case DataType.DATA_TYPE_LIST:
      return "DATA_TYPE_LIST";
    case DataType.DATA_TYPE_MAP:
      return "DATA_TYPE_MAP";
    case DataType.DATA_TYPE_NULL:
      return "DATA_TYPE_NULL";
    case DataType.DATA_TYPE_NUMBER:
      return "DATA_TYPE_NUMBER";
    case DataType.DATA_TYPE_NUMBER_SET:
      return "DATA_TYPE_NUMBER_SET";
    case DataType.DATA_TYPE_STRING:
      return "DATA_TYPE_STRING";
    case DataType.DATA_TYPE_STRING_SET:
      return "DATA_TYPE_STRING_SET";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataTypeToNumber(object: DataType): number {
  switch (object) {
    case DataType.DATA_TYPE_UNSPECIFIED:
      return 0;
    case DataType.DATA_TYPE_BOOLEAN:
      return 1;
    case DataType.DATA_TYPE_BINARY:
      return 2;
    case DataType.DATA_TYPE_LIST:
      return 3;
    case DataType.DATA_TYPE_MAP:
      return 4;
    case DataType.DATA_TYPE_NULL:
      return 5;
    case DataType.DATA_TYPE_NUMBER:
      return 6;
    case DataType.DATA_TYPE_NUMBER_SET:
      return 7;
    case DataType.DATA_TYPE_STRING:
      return 8;
    case DataType.DATA_TYPE_STRING_SET:
      return 9;
    case DataType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum Operator {
  OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED",
  OPERATOR_EQUAL = "OPERATOR_EQUAL",
  OPERATOR_NOT_EQUAL = "OPERATOR_NOT_EQUAL",
  OPERATOR_GREATER_THAN = "OPERATOR_GREATER_THAN",
  OPERATOR_GREATER_THAN_OR_EQUAL = "OPERATOR_GREATER_THAN_OR_EQUAL",
  OPERATOR_LESS_THAN = "OPERATOR_LESS_THAN",
  OPERATOR_LESS_THAN_OR_EQUAL = "OPERATOR_LESS_THAN_OR_EQUAL",
  OPERATOR_AND = "OPERATOR_AND",
  OPERATOR_BETWEEN = "OPERATOR_BETWEEN",
  OPERATOR_IN = "OPERATOR_IN",
  OPERATOR_IS = "OPERATOR_IS",
  OPERATOR_NOT = "OPERATOR_NOT",
  OPERATOR_OR = "OPERATOR_OR",
  UNRECOGNIZED = "UNRECOGNIZED",
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

export function operatorToNumber(object: Operator): number {
  switch (object) {
    case Operator.OPERATOR_UNSPECIFIED:
      return 0;
    case Operator.OPERATOR_EQUAL:
      return 1;
    case Operator.OPERATOR_NOT_EQUAL:
      return 2;
    case Operator.OPERATOR_GREATER_THAN:
      return 3;
    case Operator.OPERATOR_GREATER_THAN_OR_EQUAL:
      return 4;
    case Operator.OPERATOR_LESS_THAN:
      return 5;
    case Operator.OPERATOR_LESS_THAN_OR_EQUAL:
      return 6;
    case Operator.OPERATOR_AND:
      return 7;
    case Operator.OPERATOR_BETWEEN:
      return 8;
    case Operator.OPERATOR_IN:
      return 9;
    case Operator.OPERATOR_IS:
      return 10;
    case Operator.OPERATOR_NOT:
      return 11;
    case Operator.OPERATOR_OR:
      return 12;
    case Operator.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum Error {
  ERROR_UNSPECIFIED = "ERROR_UNSPECIFIED",
  ERROR_DATABASE_ERROR = "ERROR_DATABASE_ERROR",
  ERROR_INVALID_ARGUMENT = "ERROR_INVALID_ARGUMENT",
  ERROR_INVALID_QUERY = "ERROR_INVALID_QUERY",
  ERROR_NOT_FOUND = "ERROR_NOT_FOUND",
  ERROR_UNAUTHENTICATED = "ERROR_UNAUTHENTICATED",
  ERROR_UNAUTHORIZED = "ERROR_UNAUTHORIZED",
  ERROR_UNKNOWN = "ERROR_UNKNOWN",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function errorFromJSON(object: any): Error {
  switch (object) {
    case 0:
    case "ERROR_UNSPECIFIED":
      return Error.ERROR_UNSPECIFIED;
    case 1:
    case "ERROR_DATABASE_ERROR":
      return Error.ERROR_DATABASE_ERROR;
    case 2:
    case "ERROR_INVALID_ARGUMENT":
      return Error.ERROR_INVALID_ARGUMENT;
    case 3:
    case "ERROR_INVALID_QUERY":
      return Error.ERROR_INVALID_QUERY;
    case 4:
    case "ERROR_NOT_FOUND":
      return Error.ERROR_NOT_FOUND;
    case 5:
    case "ERROR_UNAUTHENTICATED":
      return Error.ERROR_UNAUTHENTICATED;
    case 6:
    case "ERROR_UNAUTHORIZED":
      return Error.ERROR_UNAUTHORIZED;
    case 7:
    case "ERROR_UNKNOWN":
      return Error.ERROR_UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Error.UNRECOGNIZED;
  }
}

export function errorToJSON(object: Error): string {
  switch (object) {
    case Error.ERROR_UNSPECIFIED:
      return "ERROR_UNSPECIFIED";
    case Error.ERROR_DATABASE_ERROR:
      return "ERROR_DATABASE_ERROR";
    case Error.ERROR_INVALID_ARGUMENT:
      return "ERROR_INVALID_ARGUMENT";
    case Error.ERROR_INVALID_QUERY:
      return "ERROR_INVALID_QUERY";
    case Error.ERROR_NOT_FOUND:
      return "ERROR_NOT_FOUND";
    case Error.ERROR_UNAUTHENTICATED:
      return "ERROR_UNAUTHENTICATED";
    case Error.ERROR_UNAUTHORIZED:
      return "ERROR_UNAUTHORIZED";
    case Error.ERROR_UNKNOWN:
      return "ERROR_UNKNOWN";
    case Error.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function errorToNumber(object: Error): number {
  switch (object) {
    case Error.ERROR_UNSPECIFIED:
      return 0;
    case Error.ERROR_DATABASE_ERROR:
      return 1;
    case Error.ERROR_INVALID_ARGUMENT:
      return 2;
    case Error.ERROR_INVALID_QUERY:
      return 3;
    case Error.ERROR_NOT_FOUND:
      return 4;
    case Error.ERROR_UNAUTHENTICATED:
      return 5;
    case Error.ERROR_UNAUTHORIZED:
      return 6;
    case Error.ERROR_UNKNOWN:
      return 7;
    case Error.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum UpdateAction {
  UPDATE_ACTION_UNSPECIFIED = "UPDATE_ACTION_UNSPECIFIED",
  UPDATE_ACTION_SET = "UPDATE_ACTION_SET",
  UPDATE_ACTION_REMOVE = "UPDATE_ACTION_REMOVE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function updateActionFromJSON(object: any): UpdateAction {
  switch (object) {
    case 0:
    case "UPDATE_ACTION_UNSPECIFIED":
      return UpdateAction.UPDATE_ACTION_UNSPECIFIED;
    case 1:
    case "UPDATE_ACTION_SET":
      return UpdateAction.UPDATE_ACTION_SET;
    case 2:
    case "UPDATE_ACTION_REMOVE":
      return UpdateAction.UPDATE_ACTION_REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateAction.UNRECOGNIZED;
  }
}

export function updateActionToJSON(object: UpdateAction): string {
  switch (object) {
    case UpdateAction.UPDATE_ACTION_UNSPECIFIED:
      return "UPDATE_ACTION_UNSPECIFIED";
    case UpdateAction.UPDATE_ACTION_SET:
      return "UPDATE_ACTION_SET";
    case UpdateAction.UPDATE_ACTION_REMOVE:
      return "UPDATE_ACTION_REMOVE";
    case UpdateAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function updateActionToNumber(object: UpdateAction): number {
  switch (object) {
    case UpdateAction.UPDATE_ACTION_UNSPECIFIED:
      return 0;
    case UpdateAction.UPDATE_ACTION_SET:
      return 1;
    case UpdateAction.UPDATE_ACTION_REMOVE:
      return 2;
    case UpdateAction.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum UpdateType {
  UPDATE_TYPE_UNSPECIFIED = "UPDATE_TYPE_UNSPECIFIED",
  UPDATE_TYPE_VALUE = "UPDATE_TYPE_VALUE",
  UPDATE_TYPE_SET_ADD = "UPDATE_TYPE_SET_ADD",
  UPDATE_TYPE_SET_DELETE = "UPDATE_TYPE_SET_DELETE",
  UPDATE_TYPE_LIST_APPEND = "UPDATE_TYPE_LIST_APPEND",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function updateTypeFromJSON(object: any): UpdateType {
  switch (object) {
    case 0:
    case "UPDATE_TYPE_UNSPECIFIED":
      return UpdateType.UPDATE_TYPE_UNSPECIFIED;
    case 1:
    case "UPDATE_TYPE_VALUE":
      return UpdateType.UPDATE_TYPE_VALUE;
    case 2:
    case "UPDATE_TYPE_SET_ADD":
      return UpdateType.UPDATE_TYPE_SET_ADD;
    case 3:
    case "UPDATE_TYPE_SET_DELETE":
      return UpdateType.UPDATE_TYPE_SET_DELETE;
    case 4:
    case "UPDATE_TYPE_LIST_APPEND":
      return UpdateType.UPDATE_TYPE_LIST_APPEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateType.UNRECOGNIZED;
  }
}

export function updateTypeToJSON(object: UpdateType): string {
  switch (object) {
    case UpdateType.UPDATE_TYPE_UNSPECIFIED:
      return "UPDATE_TYPE_UNSPECIFIED";
    case UpdateType.UPDATE_TYPE_VALUE:
      return "UPDATE_TYPE_VALUE";
    case UpdateType.UPDATE_TYPE_SET_ADD:
      return "UPDATE_TYPE_SET_ADD";
    case UpdateType.UPDATE_TYPE_SET_DELETE:
      return "UPDATE_TYPE_SET_DELETE";
    case UpdateType.UPDATE_TYPE_LIST_APPEND:
      return "UPDATE_TYPE_LIST_APPEND";
    case UpdateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function updateTypeToNumber(object: UpdateType): number {
  switch (object) {
    case UpdateType.UPDATE_TYPE_UNSPECIFIED:
      return 0;
    case UpdateType.UPDATE_TYPE_VALUE:
      return 1;
    case UpdateType.UPDATE_TYPE_SET_ADD:
      return 2;
    case UpdateType.UPDATE_TYPE_SET_DELETE:
      return 3;
    case UpdateType.UPDATE_TYPE_LIST_APPEND:
      return 4;
    case UpdateType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum ReturnValue {
  RETURN_VALUE_UNSPECIFIED = "RETURN_VALUE_UNSPECIFIED",
  RETURN_VALUE_ALL_NEW = "RETURN_VALUE_ALL_NEW",
  RETURN_VALUE_MODIFIED_NEW = "RETURN_VALUE_MODIFIED_NEW",
  RETURN_VALUE_ALL_OLD = "RETURN_VALUE_ALL_OLD",
  RETURN_VALUE_MODIFIED_OLD = "RETURN_VALUE_MODIFIED_OLD",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function returnValueFromJSON(object: any): ReturnValue {
  switch (object) {
    case 0:
    case "RETURN_VALUE_UNSPECIFIED":
      return ReturnValue.RETURN_VALUE_UNSPECIFIED;
    case 1:
    case "RETURN_VALUE_ALL_NEW":
      return ReturnValue.RETURN_VALUE_ALL_NEW;
    case 2:
    case "RETURN_VALUE_MODIFIED_NEW":
      return ReturnValue.RETURN_VALUE_MODIFIED_NEW;
    case 3:
    case "RETURN_VALUE_ALL_OLD":
      return ReturnValue.RETURN_VALUE_ALL_OLD;
    case 4:
    case "RETURN_VALUE_MODIFIED_OLD":
      return ReturnValue.RETURN_VALUE_MODIFIED_OLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReturnValue.UNRECOGNIZED;
  }
}

export function returnValueToJSON(object: ReturnValue): string {
  switch (object) {
    case ReturnValue.RETURN_VALUE_UNSPECIFIED:
      return "RETURN_VALUE_UNSPECIFIED";
    case ReturnValue.RETURN_VALUE_ALL_NEW:
      return "RETURN_VALUE_ALL_NEW";
    case ReturnValue.RETURN_VALUE_MODIFIED_NEW:
      return "RETURN_VALUE_MODIFIED_NEW";
    case ReturnValue.RETURN_VALUE_ALL_OLD:
      return "RETURN_VALUE_ALL_OLD";
    case ReturnValue.RETURN_VALUE_MODIFIED_OLD:
      return "RETURN_VALUE_MODIFIED_OLD";
    case ReturnValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function returnValueToNumber(object: ReturnValue): number {
  switch (object) {
    case ReturnValue.RETURN_VALUE_UNSPECIFIED:
      return 0;
    case ReturnValue.RETURN_VALUE_ALL_NEW:
      return 1;
    case ReturnValue.RETURN_VALUE_MODIFIED_NEW:
      return 2;
    case ReturnValue.RETURN_VALUE_ALL_OLD:
      return 3;
    case ReturnValue.RETURN_VALUE_MODIFIED_OLD:
      return 4;
    case ReturnValue.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface StringSet {
  values: string[];
}

export interface NumberSet {
  values: number[];
}

export interface Value {
  kind?:
    | { $case: "boolean"; boolean: boolean }
    | { $case: "binary"; binary: Buffer }
    | { $case: "listValue"; listValue: Array<any> }
    | { $case: "mapValue"; mapValue: { [key: string]: any } }
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "numberValue"; numberValue: number }
    | { $case: "numberSetValue"; numberSetValue: NumberSet }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "stringSetValue"; stringSetValue: StringSet };
}

export interface Attribute {
  name: string;
  type: DataType;
}

export interface Filter {
  name: string;
  operator: Operator;
  value?: Value;
}

export interface SelectQuery {
  table: string;
  index?: string | undefined;
  attributes: Attribute[];
  filters: Filter[];
  nextToken?: string | undefined;
}

export interface InsertQuery {
  table: string;
  attributes?: { [key: string]: any };
}

export interface UpdateOperation {
  action: UpdateAction;
  attribute: string;
  type: UpdateType;
  value?: Value;
}

export interface UpdateQuery {
  table: string;
  updates: UpdateOperation[];
  filters: Filter[];
  returnValue?: ReturnValue | undefined;
}

export interface DeleteQuery {
  table: string;
  filters: Filter[];
  returnValues?: ReturnValue | undefined;
}

export interface ReadQuery {
  queries: SelectQuery[];
}

export interface WriteQuery {
  kind?: { $case: "insert"; insert: InsertQuery } | { $case: "update"; update: UpdateQuery } | {
    $case: "delete";
    delete: DeleteQuery;
  };
}

export interface BulkWriteQuery {
  queries: WriteQuery[];
}

export interface BulkQuery {
  kind?: { $case: "read"; read: ReadQuery } | { $case: "bulkWriteQueries"; bulkWriteQueries: WriteQuery };
}

export interface Query {
  kind?: { $case: "select"; select: SelectQuery } | { $case: "insert"; insert: InsertQuery } | {
    $case: "update";
    update: UpdateQuery;
  } | { $case: "delete"; delete: DeleteQuery };
}

export interface Response {
  items: { [key: string]: any }[];
  nextToken?: string | undefined;
}

export interface QueryRequest {
  kind?: { $case: "query"; query: Query } | { $case: "queries"; queries: BulkQuery };
}

export interface ResponseError {
  message: string;
}

export interface QueryResponse {
  kind?: { $case: "response"; response: Response } | { $case: "error"; error: ResponseError };
}

function createBaseStringSet(): StringSet {
  return { values: [] };
}

export const StringSet = {
  encode(message: StringSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringSet {
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => String(e)) : [] };
  },

  toJSON(message: StringSet): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringSet>, I>>(base?: I): StringSet {
    return StringSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StringSet>, I>>(object: I): StringSet {
    const message = createBaseStringSet();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseNumberSet(): NumberSet {
  return { values: [] };
}

export const NumberSet = {
  encode(message: NumberSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NumberSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumberSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.double());
            }
          } else {
            message.values.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NumberSet {
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: NumberSet): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NumberSet>, I>>(base?: I): NumberSet {
    return NumberSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NumberSet>, I>>(object: I): NumberSet {
    const message = createBaseNumberSet();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseValue(): Value {
  return { kind: undefined };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "boolean") {
      writer.uint32(8).bool(message.kind.boolean);
    }
    if (message.kind?.$case === "binary") {
      writer.uint32(18).bytes(message.kind.binary);
    }
    if (message.kind?.$case === "listValue") {
      ListValue.encode(ListValue.wrap(message.kind.listValue), writer.uint32(26).fork()).ldelim();
    }
    if (message.kind?.$case === "mapValue") {
      Struct.encode(Struct.wrap(message.kind.mapValue), writer.uint32(34).fork()).ldelim();
    }
    if (message.kind?.$case === "nullValue") {
      writer.uint32(40).int32(nullValueToNumber(message.kind.nullValue));
    }
    if (message.kind?.$case === "numberValue") {
      writer.uint32(49).double(message.kind.numberValue);
    }
    if (message.kind?.$case === "numberSetValue") {
      NumberSet.encode(message.kind.numberSetValue, writer.uint32(58).fork()).ldelim();
    }
    if (message.kind?.$case === "stringValue") {
      writer.uint32(66).string(message.kind.stringValue);
    }
    if (message.kind?.$case === "stringSetValue") {
      StringSet.encode(message.kind.stringSetValue, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "boolean", boolean: reader.bool() };
          break;
        case 2:
          message.kind = { $case: "binary", binary: reader.bytes() as Buffer };
          break;
        case 3:
          message.kind = { $case: "listValue", listValue: ListValue.unwrap(ListValue.decode(reader, reader.uint32())) };
          break;
        case 4:
          message.kind = { $case: "mapValue", mapValue: Struct.unwrap(Struct.decode(reader, reader.uint32())) };
          break;
        case 5:
          message.kind = { $case: "nullValue", nullValue: nullValueFromJSON(reader.int32()) };
          break;
        case 6:
          message.kind = { $case: "numberValue", numberValue: reader.double() };
          break;
        case 7:
          message.kind = { $case: "numberSetValue", numberSetValue: NumberSet.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.kind = { $case: "stringValue", stringValue: reader.string() };
          break;
        case 9:
          message.kind = { $case: "stringSetValue", stringSetValue: StringSet.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      kind: isSet(object.boolean)
        ? { $case: "boolean", boolean: Boolean(object.boolean) }
        : isSet(object.binary)
        ? { $case: "binary", binary: Buffer.from(bytesFromBase64(object.binary)) }
        : isSet(object.listValue)
        ? { $case: "listValue", listValue: [...object.listValue] }
        : isSet(object.mapValue)
        ? { $case: "mapValue", mapValue: object.mapValue }
        : isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.numberValue)
        ? { $case: "numberValue", numberValue: Number(object.numberValue) }
        : isSet(object.numberSetValue)
        ? { $case: "numberSetValue", numberSetValue: NumberSet.fromJSON(object.numberSetValue) }
        : isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: String(object.stringValue) }
        : isSet(object.stringSetValue)
        ? { $case: "stringSetValue", stringSetValue: StringSet.fromJSON(object.stringSetValue) }
        : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.kind?.$case === "boolean" && (obj.boolean = message.kind?.boolean);
    message.kind?.$case === "binary" &&
      (obj.binary = message.kind?.binary !== undefined ? base64FromBytes(message.kind?.binary) : undefined);
    message.kind?.$case === "listValue" && (obj.listValue = message.kind?.listValue);
    message.kind?.$case === "mapValue" && (obj.mapValue = message.kind?.mapValue);
    message.kind?.$case === "nullValue" &&
      (obj.nullValue = message.kind?.nullValue !== undefined ? nullValueToJSON(message.kind?.nullValue) : undefined);
    message.kind?.$case === "numberValue" && (obj.numberValue = message.kind?.numberValue);
    message.kind?.$case === "numberSetValue" &&
      (obj.numberSetValue = message.kind?.numberSetValue ? NumberSet.toJSON(message.kind?.numberSetValue) : undefined);
    message.kind?.$case === "stringValue" && (obj.stringValue = message.kind?.stringValue);
    message.kind?.$case === "stringSetValue" &&
      (obj.stringSetValue = message.kind?.stringSetValue ? StringSet.toJSON(message.kind?.stringSetValue) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Value>, I>>(base?: I): Value {
    return Value.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    if (object.kind?.$case === "boolean" && object.kind?.boolean !== undefined && object.kind?.boolean !== null) {
      message.kind = { $case: "boolean", boolean: object.kind.boolean };
    }
    if (object.kind?.$case === "binary" && object.kind?.binary !== undefined && object.kind?.binary !== null) {
      message.kind = { $case: "binary", binary: object.kind.binary };
    }
    if (object.kind?.$case === "listValue" && object.kind?.listValue !== undefined && object.kind?.listValue !== null) {
      message.kind = { $case: "listValue", listValue: object.kind.listValue };
    }
    if (object.kind?.$case === "mapValue" && object.kind?.mapValue !== undefined && object.kind?.mapValue !== null) {
      message.kind = { $case: "mapValue", mapValue: object.kind.mapValue };
    }
    if (object.kind?.$case === "nullValue" && object.kind?.nullValue !== undefined && object.kind?.nullValue !== null) {
      message.kind = { $case: "nullValue", nullValue: object.kind.nullValue };
    }
    if (
      object.kind?.$case === "numberValue" &&
      object.kind?.numberValue !== undefined &&
      object.kind?.numberValue !== null
    ) {
      message.kind = { $case: "numberValue", numberValue: object.kind.numberValue };
    }
    if (
      object.kind?.$case === "numberSetValue" &&
      object.kind?.numberSetValue !== undefined &&
      object.kind?.numberSetValue !== null
    ) {
      message.kind = { $case: "numberSetValue", numberSetValue: NumberSet.fromPartial(object.kind.numberSetValue) };
    }
    if (
      object.kind?.$case === "stringValue" &&
      object.kind?.stringValue !== undefined &&
      object.kind?.stringValue !== null
    ) {
      message.kind = { $case: "stringValue", stringValue: object.kind.stringValue };
    }
    if (
      object.kind?.$case === "stringSetValue" &&
      object.kind?.stringSetValue !== undefined &&
      object.kind?.stringSetValue !== null
    ) {
      message.kind = { $case: "stringSetValue", stringSetValue: StringSet.fromPartial(object.kind.stringSetValue) };
    }
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return { name: "", type: DataType.DATA_TYPE_UNSPECIFIED };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== DataType.DATA_TYPE_UNSPECIFIED) {
      writer.uint32(16).int32(dataTypeToNumber(message.type));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = dataTypeFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? dataTypeFromJSON(object.type) : DataType.DATA_TYPE_UNSPECIFIED,
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = dataTypeToJSON(message.type));
    return obj;
  },

  create<I extends Exact<DeepPartial<Attribute>, I>>(base?: I): Attribute {
    return Attribute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
    const message = createBaseAttribute();
    message.name = object.name ?? "";
    message.type = object.type ?? DataType.DATA_TYPE_UNSPECIFIED;
    return message;
  },
};

function createBaseFilter(): Filter {
  return { name: "", operator: Operator.OPERATOR_UNSPECIFIED, value: undefined };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.operator !== Operator.OPERATOR_UNSPECIFIED) {
      writer.uint32(16).int32(operatorToNumber(message.operator));
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.operator = operatorFromJSON(reader.int32());
          break;
        case 3:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      operator: isSet(object.operator) ? operatorFromJSON(object.operator) : Operator.OPERATOR_UNSPECIFIED,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.operator !== undefined && (obj.operator = operatorToJSON(message.operator));
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Filter>, I>>(base?: I): Filter {
    return Filter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.name = object.name ?? "";
    message.operator = object.operator ?? Operator.OPERATOR_UNSPECIFIED;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseSelectQuery(): SelectQuery {
  return { table: "", index: undefined, attributes: [], filters: [], nextToken: undefined };
}

export const SelectQuery = {
  encode(message: SelectQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.index !== undefined) {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextToken !== undefined) {
      writer.uint32(42).string(message.nextToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SelectQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 5:
          message.nextToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SelectQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      index: isSet(object.index) ? String(object.index) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      nextToken: isSet(object.nextToken) ? String(object.nextToken) : undefined,
    };
  },

  toJSON(message: SelectQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    message.index !== undefined && (obj.index = message.index);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.nextToken !== undefined && (obj.nextToken = message.nextToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<SelectQuery>, I>>(base?: I): SelectQuery {
    return SelectQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SelectQuery>, I>>(object: I): SelectQuery {
    const message = createBaseSelectQuery();
    message.table = object.table ?? "";
    message.index = object.index ?? undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.nextToken = object.nextToken ?? undefined;
    return message;
  },
};

function createBaseInsertQuery(): InsertQuery {
  return { table: "", attributes: undefined };
}

export const InsertQuery = {
  encode(message: InsertQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.attributes !== undefined) {
      Struct.encode(Struct.wrap(message.attributes), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.attributes = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsertQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      attributes: isObject(object.attributes) ? object.attributes : undefined,
    };
  },

  toJSON(message: InsertQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    message.attributes !== undefined && (obj.attributes = message.attributes);
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertQuery>, I>>(base?: I): InsertQuery {
    return InsertQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InsertQuery>, I>>(object: I): InsertQuery {
    const message = createBaseInsertQuery();
    message.table = object.table ?? "";
    message.attributes = object.attributes ?? undefined;
    return message;
  },
};

function createBaseUpdateOperation(): UpdateOperation {
  return {
    action: UpdateAction.UPDATE_ACTION_UNSPECIFIED,
    attribute: "",
    type: UpdateType.UPDATE_TYPE_UNSPECIFIED,
    value: undefined,
  };
}

export const UpdateOperation = {
  encode(message: UpdateOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== UpdateAction.UPDATE_ACTION_UNSPECIFIED) {
      writer.uint32(8).int32(updateActionToNumber(message.action));
    }
    if (message.attribute !== "") {
      writer.uint32(18).string(message.attribute);
    }
    if (message.type !== UpdateType.UPDATE_TYPE_UNSPECIFIED) {
      writer.uint32(24).int32(updateTypeToNumber(message.type));
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = updateActionFromJSON(reader.int32());
          break;
        case 2:
          message.attribute = reader.string();
          break;
        case 3:
          message.type = updateTypeFromJSON(reader.int32());
          break;
        case 4:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOperation {
    return {
      action: isSet(object.action) ? updateActionFromJSON(object.action) : UpdateAction.UPDATE_ACTION_UNSPECIFIED,
      attribute: isSet(object.attribute) ? String(object.attribute) : "",
      type: isSet(object.type) ? updateTypeFromJSON(object.type) : UpdateType.UPDATE_TYPE_UNSPECIFIED,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UpdateOperation): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = updateActionToJSON(message.action));
    message.attribute !== undefined && (obj.attribute = message.attribute);
    message.type !== undefined && (obj.type = updateTypeToJSON(message.type));
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOperation>, I>>(base?: I): UpdateOperation {
    return UpdateOperation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOperation>, I>>(object: I): UpdateOperation {
    const message = createBaseUpdateOperation();
    message.action = object.action ?? UpdateAction.UPDATE_ACTION_UNSPECIFIED;
    message.attribute = object.attribute ?? "";
    message.type = object.type ?? UpdateType.UPDATE_TYPE_UNSPECIFIED;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseUpdateQuery(): UpdateQuery {
  return { table: "", updates: [], filters: [], returnValue: undefined };
}

export const UpdateQuery = {
  encode(message: UpdateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    for (const v of message.updates) {
      UpdateOperation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnValue !== undefined) {
      writer.uint32(32).int32(returnValueToNumber(message.returnValue));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.updates.push(UpdateOperation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 4:
          message.returnValue = returnValueFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => UpdateOperation.fromJSON(e)) : [],
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      returnValue: isSet(object.returnValue) ? returnValueFromJSON(object.returnValue) : undefined,
    };
  },

  toJSON(message: UpdateQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? UpdateOperation.toJSON(e) : undefined);
    } else {
      obj.updates = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.returnValue !== undefined &&
      (obj.returnValue = message.returnValue !== undefined ? returnValueToJSON(message.returnValue) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateQuery>, I>>(base?: I): UpdateQuery {
    return UpdateQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateQuery>, I>>(object: I): UpdateQuery {
    const message = createBaseUpdateQuery();
    message.table = object.table ?? "";
    message.updates = object.updates?.map((e) => UpdateOperation.fromPartial(e)) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.returnValue = object.returnValue ?? undefined;
    return message;
  },
};

function createBaseDeleteQuery(): DeleteQuery {
  return { table: "", filters: [], returnValues: undefined };
}

export const DeleteQuery = {
  encode(message: DeleteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.returnValues !== undefined) {
      writer.uint32(24).int32(returnValueToNumber(message.returnValues));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 3:
          message.returnValues = returnValueFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteQuery {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      returnValues: isSet(object.returnValues) ? returnValueFromJSON(object.returnValues) : undefined,
    };
  },

  toJSON(message: DeleteQuery): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.returnValues !== undefined &&
      (obj.returnValues = message.returnValues !== undefined ? returnValueToJSON(message.returnValues) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteQuery>, I>>(base?: I): DeleteQuery {
    return DeleteQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteQuery>, I>>(object: I): DeleteQuery {
    const message = createBaseDeleteQuery();
    message.table = object.table ?? "";
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.returnValues = object.returnValues ?? undefined;
    return message;
  },
};

function createBaseReadQuery(): ReadQuery {
  return { queries: [] };
}

export const ReadQuery = {
  encode(message: ReadQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      SelectQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(SelectQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadQuery {
    return { queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => SelectQuery.fromJSON(e)) : [] };
  },

  toJSON(message: ReadQuery): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map((e) => e ? SelectQuery.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadQuery>, I>>(base?: I): ReadQuery {
    return ReadQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReadQuery>, I>>(object: I): ReadQuery {
    const message = createBaseReadQuery();
    message.queries = object.queries?.map((e) => SelectQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWriteQuery(): WriteQuery {
  return { kind: undefined };
}

export const WriteQuery = {
  encode(message: WriteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "insert") {
      InsertQuery.encode(message.kind.insert, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "update") {
      UpdateQuery.encode(message.kind.update, writer.uint32(18).fork()).ldelim();
    }
    if (message.kind?.$case === "delete") {
      DeleteQuery.encode(message.kind.delete, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "insert", insert: InsertQuery.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "update", update: UpdateQuery.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.kind = { $case: "delete", delete: DeleteQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WriteQuery {
    return {
      kind: isSet(object.insert)
        ? { $case: "insert", insert: InsertQuery.fromJSON(object.insert) }
        : isSet(object.update)
        ? { $case: "update", update: UpdateQuery.fromJSON(object.update) }
        : isSet(object.delete)
        ? { $case: "delete", delete: DeleteQuery.fromJSON(object.delete) }
        : undefined,
    };
  },

  toJSON(message: WriteQuery): unknown {
    const obj: any = {};
    message.kind?.$case === "insert" &&
      (obj.insert = message.kind?.insert ? InsertQuery.toJSON(message.kind?.insert) : undefined);
    message.kind?.$case === "update" &&
      (obj.update = message.kind?.update ? UpdateQuery.toJSON(message.kind?.update) : undefined);
    message.kind?.$case === "delete" &&
      (obj.delete = message.kind?.delete ? DeleteQuery.toJSON(message.kind?.delete) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteQuery>, I>>(base?: I): WriteQuery {
    return WriteQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WriteQuery>, I>>(object: I): WriteQuery {
    const message = createBaseWriteQuery();
    if (object.kind?.$case === "insert" && object.kind?.insert !== undefined && object.kind?.insert !== null) {
      message.kind = { $case: "insert", insert: InsertQuery.fromPartial(object.kind.insert) };
    }
    if (object.kind?.$case === "update" && object.kind?.update !== undefined && object.kind?.update !== null) {
      message.kind = { $case: "update", update: UpdateQuery.fromPartial(object.kind.update) };
    }
    if (object.kind?.$case === "delete" && object.kind?.delete !== undefined && object.kind?.delete !== null) {
      message.kind = { $case: "delete", delete: DeleteQuery.fromPartial(object.kind.delete) };
    }
    return message;
  },
};

function createBaseBulkWriteQuery(): BulkWriteQuery {
  return { queries: [] };
}

export const BulkWriteQuery = {
  encode(message: BulkWriteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      WriteQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkWriteQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkWriteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries.push(WriteQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BulkWriteQuery {
    return { queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => WriteQuery.fromJSON(e)) : [] };
  },

  toJSON(message: BulkWriteQuery): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map((e) => e ? WriteQuery.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BulkWriteQuery>, I>>(base?: I): BulkWriteQuery {
    return BulkWriteQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BulkWriteQuery>, I>>(object: I): BulkWriteQuery {
    const message = createBaseBulkWriteQuery();
    message.queries = object.queries?.map((e) => WriteQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBulkQuery(): BulkQuery {
  return { kind: undefined };
}

export const BulkQuery = {
  encode(message: BulkQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "read") {
      ReadQuery.encode(message.kind.read, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "bulkWriteQueries") {
      WriteQuery.encode(message.kind.bulkWriteQueries, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "read", read: ReadQuery.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "bulkWriteQueries", bulkWriteQueries: WriteQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BulkQuery {
    return {
      kind: isSet(object.read)
        ? { $case: "read", read: ReadQuery.fromJSON(object.read) }
        : isSet(object.bulkWriteQueries)
        ? { $case: "bulkWriteQueries", bulkWriteQueries: WriteQuery.fromJSON(object.bulkWriteQueries) }
        : undefined,
    };
  },

  toJSON(message: BulkQuery): unknown {
    const obj: any = {};
    message.kind?.$case === "read" &&
      (obj.read = message.kind?.read ? ReadQuery.toJSON(message.kind?.read) : undefined);
    message.kind?.$case === "bulkWriteQueries" && (obj.bulkWriteQueries = message.kind?.bulkWriteQueries
      ? WriteQuery.toJSON(message.kind?.bulkWriteQueries)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BulkQuery>, I>>(base?: I): BulkQuery {
    return BulkQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BulkQuery>, I>>(object: I): BulkQuery {
    const message = createBaseBulkQuery();
    if (object.kind?.$case === "read" && object.kind?.read !== undefined && object.kind?.read !== null) {
      message.kind = { $case: "read", read: ReadQuery.fromPartial(object.kind.read) };
    }
    if (
      object.kind?.$case === "bulkWriteQueries" &&
      object.kind?.bulkWriteQueries !== undefined &&
      object.kind?.bulkWriteQueries !== null
    ) {
      message.kind = {
        $case: "bulkWriteQueries",
        bulkWriteQueries: WriteQuery.fromPartial(object.kind.bulkWriteQueries),
      };
    }
    return message;
  },
};

function createBaseQuery(): Query {
  return { kind: undefined };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "select") {
      SelectQuery.encode(message.kind.select, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "insert") {
      InsertQuery.encode(message.kind.insert, writer.uint32(18).fork()).ldelim();
    }
    if (message.kind?.$case === "update") {
      UpdateQuery.encode(message.kind.update, writer.uint32(26).fork()).ldelim();
    }
    if (message.kind?.$case === "delete") {
      DeleteQuery.encode(message.kind.delete, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "select", select: SelectQuery.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "insert", insert: InsertQuery.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.kind = { $case: "update", update: UpdateQuery.decode(reader, reader.uint32()) };
          break;
        case 4:
          message.kind = { $case: "delete", delete: DeleteQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      kind: isSet(object.select)
        ? { $case: "select", select: SelectQuery.fromJSON(object.select) }
        : isSet(object.insert)
        ? { $case: "insert", insert: InsertQuery.fromJSON(object.insert) }
        : isSet(object.update)
        ? { $case: "update", update: UpdateQuery.fromJSON(object.update) }
        : isSet(object.delete)
        ? { $case: "delete", delete: DeleteQuery.fromJSON(object.delete) }
        : undefined,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.kind?.$case === "select" &&
      (obj.select = message.kind?.select ? SelectQuery.toJSON(message.kind?.select) : undefined);
    message.kind?.$case === "insert" &&
      (obj.insert = message.kind?.insert ? InsertQuery.toJSON(message.kind?.insert) : undefined);
    message.kind?.$case === "update" &&
      (obj.update = message.kind?.update ? UpdateQuery.toJSON(message.kind?.update) : undefined);
    message.kind?.$case === "delete" &&
      (obj.delete = message.kind?.delete ? DeleteQuery.toJSON(message.kind?.delete) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    if (object.kind?.$case === "select" && object.kind?.select !== undefined && object.kind?.select !== null) {
      message.kind = { $case: "select", select: SelectQuery.fromPartial(object.kind.select) };
    }
    if (object.kind?.$case === "insert" && object.kind?.insert !== undefined && object.kind?.insert !== null) {
      message.kind = { $case: "insert", insert: InsertQuery.fromPartial(object.kind.insert) };
    }
    if (object.kind?.$case === "update" && object.kind?.update !== undefined && object.kind?.update !== null) {
      message.kind = { $case: "update", update: UpdateQuery.fromPartial(object.kind.update) };
    }
    if (object.kind?.$case === "delete" && object.kind?.delete !== undefined && object.kind?.delete !== null) {
      message.kind = { $case: "delete", delete: DeleteQuery.fromPartial(object.kind.delete) };
    }
    return message;
  },
};

function createBaseResponse(): Response {
  return { items: [], nextToken: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Struct.encode(Struct.wrap(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.nextToken !== undefined) {
      writer.uint32(18).string(message.nextToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Struct.unwrap(Struct.decode(reader, reader.uint32())));
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

  fromJSON(object: any): Response {
    return {
      items: Array.isArray(object?.items) ? [...object.items] : [],
      nextToken: isSet(object.nextToken) ? String(object.nextToken) : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    message.nextToken !== undefined && (obj.nextToken = message.nextToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.items = object.items?.map((e) => e) || [];
    message.nextToken = object.nextToken ?? undefined;
    return message;
  },
};

function createBaseQueryRequest(): QueryRequest {
  return { kind: undefined };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "query") {
      Query.encode(message.kind.query, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "queries") {
      BulkQuery.encode(message.kind.queries, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "query", query: Query.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "queries", queries: BulkQuery.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequest {
    return {
      kind: isSet(object.query)
        ? { $case: "query", query: Query.fromJSON(object.query) }
        : isSet(object.queries)
        ? { $case: "queries", queries: BulkQuery.fromJSON(object.queries) }
        : undefined,
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.kind?.$case === "query" &&
      (obj.query = message.kind?.query ? Query.toJSON(message.kind?.query) : undefined);
    message.kind?.$case === "queries" &&
      (obj.queries = message.kind?.queries ? BulkQuery.toJSON(message.kind?.queries) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequest>, I>>(base?: I): QueryRequest {
    return QueryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequest>, I>>(object: I): QueryRequest {
    const message = createBaseQueryRequest();
    if (object.kind?.$case === "query" && object.kind?.query !== undefined && object.kind?.query !== null) {
      message.kind = { $case: "query", query: Query.fromPartial(object.kind.query) };
    }
    if (object.kind?.$case === "queries" && object.kind?.queries !== undefined && object.kind?.queries !== null) {
      message.kind = { $case: "queries", queries: BulkQuery.fromPartial(object.kind.queries) };
    }
    return message;
  },
};

function createBaseResponseError(): ResponseError {
  return { message: "" };
}

export const ResponseError = {
  encode(message: ResponseError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseError {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ResponseError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseError>, I>>(base?: I): ResponseError {
    return ResponseError.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResponseError>, I>>(object: I): ResponseError {
    const message = createBaseResponseError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseQueryResponse(): QueryResponse {
  return { kind: undefined };
}

export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind?.$case === "response") {
      Response.encode(message.kind.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.kind?.$case === "error") {
      ResponseError.encode(message.kind.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = { $case: "response", response: Response.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.kind = { $case: "error", error: ResponseError.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResponse {
    return {
      kind: isSet(object.response)
        ? { $case: "response", response: Response.fromJSON(object.response) }
        : isSet(object.error)
        ? { $case: "error", error: ResponseError.fromJSON(object.error) }
        : undefined,
    };
  },

  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    message.kind?.$case === "response" &&
      (obj.response = message.kind?.response ? Response.toJSON(message.kind?.response) : undefined);
    message.kind?.$case === "error" &&
      (obj.error = message.kind?.error ? ResponseError.toJSON(message.kind?.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResponse>, I>>(base?: I): QueryResponse {
    return QueryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResponse>, I>>(object: I): QueryResponse {
    const message = createBaseQueryResponse();
    if (object.kind?.$case === "response" && object.kind?.response !== undefined && object.kind?.response !== null) {
      message.kind = { $case: "response", response: Response.fromPartial(object.kind.response) };
    }
    if (object.kind?.$case === "error" && object.kind?.error !== undefined && object.kind?.error !== null) {
      message.kind = { $case: "error", error: ResponseError.fromPartial(object.kind.error) };
    }
    return message;
  },
};

export type PartiQLQueryService = typeof PartiQLQueryService;
export const PartiQLQueryService = {
  query: {
    path: "/topcoder.dal.partiql.PartiQLQuery/Query",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryRequest) => Buffer.from(QueryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryRequest.decode(value),
    responseSerialize: (value: QueryResponse) => Buffer.from(QueryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryResponse.decode(value),
  },
} as const;

export interface PartiQLQueryServer extends UntypedServiceImplementation {
  query: handleUnaryCall<QueryRequest, QueryResponse>;
}

export interface PartiQLQueryClient extends Client {
  query(
    request: QueryRequest,
    callback: (error: ServiceError | null, response: QueryResponse) => void,
  ): ClientUnaryCall;
  query(
    request: QueryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: QueryResponse) => void,
  ): ClientUnaryCall;
  query(
    request: QueryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: QueryResponse) => void,
  ): ClientUnaryCall;
}

export const PartiQLQueryClient = makeGenericClientConstructor(
  PartiQLQueryService,
  "topcoder.dal.partiql.PartiQLQuery",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PartiQLQueryClient;
  service: typeof PartiQLQueryService;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
