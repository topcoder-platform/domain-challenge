import { CreateAttachmentInput } from "../models/domain-layer/challenge/attachment";
import { Value } from "../dal/models/nosql/parti_ql";

import { Attachment } from "../models/domain-layer/challenge/attachment";

import CoreOperations from "../common/CoreOperations";
import IdGenerator from "../helpers/IdGenerator";

import { AttachmentSchema } from "../schema/AttachmentSchema";

class AttachmentDomain extends CoreOperations<
  Attachment,
  CreateAttachmentInput
> {
  protected toEntity(item: { [key: string]: Value }): Attachment {
    return Attachment.fromJSON(item);
  }

  public create(createInput: CreateAttachmentInput): Promise<Attachment> {
    return super.create({
      id: IdGenerator.generateUUID(),
      ...createInput,
    });
  }
}

export default new AttachmentDomain(
  AttachmentSchema.tableName,
  AttachmentSchema.attributes,
  AttachmentSchema.indices
);
