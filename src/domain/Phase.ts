import { CreatePhaseInput } from "../models/domain-layer/challenge/phase";
import { Value } from "../dal/models/nosql/parti_ql";

import { Phase } from "../models/domain-layer/challenge/phase";

import CoreOperations from "../common/CoreOperations";
import IdGenerator from "../helpers/IdGenerator";

import { PhaseSchema } from "../schema/PhaseSchema";

class PhaseDomain extends CoreOperations<Phase, CreatePhaseInput> {
  protected toEntity(item: { [key: string]: Value }): Phase {
    return Phase.fromJSON(item);
  }

  public create(createInput: CreatePhaseInput): Promise<Phase> {
    return super.create({
      id: IdGenerator.generateUUID(),
      ...createInput,
    });
  }
}

export default new PhaseDomain(PhaseSchema);
