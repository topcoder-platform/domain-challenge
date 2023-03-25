import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import ErrorHelper, { GrpcError } from "../util/ErrorHelper";
import { Interceptor } from "./InterceptorWrapper";
class LoggingInterceptor implements Interceptor {
  public onMessage(call: ServerUnaryCall<any, any>, serviceName: string, method: string) {
    console.info(
      "OnMessage:",
      serviceName,
      "#",
      method,
      JSON.stringify(call.request),
      JSON.stringify(call.metadata)
    );
  }
  public onSuccess(response: any, call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) {
    console.info("Request succeeded:", JSON.stringify(response));
    callback(null, response);
  }
  public onError(error: GrpcError, call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) {
    console.error("Request failed:", error);
    callback(ErrorHelper.wrapError(error));
  }
}

export default new LoggingInterceptor();
