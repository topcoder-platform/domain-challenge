import { CreateChallengeTypeInput } from "../models/domain-layer/challenge/challenge_type";
import { Value } from "../dal/models/nosql/PartiQL";

import { ChallengeType } from "../models/domain-layer/challenge/challenge_type";

import CoreOperations from "../common/CoreOperations";
import IdGenerator from "../helpers/IdGenerator";

import { ChallengeTypeSchema } from "../schema/ChallengeType";

class ChallengeTypeDomain extends CoreOperations<ChallengeType> {
  protected toEntity(item: { [key: string]: Value }): ChallengeType {
    return ChallengeType.fromJSON(item);
  }

  public create(
    createInput: CreateChallengeTypeInput
  ): Promise<ChallengeType> {
    return super.create({
      id: IdGenerator.generateUUID(),
      ...createInput,
    });
  }
}

export default new ChallengeTypeDomain(
  ChallengeTypeSchema.tableName,
  ChallengeTypeSchema.attributes,
  ChallengeTypeSchema.indices
);
