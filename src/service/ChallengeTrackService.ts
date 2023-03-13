import {
  handleUnaryCall,
  sendUnaryData,
  ServerUnaryCall,
  StatusObject,
} from "@grpc/grpc-js";
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

class ChallengeTrackServerImpl implements ChallengeTrackServer {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { criteria, nextToken: inputNextToken },
    } = call;

    Domain.scan(criteria, inputNextToken)
      .then(({ items, nextToken }) => {
        callback(null, { items, nextToken });
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  lookup: handleUnaryCall<LookupCriteria, ChallengeTrack> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeTrack>,
    callback: sendUnaryData<ChallengeTrack>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    Domain.lookup(lookupCriteria)
      .then((challengeTrack) => {
        callback(null, challengeTrack);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  create: handleUnaryCall<CreateChallengeTrackInput, ChallengeTrack> = async (
    call: ServerUnaryCall<CreateChallengeTrackInput, ChallengeTrack>,
    callback: sendUnaryData<ChallengeTrack>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    Domain.create(createRequestInput)
      .then((challengeTrack) => {
        callback(null, challengeTrack);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  update: handleUnaryCall<UpdateChallengeTrackInput, ChallengeTrackList> =
    async (
      call: ServerUnaryCall<UpdateChallengeTrackInput, ChallengeTrackList>,
      callback: sendUnaryData<ChallengeTrackList>
    ): Promise<void> => {
      const {
        request: { updateInput, filterCriteria },
      } = call;

      Domain.update(filterCriteria, updateInput)
        .then((challengeTrackList) => {
          callback(null, ChallengeTrackList.fromJSON(challengeTrackList));
        })
        .catch((error: StatusObject) => {
          callback(error, null);
        });
    };

  delete: handleUnaryCall<LookupCriteria, ChallengeTrackList> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeTrackList>,
    callback: sendUnaryData<ChallengeTrackList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    Domain.delete(lookupCriteria)
      .then((challengeTrackList) => {
        callback(null, ChallengeTrackList.fromJSON(challengeTrackList));
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };
}

export {
  ChallengeTrackServerImpl as ChallengeTrackServer,
  ChallengeTrackService,
};
