/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria, PhaseFactRequest, PhaseFactResponse, ScanRequest, ScanResult } from "../../../common/common";
import { Empty } from "../../../google/protobuf/empty";
import {
  Challenge,
  ChallengeList,
  CreateChallengeInput,
  UpdateChallengeInput,
  UpdateChallengeInputForACL,
} from "../challenge";

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
    responseSerialize: (value: ChallengeList) => Buffer.from(ChallengeList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeList.decode(value),
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
  updateForAcl: {
    path: "/topcoder.domain.service.challenge.Challenge/UpdateForACL",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeInputForACL) =>
      Buffer.from(UpdateChallengeInputForACL.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeInputForACL.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
  /**
   * This is a necessary indirection (challenge-api -> domain-challenge -> acl)
   * When we have a proper review API in place, these requests can go to
   * review-api or domain-review directly.
   */
  getPhaseFacts: {
    path: "/topcoder.domain.service.challenge.Challenge/GetPhaseFacts",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PhaseFactRequest) => Buffer.from(PhaseFactRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PhaseFactRequest.decode(value),
    responseSerialize: (value: PhaseFactResponse) => Buffer.from(PhaseFactResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PhaseFactResponse.decode(value),
  },
} as const;

export interface ChallengeServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeInput, Challenge>;
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Challenge>;
  update: handleUnaryCall<UpdateChallengeInput, ChallengeList>;
  delete: handleUnaryCall<LookupCriteria, ChallengeList>;
  updateForAcl: handleUnaryCall<UpdateChallengeInputForACL, Empty>;
  /**
   * This is a necessary indirection (challenge-api -> domain-challenge -> acl)
   * When we have a proper review API in place, these requests can go to
   * review-api or domain-review directly.
   */
  getPhaseFacts: handleUnaryCall<PhaseFactRequest, PhaseFactResponse>;
}
