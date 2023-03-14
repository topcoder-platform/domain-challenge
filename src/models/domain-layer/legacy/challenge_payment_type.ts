/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface LegacyChallengePaymentType {
  projectId: number;
  name: string;
  multiplier: number;
  mergeable: boolean;
  pactsPaymentTypeId: number;
}

function createBaseLegacyChallengePaymentType(): LegacyChallengePaymentType {
  return { projectId: 0, name: "", multiplier: 0, mergeable: false, pactsPaymentTypeId: 0 };
}

export const LegacyChallengePaymentType = {
  encode(message: LegacyChallengePaymentType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== 0) {
      writer.uint32(8).int32(message.projectId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.multiplier !== 0) {
      writer.uint32(24).int32(message.multiplier);
    }
    if (message.mergeable === true) {
      writer.uint32(32).bool(message.mergeable);
    }
    if (message.pactsPaymentTypeId !== 0) {
      writer.uint32(40).int32(message.pactsPaymentTypeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyChallengePaymentType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyChallengePaymentType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.multiplier = reader.int32();
          break;
        case 4:
          message.mergeable = reader.bool();
          break;
        case 5:
          message.pactsPaymentTypeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyChallengePaymentType {
    return {
      projectId: isSet(object.projectId) ? Number(object.projectId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      multiplier: isSet(object.multiplier) ? Number(object.multiplier) : 0,
      mergeable: isSet(object.mergeable) ? Boolean(object.mergeable) : false,
      pactsPaymentTypeId: isSet(object.pactsPaymentTypeId) ? Number(object.pactsPaymentTypeId) : 0,
    };
  },

  toJSON(message: LegacyChallengePaymentType): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = Math.round(message.projectId));
    message.name !== undefined && (obj.name = message.name);
    message.multiplier !== undefined && (obj.multiplier = Math.round(message.multiplier));
    message.mergeable !== undefined && (obj.mergeable = message.mergeable);
    message.pactsPaymentTypeId !== undefined && (obj.pactsPaymentTypeId = Math.round(message.pactsPaymentTypeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyChallengePaymentType>, I>>(base?: I): LegacyChallengePaymentType {
    return LegacyChallengePaymentType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyChallengePaymentType>, I>>(object: I): LegacyChallengePaymentType {
    const message = createBaseLegacyChallengePaymentType();
    message.projectId = object.projectId ?? 0;
    message.name = object.name ?? "";
    message.multiplier = object.multiplier ?? 0;
    message.mergeable = object.mergeable ?? false;
    message.pactsPaymentTypeId = object.pactsPaymentTypeId ?? 0;
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
