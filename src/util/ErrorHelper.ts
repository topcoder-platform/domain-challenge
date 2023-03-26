import { status, StatusBuilder, StatusObject } from "@grpc/grpc-js";

class ErrorHelper {
  // TODO: Move to @topcoder-framework
  public static wrapError(error: GrpcError): Partial<StatusObject> {
    return new StatusBuilder()
      .withCode(error.code || status.INTERNAL)
      .withDetails(error.details || error.message || "Internal Server Error")
      .build();
  }
}

export type GrpcError = Partial<Error> & Partial<StatusObject>;

export default ErrorHelper;
