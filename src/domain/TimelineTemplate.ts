import { CreateTimelineTemplateInput } from "../models/domain-layer/challenge/timeline_template";
import { Value } from "../dal/models/nosql/parti_ql";

import { TimelineTemplate } from "../models/domain-layer/challenge/timeline_template";

import CoreOperations from "../common/CoreOperations";
import IdGenerator from "../helpers/IdGenerator";

import { TimelineTemplateSchema } from "../schema/TimelineTemplateSchema";

class TimelineTemplateDomain extends CoreOperations<TimelineTemplate> {
  protected toEntity(item: { [key: string]: Value }): TimelineTemplate {
    return TimelineTemplate.fromJSON(item);
  }

  public create(
    createInput: CreateTimelineTemplateInput
  ): Promise<TimelineTemplate> {
    return super.create({
      id: IdGenerator.generateUUID(),
      ...createInput,
    });
  }
}

export default new TimelineTemplateDomain(
  TimelineTemplateSchema.tableName,
  TimelineTemplateSchema.attributes,
  TimelineTemplateSchema.indices
);
