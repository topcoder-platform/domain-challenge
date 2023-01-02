import { StatusObject } from "@grpc/grpc-js";

export class GrpcError extends Error {
  constructor(public error: Partial<StatusObject>) {
    super(error.details);
  }
}
