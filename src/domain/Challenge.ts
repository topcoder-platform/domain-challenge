import { Value } from "../dal/models/nosql/PartiQL";
import { ChallengeSchema } from "../schema/Challenge";
import { Challenge } from "../models/domain-layer/challenge/challenge";

import CoreOperations from "../common/CoreOperations";

class ChallengeDomain extends CoreOperations<Challenge> {
  protected toEntity(item: { [key: string]: Value }): Challenge {
    return Challenge.fromJSON(item);
  }
}

export default new ChallengeDomain(
  ChallengeSchema.tableName,
  ChallengeSchema.attributes,
  ChallengeSchema.indices
);
