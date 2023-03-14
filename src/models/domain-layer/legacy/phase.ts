/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface PhaseType {
  phaseTypeId: number;
  name: string;
  description?: string | undefined;
  createUser?: number | undefined;
  createDate?: string | undefined;
  modifyUser?: number | undefined;
  modifyDate?: string | undefined;
}

export interface PhaseTypeList {
  phaseTypes: PhaseType[];
}

export interface PhaseDependency {
  dependentPhaseId: number;
  dependencyStart: number;
  dependentStart: number;
  lagTime: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface CreatePhaseDependencyInput {
  dependentPhaseId: number;
  dependencyStart: number;
  dependentStart: number;
  lagTime: number;
}

export interface PhaseCriteria {
  projectPhaseId: number;
  phaseCriteriaTypeId: number;
  parameter: string;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface CreatePhaseCriteriaInput {
  projectPhaseId: number;
  phaseCriteriaTypeId: number;
  parameter: string;
}

export interface DeletePhaseCriteriaInput {
  projectPhaseId: number;
  phaseCriteriaTypeId?: number | undefined;
}

export interface PhaseCriteriaList {
  phaseCriteriaList: PhaseCriteria[];
}

export interface GetPhaseCriteriaInput {
  projectPhaseId: number;
  phaseCriteriaTypeId?: number | undefined;
}

export interface ProjectPhase {
  projectPhaseId: number;
  projectId: number;
  phaseTypeId: number;
  phaseStatusId: number;
  fixedStartTime?: number | undefined;
  scheduledStartTime?: number | undefined;
  scheduledEndTime?: number | undefined;
  actualStartTime?: number | undefined;
  actualEndTime?: number | undefined;
  duration: number;
  createUser?: number | undefined;
  createDate?: number | undefined;
  modifyUser?: number | undefined;
  modifyDate?: number | undefined;
}

export interface GetProjectPhasesInput {
  projectId: number;
  phaseTypeId?: number | undefined;
}

export interface ProjectPhaseList {
  projectPhases: ProjectPhase[];
}

export interface DeleteProjectPhasesInput {
  projectId: number;
  projectPhaseId: number;
}

export interface CreateProjectPhaseInput {
  projectId: number;
  phaseTypeId: number;
  phaseStatusId: number;
  fixedStartTime?: string | undefined;
  scheduledStartTime?: string | undefined;
  scheduledEndTime?: string | undefined;
  actualStartTime?: string | undefined;
  actualEndTime?: string | undefined;
  duration: number;
}

export interface UpdateProjectPhaseInput {
  projectPhaseId: number;
  phaseStatusId: number;
  fixedStartTime?: string | undefined;
  scheduledStartTime?: string | undefined;
  scheduledEndTime?: string | undefined;
  duration?: number | undefined;
  actualStartTime?: string | undefined;
  actualEndTime?: string | undefined;
}

function createBasePhaseType(): PhaseType {
  return {
    phaseTypeId: 0,
    name: "",
    description: undefined,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const PhaseType = {
  encode(message: PhaseType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phaseTypeId !== 0) {
      writer.uint32(8).int64(message.phaseTypeId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.createUser !== undefined) {
      writer.uint32(32).int32(message.createUser);
    }
    if (message.createDate !== undefined) {
      writer.uint32(42).string(message.createDate);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== undefined) {
      writer.uint32(58).string(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phaseTypeId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.createUser = reader.int32();
          break;
        case 5:
          message.createDate = reader.string();
          break;
        case 6:
          message.modifyUser = reader.int32();
          break;
        case 7:
          message.modifyDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhaseType {
    return {
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? String(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : undefined,
    };
  },

  toJSON(message: PhaseType): unknown {
    const obj: any = {};
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseType>, I>>(base?: I): PhaseType {
    return PhaseType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseType>, I>>(object: I): PhaseType {
    const message = createBasePhaseType();
    message.phaseTypeId = object.phaseTypeId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? undefined;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBasePhaseTypeList(): PhaseTypeList {
  return { phaseTypes: [] };
}

export const PhaseTypeList = {
  encode(message: PhaseTypeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.phaseTypes) {
      PhaseType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseTypeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseTypeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phaseTypes.push(PhaseType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhaseTypeList {
    return {
      phaseTypes: Array.isArray(object?.phaseTypes) ? object.phaseTypes.map((e: any) => PhaseType.fromJSON(e)) : [],
    };
  },

  toJSON(message: PhaseTypeList): unknown {
    const obj: any = {};
    if (message.phaseTypes) {
      obj.phaseTypes = message.phaseTypes.map((e) => e ? PhaseType.toJSON(e) : undefined);
    } else {
      obj.phaseTypes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseTypeList>, I>>(base?: I): PhaseTypeList {
    return PhaseTypeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseTypeList>, I>>(object: I): PhaseTypeList {
    const message = createBasePhaseTypeList();
    message.phaseTypes = object.phaseTypes?.map((e) => PhaseType.fromPartial(e)) || [];
    return message;
  },
};

function createBasePhaseDependency(): PhaseDependency {
  return {
    dependentPhaseId: 0,
    dependencyStart: 0,
    dependentStart: 0,
    lagTime: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const PhaseDependency = {
  encode(message: PhaseDependency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dependentPhaseId !== 0) {
      writer.uint32(8).int32(message.dependentPhaseId);
    }
    if (message.dependencyStart !== 0) {
      writer.uint32(16).int64(message.dependencyStart);
    }
    if (message.dependentStart !== 0) {
      writer.uint32(24).int64(message.dependentStart);
    }
    if (message.lagTime !== 0) {
      writer.uint32(32).int64(message.lagTime);
    }
    if (message.createUser !== 0) {
      writer.uint32(40).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(48).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(56).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(64).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseDependency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseDependency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dependentPhaseId = reader.int32();
          break;
        case 2:
          message.dependencyStart = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.dependentStart = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.lagTime = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.createUser = reader.int32();
          break;
        case 6:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.modifyUser = reader.int32();
          break;
        case 8:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhaseDependency {
    return {
      dependentPhaseId: isSet(object.dependentPhaseId) ? Number(object.dependentPhaseId) : 0,
      dependencyStart: isSet(object.dependencyStart) ? Number(object.dependencyStart) : 0,
      dependentStart: isSet(object.dependentStart) ? Number(object.dependentStart) : 0,
      lagTime: isSet(object.lagTime) ? Number(object.lagTime) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: PhaseDependency): unknown {
    const obj: any = {};
    message.dependentPhaseId !== undefined && (obj.dependentPhaseId = Math.round(message.dependentPhaseId));
    message.dependencyStart !== undefined && (obj.dependencyStart = Math.round(message.dependencyStart));
    message.dependentStart !== undefined && (obj.dependentStart = Math.round(message.dependentStart));
    message.lagTime !== undefined && (obj.lagTime = Math.round(message.lagTime));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseDependency>, I>>(base?: I): PhaseDependency {
    return PhaseDependency.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseDependency>, I>>(object: I): PhaseDependency {
    const message = createBasePhaseDependency();
    message.dependentPhaseId = object.dependentPhaseId ?? 0;
    message.dependencyStart = object.dependencyStart ?? 0;
    message.dependentStart = object.dependentStart ?? 0;
    message.lagTime = object.lagTime ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

function createBaseCreatePhaseDependencyInput(): CreatePhaseDependencyInput {
  return { dependentPhaseId: 0, dependencyStart: 0, dependentStart: 0, lagTime: 0 };
}

export const CreatePhaseDependencyInput = {
  encode(message: CreatePhaseDependencyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dependentPhaseId !== 0) {
      writer.uint32(8).int32(message.dependentPhaseId);
    }
    if (message.dependencyStart !== 0) {
      writer.uint32(16).int64(message.dependencyStart);
    }
    if (message.dependentStart !== 0) {
      writer.uint32(24).int64(message.dependentStart);
    }
    if (message.lagTime !== 0) {
      writer.uint32(32).int64(message.lagTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePhaseDependencyInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePhaseDependencyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dependentPhaseId = reader.int32();
          break;
        case 2:
          message.dependencyStart = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.dependentStart = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.lagTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePhaseDependencyInput {
    return {
      dependentPhaseId: isSet(object.dependentPhaseId) ? Number(object.dependentPhaseId) : 0,
      dependencyStart: isSet(object.dependencyStart) ? Number(object.dependencyStart) : 0,
      dependentStart: isSet(object.dependentStart) ? Number(object.dependentStart) : 0,
      lagTime: isSet(object.lagTime) ? Number(object.lagTime) : 0,
    };
  },

  toJSON(message: CreatePhaseDependencyInput): unknown {
    const obj: any = {};
    message.dependentPhaseId !== undefined && (obj.dependentPhaseId = Math.round(message.dependentPhaseId));
    message.dependencyStart !== undefined && (obj.dependencyStart = Math.round(message.dependencyStart));
    message.dependentStart !== undefined && (obj.dependentStart = Math.round(message.dependentStart));
    message.lagTime !== undefined && (obj.lagTime = Math.round(message.lagTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePhaseDependencyInput>, I>>(base?: I): CreatePhaseDependencyInput {
    return CreatePhaseDependencyInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePhaseDependencyInput>, I>>(object: I): CreatePhaseDependencyInput {
    const message = createBaseCreatePhaseDependencyInput();
    message.dependentPhaseId = object.dependentPhaseId ?? 0;
    message.dependencyStart = object.dependencyStart ?? 0;
    message.dependentStart = object.dependentStart ?? 0;
    message.lagTime = object.lagTime ?? 0;
    return message;
  },
};

function createBasePhaseCriteria(): PhaseCriteria {
  return {
    projectPhaseId: 0,
    phaseCriteriaTypeId: 0,
    parameter: "",
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const PhaseCriteria = {
  encode(message: PhaseCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int32(message.projectPhaseId);
    }
    if (message.phaseCriteriaTypeId !== 0) {
      writer.uint32(16).int32(message.phaseCriteriaTypeId);
    }
    if (message.parameter !== "") {
      writer.uint32(26).string(message.parameter);
    }
    if (message.createUser !== 0) {
      writer.uint32(32).int32(message.createUser);
    }
    if (message.createDate !== 0) {
      writer.uint32(40).int64(message.createDate);
    }
    if (message.modifyUser !== 0) {
      writer.uint32(48).int32(message.modifyUser);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(56).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhaseId = reader.int32();
          break;
        case 2:
          message.phaseCriteriaTypeId = reader.int32();
          break;
        case 3:
          message.parameter = reader.string();
          break;
        case 4:
          message.createUser = reader.int32();
          break;
        case 5:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.modifyUser = reader.int32();
          break;
        case 7:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhaseCriteria {
    return {
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      phaseCriteriaTypeId: isSet(object.phaseCriteriaTypeId) ? Number(object.phaseCriteriaTypeId) : 0,
      parameter: isSet(object.parameter) ? String(object.parameter) : "",
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: PhaseCriteria): unknown {
    const obj: any = {};
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.phaseCriteriaTypeId !== undefined && (obj.phaseCriteriaTypeId = Math.round(message.phaseCriteriaTypeId));
    message.parameter !== undefined && (obj.parameter = message.parameter);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseCriteria>, I>>(base?: I): PhaseCriteria {
    return PhaseCriteria.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseCriteria>, I>>(object: I): PhaseCriteria {
    const message = createBasePhaseCriteria();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.phaseCriteriaTypeId = object.phaseCriteriaTypeId ?? 0;
    message.parameter = object.parameter ?? "";
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

function createBaseCreatePhaseCriteriaInput(): CreatePhaseCriteriaInput {
  return { projectPhaseId: 0, phaseCriteriaTypeId: 0, parameter: "" };
}

export const CreatePhaseCriteriaInput = {
  encode(message: CreatePhaseCriteriaInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int32(message.projectPhaseId);
    }
    if (message.phaseCriteriaTypeId !== 0) {
      writer.uint32(16).int32(message.phaseCriteriaTypeId);
    }
    if (message.parameter !== "") {
      writer.uint32(26).string(message.parameter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePhaseCriteriaInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePhaseCriteriaInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhaseId = reader.int32();
          break;
        case 2:
          message.phaseCriteriaTypeId = reader.int32();
          break;
        case 3:
          message.parameter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePhaseCriteriaInput {
    return {
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      phaseCriteriaTypeId: isSet(object.phaseCriteriaTypeId) ? Number(object.phaseCriteriaTypeId) : 0,
      parameter: isSet(object.parameter) ? String(object.parameter) : "",
    };
  },

  toJSON(message: CreatePhaseCriteriaInput): unknown {
    const obj: any = {};
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.phaseCriteriaTypeId !== undefined && (obj.phaseCriteriaTypeId = Math.round(message.phaseCriteriaTypeId));
    message.parameter !== undefined && (obj.parameter = message.parameter);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePhaseCriteriaInput>, I>>(base?: I): CreatePhaseCriteriaInput {
    return CreatePhaseCriteriaInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePhaseCriteriaInput>, I>>(object: I): CreatePhaseCriteriaInput {
    const message = createBaseCreatePhaseCriteriaInput();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.phaseCriteriaTypeId = object.phaseCriteriaTypeId ?? 0;
    message.parameter = object.parameter ?? "";
    return message;
  },
};

function createBaseDeletePhaseCriteriaInput(): DeletePhaseCriteriaInput {
  return { projectPhaseId: 0, phaseCriteriaTypeId: undefined };
}

export const DeletePhaseCriteriaInput = {
  encode(message: DeletePhaseCriteriaInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int32(message.projectPhaseId);
    }
    if (message.phaseCriteriaTypeId !== undefined) {
      writer.uint32(16).int32(message.phaseCriteriaTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePhaseCriteriaInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePhaseCriteriaInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhaseId = reader.int32();
          break;
        case 2:
          message.phaseCriteriaTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePhaseCriteriaInput {
    return {
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      phaseCriteriaTypeId: isSet(object.phaseCriteriaTypeId) ? Number(object.phaseCriteriaTypeId) : undefined,
    };
  },

  toJSON(message: DeletePhaseCriteriaInput): unknown {
    const obj: any = {};
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.phaseCriteriaTypeId !== undefined && (obj.phaseCriteriaTypeId = Math.round(message.phaseCriteriaTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePhaseCriteriaInput>, I>>(base?: I): DeletePhaseCriteriaInput {
    return DeletePhaseCriteriaInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePhaseCriteriaInput>, I>>(object: I): DeletePhaseCriteriaInput {
    const message = createBaseDeletePhaseCriteriaInput();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.phaseCriteriaTypeId = object.phaseCriteriaTypeId ?? undefined;
    return message;
  },
};

function createBasePhaseCriteriaList(): PhaseCriteriaList {
  return { phaseCriteriaList: [] };
}

export const PhaseCriteriaList = {
  encode(message: PhaseCriteriaList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.phaseCriteriaList) {
      PhaseCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhaseCriteriaList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhaseCriteriaList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phaseCriteriaList.push(PhaseCriteria.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PhaseCriteriaList {
    return {
      phaseCriteriaList: Array.isArray(object?.phaseCriteriaList)
        ? object.phaseCriteriaList.map((e: any) => PhaseCriteria.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PhaseCriteriaList): unknown {
    const obj: any = {};
    if (message.phaseCriteriaList) {
      obj.phaseCriteriaList = message.phaseCriteriaList.map((e) => e ? PhaseCriteria.toJSON(e) : undefined);
    } else {
      obj.phaseCriteriaList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PhaseCriteriaList>, I>>(base?: I): PhaseCriteriaList {
    return PhaseCriteriaList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PhaseCriteriaList>, I>>(object: I): PhaseCriteriaList {
    const message = createBasePhaseCriteriaList();
    message.phaseCriteriaList = object.phaseCriteriaList?.map((e) => PhaseCriteria.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPhaseCriteriaInput(): GetPhaseCriteriaInput {
  return { projectPhaseId: 0, phaseCriteriaTypeId: undefined };
}

export const GetPhaseCriteriaInput = {
  encode(message: GetPhaseCriteriaInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int32(message.projectPhaseId);
    }
    if (message.phaseCriteriaTypeId !== undefined) {
      writer.uint32(16).int32(message.phaseCriteriaTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPhaseCriteriaInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPhaseCriteriaInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhaseId = reader.int32();
          break;
        case 2:
          message.phaseCriteriaTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPhaseCriteriaInput {
    return {
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      phaseCriteriaTypeId: isSet(object.phaseCriteriaTypeId) ? Number(object.phaseCriteriaTypeId) : undefined,
    };
  },

  toJSON(message: GetPhaseCriteriaInput): unknown {
    const obj: any = {};
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.phaseCriteriaTypeId !== undefined && (obj.phaseCriteriaTypeId = Math.round(message.phaseCriteriaTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPhaseCriteriaInput>, I>>(base?: I): GetPhaseCriteriaInput {
    return GetPhaseCriteriaInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPhaseCriteriaInput>, I>>(object: I): GetPhaseCriteriaInput {
    const message = createBaseGetPhaseCriteriaInput();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.phaseCriteriaTypeId = object.phaseCriteriaTypeId ?? undefined;
    return message;
  },
};

function createBaseProjectPhase(): ProjectPhase {
  return {
    projectPhaseId: 0,
    projectId: 0,
    phaseTypeId: 0,
    phaseStatusId: 0,
    fixedStartTime: undefined,
    scheduledStartTime: undefined,
    scheduledEndTime: undefined,
    actualStartTime: undefined,
    actualEndTime: undefined,
    duration: 0,
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const ProjectPhase = {
  encode(message: ProjectPhase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int64(message.projectPhaseId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int64(message.projectId);
    }
    if (message.phaseTypeId !== 0) {
      writer.uint32(24).int64(message.phaseTypeId);
    }
    if (message.phaseStatusId !== 0) {
      writer.uint32(32).int64(message.phaseStatusId);
    }
    if (message.fixedStartTime !== undefined) {
      writer.uint32(40).int64(message.fixedStartTime);
    }
    if (message.scheduledStartTime !== undefined) {
      writer.uint32(48).int64(message.scheduledStartTime);
    }
    if (message.scheduledEndTime !== undefined) {
      writer.uint32(56).int64(message.scheduledEndTime);
    }
    if (message.actualStartTime !== undefined) {
      writer.uint32(64).int64(message.actualStartTime);
    }
    if (message.actualEndTime !== undefined) {
      writer.uint32(72).int64(message.actualEndTime);
    }
    if (message.duration !== 0) {
      writer.uint32(80).int32(message.duration);
    }
    if (message.createUser !== undefined) {
      writer.uint32(88).int32(message.createUser);
    }
    if (message.createDate !== undefined) {
      writer.uint32(96).int64(message.createDate);
    }
    if (message.modifyUser !== undefined) {
      writer.uint32(104).int32(message.modifyUser);
    }
    if (message.modifyDate !== undefined) {
      writer.uint32(112).int64(message.modifyDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPhase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPhase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhaseId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.projectId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.phaseTypeId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.phaseStatusId = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.fixedStartTime = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.scheduledStartTime = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.scheduledEndTime = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.actualStartTime = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.actualEndTime = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.duration = reader.int32();
          break;
        case 11:
          message.createUser = reader.int32();
          break;
        case 12:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.modifyUser = reader.int32();
          break;
        case 14:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPhase {
    return {
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : 0,
      phaseStatusId: isSet(object.phaseStatusId) ? Number(object.phaseStatusId) : 0,
      fixedStartTime: isSet(object.fixedStartTime) ? Number(object.fixedStartTime) : undefined,
      scheduledStartTime: isSet(object.scheduledStartTime) ? Number(object.scheduledStartTime) : undefined,
      scheduledEndTime: isSet(object.scheduledEndTime) ? Number(object.scheduledEndTime) : undefined,
      actualStartTime: isSet(object.actualStartTime) ? Number(object.actualStartTime) : undefined,
      actualEndTime: isSet(object.actualEndTime) ? Number(object.actualEndTime) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? Number(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : undefined,
    };
  },

  toJSON(message: ProjectPhase): unknown {
    const obj: any = {};
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    message.phaseStatusId !== undefined && (obj.phaseStatusId = Math.round(message.phaseStatusId));
    message.fixedStartTime !== undefined && (obj.fixedStartTime = Math.round(message.fixedStartTime));
    message.scheduledStartTime !== undefined && (obj.scheduledStartTime = Math.round(message.scheduledStartTime));
    message.scheduledEndTime !== undefined && (obj.scheduledEndTime = Math.round(message.scheduledEndTime));
    message.actualStartTime !== undefined && (obj.actualStartTime = Math.round(message.actualStartTime));
    message.actualEndTime !== undefined && (obj.actualEndTime = Math.round(message.actualEndTime));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectPhase>, I>>(base?: I): ProjectPhase {
    return ProjectPhase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectPhase>, I>>(object: I): ProjectPhase {
    const message = createBaseProjectPhase();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.phaseTypeId = object.phaseTypeId ?? 0;
    message.phaseStatusId = object.phaseStatusId ?? 0;
    message.fixedStartTime = object.fixedStartTime ?? undefined;
    message.scheduledStartTime = object.scheduledStartTime ?? undefined;
    message.scheduledEndTime = object.scheduledEndTime ?? undefined;
    message.actualStartTime = object.actualStartTime ?? undefined;
    message.actualEndTime = object.actualEndTime ?? undefined;
    message.duration = object.duration ?? 0;
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseGetProjectPhasesInput(): GetProjectPhasesInput {
  return { projectId: 0, phaseTypeId: undefined };
}

export const GetProjectPhasesInput = {
  encode(message: GetProjectPhasesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.phaseTypeId !== undefined) {
      writer.uint32(16).int32(message.phaseTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectPhasesInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectPhasesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.phaseTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectPhasesInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : undefined,
    };
  },

  toJSON(message: GetProjectPhasesInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectPhasesInput>, I>>(base?: I): GetProjectPhasesInput {
    return GetProjectPhasesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectPhasesInput>, I>>(object: I): GetProjectPhasesInput {
    const message = createBaseGetProjectPhasesInput();
    message.projectId = object.projectId ?? 0;
    message.phaseTypeId = object.phaseTypeId ?? undefined;
    return message;
  },
};

function createBaseProjectPhaseList(): ProjectPhaseList {
  return { projectPhases: [] };
}

export const ProjectPhaseList = {
  encode(message: ProjectPhaseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectPhases) {
      ProjectPhase.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectPhaseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectPhaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhases.push(ProjectPhase.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectPhaseList {
    return {
      projectPhases: Array.isArray(object?.projectPhases)
        ? object.projectPhases.map((e: any) => ProjectPhase.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectPhaseList): unknown {
    const obj: any = {};
    if (message.projectPhases) {
      obj.projectPhases = message.projectPhases.map((e) => e ? ProjectPhase.toJSON(e) : undefined);
    } else {
      obj.projectPhases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectPhaseList>, I>>(base?: I): ProjectPhaseList {
    return ProjectPhaseList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectPhaseList>, I>>(object: I): ProjectPhaseList {
    const message = createBaseProjectPhaseList();
    message.projectPhases = object.projectPhases?.map((e) => ProjectPhase.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteProjectPhasesInput(): DeleteProjectPhasesInput {
  return { projectId: 0, projectPhaseId: 0 };
}

export const DeleteProjectPhasesInput = {
  encode(message: DeleteProjectPhasesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectPhaseId !== 0) {
      writer.uint32(16).int32(message.projectPhaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectPhasesInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectPhasesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectPhaseId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectPhasesInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
    };
  },

  toJSON(message: DeleteProjectPhasesInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectPhasesInput>, I>>(base?: I): DeleteProjectPhasesInput {
    return DeleteProjectPhasesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteProjectPhasesInput>, I>>(object: I): DeleteProjectPhasesInput {
    const message = createBaseDeleteProjectPhasesInput();
    message.projectId = object.projectId ?? 0;
    message.projectPhaseId = object.projectPhaseId ?? 0;
    return message;
  },
};

function createBaseCreateProjectPhaseInput(): CreateProjectPhaseInput {
  return {
    projectId: 0,
    phaseTypeId: 0,
    phaseStatusId: 0,
    fixedStartTime: undefined,
    scheduledStartTime: undefined,
    scheduledEndTime: undefined,
    actualStartTime: undefined,
    actualEndTime: undefined,
    duration: 0,
  };
}

export const CreateProjectPhaseInput = {
  encode(message: CreateProjectPhaseInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int64(message.projectId);
    }
    if (message.phaseTypeId !== 0) {
      writer.uint32(16).int64(message.phaseTypeId);
    }
    if (message.phaseStatusId !== 0) {
      writer.uint32(24).int64(message.phaseStatusId);
    }
    if (message.fixedStartTime !== undefined) {
      writer.uint32(34).string(message.fixedStartTime);
    }
    if (message.scheduledStartTime !== undefined) {
      writer.uint32(42).string(message.scheduledStartTime);
    }
    if (message.scheduledEndTime !== undefined) {
      writer.uint32(50).string(message.scheduledEndTime);
    }
    if (message.actualStartTime !== undefined) {
      writer.uint32(58).string(message.actualStartTime);
    }
    if (message.actualEndTime !== undefined) {
      writer.uint32(66).string(message.actualEndTime);
    }
    if (message.duration !== 0) {
      writer.uint32(72).int32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectPhaseInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectPhaseInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.phaseTypeId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.phaseStatusId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.fixedStartTime = reader.string();
          break;
        case 5:
          message.scheduledStartTime = reader.string();
          break;
        case 6:
          message.scheduledEndTime = reader.string();
          break;
        case 7:
          message.actualStartTime = reader.string();
          break;
        case 8:
          message.actualEndTime = reader.string();
          break;
        case 9:
          message.duration = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectPhaseInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      phaseTypeId: isSet(object.phaseTypeId) ? Number(object.phaseTypeId) : 0,
      phaseStatusId: isSet(object.phaseStatusId) ? Number(object.phaseStatusId) : 0,
      fixedStartTime: isSet(object.fixedStartTime) ? String(object.fixedStartTime) : undefined,
      scheduledStartTime: isSet(object.scheduledStartTime) ? String(object.scheduledStartTime) : undefined,
      scheduledEndTime: isSet(object.scheduledEndTime) ? String(object.scheduledEndTime) : undefined,
      actualStartTime: isSet(object.actualStartTime) ? String(object.actualStartTime) : undefined,
      actualEndTime: isSet(object.actualEndTime) ? String(object.actualEndTime) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CreateProjectPhaseInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.phaseTypeId !== undefined && (obj.phaseTypeId = Math.round(message.phaseTypeId));
    message.phaseStatusId !== undefined && (obj.phaseStatusId = Math.round(message.phaseStatusId));
    message.fixedStartTime !== undefined && (obj.fixedStartTime = message.fixedStartTime);
    message.scheduledStartTime !== undefined && (obj.scheduledStartTime = message.scheduledStartTime);
    message.scheduledEndTime !== undefined && (obj.scheduledEndTime = message.scheduledEndTime);
    message.actualStartTime !== undefined && (obj.actualStartTime = message.actualStartTime);
    message.actualEndTime !== undefined && (obj.actualEndTime = message.actualEndTime);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectPhaseInput>, I>>(base?: I): CreateProjectPhaseInput {
    return CreateProjectPhaseInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectPhaseInput>, I>>(object: I): CreateProjectPhaseInput {
    const message = createBaseCreateProjectPhaseInput();
    message.projectId = object.projectId ?? 0;
    message.phaseTypeId = object.phaseTypeId ?? 0;
    message.phaseStatusId = object.phaseStatusId ?? 0;
    message.fixedStartTime = object.fixedStartTime ?? undefined;
    message.scheduledStartTime = object.scheduledStartTime ?? undefined;
    message.scheduledEndTime = object.scheduledEndTime ?? undefined;
    message.actualStartTime = object.actualStartTime ?? undefined;
    message.actualEndTime = object.actualEndTime ?? undefined;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseUpdateProjectPhaseInput(): UpdateProjectPhaseInput {
  return {
    projectPhaseId: 0,
    phaseStatusId: 0,
    fixedStartTime: undefined,
    scheduledStartTime: undefined,
    scheduledEndTime: undefined,
    duration: undefined,
    actualStartTime: undefined,
    actualEndTime: undefined,
  };
}

export const UpdateProjectPhaseInput = {
  encode(message: UpdateProjectPhaseInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectPhaseId !== 0) {
      writer.uint32(8).int64(message.projectPhaseId);
    }
    if (message.phaseStatusId !== 0) {
      writer.uint32(16).int32(message.phaseStatusId);
    }
    if (message.fixedStartTime !== undefined) {
      writer.uint32(26).string(message.fixedStartTime);
    }
    if (message.scheduledStartTime !== undefined) {
      writer.uint32(34).string(message.scheduledStartTime);
    }
    if (message.scheduledEndTime !== undefined) {
      writer.uint32(42).string(message.scheduledEndTime);
    }
    if (message.duration !== undefined) {
      writer.uint32(48).int64(message.duration);
    }
    if (message.actualStartTime !== undefined) {
      writer.uint32(58).string(message.actualStartTime);
    }
    if (message.actualEndTime !== undefined) {
      writer.uint32(66).string(message.actualEndTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectPhaseInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectPhaseInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectPhaseId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.phaseStatusId = reader.int32();
          break;
        case 3:
          message.fixedStartTime = reader.string();
          break;
        case 4:
          message.scheduledStartTime = reader.string();
          break;
        case 5:
          message.scheduledEndTime = reader.string();
          break;
        case 6:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.actualStartTime = reader.string();
          break;
        case 8:
          message.actualEndTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectPhaseInput {
    return {
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      phaseStatusId: isSet(object.phaseStatusId) ? Number(object.phaseStatusId) : 0,
      fixedStartTime: isSet(object.fixedStartTime) ? String(object.fixedStartTime) : undefined,
      scheduledStartTime: isSet(object.scheduledStartTime) ? String(object.scheduledStartTime) : undefined,
      scheduledEndTime: isSet(object.scheduledEndTime) ? String(object.scheduledEndTime) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : undefined,
      actualStartTime: isSet(object.actualStartTime) ? String(object.actualStartTime) : undefined,
      actualEndTime: isSet(object.actualEndTime) ? String(object.actualEndTime) : undefined,
    };
  },

  toJSON(message: UpdateProjectPhaseInput): unknown {
    const obj: any = {};
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.phaseStatusId !== undefined && (obj.phaseStatusId = Math.round(message.phaseStatusId));
    message.fixedStartTime !== undefined && (obj.fixedStartTime = message.fixedStartTime);
    message.scheduledStartTime !== undefined && (obj.scheduledStartTime = message.scheduledStartTime);
    message.scheduledEndTime !== undefined && (obj.scheduledEndTime = message.scheduledEndTime);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.actualStartTime !== undefined && (obj.actualStartTime = message.actualStartTime);
    message.actualEndTime !== undefined && (obj.actualEndTime = message.actualEndTime);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectPhaseInput>, I>>(base?: I): UpdateProjectPhaseInput {
    return UpdateProjectPhaseInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateProjectPhaseInput>, I>>(object: I): UpdateProjectPhaseInput {
    const message = createBaseUpdateProjectPhaseInput();
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.phaseStatusId = object.phaseStatusId ?? 0;
    message.fixedStartTime = object.fixedStartTime ?? undefined;
    message.scheduledStartTime = object.scheduledStartTime ?? undefined;
    message.scheduledEndTime = object.scheduledEndTime ?? undefined;
    message.duration = object.duration ?? undefined;
    message.actualStartTime = object.actualStartTime ?? undefined;
    message.actualEndTime = object.actualEndTime ?? undefined;
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
