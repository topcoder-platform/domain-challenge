/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Prize {
  prizeId: number;
  place: number;
  prizeAmount: number;
  prizeTypeId: number;
  numberOfSubmissions: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
  projectId: number;
}

export interface PrizeType {
  prizeTypeId: number;
  prizeTypeDesc: string;
}

export interface PrizeList {
  prizes: Prize[];
}

export interface PrizeTypeList {
  prizeTypes: PrizeType[];
}

export interface CreatePrizeInput {
  place: number;
  prizeAmount: number;
  prizeTypeId: number;
  numberOfSubmissions?: number | undefined;
  projectId: number;
}

export interface UpdatePrizeInput {
  updateCriteria?: UpdatePrizeInput_UpdateCriteria;
  updateInput?: UpdatePrizeInput_UpdateInput;
}

export interface UpdatePrizeInput_UpdateInput {
  place?: number | undefined;
  prizeAmount?: number | undefined;
  prizeTypeId?: number | undefined;
  numberOfSubmissions?: number | undefined;
}

export interface UpdatePrizeInput_UpdateCriteria {
  projectId?: number | undefined;
  place?: number | undefined;
  prizeId?: number | undefined;
}

export interface DeletePrizeInput {
  prizeId: number;
  projectId: number;
}

function createBasePrize(): Prize {
  return {
    prizeId: 0,
    place: 0,
    prizeAmount: 0,
    prizeTypeId: 0,
    numberOfSubmissions: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
    projectId: 0,
  };
}

