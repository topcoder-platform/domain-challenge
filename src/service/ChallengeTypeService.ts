import { handleUnaryCall, sendUnaryData, ServerUnaryCall, StatusObject } from "@grpc/grpc-js";
import {
  ScanRequest,
  ScanResult,
  LookupCriteria,
} from "../models/common/common";

import {
  ChallengeType,
  CreateChallengeTypeInput,
  UpdateChallengeTypeInput,
  ChallengeTypeList,
} from "../models/domain-layer/challenge/challenge_type";

import {
  ChallengeTypeServer,
  ChallengeTypeService,
} from "../models/domain-layer/challenge/services/challenge_type";

import Domain from "../domain/ChallengeType";

class ChallengeTypeServerImpl implements ChallengeTypeServer {
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

  lookup: handleUnaryCall<LookupCriteria, ChallengeType> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeType>,
    callback: sendUnaryData<ChallengeType>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const ChallengeType = await Domain.lookup(lookupCriteria);

    callback(null, ChallengeType);
  };

  create: handleUnaryCall<CreateChallengeTypeInput, ChallengeType> = async (
    call: ServerUnaryCall<CreateChallengeTypeInput, ChallengeType>,
    callback: sendUnaryData<ChallengeType>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    const ChallengeType = await Domain.create(createRequestInput);

    callback(null, ChallengeType);
  };

  update: handleUnaryCall<UpdateChallengeTypeInput, ChallengeTypeList> =
    async (
      call: ServerUnaryCall<UpdateChallengeTypeInput, ChallengeTypeList>,
      callback: sendUnaryData<ChallengeTypeList>
    ): Promise<void> => {
      const {
        request: { updateInput, filterCriteria },
      } = call;
  
      Domain.update(filterCriteria, updateInput)
        .then((challengeTypeList) => {
          callback(
            null,
            ChallengeTypeList.fromJSON(challengeTypeList)
          );
        })
        .catch((error: StatusObject) => {
          callback(error, null);
        });
    };

  delete: handleUnaryCall<LookupCriteria, ChallengeTypeList> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeTypeList>,
    callback: sendUnaryData<ChallengeTypeList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const challengeTypes = await Domain.delete(lookupCriteria);

    callback(null, ChallengeTypeList.fromJSON(challengeTypes));
  };
}

export {
  ChallengeTypeServerImpl as ChallengeTypeServer,
  ChallengeTypeService,
};
