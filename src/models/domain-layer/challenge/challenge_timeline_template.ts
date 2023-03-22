/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ScanCriteria } from "../../common/common";

export interface ChallengeTimelineTemplate {
  id: string;
  trackId: string;
  typeId: string;
  timelineTemplateId: string;
  isDefault: boolean;
}

export interface ChallengeTimelineTemplateList {
  items: ChallengeTimelineTemplate[];
}

export interface CreateChallengeTimelineTemplateInput {
  trackId: string;
  typeId: string;
  timelineTemplateId: string;
  isDefault: boolean;
}

export interface UpdateChallengeTimelineTemplateInput {
  filterCriteria: ScanCriteria[];
  updateInput?: UpdateChallengeTimelineTemplateInput_UpdateInput;
}

export interface UpdateChallengeTimelineTemplateInput_UpdateInput {
  trackId?: string | undefined;
  typeId?: string | undefined;
  timelineTemplateId?: string | undefined;
  isDefault?: boolean | undefined;
}

function createBaseChallengeTimelineTemplate(): ChallengeTimelineTemplate {
  return { id: "", trackId: "", typeId: "", timelineTemplateId: "", isDefault: false };
}

export const ChallengeTimelineTemplate = {
  encode(message: ChallengeTimelineTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.trackId !== "") {
      writer.uint32(18).string(message.trackId);
    }
    if (message.typeId !== "") {
      writer.uint32(26).string(message.typeId);
    }
    if (message.timelineTemplateId !== "") {
      writer.uint32(34).string(message.timelineTemplateId);
    }
    if (message.isDefault === true) {
      writer.uint32(40).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTimelineTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTimelineTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.trackId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.timelineTemplateId = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeTimelineTemplate {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : "",
      isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
    };
  },

  toJSON(message: ChallengeTimelineTemplate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.isDefault !== undefined && (obj.isDefault = message.isDefault);
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeTimelineTemplate>, I>>(base?: I): ChallengeTimelineTemplate {
    return ChallengeTimelineTemplate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeTimelineTemplate>, I>>(object: I): ChallengeTimelineTemplate {
    const message = createBaseChallengeTimelineTemplate();
    message.id = object.id ?? "";
    message.trackId = object.trackId ?? "";
    message.typeId = object.typeId ?? "";
    message.timelineTemplateId = object.timelineTemplateId ?? "";
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseChallengeTimelineTemplateList(): ChallengeTimelineTemplateList {
  return { items: [] };
}

export const ChallengeTimelineTemplateList = {
  encode(message: ChallengeTimelineTemplateList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ChallengeTimelineTemplate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeTimelineTemplateList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeTimelineTemplateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.items.push(ChallengeTimelineTemplate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeTimelineTemplateList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ChallengeTimelineTemplate.fromJSON(e)) : [],
    };
  },

  toJSON(message: ChallengeTimelineTemplateList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ChallengeTimelineTemplate.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeTimelineTemplateList>, I>>(base?: I): ChallengeTimelineTemplateList {
    return ChallengeTimelineTemplateList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeTimelineTemplateList>, I>>(
    object: I,
  ): ChallengeTimelineTemplateList {
    const message = createBaseChallengeTimelineTemplateList();
    message.items = object.items?.map((e) => ChallengeTimelineTemplate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateChallengeTimelineTemplateInput(): CreateChallengeTimelineTemplateInput {
  return { trackId: "", typeId: "", timelineTemplateId: "", isDefault: false };
}

export const CreateChallengeTimelineTemplateInput = {
  encode(message: CreateChallengeTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackId !== "") {
      writer.uint32(10).string(message.trackId);
    }
    if (message.typeId !== "") {
      writer.uint32(18).string(message.typeId);
    }
    if (message.timelineTemplateId !== "") {
      writer.uint32(26).string(message.timelineTemplateId);
    }
    if (message.isDefault === true) {
      writer.uint32(32).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChallengeTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChallengeTimelineTemplateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.trackId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.timelineTemplateId = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChallengeTimelineTemplateInput {
    return {
      trackId: isSet(object.trackId) ? String(object.trackId) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : "",
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : "",
      isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : false,
    };
  },

  toJSON(message: CreateChallengeTimelineTemplateInput): unknown {
    const obj: any = {};
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.isDefault !== undefined && (obj.isDefault = message.isDefault);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChallengeTimelineTemplateInput>, I>>(
    base?: I,
  ): CreateChallengeTimelineTemplateInput {
    return CreateChallengeTimelineTemplateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateChallengeTimelineTemplateInput>, I>>(
    object: I,
  ): CreateChallengeTimelineTemplateInput {
    const message = createBaseCreateChallengeTimelineTemplateInput();
    message.trackId = object.trackId ?? "";
    message.typeId = object.typeId ?? "";
    message.timelineTemplateId = object.timelineTemplateId ?? "";
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseUpdateChallengeTimelineTemplateInput(): UpdateChallengeTimelineTemplateInput {
  return { filterCriteria: [], updateInput: undefined };
}

export const UpdateChallengeTimelineTemplateInput = {
  encode(message: UpdateChallengeTimelineTemplateInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.filterCriteria) {
      ScanCriteria.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateInput !== undefined) {
      UpdateChallengeTimelineTemplateInput_UpdateInput.encode(message.updateInput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTimelineTemplateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTimelineTemplateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.filterCriteria.push(ScanCriteria.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.updateInput = UpdateChallengeTimelineTemplateInput_UpdateInput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTimelineTemplateInput {
    return {
      filterCriteria: Array.isArray(object?.filterCriteria)
        ? object.filterCriteria.map((e: any) => ScanCriteria.fromJSON(e))
        : [],
      updateInput: isSet(object.updateInput)
        ? UpdateChallengeTimelineTemplateInput_UpdateInput.fromJSON(object.updateInput)
        : undefined,
    };
  },

  toJSON(message: UpdateChallengeTimelineTemplateInput): unknown {
    const obj: any = {};
    if (message.filterCriteria) {
      obj.filterCriteria = message.filterCriteria.map((e) => e ? ScanCriteria.toJSON(e) : undefined);
    } else {
      obj.filterCriteria = [];
    }
    message.updateInput !== undefined && (obj.updateInput = message.updateInput
      ? UpdateChallengeTimelineTemplateInput_UpdateInput.toJSON(message.updateInput)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTimelineTemplateInput>, I>>(
    base?: I,
  ): UpdateChallengeTimelineTemplateInput {
    return UpdateChallengeTimelineTemplateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTimelineTemplateInput>, I>>(
    object: I,
  ): UpdateChallengeTimelineTemplateInput {
    const message = createBaseUpdateChallengeTimelineTemplateInput();
    message.filterCriteria = object.filterCriteria?.map((e) => ScanCriteria.fromPartial(e)) || [];
    message.updateInput = (object.updateInput !== undefined && object.updateInput !== null)
      ? UpdateChallengeTimelineTemplateInput_UpdateInput.fromPartial(object.updateInput)
      : undefined;
    return message;
  },
};

function createBaseUpdateChallengeTimelineTemplateInput_UpdateInput(): UpdateChallengeTimelineTemplateInput_UpdateInput {
  return { trackId: undefined, typeId: undefined, timelineTemplateId: undefined, isDefault: undefined };
}

export const UpdateChallengeTimelineTemplateInput_UpdateInput = {
  encode(
    message: UpdateChallengeTimelineTemplateInput_UpdateInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trackId !== undefined) {
      writer.uint32(18).string(message.trackId);
    }
    if (message.typeId !== undefined) {
      writer.uint32(26).string(message.typeId);
    }
    if (message.timelineTemplateId !== undefined) {
      writer.uint32(34).string(message.timelineTemplateId);
    }
    if (message.isDefault !== undefined) {
      writer.uint32(40).bool(message.isDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChallengeTimelineTemplateInput_UpdateInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChallengeTimelineTemplateInput_UpdateInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.trackId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.typeId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.timelineTemplateId = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateChallengeTimelineTemplateInput_UpdateInput {
    return {
      trackId: isSet(object.trackId) ? String(object.trackId) : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      timelineTemplateId: isSet(object.timelineTemplateId) ? String(object.timelineTemplateId) : undefined,
      isDefault: isSet(object.isDefault) ? Boolean(object.isDefault) : undefined,
    };
  },

  toJSON(message: UpdateChallengeTimelineTemplateInput_UpdateInput): unknown {
    const obj: any = {};
    message.trackId !== undefined && (obj.trackId = message.trackId);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.timelineTemplateId !== undefined && (obj.timelineTemplateId = message.timelineTemplateId);
    message.isDefault !== undefined && (obj.isDefault = message.isDefault);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateChallengeTimelineTemplateInput_UpdateInput>, I>>(
    base?: I,
  ): UpdateChallengeTimelineTemplateInput_UpdateInput {
    return UpdateChallengeTimelineTemplateInput_UpdateInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChallengeTimelineTemplateInput_UpdateInput>, I>>(
    object: I,
  ): UpdateChallengeTimelineTemplateInput_UpdateInput {
    const message = createBaseUpdateChallengeTimelineTemplateInput_UpdateInput();
    message.trackId = object.trackId ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.timelineTemplateId = object.timelineTemplateId ?? undefined;
    message.isDefault = object.isDefault ?? undefined;
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
