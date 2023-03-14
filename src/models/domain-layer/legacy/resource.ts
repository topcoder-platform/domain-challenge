/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Resource {
  resourceId: number;
  resourceRoleId: number;
  projectId: number;
  projectPhaseId: number;
  userId: number;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface CreateResourceInput {
  resourceRoleId: number;
  projectId: number;
  projectPhaseId?: number | undefined;
  userId: number;
}

export interface GetResourcesInput {
  projectId: number;
  resourceRoleId?: number | undefined;
}

export interface DeleteResourcesInput {
  projectId: number;
  resourceRoleId?: number | undefined;
}

export interface ResourceList {
  resources: Resource[];
}

export interface ResourceInfo {
  resourceId: number;
  resourceInfoTypeId: number;
  value: string;
  createUser: number;
  createDate: number;
  modifyUser: number;
  modifyDate: number;
}

export interface CreateResourceInfoInput {
  resourceId: number;
  resourceInfoTypeId: number;
  value: string;
}

export interface UpdateResourceInfoInput {
  resourceId: number;
  resourceInfoTypeId: number;
  value: string;
}

export interface DeleteResourceInfoInput {
  resourceId: number;
}

export interface GetResourceInfosInput {
  resourceId: number;
  resourceInfoTypeId?: number | undefined;
}

export interface ResourceInfoList {
  resourceInfos: ResourceInfo[];
}

function createBaseResource(): Resource {
  return {
    resourceId: 0,
    resourceRoleId: 0,
    projectId: 0,
    projectPhaseId: 0,
    userId: 0,
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.resourceRoleId !== 0) {
      writer.uint32(16).int32(message.resourceRoleId);
    }
    if (message.projectId !== 0) {
      writer.uint32(24).int32(message.projectId);
    }
    if (message.projectPhaseId !== 0) {
      writer.uint32(32).int32(message.projectPhaseId);
    }
    if (message.userId !== 0) {
      writer.uint32(40).int32(message.userId);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.resourceRoleId = reader.int32();
          break;
        case 3:
          message.projectId = reader.int32();
          break;
        case 4:
          message.projectPhaseId = reader.int32();
          break;
        case 5:
          message.userId = reader.int32();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<Resource>, I>>(base?: I): Resource {
    return Resource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.resourceId = object.resourceId ?? 0;
    message.resourceRoleId = object.resourceRoleId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectPhaseId = object.projectPhaseId ?? 0;
    message.userId = object.userId ?? 0;
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

function createBaseCreateResourceInput(): CreateResourceInput {
  return { resourceRoleId: 0, projectId: 0, projectPhaseId: undefined, userId: 0 };
}

export const CreateResourceInput = {
  encode(message: CreateResourceInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceRoleId !== 0) {
      writer.uint32(16).int32(message.resourceRoleId);
    }
    if (message.projectId !== 0) {
      writer.uint32(24).int32(message.projectId);
    }
    if (message.projectPhaseId !== undefined) {
      writer.uint32(32).int32(message.projectPhaseId);
    }
    if (message.userId !== 0) {
      writer.uint32(40).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resourceRoleId = reader.int32();
          break;
        case 3:
          message.projectId = reader.int32();
          break;
        case 4:
          message.projectPhaseId = reader.int32();
          break;
        case 5:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateResourceInput {
    return {
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      projectPhaseId: isSet(object.projectPhaseId) ? Number(object.projectPhaseId) : undefined,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: CreateResourceInput): unknown {
    const obj: any = {};
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.projectPhaseId !== undefined && (obj.projectPhaseId = Math.round(message.projectPhaseId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceInput>, I>>(base?: I): CreateResourceInput {
    return CreateResourceInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateResourceInput>, I>>(object: I): CreateResourceInput {
    const message = createBaseCreateResourceInput();
    message.resourceRoleId = object.resourceRoleId ?? 0;
    message.projectId = object.projectId ?? 0;
    message.projectPhaseId = object.projectPhaseId ?? undefined;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetResourcesInput(): GetResourcesInput {
  return { projectId: 0, resourceRoleId: undefined };
}

export const GetResourcesInput = {
  encode(message: GetResourcesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.resourceRoleId !== undefined) {
      writer.uint32(16).int32(message.resourceRoleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourcesInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourcesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.resourceRoleId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResourcesInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : undefined,
    };
  },

  toJSON(message: GetResourcesInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourcesInput>, I>>(base?: I): GetResourcesInput {
    return GetResourcesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetResourcesInput>, I>>(object: I): GetResourcesInput {
    const message = createBaseGetResourcesInput();
    message.projectId = object.projectId ?? 0;
    message.resourceRoleId = object.resourceRoleId ?? undefined;
    return message;
  },
};

function createBaseDeleteResourcesInput(): DeleteResourcesInput {
  return { projectId: 0, resourceRoleId: undefined };
}

export const DeleteResourcesInput = {
  encode(message: DeleteResourcesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.resourceRoleId !== undefined) {
      writer.uint32(16).int32(message.resourceRoleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourcesInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourcesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.resourceRoleId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteResourcesInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : undefined,
    };
  },

  toJSON(message: DeleteResourcesInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourcesInput>, I>>(base?: I): DeleteResourcesInput {
    return DeleteResourcesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteResourcesInput>, I>>(object: I): DeleteResourcesInput {
    const message = createBaseDeleteResourcesInput();
    message.projectId = object.projectId ?? 0;
    message.resourceRoleId = object.resourceRoleId ?? undefined;
    return message;
  },
};

function createBaseResourceList(): ResourceList {
  return { resources: [] };
}

export const ResourceList = {
  encode(message: ResourceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceList {
    return {
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResourceList): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceList>, I>>(base?: I): ResourceList {
    return ResourceList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResourceList>, I>>(object: I): ResourceList {
    const message = createBaseResourceList();
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceInfo(): ResourceInfo {
  return {
    resourceId: 0,
    resourceInfoTypeId: 0,
    value: "",
    createUser: 0,
    createDate: 0,
    modifyUser: 0,
    modifyDate: 0,
  };
}

export const ResourceInfo = {
  encode(message: ResourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.resourceInfoTypeId !== 0) {
      writer.uint32(16).int32(message.resourceInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.resourceInfoTypeId = reader.int32();
          break;
        case 3:
          message.value = reader.string();
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

  fromJSON(object: any): ResourceInfo {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      resourceInfoTypeId: isSet(object.resourceInfoTypeId) ? Number(object.resourceInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      createUser: isSet(object.createUser) ? Number(object.createUser) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyUser: isSet(object.modifyUser) ? Number(object.modifyUser) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
    };
  },

  toJSON(message: ResourceInfo): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.resourceInfoTypeId !== undefined && (obj.resourceInfoTypeId = Math.round(message.resourceInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    message.createUser !== undefined && (obj.createUser = Math.round(message.createUser));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyUser !== undefined && (obj.modifyUser = Math.round(message.modifyUser));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceInfo>, I>>(base?: I): ResourceInfo {
    return ResourceInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResourceInfo>, I>>(object: I): ResourceInfo {
    const message = createBaseResourceInfo();
    message.resourceId = object.resourceId ?? 0;
    message.resourceInfoTypeId = object.resourceInfoTypeId ?? 0;
    message.value = object.value ?? "";
    message.createUser = object.createUser ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyUser = object.modifyUser ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    return message;
  },
};

function createBaseCreateResourceInfoInput(): CreateResourceInfoInput {
  return { resourceId: 0, resourceInfoTypeId: 0, value: "" };
}

export const CreateResourceInfoInput = {
  encode(message: CreateResourceInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.resourceInfoTypeId !== 0) {
      writer.uint32(16).int32(message.resourceInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResourceInfoInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResourceInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.resourceInfoTypeId = reader.int32();
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

  fromJSON(object: any): CreateResourceInfoInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      resourceInfoTypeId: isSet(object.resourceInfoTypeId) ? Number(object.resourceInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CreateResourceInfoInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.resourceInfoTypeId !== undefined && (obj.resourceInfoTypeId = Math.round(message.resourceInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResourceInfoInput>, I>>(base?: I): CreateResourceInfoInput {
    return CreateResourceInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateResourceInfoInput>, I>>(object: I): CreateResourceInfoInput {
    const message = createBaseCreateResourceInfoInput();
    message.resourceId = object.resourceId ?? 0;
    message.resourceInfoTypeId = object.resourceInfoTypeId ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpdateResourceInfoInput(): UpdateResourceInfoInput {
  return { resourceId: 0, resourceInfoTypeId: 0, value: "" };
}

export const UpdateResourceInfoInput = {
  encode(message: UpdateResourceInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.resourceInfoTypeId !== 0) {
      writer.uint32(16).int32(message.resourceInfoTypeId);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResourceInfoInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResourceInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.resourceInfoTypeId = reader.int32();
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

  fromJSON(object: any): UpdateResourceInfoInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      resourceInfoTypeId: isSet(object.resourceInfoTypeId) ? Number(object.resourceInfoTypeId) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: UpdateResourceInfoInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.resourceInfoTypeId !== undefined && (obj.resourceInfoTypeId = Math.round(message.resourceInfoTypeId));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResourceInfoInput>, I>>(base?: I): UpdateResourceInfoInput {
    return UpdateResourceInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateResourceInfoInput>, I>>(object: I): UpdateResourceInfoInput {
    const message = createBaseUpdateResourceInfoInput();
    message.resourceId = object.resourceId ?? 0;
    message.resourceInfoTypeId = object.resourceInfoTypeId ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDeleteResourceInfoInput(): DeleteResourceInfoInput {
  return { resourceId: 0 };
}

export const DeleteResourceInfoInput = {
  encode(message: DeleteResourceInfoInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteResourceInfoInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteResourceInfoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteResourceInfoInput {
    return { resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0 };
  },

  toJSON(message: DeleteResourceInfoInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteResourceInfoInput>, I>>(base?: I): DeleteResourceInfoInput {
    return DeleteResourceInfoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteResourceInfoInput>, I>>(object: I): DeleteResourceInfoInput {
    const message = createBaseDeleteResourceInfoInput();
    message.resourceId = object.resourceId ?? 0;
    return message;
  },
};

function createBaseGetResourceInfosInput(): GetResourceInfosInput {
  return { resourceId: 0, resourceInfoTypeId: undefined };
}

export const GetResourceInfosInput = {
  encode(message: GetResourceInfosInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceId !== 0) {
      writer.uint32(8).int32(message.resourceId);
    }
    if (message.resourceInfoTypeId !== undefined) {
      writer.uint32(16).int32(message.resourceInfoTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceInfosInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceInfosInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceId = reader.int32();
          break;
        case 2:
          message.resourceInfoTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResourceInfosInput {
    return {
      resourceId: isSet(object.resourceId) ? Number(object.resourceId) : 0,
      resourceInfoTypeId: isSet(object.resourceInfoTypeId) ? Number(object.resourceInfoTypeId) : undefined,
    };
  },

  toJSON(message: GetResourceInfosInput): unknown {
    const obj: any = {};
    message.resourceId !== undefined && (obj.resourceId = Math.round(message.resourceId));
    message.resourceInfoTypeId !== undefined && (obj.resourceInfoTypeId = Math.round(message.resourceInfoTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResourceInfosInput>, I>>(base?: I): GetResourceInfosInput {
    return GetResourceInfosInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetResourceInfosInput>, I>>(object: I): GetResourceInfosInput {
    const message = createBaseGetResourceInfosInput();
    message.resourceId = object.resourceId ?? 0;
    message.resourceInfoTypeId = object.resourceInfoTypeId ?? undefined;
    return message;
  },
};

function createBaseResourceInfoList(): ResourceInfoList {
  return { resourceInfos: [] };
}

export const ResourceInfoList = {
  encode(message: ResourceInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceInfos) {
      ResourceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfoList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceInfos.push(ResourceInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceInfoList {
    return {
      resourceInfos: Array.isArray(object?.resourceInfos)
        ? object.resourceInfos.map((e: any) => ResourceInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResourceInfoList): unknown {
    const obj: any = {};
    if (message.resourceInfos) {
      obj.resourceInfos = message.resourceInfos.map((e) => e ? ResourceInfo.toJSON(e) : undefined);
    } else {
      obj.resourceInfos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceInfoList>, I>>(base?: I): ResourceInfoList {
    return ResourceInfoList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResourceInfoList>, I>>(object: I): ResourceInfoList {
    const message = createBaseResourceInfoList();
    message.resourceInfos = object.resourceInfos?.map((e) => ResourceInfo.fromPartial(e)) || [];
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
