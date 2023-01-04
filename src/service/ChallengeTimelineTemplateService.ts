import {
  handleUnaryCall,
  sendUnaryData,
  StatusObject,
  ServerUnaryCall,
} from "@grpc/grpc-js";
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
  UpdateChallengeTimelineTemplateInput_UpdateInput,
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

    Domain.lookup(lookupCriteria)
      .then((challengeTimelineTemplate) => {
        callback(null, challengeTimelineTemplate);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
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
    Domain.create(createRequestInput)
      .then((challengeTimelineTemplate) => {
        callback(null, challengeTimelineTemplate);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
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
    const {
      request: { updateInput, filterCriteria },
    } = call;

    Domain.update(filterCriteria, updateInput)
      .then((challengeTimelineTemplateList) => {
        callback(
          null,
          ChallengeTimelineTemplateList.fromJSON(challengeTimelineTemplateList)
        );
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  delete: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplateList> =
    async (
      call: ServerUnaryCall<LookupCriteria, ChallengeTimelineTemplateList>,
      callback: sendUnaryData<ChallengeTimelineTemplateList>
    ): Promise<void> => {
      const { request: lookupCriteria } = call;

      Domain.delete(lookupCriteria)
        .then((challengeTimelineTemplateList) => {
          callback(
            null,
            ChallengeTimelineTemplateList.fromJSON(
              challengeTimelineTemplateList
            )
          );
        })
        .catch((error) => {
          callback(error, null);
        });
    };
}

export {
  ChallengeTimelineTemplatServerImpl as ChallengeTimelineTemplateServer,
  ChallengeTimelineTemplateService,
};
