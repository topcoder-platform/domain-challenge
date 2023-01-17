/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { LookupCriteria, ScanRequest, ScanResult } from "../../../common/common";
import { Attachment, AttachmentList, CreateAttachmentInput, UpdateAttachmentInput } from "../attachment";

export type AttachmentService = typeof AttachmentService;
export const AttachmentService = {
  scan: {
    path: "/topcoder.domain.service.attachment.Attachment/Scan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ScanRequest) => Buffer.from(ScanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ScanRequest.decode(value),
    responseSerialize: (value: ScanResult) => Buffer.from(ScanResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ScanResult.decode(value),
  },
  lookup: {
    path: "/topcoder.domain.service.attachment.Attachment/Lookup",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LookupCriteria) => Buffer.from(LookupCriteria.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LookupCriteria.decode(value),
    responseSerialize: (value: Attachment) => Buffer.from(Attachment.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Attachment.decode(value),
  },
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
    responseSerialize: (value: AttachmentList) => Buffer.from(AttachmentList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AttachmentList.decode(value),
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
  scan: handleUnaryCall<ScanRequest, ScanResult>;
  lookup: handleUnaryCall<LookupCriteria, Attachment>;
  create: handleUnaryCall<CreateAttachmentInput, Attachment>;
  update: handleUnaryCall<UpdateAttachmentInput, AttachmentList>;
  delete: handleUnaryCall<LookupCriteria, AttachmentList>;
}
