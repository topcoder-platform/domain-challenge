/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { Attachment, CreateAttachmentInput, RemoveAttachmentInput, UpdateAttachmentInput } from "../attachment";

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
  remove: {
    path: "/topcoder.domain.service.attachment.Attachment/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveAttachmentInput) => Buffer.from(RemoveAttachmentInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveAttachmentInput.decode(value),
    responseSerialize: (value: Attachment) => Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
} as const;

export interface AttachmentServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateAttachmentInput, Attachment>;
  update: handleUnaryCall<UpdateAttachmentInput, Attachment>;
  remove: handleUnaryCall<RemoveAttachmentInput, Attachment>;
}
