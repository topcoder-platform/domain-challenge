/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreatePhaseInput, Phase, RemovePhaseInput, UpdatePhaseInput } from "../phase";

export type PhaseService = typeof PhaseService;
export const PhaseService = {
  create: {
    path: "/topcoder.domain.service.phase.Phase/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePhaseInput) => Buffer.from(CreatePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePhaseInput.decode(value),
    responseSerialize: (value: Phase) => Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
  update: {
    path: "/topcoder.domain.service.phase.Phase/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdatePhaseInput) => Buffer.from(UpdatePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdatePhaseInput.decode(value),
    responseSerialize: (value: Phase) => Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
  remove: {
    path: "/topcoder.domain.service.phase.Phase/Remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemovePhaseInput) => Buffer.from(RemovePhaseInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemovePhaseInput.decode(value),
    responseSerialize: (value: Phase) => Buffer.from(Phase.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Phase.decode(value),
  },
} as const;

export interface PhaseServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreatePhaseInput, Phase>;
  update: handleUnaryCall<UpdatePhaseInput, Phase>;
  remove: handleUnaryCall<RemovePhaseInput, Phase>;
}
