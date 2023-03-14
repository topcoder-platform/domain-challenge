/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface Notification {
  notificationTypeId: number;
  externalRefId: number;
  projectId: number;
}

export interface NotificationList {
  notifications: Notification[];
}

export interface GetNotificationsInput {
  externalRefId: number;
  projectId: number;
}

export interface DeleteNotificationsInput {
  externalRefId: number;
  projectId: number;
}

function createBaseNotification(): Notification {
  return { notificationTypeId: 0, externalRefId: 0, projectId: 0 };
}

export const Notification = {
  encode(message: Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notificationTypeId !== 0) {
      writer.uint32(8).int32(message.notificationTypeId);
    }
    if (message.externalRefId !== 0) {
      writer.uint32(16).int32(message.externalRefId);
    }
    if (message.projectId !== 0) {
      writer.uint32(24).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notificationTypeId = reader.int32();
          break;
        case 2:
          message.externalRefId = reader.int32();
          break;
        case 3:
          message.projectId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notification {
    return {
      notificationTypeId: isSet(object.notificationTypeId) ? Number(object.notificationTypeId) : 0,
      externalRefId: isSet(object.externalRefId) ? Number(object.externalRefId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
    };
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    message.notificationTypeId !== undefined && (obj.notificationTypeId = Math.round(message.notificationTypeId));
    message.externalRefId !== undefined && (obj.externalRefId = Math.round(message.externalRefId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<Notification>, I>>(base?: I): Notification {
    return Notification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Notification>, I>>(object: I): Notification {
    const message = createBaseNotification();
    message.notificationTypeId = object.notificationTypeId ?? 0;
    message.externalRefId = object.externalRefId ?? 0;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseNotificationList(): NotificationList {
  return { notifications: [] };
}

export const NotificationList = {
  encode(message: NotificationList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifications.push(Notification.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotificationList {
    return {
      notifications: Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notification.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NotificationList): unknown {
    const obj: any = {};
    if (message.notifications) {
      obj.notifications = message.notifications.map((e) => e ? Notification.toJSON(e) : undefined);
    } else {
      obj.notifications = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotificationList>, I>>(base?: I): NotificationList {
    return NotificationList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotificationList>, I>>(object: I): NotificationList {
    const message = createBaseNotificationList();
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNotificationsInput(): GetNotificationsInput {
  return { externalRefId: 0, projectId: 0 };
}

export const GetNotificationsInput = {
  encode(message: GetNotificationsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalRefId !== 0) {
      writer.uint32(8).int32(message.externalRefId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNotificationsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalRefId = reader.int32();
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

  fromJSON(object: any): GetNotificationsInput {
    return {
      externalRefId: isSet(object.externalRefId) ? Number(object.externalRefId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
    };
  },

  toJSON(message: GetNotificationsInput): unknown {
    const obj: any = {};
    message.externalRefId !== undefined && (obj.externalRefId = Math.round(message.externalRefId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetNotificationsInput>, I>>(base?: I): GetNotificationsInput {
    return GetNotificationsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetNotificationsInput>, I>>(object: I): GetNotificationsInput {
    const message = createBaseGetNotificationsInput();
    message.externalRefId = object.externalRefId ?? 0;
    message.projectId = object.projectId ?? 0;
    return message;
  },
};

function createBaseDeleteNotificationsInput(): DeleteNotificationsInput {
  return { externalRefId: 0, projectId: 0 };
}

export const DeleteNotificationsInput = {
  encode(message: DeleteNotificationsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalRefId !== 0) {
      writer.uint32(8).int32(message.externalRefId);
    }
    if (message.projectId !== 0) {
      writer.uint32(16).int32(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteNotificationsInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteNotificationsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalRefId = reader.int32();
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

  fromJSON(object: any): DeleteNotificationsInput {
    return {
      externalRefId: isSet(object.externalRefId) ? Number(object.externalRefId) : 0,
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
    };
  },

  toJSON(message: DeleteNotificationsInput): unknown {
    const obj: any = {};
    message.externalRefId !== undefined && (obj.externalRefId = Math.round(message.externalRefId));
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteNotificationsInput>, I>>(base?: I): DeleteNotificationsInput {
    return DeleteNotificationsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteNotificationsInput>, I>>(object: I): DeleteNotificationsInput {
    const message = createBaseDeleteNotificationsInput();
    message.externalRefId = object.externalRefId ?? 0;
    message.projectId = object.projectId ?? 0;
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
