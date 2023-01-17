import { handleUnaryCall, sendUnaryData, ServerUnaryCall, StatusObject } from "@grpc/grpc-js";
import {
  ScanRequest,
  ScanResult,
  LookupCriteria,
} from "../models/common/common";

import {
  Attachment,
  CreateAttachmentInput,
  UpdateAttachmentInput,
  AttachmentList,
} from "../models/domain-layer/challenge/attachment";

import {
  AttachmentServer,
  AttachmentService,
} from "../models/domain-layer/challenge/services/attachment";

import Domain from "../domain/Attachment";

class AttachmentServerImpl implements AttachmentServer {
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

  lookup: handleUnaryCall<LookupCriteria, Attachment> = async (
    call: ServerUnaryCall<LookupCriteria, Attachment>,
    callback: sendUnaryData<Attachment>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const Attachment = await Domain.lookup(lookupCriteria);

    callback(null, Attachment);
  };

  create: handleUnaryCall<CreateAttachmentInput, Attachment> = async (
    call: ServerUnaryCall<CreateAttachmentInput, Attachment>,
    callback: sendUnaryData<Attachment>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    const Attachment = await Domain.create(createRequestInput);

    callback(null, Attachment);
  };

  update: handleUnaryCall<UpdateAttachmentInput, AttachmentList> =
    async (
      call: ServerUnaryCall<UpdateAttachmentInput, AttachmentList>,
      callback: sendUnaryData<AttachmentList>
    ): Promise<void> => {
      const {
        request: { updateInput, filterCriteria },
      } = call;
  
      Domain.update(filterCriteria, updateInput)
        .then((challengeTypeList) => {
          callback(
            null,
            AttachmentList.fromJSON(challengeTypeList)
          );
        })
        .catch((error: StatusObject) => {
          callback(error, null);
        });
    };

  delete: handleUnaryCall<LookupCriteria, AttachmentList> = async (
    call: ServerUnaryCall<LookupCriteria, AttachmentList>,
    callback: sendUnaryData<AttachmentList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const challengeTypes = await Domain.delete(lookupCriteria);

    callback(null, AttachmentList.fromJSON(challengeTypes));
  };
}

export {
  AttachmentServerImpl as AttachmentServer,
  AttachmentService,
};
