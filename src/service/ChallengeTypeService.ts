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

  lookup: handleUnaryCall<LookupCriteria, ChallengeType> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeType>,
    callback: sendUnaryData<ChallengeType>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    Domain.lookup(lookupCriteria)
      .then((challengeType) => {
        callback(null, challengeType);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  create: handleUnaryCall<CreateChallengeTypeInput, ChallengeType> = async (
    call: ServerUnaryCall<CreateChallengeTypeInput, ChallengeType>,
    callback: sendUnaryData<ChallengeType>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    Domain.create(createRequestInput)
      .then((challengeType) => {
        callback(null, challengeType);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  update: handleUnaryCall<UpdateChallengeTypeInput, ChallengeTypeList> = async (
    call: ServerUnaryCall<UpdateChallengeTypeInput, ChallengeTypeList>,
    callback: sendUnaryData<ChallengeTypeList>
  ): Promise<void> => {
    const {
      request: { updateInput, filterCriteria },
    } = call;

    Domain.update(filterCriteria, updateInput)
      .then((challengeTypeList) => {
        callback(null, ChallengeTypeList.fromJSON(challengeTypeList));
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

    Domain.delete(lookupCriteria)
      .then((challengeTypeList) => {
        callback(null, ChallengeTypeList.fromJSON(challengeTypeList));
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };
}

export { ChallengeTypeServerImpl as ChallengeTypeServer, ChallengeTypeService };
