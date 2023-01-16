import { CreateChallengeTimelineTemplateInput } from "./../models/domain-layer/challenge/challenge_timeline_template";
import { Value } from "../dal/models/nosql/parti_ql";

import { ChallengeTimelineTemplateSchema } from "../schema/ChallengeTimelineTemplate";
import { ChallengeTimelineTemplate } from "../models/domain-layer/challenge/challenge_timeline_template";

import CoreOperations from "../common/CoreOperations";
import IdGenerator from "../helpers/IdGenerator";

class ChallengeTimelineTemplateDomain extends CoreOperations<
  ChallengeTimelineTemplate,
  CreateChallengeTimelineTemplateInput
> {
  protected toEntity(item: {
    [key: string]: Value;
  }): ChallengeTimelineTemplate {
    return ChallengeTimelineTemplate.fromJSON(item);
  }

  public create(
    createInput: CreateChallengeTimelineTemplateInput
  ): Promise<ChallengeTimelineTemplate> {
    return super.create({
      id: IdGenerator.generateUUID(),
      ...createInput,
    });
  }
}

export default new ChallengeTimelineTemplateDomain(
  ChallengeTimelineTemplateSchema.tableName,
  ChallengeTimelineTemplateSchema.attributes,
  ChallengeTimelineTemplateSchema.indices
);
