/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface ProjectRoleTermsOfUseXref {
  projectId: number;
  resourceRoleId: number;
  termsOfUseId: number;
  createDate: number;
  modifyDate: number;
  sortOrder: number;
  groupInd: number;
}

export interface GetProjectRoleTermsOfUseXrefInput {
  projectId: number;
}

export interface ProjectRoleTermsOfUseXrefList {
  terms: ProjectRoleTermsOfUseXref[];
}

export interface CreateProjectRoleTermsOfUseXrefInput {
  projectId: number;
  resourceRoleId: number;
  termsOfUseId: number;
  sortOrder?: number | undefined;
  groupInd?: number | undefined;
}

export interface DeleteProjectRoleTermsOfUseXrefInput {
  projectId: number;
  resourceRoleId: number;
  termsOfUseId: number;
}

function createBaseProjectRoleTermsOfUseXref(): ProjectRoleTermsOfUseXref {
  return { projectId: 0, resourceRoleId: 0, termsOfUseId: 0, createDate: 0, modifyDate: 0, sortOrder: 0, groupInd: 0 };
}

export const ProjectRoleTermsOfUseXref = {
  encode(message: ProjectRoleTermsOfUseXref, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.resourceRoleId !== 0) {
      writer.uint32(16).int32(message.resourceRoleId);
    }
    if (message.termsOfUseId !== 0) {
      writer.uint32(24).int32(message.termsOfUseId);
    }
    if (message.createDate !== 0) {
      writer.uint32(32).int64(message.createDate);
    }
    if (message.modifyDate !== 0) {
      writer.uint32(40).int64(message.modifyDate);
    }
    if (message.sortOrder !== 0) {
      writer.uint32(48).int32(message.sortOrder);
    }
    if (message.groupInd !== 0) {
      writer.uint32(56).int32(message.groupInd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectRoleTermsOfUseXref {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectRoleTermsOfUseXref();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.resourceRoleId = reader.int32();
          break;
        case 3:
          message.termsOfUseId = reader.int32();
          break;
        case 4:
          message.createDate = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.modifyDate = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.sortOrder = reader.int32();
          break;
        case 7:
          message.groupInd = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectRoleTermsOfUseXref {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : 0,
      termsOfUseId: isSet(object.termsOfUseId) ? Number(object.termsOfUseId) : 0,
      createDate: isSet(object.createDate) ? Number(object.createDate) : 0,
      modifyDate: isSet(object.modifyDate) ? Number(object.modifyDate) : 0,
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : 0,
      groupInd: isSet(object.groupInd) ? Number(object.groupInd) : 0,
    };
  },

  toJSON(message: ProjectRoleTermsOfUseXref): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    message.termsOfUseId !== undefined && (obj.termsOfUseId = Math.round(message.termsOfUseId));
    message.createDate !== undefined && (obj.createDate = Math.round(message.createDate));
    message.modifyDate !== undefined && (obj.modifyDate = Math.round(message.modifyDate));
    message.sortOrder !== undefined && (obj.sortOrder = Math.round(message.sortOrder));
    message.groupInd !== undefined && (obj.groupInd = Math.round(message.groupInd));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectRoleTermsOfUseXref>, I>>(base?: I): ProjectRoleTermsOfUseXref {
    return ProjectRoleTermsOfUseXref.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectRoleTermsOfUseXref>, I>>(object: I): ProjectRoleTermsOfUseXref {
    const message = createBaseProjectRoleTermsOfUseXref();
    message.projectId = object.projectId ?? 0;
    message.resourceRoleId = object.resourceRoleId ?? 0;
    message.termsOfUseId = object.termsOfUseId ?? 0;
    message.createDate = object.createDate ?? 0;
    message.modifyDate = object.modifyDate ?? 0;
    message.sortOrder = object.sortOrder ?? 0;
    message.groupInd = object.groupInd ?? 0;
    return message;
  },
};

function createBaseGetProjectRoleTermsOfUseXrefInput(): GetProjectRoleTermsOfUseXrefInput {
  return { projectId: 0 };
}

export const GetProjectRoleTermsOfUseXrefInput = {
  encode(message: GetProjectRoleTermsOfUseXrefInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectRoleTermsOfUseXrefInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectRoleTermsOfUseXrefInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectRoleTermsOfUseXrefInput {
    return { projectId: isSet(object.projectId) ? Number(object.projectId) : 0 };
  },

  toJSON(message: GetProjectRoleTermsOfUseXrefInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProjectRoleTermsOfUseXrefInput>, I>>(
    base?: I,
  ): GetProjectRoleTermsOfUseXrefInput {
    return GetProjectRoleTermsOfUseXrefInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectRoleTermsOfUseXrefInput>, I>>(
    object: I,
  ): GetProjectRoleTermsOfUseXrefInput {
    const message = createBaseGetProjectRoleTermsOfUseXrefInput();
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseProjectRoleTermsOfUseXrefList(): ProjectRoleTermsOfUseXrefList {
  return { terms: [] };
}

export const ProjectRoleTermsOfUseXrefList = {
  encode(message: ProjectRoleTermsOfUseXrefList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.terms) {
      ProjectRoleTermsOfUseXref.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectRoleTermsOfUseXrefList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectRoleTermsOfUseXrefList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.terms.push(ProjectRoleTermsOfUseXref.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectRoleTermsOfUseXrefList {
    return {
      terms: Array.isArray(object?.terms) ? object.terms.map((e: any) => ProjectRoleTermsOfUseXref.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProjectRoleTermsOfUseXrefList): unknown {
    const obj: any = {};
    if (message.terms) {
      obj.terms = message.terms.map((e) => e ? ProjectRoleTermsOfUseXref.toJSON(e) : undefined);
    } else {
      obj.terms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectRoleTermsOfUseXrefList>, I>>(base?: I): ProjectRoleTermsOfUseXrefList {
    return ProjectRoleTermsOfUseXrefList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectRoleTermsOfUseXrefList>, I>>(
    object: I,
  ): ProjectRoleTermsOfUseXrefList {
    const message = createBaseProjectRoleTermsOfUseXrefList();
    message.terms = object.terms?.map((e) => ProjectRoleTermsOfUseXref.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateProjectRoleTermsOfUseXrefInput(): CreateProjectRoleTermsOfUseXrefInput {
  return { projectId: 0, resourceRoleId: 0, termsOfUseId: 0, sortOrder: undefined, groupInd: undefined };
}

export const CreateProjectRoleTermsOfUseXrefInput = {
  encode(message: CreateProjectRoleTermsOfUseXrefInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.resourceRoleId !== 0) {
      writer.uint32(16).int32(message.resourceRoleId);
    }
    if (message.termsOfUseId !== 0) {
      writer.uint32(24).int32(message.termsOfUseId);
    }
    if (message.sortOrder !== undefined) {
      writer.uint32(32).int32(message.sortOrder);
    }
    if (message.groupInd !== undefined) {
      writer.uint32(40).int32(message.groupInd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectRoleTermsOfUseXrefInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectRoleTermsOfUseXrefInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.resourceRoleId = reader.int32();
          break;
        case 3:
          message.termsOfUseId = reader.int32();
          break;
        case 4:
          message.sortOrder = reader.int32();
          break;
        case 5:
          message.groupInd = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectRoleTermsOfUseXrefInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : 0,
      termsOfUseId: isSet(object.termsOfUseId) ? Number(object.termsOfUseId) : 0,
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : undefined,
      groupInd: isSet(object.groupInd) ? Number(object.groupInd) : undefined,
    };
  },

  toJSON(message: CreateProjectRoleTermsOfUseXrefInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    message.termsOfUseId !== undefined && (obj.termsOfUseId = Math.round(message.termsOfUseId));
    message.sortOrder !== undefined && (obj.sortOrder = Math.round(message.sortOrder));
    message.groupInd !== undefined && (obj.groupInd = Math.round(message.groupInd));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProjectRoleTermsOfUseXrefInput>, I>>(
    base?: I,
  ): CreateProjectRoleTermsOfUseXrefInput {
    return CreateProjectRoleTermsOfUseXrefInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectRoleTermsOfUseXrefInput>, I>>(
    object: I,
  ): CreateProjectRoleTermsOfUseXrefInput {
    const message = createBaseCreateProjectRoleTermsOfUseXrefInput();
    message.projectId = object.projectId ?? 0;
    message.resourceRoleId = object.resourceRoleId ?? 0;
    message.termsOfUseId = object.termsOfUseId ?? 0;
    message.sortOrder = object.sortOrder ?? undefined;
    message.groupInd = object.groupInd ?? undefined;
    return message;
  },
};

function createBaseDeleteProjectRoleTermsOfUseXrefInput(): DeleteProjectRoleTermsOfUseXrefInput {
  return { projectId: 0, resourceRoleId: 0, termsOfUseId: 0 };
}

export const DeleteProjectRoleTermsOfUseXrefInput = {
  encode(message: DeleteProjectRoleTermsOfUseXrefInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.resourceRoleId !== 0) {
      writer.uint32(16).int32(message.resourceRoleId);
    }
    if (message.termsOfUseId !== 0) {
      writer.uint32(24).int32(message.termsOfUseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProjectRoleTermsOfUseXrefInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProjectRoleTermsOfUseXrefInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.resourceRoleId = reader.int32();
          break;
        case 3:
          message.termsOfUseId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteProjectRoleTermsOfUseXrefInput {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      resourceRoleId: isSet(object.resourceRoleId) ? Number(object.resourceRoleId) : 0,
      termsOfUseId: isSet(object.termsOfUseId) ? Number(object.termsOfUseId) : 0,
    };
  },

  toJSON(message: DeleteProjectRoleTermsOfUseXrefInput): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.resourceRoleId !== undefined && (obj.resourceRoleId = Math.round(message.resourceRoleId));
    message.termsOfUseId !== undefined && (obj.termsOfUseId = Math.round(message.termsOfUseId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteProjectRoleTermsOfUseXrefInput>, I>>(
    base?: I,
  ): DeleteProjectRoleTermsOfUseXrefInput {
    return DeleteProjectRoleTermsOfUseXrefInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteProjectRoleTermsOfUseXrefInput>, I>>(
    object: I,
  ): DeleteProjectRoleTermsOfUseXrefInput {
    const message = createBaseDeleteProjectRoleTermsOfUseXrefInput();
    message.projectId = object.projectId ?? 0;
    message.resourceRoleId = object.resourceRoleId ?? 0;
    message.termsOfUseId = object.termsOfUseId ?? 0;
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
