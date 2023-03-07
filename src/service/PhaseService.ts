import {
  handleUnaryCall,
  sendUnaryData,
  ServerUnaryCall,
  StatusObject,
} from "@grpc/grpc-js";
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
      request: { criteria, nextToken: inputNextToken },
    } = call;

    Domain.scan(criteria, inputNextToken)
      .then(({ items, nextToken }) => {
        callback(null, { items, nextToken });
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  lookup: handleUnaryCall<LookupCriteria, Phase> = async (
    call: ServerUnaryCall<LookupCriteria, Phase>,
    callback: sendUnaryData<Phase>
  ): Promise<void> => {
    const { request: lookupCriteria } = call;

    Domain.lookup(lookupCriteria)
      .then((phase) => {
        callback(null, phase);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  create: handleUnaryCall<CreatePhaseInput, Phase> = async (
    call: ServerUnaryCall<CreatePhaseInput, Phase>,
    callback: sendUnaryData<Phase>
  ): Promise<void> => {
    const { request: createRequestInput } = call;

    Domain.create(createRequestInput)
      .then((phase) => {
        callback(null, phase);
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };

  update: handleUnaryCall<UpdatePhaseInput, PhaseList> = async (
    call: ServerUnaryCall<UpdatePhaseInput, PhaseList>,
    callback: sendUnaryData<PhaseList>
  ): Promise<void> => {
    const {
      request: { updateInput, filterCriteria },
    } = call;

    Domain.update(filterCriteria, updateInput)
      .then((phaseList) => {
        callback(null, PhaseList.fromJSON(phaseList));
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

    Domain.delete(lookupCriteria)
      .then((phaseList) => {
        callback(null, PhaseList.fromJSON(phaseList));
      })
      .catch((error: StatusObject) => {
        callback(error, null);
      });
  };
}

export { PhaseServerImpl as PhaseServer, PhaseService };
