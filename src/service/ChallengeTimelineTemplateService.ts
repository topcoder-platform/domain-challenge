import { handleUnaryCall, sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import {
  ScanRequest,
  ScanResult,
  LookupCriteria,
} from "../models/common/common";

import {
  ChallengeTimelineTemplate,
  CreateChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
  ChallengeTimelineTemplateList,
} from "../models/domain-layer/challenge/challenge_timeline_template";

import {
  ChallengeTimelineTemplateServer,
  ChallengeTimelineTemplateService,
} from "../models/domain-layer/challenge/services/challenge_timeline_template";

import Domain from "../domain/ChallengeTimelineTemplate";

class ChallengeTimelineTemplatServerImpl
  implements ChallengeTimelineTemplateServer
{
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

  lookup: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplate> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeTimelineTemplate>,
    callback: sendUnaryData<ChallengeTimelineTemplate>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const challengeTimelineTemplate = await Domain.lookup(lookupCriteria);

    callback(null, challengeTimelineTemplate);
  };

  create: handleUnaryCall<
    CreateChallengeTimelineTemplateInput,
    ChallengeTimelineTemplate
  > = async (
    call: ServerUnaryCall<
      CreateChallengeTimelineTemplateInput,
      ChallengeTimelineTemplate
    >,
    callback: sendUnaryData<ChallengeTimelineTemplate>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    const challengeTimelineTemplate = await Domain.create(createRequestInput);

    callback(null, challengeTimelineTemplate);
  };

  update: handleUnaryCall<
    UpdateChallengeTimelineTemplateInput,
    ChallengeTimelineTemplateList
  > = async (
    call: ServerUnaryCall<
      UpdateChallengeTimelineTemplateInput,
      ChallengeTimelineTemplateList
    >,
    callback: sendUnaryData<ChallengeTimelineTemplateList>
  ): Promise<void> => {
    // TODO: Handle update
    callback(new Error("Not implemented"), null);
  };

  delete: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplateList> =
    async (
      call: ServerUnaryCall<LookupCriteria, ChallengeTimelineTemplateList>,
      callback: sendUnaryData<ChallengeTimelineTemplateList>
    ): Promise<void> => {
      const { request: lookupCriteria } = call;

      const challengeTimelineTemplateList = await Domain.delete(lookupCriteria);

      callback(
        null,
        ChallengeTimelineTemplateList.fromJSON(challengeTimelineTemplateList)
      );
    };
}

export {
  ChallengeTimelineTemplatServerImpl as ChallengeTimelineTemplateServer,
  ChallengeTimelineTemplateService,
};
