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
  TimelineTemplate,
  CreateTimelineTemplateInput,
  UpdateTimelineTemplateInput,
  TimelineTemplateList,
} from "../models/domain-layer/challenge/timeline_template";

import {
  TimelineTemplateServer,
  TimelineTemplateService,
} from "../models/domain-layer/challenge/services/timeline_template";

import Domain from "../domain/TimelineTemplate";

class TimelineTemplateServerImpl implements TimelineTemplateServer {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

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

    callback(null, {
      items,
      nextToken,
    });
  };

  lookup: handleUnaryCall<LookupCriteria, TimelineTemplate> = async (
    call: ServerUnaryCall<LookupCriteria, TimelineTemplate>,
    callback: sendUnaryData<TimelineTemplate>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const TimelineTemplate = await Domain.lookup(lookupCriteria);

    callback(null, TimelineTemplate);
  };

  create: handleUnaryCall<CreateTimelineTemplateInput, TimelineTemplate> =
    async (
      call: ServerUnaryCall<CreateTimelineTemplateInput, TimelineTemplate>,
      callback: sendUnaryData<TimelineTemplate>
    ): Promise<void> => {
      const { request: createRequestInput } = call;

      const TimelineTemplate = await Domain.create(createRequestInput);

      callback(null, TimelineTemplate);
    };

  update: handleUnaryCall<UpdateTimelineTemplateInput, TimelineTemplateList> =
    async (
      call: ServerUnaryCall<UpdateTimelineTemplateInput, TimelineTemplateList>,
      callback: sendUnaryData<TimelineTemplateList>
    ): Promise<void> => {
      const {
        request: { updateInput, filterCriteria },
      } = call;

      Domain.update(filterCriteria, updateInput)
        .then((timelineTemplateList) => {
          callback(null, TimelineTemplateList.fromJSON(timelineTemplateList));
        })
        .catch((error: StatusObject) => {
          callback(error, null);
        });
    };

  delete: handleUnaryCall<LookupCriteria, TimelineTemplateList> = async (
    call: ServerUnaryCall<LookupCriteria, TimelineTemplateList>,
    callback: sendUnaryData<TimelineTemplateList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const challengeTypes = await Domain.delete(lookupCriteria);

    callback(null, TimelineTemplateList.fromJSON(challengeTypes));
  };
}

export {
  TimelineTemplateServerImpl as TimelineTemplateServer,
  TimelineTemplateService,
};
