/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  LegacyChallengeId,
  LegacyChallengeInfoRequest,
  LegacyChallengeInfoTypeList,
  LegacyChallengeList,
  LegacyChallengePhaseList,
} from "../acl-domain/LegacyChallenge";
import { LookupCriteria } from "../common/Common";

export interface CheckChallengeExistsResponse {
  exists: boolean;
}

export interface UpdateResponse {
  success: boolean;
}

export interface ChallengeInfoTypeFilterCriteria {
}

function createBaseCheckChallengeExistsResponse(): CheckChallengeExistsResponse {
  return { exists: false };
}

export const CheckChallengeExistsResponse = {
  encode(message: CheckChallengeExistsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckChallengeExistsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckChallengeExistsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckChallengeExistsResponse {
    return { exists: isSet(object.exists) ? Boolean(object.exists) : false };
  },

  toJSON(message: CheckChallengeExistsResponse): unknown {
    const obj: any = {};
    message.exists !== undefined && (obj.exists = message.exists);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckChallengeExistsResponse>, I>>(object: I): CheckChallengeExistsResponse {
    const message = createBaseCheckChallengeExistsResponse();
    message.exists = object.exists ?? false;
    return message;
  },
};

function createBaseUpdateResponse(): UpdateResponse {
  return { success: false };
}

export const UpdateResponse = {
  encode(message: UpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: UpdateResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateResponse>, I>>(object: I): UpdateResponse {
    const message = createBaseUpdateResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseChallengeInfoTypeFilterCriteria(): ChallengeInfoTypeFilterCriteria {
  return {};
}

export const ChallengeInfoTypeFilterCriteria = {
  encode(_: ChallengeInfoTypeFilterCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeInfoTypeFilterCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeInfoTypeFilterCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ChallengeInfoTypeFilterCriteria {
    return {};
  },

  toJSON(_: ChallengeInfoTypeFilterCriteria): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeInfoTypeFilterCriteria>, I>>(_: I): ChallengeInfoTypeFilterCriteria {
    const message = createBaseChallengeInfoTypeFilterCriteria();
    return message;
  },
};

export type LegacyChallengeService = typeof LegacyChallengeService;
export const LegacyChallengeService = {
  /** project */
  lookup: {
    path: "/topcoder.domain.acl.legacy_challenge_service.LegacyChallenge/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: LegacyChallengeList) => Buffer.from(LegacyChallengeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallengeList.decode(value),
  },
  checkChallengeExists: {
    path: "/topcoder.domain.acl.legacy_challenge_service.LegacyChallenge/CheckChallengeExists",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) => Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: CheckChallengeExistsResponse) =>
      Buffer.from(CheckChallengeExistsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckChallengeExistsResponse.decode(value),
  },
  /** project_info */
  addOrUpdateChallengeInfo: {
    path: "/topcoder.domain.acl.legacy_challenge_service.LegacyChallenge/AddOrUpdateChallengeInfo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeInfoRequest) =>
      Buffer.from(LegacyChallengeInfoRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeInfoRequest.decode(value),
    responseSerialize: (value: UpdateResponse) => Buffer.from(UpdateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResponse.decode(value),
  },
  listAvailableChallengeInfoTypes: {
    path: "/topcoder.domain.acl.legacy_challenge_service.LegacyChallenge/ListAvailableChallengeInfoTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ChallengeInfoTypeFilterCriteria) =>
      Buffer.from(ChallengeInfoTypeFilterCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ChallengeInfoTypeFilterCriteria.decode(value),
    responseSerialize: (value: LegacyChallengeInfoTypeList) =>
      Buffer.from(LegacyChallengeInfoTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallengeInfoTypeList.decode(value),
  },
  /** project_phase */
  listChallengePhases: {
    path: "/topcoder.domain.acl.legacy_challenge_service.LegacyChallenge/ListChallengePhases",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengeId) => Buffer.from(LegacyChallengeId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengeId.decode(value),
    responseSerialize: (value: LegacyChallengePhaseList) =>
      Buffer.from(LegacyChallengePhaseList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LegacyChallengePhaseList.decode(value),
  },
  updateChallengePhases: {
    path: "/topcoder.domain.acl.legacy_challenge_service.LegacyChallenge/UpdateChallengePhases",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LegacyChallengePhaseList) => Buffer.from(LegacyChallengePhaseList.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LegacyChallengePhaseList.decode(value),
    responseSerialize: (value: UpdateResponse) => Buffer.from(UpdateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResponse.decode(value),
  },
} as const;

export interface LegacyChallengeServer extends UntypedServiceImplementation {
  /** project */
  lookup: handleUnaryCall<LookupCriteria, LegacyChallengeList>;
  checkChallengeExists: handleUnaryCall<LegacyChallengeId, CheckChallengeExistsResponse>;
  /** project_info */
  addOrUpdateChallengeInfo: handleUnaryCall<LegacyChallengeInfoRequest, UpdateResponse>;
  listAvailableChallengeInfoTypes: handleUnaryCall<ChallengeInfoTypeFilterCriteria, LegacyChallengeInfoTypeList>;
  /** project_phase */
  listChallengePhases: handleUnaryCall<LegacyChallengeId, LegacyChallengePhaseList>;
  updateChallengePhases: handleUnaryCall<LegacyChallengePhaseList, UpdateResponse>;
}

export interface LegacyChallengeClient extends Client {
  /** project */
  lookup(
    request: LookupCriteria,
    callback: (error: ServiceError | null, response: LegacyChallengeList) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallengeList) => void,
  ): ClientUnaryCall;
  lookup(
    request: LookupCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallengeList) => void,
  ): ClientUnaryCall;
  checkChallengeExists(
    request: LegacyChallengeId,
    callback: (error: ServiceError | null, response: CheckChallengeExistsResponse) => void,
  ): ClientUnaryCall;
  checkChallengeExists(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckChallengeExistsResponse) => void,
  ): ClientUnaryCall;
  checkChallengeExists(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckChallengeExistsResponse) => void,
  ): ClientUnaryCall;
  /** project_info */
  addOrUpdateChallengeInfo(
    request: LegacyChallengeInfoRequest,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
  addOrUpdateChallengeInfo(
    request: LegacyChallengeInfoRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
  addOrUpdateChallengeInfo(
    request: LegacyChallengeInfoRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
  listAvailableChallengeInfoTypes(
    request: ChallengeInfoTypeFilterCriteria,
    callback: (error: ServiceError | null, response: LegacyChallengeInfoTypeList) => void,
  ): ClientUnaryCall;
  listAvailableChallengeInfoTypes(
    request: ChallengeInfoTypeFilterCriteria,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallengeInfoTypeList) => void,
  ): ClientUnaryCall;
  listAvailableChallengeInfoTypes(
    request: ChallengeInfoTypeFilterCriteria,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallengeInfoTypeList) => void,
  ): ClientUnaryCall;
  /** project_phase */
  listChallengePhases(
    request: LegacyChallengeId,
    callback: (error: ServiceError | null, response: LegacyChallengePhaseList) => void,
  ): ClientUnaryCall;
  listChallengePhases(
    request: LegacyChallengeId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LegacyChallengePhaseList) => void,
  ): ClientUnaryCall;
  listChallengePhases(
    request: LegacyChallengeId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LegacyChallengePhaseList) => void,
  ): ClientUnaryCall;
  updateChallengePhases(
    request: LegacyChallengePhaseList,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
  updateChallengePhases(
    request: LegacyChallengePhaseList,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
  updateChallengePhases(
    request: LegacyChallengePhaseList,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
}

export const LegacyChallengeClient = makeGenericClientConstructor(
  LegacyChallengeService,
  "topcoder.domain.acl.legacy_challenge_service.LegacyChallenge",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): LegacyChallengeClient;
  service: typeof LegacyChallengeService;
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