export const Prize = {
  encode(message: Prize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prizeId !== 0) {
      writer.uint32(8).int32(message.prizeId);
    }
    if (message.place !== 0) {
      writer.uint32(16).int32(message.place);
    }
    if (message.prizeAmount !== 0) {
      writer.uint32(29).float(message.prizeAmount);
    }
    if (message.prizeTypeId !== 0) {
      writer.uint32(32).int32(message.prizeTypeId);
    }
    if (message.numberOfSubmissions !== 0) {
      writer.uint32(40).int32(message.numberOfSubmissions);
    }
    if (message.createUser !== 0) {
      writer.uint32(48).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(56).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(64).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(72).int64(message.modifyDate);
    }
    if (message.projectId !== 0) {
      writer.uint32(80).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Prize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizeId = reader.int32();
          break;
        case 2:
          message.place = reader.int32();
          break;
        case 3:
          message.prizeAmount = reader.float();
          break;
        case 4:
          message.prizeTypeId = reader.int32();
          break;
        case 5:
          message.numberOfSubmissions = reader.int32();
          break;
        case 6:
          message.createUser = reader.int32();
          break;
        case 7:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.modifyUser = reader.int32();
          break;
        case 9:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Prize {
    return {
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : 0,
      place: isSet(object.place) ? Number(object.place) : 0,
      prizeAmount: isSet(object.prizeAmount) ? Number(object.prizeAmount) : 0,
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : 0,
      numberOfSubmissions: isSet(object.numberOfSubmissions) ? Number(object.numberOfSubmissions) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
    };
  },

  toJSON(message: Prize): unknown {
    const obj: any = {};
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.prizeAmount !== undefined && (obj.prizeAmount = message.prizeAmount);
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    message.numberOfSubmissions !== undefined && (obj.numberOfSubmissions = Math.round(message.numberOfSubmissions));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<Prize>, I>>(base?: I): Prize {
    return Prize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Prize>, I>>(object: I): Prize {
    const message = createBasePrize();
    message.prizeId = object.prizeId ?? 0;
    message.place = object.place ?? 0;
    message.prizeAmount = object.prizeAmount ?? 0;
    message.prizeTypeId = object.prizeTypeId ?? 0;
    message.numberOfSubmissions = object.numberOfSubmissions ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBasePrizeType(): PrizeType {
  return { prizeTypeId: 0, prizeTypeDesc: "" };
}

export const PrizeType = {
  encode(message: PrizeType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prizeTypeId !== 0) {
      writer.uint32(8).int32(message.prizeTypeId);
    }
    if (message.prizeTypeDesc !== "") {
      writer.uint32(18).string(message.prizeTypeDesc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrizeType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizeTypeId = reader.int32();
          break;
        case 2:
          message.prizeTypeDesc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrizeType {
    return {
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : 0,
      prizeTypeDesc: isSet(object.prizeTypeDesc) ? String(object.prizeTypeDesc) : "",
    };
  },

  toJSON(message: PrizeType): unknown {
    const obj: any = {};
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    message.prizeTypeDesc !== undefined && (obj.prizeTypeDesc = message.prizeTypeDesc);
    return obj;
  },

  create<I extends Exact<DeepPartial<PrizeType>, I>>(base?: I): PrizeType {
    return PrizeType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PrizeType>, I>>(object: I): PrizeType {
    const message = createBasePrizeType();
    message.prizeTypeId = object.prizeTypeId ?? 0;
    message.prizeTypeDesc = object.prizeTypeDesc ?? "";
    return message;
  },
};

function createBasePrizeList(): PrizeList {
  return { prizes: [] };
}

export const PrizeList = {
  encode(message: PrizeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prizes) {
      Prize.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrizeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizes.push(Prize.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrizeList {
    return { prizes: Array.isArray(object?.prizes) ? object.prizes.map((e: any) => Prize.fromJSON(e)) : [] };
  },

  toJSON(message: PrizeList): unknown {
    const obj: any = {};
    if (message.prizes) {
      obj.prizes = message.prizes.map((e) => e ? Prize.toJSON(e) : undefined);
    } else {
      obj.prizes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrizeList>, I>>(base?: I): PrizeList {
    return PrizeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PrizeList>, I>>(object: I): PrizeList {
    const message = createBasePrizeList();
    message.prizes = object.prizes?.map((e) => Prize.fromPartial(e)) || [];
    return message;
  },
};

function createBasePrizeTypeList(): PrizeTypeList {
  return { prizeTypes: [] };
}

export const PrizeTypeList = {
  encode(message: PrizeTypeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prizeTypes) {
      PrizeType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrizeTypeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrizeTypeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizeTypes.push(PrizeType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrizeTypeList {
    return {
      prizeTypes: Array.isArray(object?.prizeTypes) ? object.prizeTypes.map((e: any) => PrizeType.fromJSON(e)) : [],
    };
  },

  toJSON(message: PrizeTypeList): unknown {
    const obj: any = {};
    if (message.prizeTypes) {
      obj.prizeTypes = message.prizeTypes.map((e) => e ? PrizeType.toJSON(e) : undefined);
    } else {
      obj.prizeTypes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrizeTypeList>, I>>(base?: I): PrizeTypeList {
    return PrizeTypeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PrizeTypeList>, I>>(object: I): PrizeTypeList {
    const message = createBasePrizeTypeList();
    message.prizeTypes = object.prizeTypes?.map((e) => PrizeType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePrizeInput(): CreatePrizeInput {
  return { place: 0, prizeAmount: 0, prizeTypeId: 0, numberOfSubmissions: undefined, projectId: 0 };
}

export const CreatePrizeInput = {
  encode(message: CreatePrizeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== 0) {
      writer.uint32(8).int32(message.place);
    }
    if (message.prizeAmount !== 0) {
      writer.uint32(21).float(message.prizeAmount);
    }
    if (message.prizeTypeId !== 0) {
      writer.uint32(24).int32(message.prizeTypeId);
    }
    if (message.numberOfSubmissions !== undefined) {
      writer.uint32(32).int32(message.numberOfSubmissions);
    }
    if (message.projectId !== 0) {
      writer.uint32(40).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePrizeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePrizeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.place = reader.int32();
          break;
        case 2:
          message.prizeAmount = reader.float();
          break;
        case 3:
          message.prizeTypeId = reader.int32();
          break;
        case 4:
          message.numberOfSubmissions = reader.int32();
          break;
        case 5:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePrizeInput {
    return {
      place: isSet(object.place) ? Number(object.place) : 0,
      prizeAmount: isSet(object.prizeAmount) ? Number(object.prizeAmount) : 0,
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : 0,
      numberOfSubmissions: isSet(object.numberOfSubmissions) ? Number(object.numberOfSubmissions) : undefined,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
    };
  },

  toJSON(message: CreatePrizeInput): unknown {
    const obj: any = {};
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.prizeAmount !== undefined && (obj.prizeAmount = message.prizeAmount);
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    message.numberOfSubmissions !== undefined && (obj.numberOfSubmissions = Math.round(message.numberOfSubmissions));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePrizeInput>, I>>(base?: I): CreatePrizeInput {
    return CreatePrizeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePrizeInput>, I>>(object: I): CreatePrizeInput {
    const message = createBaseCreatePrizeInput();
    message.place = object.place ?? 0;
    message.prizeAmount = object.prizeAmount ?? 0;
    message.prizeTypeId = object.prizeTypeId ?? 0;
    message.numberOfSubmissions = object.numberOfSubmissions ?? undefined;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseUpdatePrizeInput(): UpdatePrizeInput {
  return { updateCriteria: undefined, updateInput: undefined };
}

export const UpdatePrizeInput = {
  encode(message: UpdatePrizeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateCriteria !== undefined) {
      UpdatePrizeInput_UpdateCriteria.encode(message.updateCriteria, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdatePrizeInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrizeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePrizeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateCriteria = UpdatePrizeInput_UpdateCriteria.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateInput = UpdatePrizeInput_UpdateInput.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePrizeInput {
    return {
      updateCriteria: isSet(object.updateCriteria)
        ? UpdatePrizeInput_UpdateCriteria.fromJSON(object.updateCriteria)
        : undefined,
      updateInput: isSet(object.updateInput) ? UpdatePrizeInput_UpdateInput.fromJSON(object.updateInput) : undefined,
    };
  },

  toJSON(message: UpdatePrizeInput): unknown {
    const obj: any = {};
    message.updateCriteria !== undefined && (obj.updateCriteria = message.updateCriteria
      ? UpdatePrizeInput_UpdateCriteria.toJSON(message.updateCriteria)
      : undefined);
    message.updateInput !== undefined &&
      (obj.updateInput = message.updateInput ? UpdatePrizeInput_UpdateInput.toJSON(message.updateInput) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePrizeInput>, I>>(base?: I): UpdatePrizeInput {
    return UpdatePrizeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePrizeInput>, I>>(object: I): UpdatePrizeInput {
    const message = createBaseUpdatePrizeInput();
    message.updateCriteria = (object.updateCriteria !== undefined && object.updateCriteria !== null)
      ? UpdatePrizeInput_UpdateCriteria.fromPartial(object.updateCriteria)
      : undefined;
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdatePrizeInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdatePrizeInput_UpdateInput(): UpdatePrizeInput_UpdateInput {
  return { place: undefined, prizeAmount: undefined, prizeTypeId: undefined, numberOfSubmissions: undefined };
}

export const UpdatePrizeInput_UpdateInput = {
  encode(message: UpdatePrizeInput_UpdateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== undefined) {
      writer.uint32(8).int32(message.place);
    }
    if (message.prizeAmount !== undefined) {
      writer.uint32(21).float(message.prizeAmount);
    }
    if (message.prizeTypeId !== undefined) {
      writer.uint32(24).int32(message.prizeTypeId);
    }
    if (message.numberOfSubmissions !== undefined) {
      writer.uint32(32).int32(message.numberOfSubmissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrizeInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePrizeInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.place = reader.int32();
          break;
        case 2:
          message.prizeAmount = reader.float();
          break;
        case 3:
          message.prizeTypeId = reader.int32();
          break;
        case 4:
          message.numberOfSubmissions = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePrizeInput_UpdateInput {
    return {
      place: isSet(object.place) ? Number(object.place) : undefined,
      prizeAmount: isSet(object.prizeAmount) ? Number(object.prizeAmount) : undefined,
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : undefined,
      numberOfSubmissions: isSet(object.numberOfSubmissions) ? Number(object.numberOfSubmissions) : undefined,
    };
  },

  toJSON(message: UpdatePrizeInput_UpdateInput): unknown {
    const obj: any = {};
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.prizeAmount !== undefined && (obj.prizeAmount = message.prizeAmount);
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    message.numberOfSubmissions !== undefined && (obj.numberOfSubmissions = Math.round(message.numberOfSubmissions));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePrizeInput_UpdateInput>, I>>(base?: I): UpdatePrizeInput_UpdateInput {
    return UpdatePrizeInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePrizeInput_UpdateInput>, I>>(object: I): UpdatePrizeInput_UpdateInput {
    const message = createBaseUpdatePrizeInput_UpdateInput();
    message.place = object.place ?? undefined;
    message.prizeAmount = object.prizeAmount ?? undefined;
    message.prizeTypeId = object.prizeTypeId ?? undefined;
    message.numberOfSubmissions = object.numberOfSubmissions ?? undefined;
    return message;
  },
};

function createBaseUpdatePrizeInput_UpdateCriteria(): UpdatePrizeInput_UpdateCriteria {
  return { projectId: undefined, place: undefined, prizeId: undefined };
}

export const UpdatePrizeInput_UpdateCriteria = {
  encode(message: UpdatePrizeInput_UpdateCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== undefined) {
      writer.uint32(8).uint32(message.projectId);
    }
    if (message.place !== undefined) {
      writer.uint32(16).uint32(message.place);
    }
    if (message.prizeId !== undefined) {
      writer.uint32(24).uint32(message.prizeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePrizeInput_UpdateCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePrizeInput_UpdateCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint32();
          break;
        case 2:
          message.place = reader.uint32();
          break;
        case 3:
          message.prizeId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePrizeInput_UpdateCriteria {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : undefined,
      place: isSet(object.place) ? Number(object.place) : undefined,
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : undefined,
    };
  },

  toJSON(message: UpdatePrizeInput_UpdateCriteria): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePrizeInput_UpdateCriteria>, I>>(base?: I): UpdatePrizeInput_UpdateCriteria {
    return UpdatePrizeInput_UpdateCriteria.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePrizeInput_UpdateCriteria>, I>>(
    object: I,
  ): UpdatePrizeInput_UpdateCriteria {
    const message = createBaseUpdatePrizeInput_UpdateCriteria();
    message.projectId = object.projectId ?? undefined;
    message.place = object.place ?? undefined;
    message.prizeId = object.prizeId ?? undefined;
    return message;
  },
};

function createBaseDeletePrizeInput(): DeletePrizeInput {
  return { prizeId: 0, projectId: 0 };
}

export const DeletePrizeInput = {
  encode(message: DeletePrizeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prizeId !== 0) {
      writer.uint32(8).int32(message.prizeId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePrizeInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePrizeInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prizeId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePrizeInput {
    return {
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
    };
  },

  toJSON(message: DeletePrizeInput): unknown {
    const obj: any = {};
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePrizeInput>, I>>(base?: I): DeletePrizeInput {
    return DeletePrizeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePrizeInput>, I>>(object: I): DeletePrizeInput {
    const message = createBaseDeletePrizeInput();
    message.prizeId = object.prizeId ?? 0;
    message.projectId = object.projectId ?? 0;
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
