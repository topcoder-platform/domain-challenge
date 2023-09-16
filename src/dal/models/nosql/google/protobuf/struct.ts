/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = "NULL_VALUE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    case NullValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function nullValueToNumber(object: NullValue): number {
  switch (object) {
    case NullValue.NULL_VALUE:
      return 0;
    case NullValue.UNRECOGNIZED:
    default:
      return -1;
  }
}

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields: { [key: string]: any };
}

export interface Struct_FieldsEntry {
  key: string;
  value?: any;
}

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  kind?:
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "numberValue"; numberValue: number }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "structValue"; structValue: { [key: string]: any } }
    | { $case: "listValue"; listValue: Array<any> };
}

/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: any[];
}

function createBaseStruct(): Struct {
  return { fields: {} };
}

export const Struct = {
  encode(message: Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      if (value !== undefined) {
        Struct_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: any }>((acc, [key, value]) => {
          acc[key] = value as any;
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Struct>, I>>(base?: I): Struct {
    return Struct.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Struct>, I>>(object: I): Struct {
    const message = createBaseStruct();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: any }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },

  wrap(object: { [key: string]: any } | undefined): Struct {
    const struct = createBaseStruct();
    if (object !== undefined) {
      Object.keys(object).forEach((key) => {
        struct.fields[key] = object[key];
      });
    }
    return struct;
  },

  unwrap(message: Struct): { [key: string]: any } {
    const object: { [key: string]: any } = {};
    if (message.fields) {
      Object.keys(message.fields).forEach((key) => {
        object[key] = message.fields[key];
      });
    }
    return object;
  },
};

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return { key: "", value: undefined };
}

export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Struct_FieldsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Struct_FieldsEntry>, I>>(base?: I): Struct_FieldsEntry {
    return Struct_FieldsEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Struct_FieldsEntry>, I>>(object: I): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseValue(): Value {
  return { kind: undefined };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "nullValue":
        writer.uint32(8).int32(nullValueToNumber(message.kind.nullValue));
        break;
      case "numberValue":
        writer.uint32(17).double(message.kind.numberValue);
        break;
      case "stringValue":
        writer.uint32(26).string(message.kind.stringValue);
        break;
      case "boolValue":
        writer.uint32(32).bool(message.kind.boolValue);
        break;
      case "structValue":
        Struct.encode(Struct.wrap(message.kind.structValue), writer.uint32(42).fork()).ldelim();
        break;
      case "listValue":
        ListValue.encode(ListValue.wrap(message.kind.listValue), writer.uint32(50).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = { $case: "nullValue", nullValue: nullValueFromJSON(reader.int32()) };
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.kind = { $case: "numberValue", numberValue: reader.double() };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.kind = { $case: "stringValue", stringValue: reader.string() };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.kind = { $case: "boolValue", boolValue: reader.bool() };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.kind = { $case: "structValue", structValue: Struct.unwrap(Struct.decode(reader, reader.uint32())) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.kind = { $case: "listValue", listValue: ListValue.unwrap(ListValue.decode(reader, reader.uint32())) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      kind: isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.numberValue)
        ? { $case: "numberValue", numberValue: Number(object.numberValue) }
        : isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: String(object.stringValue) }
        : isSet(object.boolValue)
        ? { $case: "boolValue", boolValue: Boolean(object.boolValue) }
        : isSet(object.structValue)
        ? { $case: "structValue", structValue: object.structValue }
        : isSet(object.listValue)
        ? { $case: "listValue", listValue: [...object.listValue] }
        : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.kind?.$case === "nullValue" &&
      (obj.nullValue = message.kind?.nullValue !== undefined ? nullValueToJSON(message.kind?.nullValue) : undefined);
    message.kind?.$case === "numberValue" && (obj.numberValue = message.kind?.numberValue);
    message.kind?.$case === "stringValue" && (obj.stringValue = message.kind?.stringValue);
    message.kind?.$case === "boolValue" && (obj.boolValue = message.kind?.boolValue);
    message.kind?.$case === "structValue" && (obj.structValue = message.kind?.structValue);
    message.kind?.$case === "listValue" && (obj.listValue = message.kind?.listValue);
    return obj;
  },

  create<I extends Exact<DeepPartial<Value>, I>>(base?: I): Value {
    return Value.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
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
      object.kind?.$case === "stringValue" &&
      object.kind?.stringValue !== undefined &&
      object.kind?.stringValue !== null
    ) {
      message.kind = { $case: "stringValue", stringValue: object.kind.stringValue };
    }
    if (object.kind?.$case === "boolValue" && object.kind?.boolValue !== undefined && object.kind?.boolValue !== null) {
      message.kind = { $case: "boolValue", boolValue: object.kind.boolValue };
    }
    if (
      object.kind?.$case === "structValue" &&
      object.kind?.structValue !== undefined &&
      object.kind?.structValue !== null
    ) {
      message.kind = { $case: "structValue", structValue: object.kind.structValue };
    }
    if (object.kind?.$case === "listValue" && object.kind?.listValue !== undefined && object.kind?.listValue !== null) {
      message.kind = { $case: "listValue", listValue: object.kind.listValue };
    }
    return message;
  },

  wrap(value: any): Value {
    const result = createBaseValue();
    if (value === null) {
      result.kind = { $case: "nullValue", nullValue: NullValue.NULL_VALUE };
    } else if (typeof value === "boolean") {
      result.kind = { $case: "boolValue", boolValue: value };
    } else if (typeof value === "number") {
      result.kind = { $case: "numberValue", numberValue: value };
    } else if (typeof value === "string") {
      result.kind = { $case: "stringValue", stringValue: value };
    } else if (Array.isArray(value)) {
      result.kind = { $case: "listValue", listValue: value };
    } else if (typeof value === "object") {
      result.kind = { $case: "structValue", structValue: value };
    } else if (typeof value !== "undefined") {
      throw new Error("Unsupported any value type: " + typeof value);
    }
    return result;
  },

  unwrap(message: Value): string | number | boolean | Object | null | Array<any> | undefined {
    if (message.kind?.$case === "nullValue") {
      return null;
    } else if (message.kind?.$case === "numberValue") {
      return message.kind?.numberValue;
    } else if (message.kind?.$case === "stringValue") {
      return message.kind?.stringValue;
    } else if (message.kind?.$case === "boolValue") {
      return message.kind?.boolValue;
    } else if (message.kind?.$case === "structValue") {
      return message.kind?.structValue;
    } else if (message.kind?.$case === "listValue") {
      return message.kind?.listValue;
    } else {
      return undefined;
    }
  },
};

function createBaseListValue(): ListValue {
  return { values: [] };
}

export const ListValue = {
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(Value.wrap(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListValue {
    return { values: Array.isArray(object?.values) ? [...object.values] : [] };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListValue>, I>>(base?: I): ListValue {
    return ListValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListValue>, I>>(object: I): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },

  wrap(array: Array<any> | undefined): ListValue {
    const result = createBaseListValue();
    result.values = array ?? [];
    return result;
  },

  unwrap(message: ListValue): Array<any> {
    if (message?.hasOwnProperty("values") && Array.isArray(message.values)) {
      return message.values;
    } else {
      return message as any;
    }
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
