import {
  UntypedHandleCall,
  handleUnaryCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";

import { ScanRequest, ScanResult } from "../models/common/common";

import {
  ChallengeServer,
  ChallengeService,
} from "../models/domain-layer/challenge/services/challenge";

import ChallengeDomain from "../domain/Challenge";
import {
  CreateChallengeInput,
  Challenge,
} from "../models/domain-layer/challenge/Challenge";

class ChallengeServerImpl implements ChallengeServer {
  [name: string]: UntypedHandleCall;

  create: handleUnaryCall<CreateChallengeInput, Challenge> = async (
    call: ServerUnaryCall<CreateChallengeInput, Challenge>,
    callback: sendUnaryData<Challenge>
  ): Promise<Challenge> => {
    const { request: createChallengeInput } = call;

    // if (challenge.discussions && challenge.discussions.length > 0) {
    //   for (let i = 0; i < challenge.discussions.length; i += 1) {
    //     challenge.discussions[i].id = uuid()
    //     challenge.discussions[i].name = challenge.discussions[i].name.substring(0, config.FORUM_TITLE_LENGTH_LIMIT)
    //   }
    // }

    return Promise.resolve({} as unknown as Challenge);
  };

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<void> => {
    const {
      request: { scanCriteria, nextToken: inputNextToken },
    } = call;

    const { items, nextToken } = await ChallengeDomain.scan(
      scanCriteria,
      inputNextToken
    );

    callback(null, { items, nextToken });
  };
}

export { ChallengeServerImpl as ChallengeServer, ChallengeService };
