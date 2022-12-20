import { handleUnaryCall, sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import {
  ScanRequest,
  ScanResult,
  LookupCriteria,
} from "../models/common/common";

import {
  ChallengeTrack,
  CreateChallengeTrackInput,
  UpdateChallengeTrackInput,
  ChallengeTrackList,
} from "../models/domain-layer/challenge/challenge_track";

import {
  ChallengeTrackServer,
  ChallengeTrackService,
} from "../models/domain-layer/challenge/services/challenge_track";

import Domain from "../domain/ChallengeTrack";

class ChallengeTimelineTemplatServerImpl implements ChallengeTrackServer {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { scanCriteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await Domain.scan(
      scanCriteria,
      inputNextToken
    );

    callback(null, {
      items,
      nextToken,
    });
  };

  lookup: handleUnaryCall<LookupCriteria, ChallengeTrack> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeTrack>,
    callback: sendUnaryData<ChallengeTrack>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const ChallengeTrack = await Domain.lookup(lookupCriteria);

    callback(null, ChallengeTrack);
  };

  create: handleUnaryCall<CreateChallengeTrackInput, ChallengeTrack> = async (
    call: ServerUnaryCall<CreateChallengeTrackInput, ChallengeTrack>,
    callback: sendUnaryData<ChallengeTrack>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    const ChallengeTrack = await Domain.create(createRequestInput);

    callback(null, ChallengeTrack);
  };

  update: handleUnaryCall<UpdateChallengeTrackInput, ChallengeTrackList> =
    async (
      call: ServerUnaryCall<UpdateChallengeTrackInput, ChallengeTrackList>,
      callback: sendUnaryData<ChallengeTrackList>
    ): Promise<void> => {
      // TODO: Handle update
      callback(new Error("Not implemented"), null);
    };

  delete: handleUnaryCall<LookupCriteria, ChallengeTrackList> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeTrackList>,
    callback: sendUnaryData<ChallengeTrackList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const challengeTracks = await Domain.delete(lookupCriteria);

    callback(null, ChallengeTrackList.fromJSON(challengeTracks));
  };
}

export {
  ChallengeTimelineTemplatServerImpl as ChallengeTrackServer,
  ChallengeTrackService,
};
