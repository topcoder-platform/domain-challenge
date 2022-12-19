/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import {
  ChallengeTrack,
  CreateChallengeTrackInput,
  RemoveChallengeTrackInput,
  UpdateChallengeTrackInput,
} from "../challenge_track";

export type ChallengeTrackService = typeof ChallengeTrackService;
export const ChallengeTrackService = {
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
    responseSerialize: (value: ChallengeTrack) => Buffer.from(ChallengeTrack.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrack.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.challenge_track.ChallengeTrack/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveChallengeTrackInput) =>
      Buffer.from(RemoveChallengeTrackInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveChallengeTrackInput.decode(value),
    responseSerialize: (value: ChallengeTrack) => Buffer.from(ChallengeTrack.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTrack.decode(value),
  },
} as const;

export interface ChallengeTrackServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeTrackInput, ChallengeTrack>;
  update: handleUnaryCall<UpdateChallengeTrackInput, ChallengeTrack>;
  remove: handleUnaryCall<RemoveChallengeTrackInput, ChallengeTrack>;
}
