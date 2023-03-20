import {
  UntypedHandleCall,
  handleUnaryCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
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
  UpdateChallengeInputForACL,
} from "../models/domain-layer/challenge/challenge";

import Domain from "../domain/Challenge";
import { Empty } from "../models/google/protobuf/empty";
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

    const { items, nextToken } = await Domain.scan(criteria, inputNextToken);

    callback(null, { items, nextToken });
  };

  update: handleUnaryCall<UpdateChallengeInput, ChallengeList> = async (
    call: ServerUnaryCall<UpdateChallengeInput, ChallengeList>,
    callback: sendUnaryData<ChallengeList>
  ): Promise<void> => {
    try {
      const { updateInput, filterCriteria } = call.request;
      if (!updateInput) return callback(null, { items: [] });
      const result = await Domain.update(filterCriteria, updateInput);
      callback(null, result);
    } catch (error: any) {
      callback(error, null);
    }
  };

  updateForAcl: handleUnaryCall<UpdateChallengeInputForACL, Empty> = async (
    call: ServerUnaryCall<UpdateChallengeInputForACL, Empty>,
    callback: sendUnaryData<Empty>
  ): Promise<void> => {
    try {
      const { updateInputForAcl, filterCriteria } = call.request;
      if (!updateInputForAcl) return callback(null);
      await Domain.updateForAcl(filterCriteria, updateInputForAcl);
      callback(null);
    } catch (error) {
      console.error(`Error in updateForAcl: ${JSON.stringify(error)}`);
      callback(null);
    }
  };

  delete: handleUnaryCall<LookupCriteria, ChallengeList> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeList>,
    callback: sendUnaryData<ChallengeList>
  ): Promise<void> => {};
}

export { ChallengeServerImpl as ChallengeServer, ChallengeService };
