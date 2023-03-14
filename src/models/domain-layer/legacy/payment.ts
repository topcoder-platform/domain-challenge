/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface ProjectPayment {
  projectPaymentId: number;
  projectPaymentTypeId: number;
  resourceId: number;
  submissionId: number;
  amount: number;
  pactsPaymentId: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface ProjectPaymentList {
  projectPayments: ProjectPayment[];
}

export interface GetProjectPaymentsInput {
  resourceId: number;
  projectPaymentTypeId: number;
}

export interface CreateProjectPaymentsInput {
  projectPaymentId: number;
  projectPaymentTypeId: number;
  resourceId: number;
  submissionId: number;
  amount: number;
  pactsPaymentId: number;
}

export interface UpdateProjectPaymentsInput {
  resourceId: number;
  projectPaymentTypeId: number;
  amount: number;
}

export interface DeleteProjectPaymentsInput {
  resourceId: number;
  projectPaymentTypeId: number;
}

export interface Prize {
  prizeId: number;
  projectId: number;
  place: number;
  prizeAmount: number;
  prizeTypeId: number;
  numberOfSubmissions: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface PrizeList {
  prizes: Prize[];
}

export interface GetPrizesInput {
  projectId: number;
  prizeTypeId: number;
}

export interface CreatePrizeInput {
  prizeId: number;
  projectId: number;
  place: number;
  prizeAmount: number;
  prizeTypeId: number;
  numberOfSubmissions: number;
}

export interface UpdatePrizeInput {
  prizeId: number;
  projectId: number;
  numberOfSubmissions: number;
  prizeAmount: number;
}

export interface DeletePrizeInput {
  prizeId: number;
  projectId: number;
}

function createBaseProjectPayment(): ProjectPayment {
  return {
    projectPaymentId: 0,
    projectPaymentTypeId: 0,
    resourceId: 0,
    submissionId: 0,
    amount: 0,
    pactsPaymentId: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const ProjectPayment = {
  encode(message: ProjectPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPaymentId !== 0) {
      writer.uint32(8).int32(message.projectPaymentId);
    }
    if (message.projectPaymentTypeId !== 0) {
      writer.uint32(16).int32(message.projectPaymentTypeId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(24).int32(message.resourceId);
    }
    if (message.submissionId !== 0) {
      writer.uint32(32).int32(message.submissionId);
    }
    if (message.amount !== 0) {
      writer.uint32(45).float(message.amount);
    }
    if (message.pactsPaymentId !== 0) {
      writer.uint32(48).int32(message.pactsPaymentId);
    }
    if (message.createUser !== 0) {
      writer.uint32(56).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(64).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(72).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(80).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPaymentId = reader.int32();
          break;
        case 2:
          message.projectPaymentTypeId = reader.int32();
          break;
        case 3:
          message.resourceId = reader.int32();
          break;
        case 4:
          message.submissionId = reader.int32();
          break;
        case 5:
          message.amount = reader.float();
          break;
        case 6:
          message.pactsPaymentId = reader.int32();
          break;
        case 7:
          message.createUser = reader.int32();
          break;
        case 8:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.modifyUser = reader.int32();
          break;
        case 10:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPayment {
    return {
      projectPaymentId: isSet(object.projectPaymentId) ? Number(object.projectPaymentId) : 0,
      projectPaymentTypeId: isSet(object.projectPaymentTypeId) ? Number(object.projectPaymentTypeId) : 0,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      submissionId: isSet(object.submissionId) ? Number(object.submissionId) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      pactsPaymentId: isSet(object.pactsPaymentId) ? Number(object.pactsPaymentId) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: ProjectPayment): unknown {
    const obj: any = {};
    message.projectPaymentId !== undefined && (obj.projectPaymentId = Math.round(message.projectPaymentId));
    message.projectPaymentTypeId !== undefined && (obj.projectPaymentTypeId = Math.round(message.projectPaymentTypeId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.submissionId !== undefined && (obj.submissionId = Math.round(message.submissionId));
    message.amount !== undefined && (obj.amount = message.amount);
    message.pactsPaymentId !== undefined && (obj.pactsPaymentId = Math.round(message.pactsPaymentId));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectPayment>, I>>(base?: I): ProjectPayment {
    return ProjectPayment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectPayment>, I>>(object: I): ProjectPayment {
    const message = createBaseProjectPayment();
    message.projectPaymentId = object.projectPaymentId ?? 0;
    message.projectPaymentTypeId = object.projectPaymentTypeId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    message.submissionId = object.submissionId ?? 0;
    message.amount = object.amount ?? 0;
    message.pactsPaymentId = object.pactsPaymentId ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

function createBaseProjectPaymentList(): ProjectPaymentList {
  return { projectPayments: [] };
}

export const ProjectPaymentList = {
  encode(message: ProjectPaymentList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectPayments) {
      ProjectPayment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPaymentList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPaymentList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPayments.push(ProjectPayment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPaymentList {
    return {
      projectPayments: Array.isArray(object?.projectPayments)
        ? object.projectPayments.map((e: any) => ProjectPayment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectPaymentList): unknown {
    const obj: any = {};
    if (message.projectPayments) {
      obj.projectPayments = message.projectPayments.map((e) => e ? ProjectPayment.toJSON(e) : undefined);
    } else {
      obj.projectPayments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectPaymentList>, I>>(base?: I): ProjectPaymentList {
    return ProjectPaymentList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectPaymentList>, I>>(object: I): ProjectPaymentList {
    const message = createBaseProjectPaymentList();
    message.projectPayments = object.projectPayments?.map((e) => ProjectPayment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProjectPaymentsInput(): GetProjectPaymentsInput {
  return { resourceId: 0, projectPaymentTypeId: 0 };
}

export const GetProjectPaymentsInput = {
  encode(message: GetProjectPaymentsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.projectPaymentTypeId !== 0) {
      writer.uint32(16).int32(message.projectPaymentTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectPaymentsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectPaymentsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.projectPaymentTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectPaymentsInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      projectPaymentTypeId: isSet(object.projectPaymentTypeId) ? Number(object.projectPaymentTypeId) : 0,
    };
  },

  toJSON(message: GetProjectPaymentsInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.projectPaymentTypeId !== undefined && (obj.projectPaymentTypeId = Math.round(message.projectPaymentTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectPaymentsInput>, I>>(base?: I): GetProjectPaymentsInput {
    return GetProjectPaymentsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectPaymentsInput>, I>>(object: I): GetProjectPaymentsInput {
    const message = createBaseGetProjectPaymentsInput();
    message.resourceId = object.resourceId ?? 0;
    message.projectPaymentTypeId = object.projectPaymentTypeId ?? 0;
    return message;
  },
};

function createBaseCreateProjectPaymentsInput(): CreateProjectPaymentsInput {
  return { projectPaymentId: 0, projectPaymentTypeId: 0, resourceId: 0, submissionId: 0, amount: 0, pactsPaymentId: 0 };
}

export const CreateProjectPaymentsInput = {
  encode(message: CreateProjectPaymentsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPaymentId !== 0) {
      writer.uint32(8).int32(message.projectPaymentId);
    }
    if (message.projectPaymentTypeId !== 0) {
      writer.uint32(16).int32(message.projectPaymentTypeId);
    }
    if (message.resourceId !== 0) {
      writer.uint32(24).int32(message.resourceId);
    }
    if (message.submissionId !== 0) {
      writer.uint32(32).int32(message.submissionId);
    }
    if (message.amount !== 0) {
      writer.uint32(45).float(message.amount);
    }
    if (message.pactsPaymentId !== 0) {
      writer.uint32(48).int32(message.pactsPaymentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectPaymentsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectPaymentsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPaymentId = reader.int32();
          break;
        case 2:
          message.projectPaymentTypeId = reader.int32();
          break;
        case 3:
          message.resourceId = reader.int32();
          break;
        case 4:
          message.submissionId = reader.int32();
          break;
        case 5:
          message.amount = reader.float();
          break;
        case 6:
          message.pactsPaymentId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectPaymentsInput {
    return {
      projectPaymentId: isSet(object.projectPaymentId) ? Number(object.projectPaymentId) : 0,
      projectPaymentTypeId: isSet(object.projectPaymentTypeId) ? Number(object.projectPaymentTypeId) : 0,
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      submissionId: isSet(object.submissionId) ? Number(object.submissionId) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      pactsPaymentId: isSet(object.pactsPaymentId) ? Number(object.pactsPaymentId) : 0,
    };
  },

  toJSON(message: CreateProjectPaymentsInput): unknown {
    const obj: any = {};
    message.projectPaymentId !== undefined && (obj.projectPaymentId = Math.round(message.projectPaymentId));
    message.projectPaymentTypeId !== undefined && (obj.projectPaymentTypeId = Math.round(message.projectPaymentTypeId));
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.submissionId !== undefined && (obj.submissionId = Math.round(message.submissionId));
    message.amount !== undefined && (obj.amount = message.amount);
    message.pactsPaymentId !== undefined && (obj.pactsPaymentId = Math.round(message.pactsPaymentId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectPaymentsInput>, I>>(base?: I): CreateProjectPaymentsInput {
    return CreateProjectPaymentsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectPaymentsInput>, I>>(object: I): CreateProjectPaymentsInput {
    const message = createBaseCreateProjectPaymentsInput();
    message.projectPaymentId = object.projectPaymentId ?? 0;
    message.projectPaymentTypeId = object.projectPaymentTypeId ?? 0;
    message.resourceId = object.resourceId ?? 0;
    message.submissionId = object.submissionId ?? 0;
    message.amount = object.amount ?? 0;
    message.pactsPaymentId = object.pactsPaymentId ?? 0;
    return message;
  },
};

function createBaseUpdateProjectPaymentsInput(): UpdateProjectPaymentsInput {
  return { resourceId: 0, projectPaymentTypeId: 0, amount: 0 };
}

export const UpdateProjectPaymentsInput = {
  encode(message: UpdateProjectPaymentsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.projectPaymentTypeId !== 0) {
      writer.uint32(16).int32(message.projectPaymentTypeId);
    }
    if (message.amount !== 0) {
      writer.uint32(29).float(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectPaymentsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectPaymentsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.projectPaymentTypeId = reader.int32();
          break;
        case 3:
          message.amount = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectPaymentsInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      projectPaymentTypeId: isSet(object.projectPaymentTypeId) ? Number(object.projectPaymentTypeId) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: UpdateProjectPaymentsInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.projectPaymentTypeId !== undefined && (obj.projectPaymentTypeId = Math.round(message.projectPaymentTypeId));
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectPaymentsInput>, I>>(base?: I): UpdateProjectPaymentsInput {
    return UpdateProjectPaymentsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateProjectPaymentsInput>, I>>(object: I): UpdateProjectPaymentsInput {
    const message = createBaseUpdateProjectPaymentsInput();
    message.resourceId = object.resourceId ?? 0;
    message.projectPaymentTypeId = object.projectPaymentTypeId ?? 0;
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseDeleteProjectPaymentsInput(): DeleteProjectPaymentsInput {
  return { resourceId: 0, projectPaymentTypeId: 0 };
}

export const DeleteProjectPaymentsInput = {
  encode(message: DeleteProjectPaymentsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.projectPaymentTypeId !== 0) {
      writer.uint32(16).int32(message.projectPaymentTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectPaymentsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectPaymentsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.projectPaymentTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectPaymentsInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      projectPaymentTypeId: isSet(object.projectPaymentTypeId) ? Number(object.projectPaymentTypeId) : 0,
    };
  },

  toJSON(message: DeleteProjectPaymentsInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.projectPaymentTypeId !== undefined && (obj.projectPaymentTypeId = Math.round(message.projectPaymentTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectPaymentsInput>, I>>(base?: I): DeleteProjectPaymentsInput {
    return DeleteProjectPaymentsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteProjectPaymentsInput>, I>>(object: I): DeleteProjectPaymentsInput {
    const message = createBaseDeleteProjectPaymentsInput();
    message.resourceId = object.resourceId ?? 0;
    message.projectPaymentTypeId = object.projectPaymentTypeId ?? 0;
    return message;
  },
};

function createBasePrize(): Prize {
  return {
    prizeId: 0,
    projectId: 0,
    place: 0,
    prizeAmount: 0,
    prizeTypeId: 0,
    numberOfSubmissions: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const Prize = {
  encode(message: Prize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prizeId !== 0) {
      writer.uint32(8).int32(message.prizeId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.place !== 0) {
      writer.uint32(24).int32(message.place);
    }
    if (message.prizeAmount !== 0) {
      writer.uint32(37).float(message.prizeAmount);
    }
    if (message.prizeTypeId !== 0) {
      writer.uint32(40).int32(message.prizeTypeId);
    }
    if (message.numberOfSubmissions !== 0) {
      writer.uint32(48).int32(message.numberOfSubmissions);
    }
    if (message.createUser !== 0) {
      writer.uint32(64).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(72).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(80).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(88).int64(message.modifyDate);
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
          message.projectId = reader.int32();
          break;
        case 3:
          message.place = reader.int32();
          break;
        case 4:
          message.prizeAmount = reader.float();
          break;
        case 5:
          message.prizeTypeId = reader.int32();
          break;
        case 6:
          message.numberOfSubmissions = reader.int32();
          break;
        case 8:
          message.createUser = reader.int32();
          break;
        case 9:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.modifyUser = reader.int32();
          break;
        case 11:
          message.modifyDate = longToNumber(reader.int64() as Long);
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
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      place: isSet(object.place) ? Number(object.place) : 0,
      prizeAmount: isSet(object.prizeAmount) ? Number(object.prizeAmount) : 0,
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : 0,
      numberOfSubmissions: isSet(object.numberOfSubmissions) ? Number(object.numberOfSubmissions) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: Prize): unknown {
    const obj: any = {};
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.prizeAmount !== undefined && (obj.prizeAmount = message.prizeAmount);
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    message.numberOfSubmissions !== undefined && (obj.numberOfSubmissions = Math.round(message.numberOfSubmissions));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<Prize>, I>>(base?: I): Prize {
    return Prize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Prize>, I>>(object: I): Prize {
    const message = createBasePrize();
    message.prizeId = object.prizeId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.place = object.place ?? 0;
    message.prizeAmount = object.prizeAmount ?? 0;
    message.prizeTypeId = object.prizeTypeId ?? 0;
    message.numberOfSubmissions = object.numberOfSubmissions ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
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

function createBaseGetPrizesInput(): GetPrizesInput {
  return { projectId: 0, prizeTypeId: 0 };
}

export const GetPrizesInput = {
  encode(message: GetPrizesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.prizeTypeId !== 0) {
      writer.uint32(16).int32(message.prizeTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPrizesInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPrizesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.prizeTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPrizesInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : 0,
    };
  },

  toJSON(message: GetPrizesInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPrizesInput>, I>>(base?: I): GetPrizesInput {
    return GetPrizesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPrizesInput>, I>>(object: I): GetPrizesInput {
    const message = createBaseGetPrizesInput();
    message.projectId = object.projectId ?? 0;
    message.prizeTypeId = object.prizeTypeId ?? 0;
    return message;
  },
};

function createBaseCreatePrizeInput(): CreatePrizeInput {
  return { prizeId: 0, projectId: 0, place: 0, prizeAmount: 0, prizeTypeId: 0, numberOfSubmissions: 0 };
}

export const CreatePrizeInput = {
  encode(message: CreatePrizeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prizeId !== 0) {
      writer.uint32(8).int32(message.prizeId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.place !== 0) {
      writer.uint32(24).int32(message.place);
    }
    if (message.prizeAmount !== 0) {
      writer.uint32(37).float(message.prizeAmount);
    }
    if (message.prizeTypeId !== 0) {
      writer.uint32(40).int32(message.prizeTypeId);
    }
    if (message.numberOfSubmissions !== 0) {
      writer.uint32(48).int32(message.numberOfSubmissions);
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
          message.prizeId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.place = reader.int32();
          break;
        case 4:
          message.prizeAmount = reader.float();
          break;
        case 5:
          message.prizeTypeId = reader.int32();
          break;
        case 6:
          message.numberOfSubmissions = reader.int32();
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
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      place: isSet(object.place) ? Number(object.place) : 0,
      prizeAmount: isSet(object.prizeAmount) ? Number(object.prizeAmount) : 0,
      prizeTypeId: isSet(object.prizeTypeId) ? Number(object.prizeTypeId) : 0,
      numberOfSubmissions: isSet(object.numberOfSubmissions) ? Number(object.numberOfSubmissions) : 0,
    };
  },

  toJSON(message: CreatePrizeInput): unknown {
    const obj: any = {};
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.place !== undefined && (obj.place = Math.round(message.place));
    message.prizeAmount !== undefined && (obj.prizeAmount = message.prizeAmount);
    message.prizeTypeId !== undefined && (obj.prizeTypeId = Math.round(message.prizeTypeId));
    message.numberOfSubmissions !== undefined && (obj.numberOfSubmissions = Math.round(message.numberOfSubmissions));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePrizeInput>, I>>(base?: I): CreatePrizeInput {
    return CreatePrizeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePrizeInput>, I>>(object: I): CreatePrizeInput {
    const message = createBaseCreatePrizeInput();
    message.prizeId = object.prizeId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.place = object.place ?? 0;
    message.prizeAmount = object.prizeAmount ?? 0;
    message.prizeTypeId = object.prizeTypeId ?? 0;
    message.numberOfSubmissions = object.numberOfSubmissions ?? 0;
    return message;
  },
};

function createBaseUpdatePrizeInput(): UpdatePrizeInput {
  return { prizeId: 0, projectId: 0, numberOfSubmissions: 0, prizeAmount: 0 };
}

export const UpdatePrizeInput = {
  encode(message: UpdatePrizeInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prizeId !== 0) {
      writer.uint32(8).int32(message.prizeId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    if (message.numberOfSubmissions !== 0) {
      writer.uint32(24).int32(message.numberOfSubmissions);
    }
    if (message.prizeAmount !== 0) {
      writer.uint32(37).float(message.prizeAmount);
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
          message.prizeId = reader.int32();
          break;
        case 2:
          message.projectId = reader.int32();
          break;
        case 3:
          message.numberOfSubmissions = reader.int32();
          break;
        case 4:
          message.prizeAmount = reader.float();
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
      prizeId: isSet(object.prizeId) ? Number(object.prizeId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      numberOfSubmissions: isSet(object.numberOfSubmissions) ? Number(object.numberOfSubmissions) : 0,
      prizeAmount: isSet(object.prizeAmount) ? Number(object.prizeAmount) : 0,
    };
  },

  toJSON(message: UpdatePrizeInput): unknown {
    const obj: any = {};
    message.prizeId !== undefined && (obj.prizeId = Math.round(message.prizeId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.numberOfSubmissions !== undefined && (obj.numberOfSubmissions = Math.round(message.numberOfSubmissions));
    message.prizeAmount !== undefined && (obj.prizeAmount = message.prizeAmount);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePrizeInput>, I>>(base?: I): UpdatePrizeInput {
    return UpdatePrizeInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePrizeInput>, I>>(object: I): UpdatePrizeInput {
    const message = createBaseUpdatePrizeInput();
    message.prizeId = object.prizeId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.numberOfSubmissions = object.numberOfSubmissions ?? 0;
    message.prizeAmount = object.prizeAmount ?? 0;
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
