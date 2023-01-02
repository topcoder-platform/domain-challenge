/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria } from "../../../common/common";
import { Attachment, AttachmentList, CreateAttachmentInput, UpdateAttachmentInput } from "../attachment";

export type AttachmentService = typeof AttachmentService;
export const AttachmentService = {
  create: {
    path: "/topcoder.domain.service.attachment.Attachment/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAttachmentInput) => Buffer.from(CreateAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAttachmentInput.decode(value),
    responseSerialize: (value: Attachment) => Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.attachment.Attachment/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateAttachmentInput) => Buffer.from(UpdateAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateAttachmentInput.decode(value),
    responseSerialize: (value: Attachment) => Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
  delete: {
    path: "/topcoder.domain.service.attachment.Attachment/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: AttachmentList) => Buffer.from(AttachmentList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AttachmentList.decode(value),
  },
} as const;

export interface AttachmentServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateAttachmentInput, Attachment>;
  update: handleUnaryCall<UpdateAttachmentInput, Attachment>;
  delete: handleUnaryCall<LookupCriteria, AttachmentList>;
}
