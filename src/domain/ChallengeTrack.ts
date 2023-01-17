import { CreateChallengeTrackInput } from "./../models/domain-layer/challenge/challenge_track";
import { Value } from "../dal/models/nosql/parti_ql";

import { ChallengeTrack } from "../models/domain-layer/challenge/challenge_track";

import CoreOperations from "../common/CoreOperations";
import IdGenerator from "../helpers/IdGenerator";

import { ChallengeTrackSchema } from "../schema/ChallengeTrackSchema";

class ChallengeTrackDomain extends CoreOperations<
  ChallengeTrack,
  CreateChallengeTrackInput
> {
  protected toEntity(item: { [key: string]: Value }): ChallengeTrack {
    return ChallengeTrack.fromJSON(item);
  }

  public create(
    createInput: CreateChallengeTrackInput
  ): Promise<ChallengeTrack> {
    return super.create({
      id: IdGenerator.generateUUID(),
      ...createInput,
    });
  }
}

export default new ChallengeTrackDomain(
  ChallengeTrackSchema.tableName,
  ChallengeTrackSchema.attributes,
  ChallengeTrackSchema.indices
);
