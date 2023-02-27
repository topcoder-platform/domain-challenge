/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest, ScanResult, UpdateResult } from "../../../common/common";
import { Challenge, ChallengeList, CreateChallengeInput, UpdateChallengeInput } from "../challenge";

export type ChallengeService = typeof ChallengeService;
export const ChallengeService = {
  create: {
    path: "/topcoder.domain.service.challenge.Challenge/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeInput) => Buffer.from(CreateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeInput.decode(value),
    responseSerialize: (value: Challenge) => Buffer.from(Challenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Challenge.decode(value),
  },
  scan: {
    path: "/topcoder.domain.service.challenge.Challenge/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.challenge.Challenge/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Challenge) => Buffer.from(Challenge.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Challenge.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge.Challenge/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeInput) => Buffer.from(UpdateChallengeInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeInput.decode(value),
    responseSerialize: (value: UpdateResult) => Buffer.from(UpdateResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResult.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.challenge.Challenge/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeList) => Buffer.from(ChallengeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeList.decode(value),
  },
} as const;

export interface ChallengeServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeInput, Challenge>;
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Challenge>;
  update: handleUnaryCall<UpdateChallengeInput, UpdateResult>;
  delete: handleUnaryCall<LookupCriteria, ChallengeList>;
}
