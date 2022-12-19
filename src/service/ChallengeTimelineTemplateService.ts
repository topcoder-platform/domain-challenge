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

class ChallengeTimelineTemplatServerImpl
  implements ChallengeTimelineTemplateServer
{
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

  scan: handleUnaryCall<ScanRequest, ScanResult> = async (
    call: ServerUnaryCall<ScanRequest, ScanResult>,
    callback: sendUnaryData<ScanResult>
  ): Promise<ChallengeTimelineTemplate> => {
    return Promise.resolve({} as unknown as ChallengeTimelineTemplate);
  };

  lookup: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplate> = async (
    call: ServerUnaryCall<LookupCriteria, ChallengeTimelineTemplate>,
    callback: sendUnaryData<ChallengeTimelineTemplate>
  ): Promise<ChallengeTimelineTemplate> => {
    return Promise.resolve({} as unknown as ChallengeTimelineTemplate);
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
  ): Promise<ChallengeTimelineTemplate> => {
    return Promise.resolve({} as unknown as ChallengeTimelineTemplate);
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
  ): Promise<ChallengeTimelineTemplateList> => {
    return Promise.resolve({} as unknown as ChallengeTimelineTemplateList);
  };

  delete: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplateList> =
    async (
      call: ServerUnaryCall<LookupCriteria, ChallengeTimelineTemplateList>,
      callback: sendUnaryData<ChallengeTimelineTemplateList>
    ): Promise<ChallengeTimelineTemplateList> => {
      return Promise.resolve({} as unknown as ChallengeTimelineTemplateList);
    };
}

export {
  ChallengeTimelineTemplatServerImpl as ChallengeTimelineTemplateServer,
  ChallengeTimelineTemplateService,
};
