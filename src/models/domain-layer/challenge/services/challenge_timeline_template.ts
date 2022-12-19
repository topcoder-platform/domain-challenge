/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import {
  ChallengeTimelineTemplate,
  CreateChallengeTimelineTemplateInput,
  RemoveChallengeTimelineTemplateInput,
  UpdateChallengeTimelineTemplateInput,
} from "../challenge_timeline_template";

export type ChallengeTimelineTemplateService = typeof ChallengeTimelineTemplateService;
export const ChallengeTimelineTemplateService = {
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
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.challenge_timeline_template.ChallengeTimelineTemplate/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveChallengeTimelineTemplateInput) =>
      Buffer.from(RemoveChallengeTimelineTemplateInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveChallengeTimelineTemplateInput.decode(value),
    responseSerialize: (value: ChallengeTimelineTemplate) =>
      Buffer.from(ChallengeTimelineTemplate.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ChallengeTimelineTemplate.decode(value),
  },
} as const;

export interface ChallengeTimelineTemplateServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
  update: handleUnaryCall<UpdateChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
  remove: handleUnaryCall<RemoveChallengeTimelineTemplateInput, ChallengeTimelineTemplate>;
}
