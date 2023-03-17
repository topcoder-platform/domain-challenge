/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface ContestEligibility {
  contestEligibilityId: number;
  contestId: number;
  isStudio: number;
}

export interface GetContestEligibilityInput {
  contestId: number;
}

export interface ContestEligibilityList {
  contestEligibilities: ContestEligibility[];
}

export interface DeleteContestEligibilityInput {
  contestEligibilityId: number;
}

export interface GroupContestEligibility {
  contestEligibilityId: number;
  groupId: number;
}

export interface GetGroupContestEligibilityInput {
  contestEligibilityId: number;
}

export interface GroupContestEligibilityList {
  groupContestEligibilities: GroupContestEligibility[];
}

export interface DeleteGroupContestEligibilityInput {
  contestEligibilityId: number;
  groupId: number;
}

function createBaseContestEligibility(): ContestEligibility {
  return { contestEligibilityId: 0, contestId: 0, isStudio: 0 };
}

export const ContestEligibility = {
  encode(message: ContestEligibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestEligibilityId !== 0) {
      writer.uint32(8).int32(message.contestEligibilityId);
    }
    if (message.contestId !== 0) {
      writer.uint32(16).int32(message.contestId);
    }
    if (message.isStudio !== 0) {
      writer.uint32(24).int32(message.isStudio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContestEligibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContestEligibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contestEligibilityId = reader.int32();
          break;
        case 2:
          message.contestId = reader.int32();
          break;
        case 3:
          message.isStudio = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContestEligibility {
    return {
      contestEligibilityId: isSet(object.contestEligibilityId) ? Number(object.contestEligibilityId) : 0,
      contestId: isSet(object.contestId) ? Number(object.contestId) : 0,
      isStudio: isSet(object.isStudio) ? Number(object.isStudio) : 0,
    };
  },

  toJSON(message: ContestEligibility): unknown {
    const obj: any = {};
    message.contestEligibilityId !== undefined && (obj.contestEligibilityId = Math.round(message.contestEligibilityId));
    message.contestId !== undefined && (obj.contestId = Math.round(message.contestId));
    message.isStudio !== undefined && (obj.isStudio = Math.round(message.isStudio));
    return obj;
  },

  create<I extends Exact<DeepPartial<ContestEligibility>, I>>(base?: I): ContestEligibility {
    return ContestEligibility.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContestEligibility>, I>>(object: I): ContestEligibility {
    const message = createBaseContestEligibility();
    message.contestEligibilityId = object.contestEligibilityId ?? 0;
    message.contestId = object.contestId ?? 0;
    message.isStudio = object.isStudio ?? 0;
    return message;
  },
};

function createBaseGetContestEligibilityInput(): GetContestEligibilityInput {
  return { contestId: 0 };
}

export const GetContestEligibilityInput = {
  encode(message: GetContestEligibilityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestId !== 0) {
      writer.uint32(8).int32(message.contestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetContestEligibilityInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetContestEligibilityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contestId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetContestEligibilityInput {
    return { contestId: isSet(object.contestId) ? Number(object.contestId) : 0 };
  },

  toJSON(message: GetContestEligibilityInput): unknown {
    const obj: any = {};
    message.contestId !== undefined && (obj.contestId = Math.round(message.contestId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetContestEligibilityInput>, I>>(base?: I): GetContestEligibilityInput {
    return GetContestEligibilityInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetContestEligibilityInput>, I>>(object: I): GetContestEligibilityInput {
    const message = createBaseGetContestEligibilityInput();
    message.contestId = object.contestId ?? 0;
    return message;
  },
};

function createBaseContestEligibilityList(): ContestEligibilityList {
  return { contestEligibilities: [] };
}

export const ContestEligibilityList = {
  encode(message: ContestEligibilityList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contestEligibilities) {
      ContestEligibility.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContestEligibilityList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContestEligibilityList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contestEligibilities.push(ContestEligibility.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContestEligibilityList {
    return {
      contestEligibilities: Array.isArray(object?.contestEligibilities)
        ? object.contestEligibilities.map((e: any) => ContestEligibility.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContestEligibilityList): unknown {
    const obj: any = {};
    if (message.contestEligibilities) {
      obj.contestEligibilities = message.contestEligibilities.map((e) => e ? ContestEligibility.toJSON(e) : undefined);
    } else {
      obj.contestEligibilities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContestEligibilityList>, I>>(base?: I): ContestEligibilityList {
    return ContestEligibilityList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContestEligibilityList>, I>>(object: I): ContestEligibilityList {
    const message = createBaseContestEligibilityList();
    message.contestEligibilities = object.contestEligibilities?.map((e) => ContestEligibility.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteContestEligibilityInput(): DeleteContestEligibilityInput {
  return { contestEligibilityId: 0 };
}

export const DeleteContestEligibilityInput = {
  encode(message: DeleteContestEligibilityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestEligibilityId !== 0) {
      writer.uint32(8).int32(message.contestEligibilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteContestEligibilityInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteContestEligibilityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contestEligibilityId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteContestEligibilityInput {
    return { contestEligibilityId: isSet(object.contestEligibilityId) ? Number(object.contestEligibilityId) : 0 };
  },

  toJSON(message: DeleteContestEligibilityInput): unknown {
    const obj: any = {};
    message.contestEligibilityId !== undefined && (obj.contestEligibilityId = Math.round(message.contestEligibilityId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteContestEligibilityInput>, I>>(base?: I): DeleteContestEligibilityInput {
    return DeleteContestEligibilityInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteContestEligibilityInput>, I>>(
    object: I,
  ): DeleteContestEligibilityInput {
    const message = createBaseDeleteContestEligibilityInput();
    message.contestEligibilityId = object.contestEligibilityId ?? 0;
    return message;
  },
};

function createBaseGroupContestEligibility(): GroupContestEligibility {
  return { contestEligibilityId: 0, groupId: 0 };
}

export const GroupContestEligibility = {
  encode(message: GroupContestEligibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestEligibilityId !== 0) {
      writer.uint32(8).int32(message.contestEligibilityId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).int32(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupContestEligibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupContestEligibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contestEligibilityId = reader.int32();
          break;
        case 2:
          message.groupId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupContestEligibility {
    return {
      contestEligibilityId: isSet(object.contestEligibilityId) ? Number(object.contestEligibilityId) : 0,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },

  toJSON(message: GroupContestEligibility): unknown {
    const obj: any = {};
    message.contestEligibilityId !== undefined && (obj.contestEligibilityId = Math.round(message.contestEligibilityId));
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupContestEligibility>, I>>(base?: I): GroupContestEligibility {
    return GroupContestEligibility.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupContestEligibility>, I>>(object: I): GroupContestEligibility {
    const message = createBaseGroupContestEligibility();
    message.contestEligibilityId = object.contestEligibilityId ?? 0;
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseGetGroupContestEligibilityInput(): GetGroupContestEligibilityInput {
  return { contestEligibilityId: 0 };
}

export const GetGroupContestEligibilityInput = {
  encode(message: GetGroupContestEligibilityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestEligibilityId !== 0) {
      writer.uint32(8).int32(message.contestEligibilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupContestEligibilityInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupContestEligibilityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contestEligibilityId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupContestEligibilityInput {
    return { contestEligibilityId: isSet(object.contestEligibilityId) ? Number(object.contestEligibilityId) : 0 };
  },

  toJSON(message: GetGroupContestEligibilityInput): unknown {
    const obj: any = {};
    message.contestEligibilityId !== undefined && (obj.contestEligibilityId = Math.round(message.contestEligibilityId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGroupContestEligibilityInput>, I>>(base?: I): GetGroupContestEligibilityInput {
    return GetGroupContestEligibilityInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupContestEligibilityInput>, I>>(
    object: I,
  ): GetGroupContestEligibilityInput {
    const message = createBaseGetGroupContestEligibilityInput();
    message.contestEligibilityId = object.contestEligibilityId ?? 0;
    return message;
  },
};

function createBaseGroupContestEligibilityList(): GroupContestEligibilityList {
  return { groupContestEligibilities: [] };
}

export const GroupContestEligibilityList = {
  encode(message: GroupContestEligibilityList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groupContestEligibilities) {
      GroupContestEligibility.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupContestEligibilityList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupContestEligibilityList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupContestEligibilities.push(GroupContestEligibility.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupContestEligibilityList {
    return {
      groupContestEligibilities: Array.isArray(object?.groupContestEligibilities)
        ? object.groupContestEligibilities.map((e: any) => GroupContestEligibility.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GroupContestEligibilityList): unknown {
    const obj: any = {};
    if (message.groupContestEligibilities) {
      obj.groupContestEligibilities = message.groupContestEligibilities.map((e) =>
        e ? GroupContestEligibility.toJSON(e) : undefined
      );
    } else {
      obj.groupContestEligibilities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupContestEligibilityList>, I>>(base?: I): GroupContestEligibilityList {
    return GroupContestEligibilityList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GroupContestEligibilityList>, I>>(object: I): GroupContestEligibilityList {
    const message = createBaseGroupContestEligibilityList();
    message.groupContestEligibilities =
      object.groupContestEligibilities?.map((e) => GroupContestEligibility.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteGroupContestEligibilityInput(): DeleteGroupContestEligibilityInput {
  return { contestEligibilityId: 0, groupId: 0 };
}

export const DeleteGroupContestEligibilityInput = {
  encode(message: DeleteGroupContestEligibilityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contestEligibilityId !== 0) {
      writer.uint32(8).int32(message.contestEligibilityId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).int32(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGroupContestEligibilityInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGroupContestEligibilityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contestEligibilityId = reader.int32();
          break;
        case 2:
          message.groupId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGroupContestEligibilityInput {
    return {
      contestEligibilityId: isSet(object.contestEligibilityId) ? Number(object.contestEligibilityId) : 0,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },

  toJSON(message: DeleteGroupContestEligibilityInput): unknown {
    const obj: any = {};
    message.contestEligibilityId !== undefined && (obj.contestEligibilityId = Math.round(message.contestEligibilityId));
    message.groupId !== undefined && (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGroupContestEligibilityInput>, I>>(
    base?: I,
  ): DeleteGroupContestEligibilityInput {
    return DeleteGroupContestEligibilityInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteGroupContestEligibilityInput>, I>>(
    object: I,
  ): DeleteGroupContestEligibilityInput {
    const message = createBaseDeleteGroupContestEligibilityInput();
    message.contestEligibilityId = object.contestEligibilityId ?? 0;
    message.groupId = object.groupId ?? 0;
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
