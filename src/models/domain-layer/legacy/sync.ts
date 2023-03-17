/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface SyncInput {
  projectId: number;
  updatedTables: Table[];
}

export interface Table {
  table: string;
  primaryKey: string;
  value: string[];
}

function createBaseSyncInput(): SyncInput {
  return { projectId: 0, updatedTables: [] };
}

export const SyncInput = {
  encode(message: SyncInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    for (const v of message.updatedTables) {
      Table.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.updatedTables.push(Table.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      updatedTables: Array.isArray(object?.updatedTables)
        ? object.updatedTables.map((e: any) => Table.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SyncInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    if (message.updatedTables) {
      obj.updatedTables = message.updatedTables.map((e) => e ? Table.toJSON(e) : undefined);
    } else {
      obj.updatedTables = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncInput>, I>>(base?: I): SyncInput {
    return SyncInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SyncInput>, I>>(object: I): SyncInput {
    const message = createBaseSyncInput();
    message.projectId = object.projectId ?? 0;
    message.updatedTables = object.updatedTables?.map((e) => Table.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTable(): Table {
  return { table: "", primaryKey: "", value: [] };
}

export const Table = {
  encode(message: Table, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.primaryKey !== "") {
      writer.uint32(18).string(message.primaryKey);
    }
    for (const v of message.value) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Table {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.table = reader.string();
          break;
        case 2:
          message.primaryKey = reader.string();
          break;
        case 3:
          message.value.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Table {
    return {
      table: isSet(object.table) ? String(object.table) : "",
      primaryKey: isSet(object.primaryKey) ? String(object.primaryKey) : "",
      value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Table): unknown {
    const obj: any = {};
    message.table !== undefined && (obj.table = message.table);
    message.primaryKey !== undefined && (obj.primaryKey = message.primaryKey);
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Table>, I>>(base?: I): Table {
    return Table.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Table>, I>>(object: I): Table {
    const message = createBaseTable();
    message.table = object.table ?? "";
    message.primaryKey = object.primaryKey ?? "";
    message.value = object.value?.map((e) => e) || [];
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
