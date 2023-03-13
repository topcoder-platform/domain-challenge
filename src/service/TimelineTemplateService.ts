import {
  handleUnaryCall,
  sendUnaryData,
  ServerUnaryCall,
  StatusObject,
} from "@grpc/grpc-js";
import {
  LookupCriteria,
  ScanRequest,
  ScanResult,
} from "../models/common/common";

import {
  CreateTimelineTemplateInput,
  TimelineTemplate,
  TimelineTemplateList,
  UpdateTimelineTemplateInput,
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

    Domain.scan(criteria, inputNextToken)
      .then(({ items, nextToken }) => {
        callback(null, { items, nextToken });
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  lookup: handleUnaryCall<LookupCriteria, TimelineTemplate> = async (
    call: ServerUnaryCall<LookupCriteria, TimelineTemplate>,
    callback: sendUnaryData<TimelineTemplate>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    Domain.lookup(lookupCriteria)
      .then((timelineTemplate) => {
        callback(null, timelineTemplate);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  create: handleUnaryCall<CreateTimelineTemplateInput, TimelineTemplate> =
    async (
      call: ServerUnaryCall<CreateTimelineTemplateInput, TimelineTemplate>,
      callback: sendUnaryData<TimelineTemplate>
    ): Promise<void> => {
      const { request: createRequestInput } = call;

      Domain.create(createRequestInput)
        .then((timelineTemplate) => {
          callback(null, timelineTemplate);
        })
        .catch((error: StatusObject) => {
          callback(error, null);
        });
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

    Domain.delete(lookupCriteria)
      .then((timelineTemplateList) => {
        callback(null, TimelineTemplateList.fromJSON(timelineTemplateList));
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };
}

export {
  TimelineTemplateServerImpl as TimelineTemplateServer,
  TimelineTemplateService,
};
