import { handleUnaryCall, sendUnaryData, ServerUnaryCall, StatusObject } from "@grpc/grpc-js";
import {
  ScanRequest,
  ScanResult,
  LookupCriteria,
} from "../models/common/common";

import {
  Phase,
  CreatePhaseInput,
  UpdatePhaseInput,
  PhaseList,
} from "../models/domain-layer/challenge/phase";

import {
  PhaseServer,
  PhaseService,
} from "../models/domain-layer/challenge/services/phase";

import Domain from "../domain/Phase";

class PhaseServerImpl implements PhaseServer {
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

  lookup: handleUnaryCall<LookupCriteria, Phase> = async (
    call: ServerUnaryCall<LookupCriteria, Phase>,
    callback: sendUnaryData<Phase>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const Phase = await Domain.lookup(lookupCriteria);

    callback(null, Phase);
  };

  create: handleUnaryCall<CreatePhaseInput, Phase> = async (
    call: ServerUnaryCall<CreatePhaseInput, Phase>,
    callback: sendUnaryData<Phase>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    const Phase = await Domain.create(createRequestInput);

    callback(null, Phase);
  };

  update: handleUnaryCall<UpdatePhaseInput, PhaseList> =
    async (
      call: ServerUnaryCall<UpdatePhaseInput, PhaseList>,
      callback: sendUnaryData<PhaseList>
    ): Promise<void> => {
      const {
        request: { updateInput, filterCriteria },
      } = call;
  
      Domain.update(filterCriteria, updateInput)
        .then((phaseList) => {
          callback(
            null,
            PhaseList.fromJSON(phaseList)
          );
        })
        .catch((error: StatusObject) => {
          callback(error, null);
        });
    };

  delete: handleUnaryCall<LookupCriteria, PhaseList> = async (
    call: ServerUnaryCall<LookupCriteria, PhaseList>,
    callback: sendUnaryData<PhaseList>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    const challengeTypes = await Domain.delete(lookupCriteria);

    callback(null, PhaseList.fromJSON(challengeTypes));
  };
}

export {
  PhaseServerImpl as PhaseServer,
  PhaseService,
};
