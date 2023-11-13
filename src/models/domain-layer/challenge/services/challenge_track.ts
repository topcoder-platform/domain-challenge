/* eslint-disable */
import type { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest, ScanResult } from "../../../common/common";
import {
  ChallengeTrack,
  ChallengeTrackList,
  CreateChallengeTrackInput,
  UpdateChallengeTrackInput,
} from "../challenge_track";

export type ChallengeTrackService = typeof ChallengeTrackService;
export const ChallengeTrackService = {
  scan: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTrack) => Buffer.from(ChallengeTrack.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrack.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeTrackInput) =>
      Buffer.from(CreateChallengeTrackInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeTrackInput.decode(value),
    responseSerialize: (value: ChallengeTrack) => Buffer.from(ChallengeTrack.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrack.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeTrackInput) =>
      Buffer.from(UpdateChallengeTrackInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeTrackInput.decode(value),
    responseSerialize: (value: ChallengeTrackList) => Buffer.from(ChallengeTrackList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrackList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTrackList) => Buffer.from(ChallengeTrackList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrackList.decode(value),
  },
} as const;

export interface ChallengeTrackServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, ChallengeTrack>;
  create: handleUnaryCall<CreateChallengeTrackInput, ChallengeTrack>;
  update: handleUnaryCall<UpdateChallengeTrackInput, ChallengeTrackList>;
  delete: handleUnaryCall<LookupCriteria, ChallengeTrackList>;
}
