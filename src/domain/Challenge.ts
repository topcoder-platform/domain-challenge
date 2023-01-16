import { Value } from "../dal/models/nosql/parti_ql";
import { ChallengeSchema } from "../schema/Challenge";
import {
  Challenge,
  CreateChallengeInput,
} from "../models/domain-layer/challenge/challenge";

import CoreOperations from "../common/CoreOperations";
import xss from "xss";
import IdGenerator from "../helpers/IdGenerator";

class ChallengeDomain extends CoreOperations<Challenge, CreateChallengeInput> {
  protected toEntity(item: { [key: string]: Value }): Challenge {
    return Challenge.fromJSON(item);
  }

  public create(input: CreateChallengeInput): Promise<Challenge> {
    input.name = xss(input.name);
    input.description = xss(input.description);

    if (Array.isArray(input.discussions)) {
      for (const discussion of input.discussions) {
        (discussion.id = IdGenerator.generateUUID()),
          (discussion.name = xss(discussion.name.substring(0, 100)));
      }
    }

    let placementPrizes = 0;
    if (input.prizeSets) {
      for (const { type, prizes } of input.prizeSets) {
        // TODO: use enum/constants
        if (type === "placement") {
          for (const { value } of prizes) {
            placementPrizes += value;
          }
        }
      }
    }

    const now = new Date().getTime();

    const challenge = {
      id: IdGenerator.generateUUID(),
      created: now,
      createdBy: "tcwebservice", // TODO: extract from JWT
      updated: now,
      updatedBy: "tcwebservice", // TODO: extract from JWT
      winners: [],
      overview: {
        totalPrizes: placementPrizes,
      },
      ...input,
    };

    console.log("CHALLENGE", challenge);

    return super.create(challenge);
  }
}

export default new ChallengeDomain(
  ChallengeSchema.tableName,
  ChallengeSchema.attributes,
  ChallengeSchema.indices
);
