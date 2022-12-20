/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest, ScanResult } from "../../../common/common";
import {
  ChallengeType,
  ChallengeTypeList,
  CreateChallengeTypeInput,
  UpdateChallengeTypeInput,
} from "../challenge_type";

export type ChallengeTypeService = typeof ChallengeTypeService;
export const ChallengeTypeService = {
  scan: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeType) => Buffer.from(ChallengeType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeType.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeTypeInput) => Buffer.from(CreateChallengeTypeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeTypeInput.decode(value),
    responseSerialize: (value: ChallengeType) => Buffer.from(ChallengeType.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeType.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeTypeInput) => Buffer.from(UpdateChallengeTypeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeTypeInput.decode(value),
    responseSerialize: (value: ChallengeTypeList) => Buffer.from(ChallengeTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTypeList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.challenge_type.ChallengeType/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTypeList) => Buffer.from(ChallengeTypeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTypeList.decode(value),
  },
} as const;

export interface ChallengeTypeServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, ChallengeType>;
  create: handleUnaryCall<CreateChallengeTypeInput, ChallengeType>;
  update: handleUnaryCall<UpdateChallengeTypeInput, ChallengeTypeList>;
  delete: handleUnaryCall<LookupCriteria, ChallengeTypeList>;
}
