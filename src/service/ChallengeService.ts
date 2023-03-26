import { handleUnaryCall, sendUnaryData, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";

import { LookupCriteria, ScanRequest, ScanResult } from "../models/common/common";

import {
  ChallengeServer,
  ChallengeService,
} from "../models/domain-layer/challenge/services/challenge";

import {
  Challenge,
  ChallengeList,
  CreateChallengeInput,
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
    const { request: createChallengeInput, metadata } = call;
    Domain.create(createChallengeInput, metadata)
      .then((challenge) => callback(null, challenge))
      .catch((error) => callback(error, null));
  };

  lookup: handleUnaryCall<LookupCriteria, Challenge> = async (
    call: ServerUnaryCall<LookupCriteria, Challenge>,
    callback: sendUnaryData<Challenge>
  ): Promise<void> => {
    Domain.lookup(call.request)
      .then((challenge) => callback(null, challenge))
      .catch((error) => callback(error, null));
  };

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { criteria, nextToken: inputNextToken },
    } = call;

    Domain.scan(criteria, inputNextToken)
      .then(({ items, nextToken }) => callback(null, { items, nextToken }))
      .catch((error) => callback(error, null));
  };

  update: handleUnaryCall<UpdateChallengeInput, ChallengeList> = async (
    call: ServerUnaryCall<UpdateChallengeInput, ChallengeList>,
    callback: sendUnaryData<ChallengeList>
  ): Promise<void> => {
    const {
      request: { filterCriteria, updateInput },
    } = call;

    Domain.update(filterCriteria, updateInput!, call.metadata)
      .then((challengeList) => callback(null, challengeList))
      .catch((error) => {
        console.error(error);
        callback(error, null);
      });
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
  ): Promise<void> => {
    const { request: lookupCriteria } = call;
    Domain.delete(lookupCriteria)
      .then((challengeList) => callback(null, challengeList))
      .catch((error) => callback(error, null));
  };
}

export { ChallengeServerImpl as ChallengeServer, ChallengeService };
