/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface ProjectInfo {
  projectId: number;
  projectInfoTypeId: number;
  value: string;
  createUser?: number | undefined;
  createDate?: string | undefined;
  modifyUser?: number | undefined;
  modifyDate?: string | undefined;
}

export interface ProjectInfoList {
  projectInfos: ProjectInfo[];
}

export interface GetProjectInfoInput {
  projectId: number;
  projectInfoTypeId?: number | undefined;
}

export interface CreateProjectInfoInput {
  projectId: number;
  projectInfoTypeId: number;
  value: string;
}

export interface DeleteProjectInfoInput {
  projectId: number;
  projectInfoTypeId: number;
}

export interface UpdateProjectInfoInput {
  projectId: number;
  projectInfoTypeId: number;
  value: string;
}

export interface ProjectInfoType {
  projectInfoTypeId: number;
  name: string;
  description: string;
  createUser?: number | undefined;
  createDate?: string | undefined;
  modifyUser?: number | undefined;
  modifyDate?: string | undefined;
}

export interface ProjectInfoTypeList {
  projectInfoTypes: ProjectInfoType[];
}

function createBaseProjectInfo(): ProjectInfo {
  return {
    projectId: 0,
    projectInfoTypeId: 0,
    value: "",
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const ProjectInfo = {
  encode(message: ProjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(16).int32(message.projectInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectInfoTypeId = reader.int32();
          break;
        case 3:
          message.value = reader.string();
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

  fromJSON(object: any): ProjectInfo {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? String(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : undefined,
    };
  },

  toJSON(message: ProjectInfo): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectInfo>, I>>(base?: I): ProjectInfo {
    return ProjectInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectInfo>, I>>(object: I): ProjectInfo {
    const message = createBaseProjectInfo();
    message.projectId = object.projectId ?? 0;
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    message.value = object.value ?? "";
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseProjectInfoList(): ProjectInfoList {
  return { projectInfos: [] };
}

export const ProjectInfoList = {
  encode(message: ProjectInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectInfos) {
      ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfoList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectInfos.push(ProjectInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectInfoList {
    return {
      projectInfos: Array.isArray(object?.projectInfos)
        ? object.projectInfos.map((e: any) => ProjectInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectInfoList): unknown {
    const obj: any = {};
    if (message.projectInfos) {
      obj.projectInfos = message.projectInfos.map((e) => e ? ProjectInfo.toJSON(e) : undefined);
    } else {
      obj.projectInfos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectInfoList>, I>>(base?: I): ProjectInfoList {
    return ProjectInfoList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectInfoList>, I>>(object: I): ProjectInfoList {
    const message = createBaseProjectInfoList();
    message.projectInfos = object.projectInfos?.map((e) => ProjectInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProjectInfoInput(): GetProjectInfoInput {
  return { projectId: 0, projectInfoTypeId: undefined };
}

export const GetProjectInfoInput = {
  encode(message: GetProjectInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectInfoTypeId !== undefined) {
      writer.uint32(16).int32(message.projectInfoTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectInfoInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectInfoTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectInfoInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : undefined,
    };
  },

  toJSON(message: GetProjectInfoInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectInfoInput>, I>>(base?: I): GetProjectInfoInput {
    return GetProjectInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectInfoInput>, I>>(object: I): GetProjectInfoInput {
    const message = createBaseGetProjectInfoInput();
    message.projectId = object.projectId ?? 0;
    message.projectInfoTypeId = object.projectInfoTypeId ?? undefined;
    return message;
  },
};

function createBaseCreateProjectInfoInput(): CreateProjectInfoInput {
  return { projectId: 0, projectInfoTypeId: 0, value: "" };
}

export const CreateProjectInfoInput = {
  encode(message: CreateProjectInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(16).int32(message.projectInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectInfoInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectInfoTypeId = reader.int32();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectInfoInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CreateProjectInfoInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectInfoInput>, I>>(base?: I): CreateProjectInfoInput {
    return CreateProjectInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectInfoInput>, I>>(object: I): CreateProjectInfoInput {
    const message = createBaseCreateProjectInfoInput();
    message.projectId = object.projectId ?? 0;
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDeleteProjectInfoInput(): DeleteProjectInfoInput {
  return { projectId: 0, projectInfoTypeId: 0 };
}

export const DeleteProjectInfoInput = {
  encode(message: DeleteProjectInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(16).int32(message.projectInfoTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectInfoInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectInfoTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectInfoInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
    };
  },

  toJSON(message: DeleteProjectInfoInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectInfoInput>, I>>(base?: I): DeleteProjectInfoInput {
    return DeleteProjectInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteProjectInfoInput>, I>>(object: I): DeleteProjectInfoInput {
    const message = createBaseDeleteProjectInfoInput();
    message.projectId = object.projectId ?? 0;
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    return message;
  },
};

function createBaseUpdateProjectInfoInput(): UpdateProjectInfoInput {
  return { projectId: 0, projectInfoTypeId: 0, value: "" };
}

export const UpdateProjectInfoInput = {
  encode(message: UpdateProjectInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(16).int32(message.projectInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectInfoInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProjectInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.projectInfoTypeId = reader.int32();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateProjectInfoInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: UpdateProjectInfoInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateProjectInfoInput>, I>>(base?: I): UpdateProjectInfoInput {
    return UpdateProjectInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateProjectInfoInput>, I>>(object: I): UpdateProjectInfoInput {
    const message = createBaseUpdateProjectInfoInput();
    message.projectId = object.projectId ?? 0;
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProjectInfoType(): ProjectInfoType {
  return {
    projectInfoTypeId: 0,
    name: "",
    description: "",
    createUser: undefined,
    createDate: undefined,
    modifyUser: undefined,
    modifyDate: undefined,
  };
}

export const ProjectInfoType = {
  encode(message: ProjectInfoType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectInfoTypeId !== 0) {
      writer.uint32(8).int32(message.projectInfoTypeId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfoType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectInfoType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectInfoTypeId = reader.int32();
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

  fromJSON(object: any): ProjectInfoType {
    return {
      projectInfoTypeId: isSet(object.projectInfoTypeId) ? Number(object.projectInfoTypeId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      createUser: isSet(object.createUser) ? Number(object.createUser) : undefined,
      createDate: isSet(object.createDate) ? String(object.createDate) : undefined,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : undefined,
      modifyDate: isSet(object.modifyDate) ? String(object.modifyDate) : undefined,
    };
  },

  toJSON(message: ProjectInfoType): unknown {
    const obj: any = {};
    message.projectInfoTypeId !== undefined && (obj.projectInfoTypeId = Math.round(message.projectInfoTypeId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = message.modifyDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectInfoType>, I>>(base?: I): ProjectInfoType {
    return ProjectInfoType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectInfoType>, I>>(object: I): ProjectInfoType {
    const message = createBaseProjectInfoType();
    message.projectInfoTypeId = object.projectInfoTypeId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createUser = object.createUser ?? undefined;
    message.createDate = object.createDate ?? undefined;
    message.modifyUser = object.modifyUser ?? undefined;
    message.modifyDate = object.modifyDate ?? undefined;
    return message;
  },
};

function createBaseProjectInfoTypeList(): ProjectInfoTypeList {
  return { projectInfoTypes: [] };
}

export const ProjectInfoTypeList = {
  encode(message: ProjectInfoTypeList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.projectInfoTypes) {
      ProjectInfoType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfoTypeList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectInfoTypeList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectInfoTypes.push(ProjectInfoType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectInfoTypeList {
    return {
      projectInfoTypes: Array.isArray(object?.projectInfoTypes)
        ? object.projectInfoTypes.map((e: any) => ProjectInfoType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectInfoTypeList): unknown {
    const obj: any = {};
    if (message.projectInfoTypes) {
      obj.projectInfoTypes = message.projectInfoTypes.map((e) => e ? ProjectInfoType.toJSON(e) : undefined);
    } else {
      obj.projectInfoTypes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectInfoTypeList>, I>>(base?: I): ProjectInfoTypeList {
    return ProjectInfoTypeList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectInfoTypeList>, I>>(object: I): ProjectInfoTypeList {
    const message = createBaseProjectInfoTypeList();
    message.projectInfoTypes = object.projectInfoTypes?.map((e) => ProjectInfoType.fromPartial(e)) || [];
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
