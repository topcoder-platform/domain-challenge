import {
  UntypedHandleCall,
  handleUnaryCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import {
  LookupCriteria,
  Operator,
  ScanRequest,
  ScanResult,
  UpdateResult,
} from "../models/common/common";

import {
  ChallengeServer,
  ChallengeService,
} from "../models/domain-layer/challenge/services/challenge";

import {
  CreateChallengeInput,
  Challenge,
  ChallengeList,
  UpdateChallengeInput,
} from "../models/domain-layer/challenge/challenge";

import Domain from "../domain/Challenge";
class ChallengeServerImpl implements ChallengeServer {
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<CreateChallengeInput, Challenge> = async (
    call: ServerUnaryCall<CreateChallengeInput, Challenge>,
    callback: sendUnaryData<Challenge>
  ): Promise<void> => {
    const { request: createChallengeInput } = call;
    Domain.create(createChallengeInput)
      .then((challenge) => callback(null, challenge))
      .catch((error) => callback(error, null));
  };

  lookup: handleUnaryCall<LookupCriteria, Challenge> = async (
    call: ServerUnaryCall<LookupCriteria, Challenge>,
    callback: sendUnaryData<Challenge>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const challenge = await Domain.lookup(lookupCriteria);

    callback(null, challenge);
  };

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { criteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await Domain.scan(
      criteria,
      inputNextToken
    );

    callback(null, { items, nextToken });
  };

  update: handleUnaryCall<UpdateChallengeInput, UpdateResult> = async (
    call: ServerUnaryCall<UpdateChallengeInput, UpdateResult>,
    callback: sendUnaryData<UpdateResult>
  ): Promise<void> => {
    const { updateInput, filterCriteria } = call.request
    if (!updateInput) return callback(null, { updatedCount: 0 })
    await Domain.update(filterCriteria, updateInput)

    callback(null, { updatedCount: 1});
  };

  delete: handleUnaryCall<LookupCriteria, ChallengeList> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeList>,
    callback: sendUnaryData<ChallengeList>
  ): Promise<void> => {};
}

export { ChallengeServerImpl as ChallengeServer, ChallengeService };
