/* eslint-disable */
import type { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest, ScanResult } from "../../../common/common";
import {
  ChallengeTimelineTemplate,
  ChallengeTimelineTemplateList,
  CreateChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
} from "../challenge_timeline_template";

export type ChallengeTimelineTemplateService = typeof ChallengeTimelineTemplateService;
export const ChallengeTimelineTemplateService = {
  scan: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
  create: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChallengeTimelineTemplateInput) =>
      Buffer.from(CreateChallengeTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateChallengeTimelineTemplateInput.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateChallengeTimelineTemplateInput) =>
      Buffer.from(UpdateChallengeTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateChallengeTimelineTemplateInput.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplateList) =>
      Buffer.from(ChallengeTimelineTemplateList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplateList.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplateList) =>
      Buffer.from(ChallengeTimelineTemplateList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplateList.decode(value),
  },
} as const;

export interface ChallengeTimelineTemplateServer extends UntypedServiceImplementation {
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplate>;
  create: handleUnaryCall<CreateChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
  update: handleUnaryCall<UpdateChallengeTimelineTemplateInput, ChallengeTimelineTemplateList>;
  delete: handleUnaryCall<LookupCriteria, ChallengeTimelineTemplateList>;
}
