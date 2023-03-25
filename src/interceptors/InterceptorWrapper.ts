import {
  handleUnaryCall,
  sendUnaryData,
  ServerUnaryCall,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { GrpcError } from "../util/ErrorHelper";
import { AttachmentServer, AttachmentService } from "../service/AttachmentService";
import { ChallengeServer, ChallengeService } from "../service/ChallengeService";
import {
  ChallengeTimelineTemplateServer,
  ChallengeTimelineTemplateService,
} from "../service/ChallengeTimelineTemplateService";
import { ChallengeTrackServer, ChallengeTrackService } from "../service/ChallengeTrackService";
import { ChallengeTypeServer, ChallengeTypeService } from "../service/ChallengeTypeService";
import { PhaseServer, PhaseService } from "../service/PhaseService";
import {
  TimelineTemplateServer,
  TimelineTemplateService,
} from "../service/TimelineTemplateService";
import loggingInterceptor from "./LoggingInterceptor";

class InterceptorWrapper {
  private wrapCallWithInterceptor(
    interceptor: Interceptor,
    callHandler: handleUnaryCall<any, any>,
    serviceName: string,
    method: string
  ) {
    return function (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) {
      const newCallback = (err: GrpcError | any, res: any) => {
        if (err) {
          return interceptor.onError(err, call, callback);
        }
        return interceptor.onSuccess(res, call, callback);
      };
      try {
        interceptor.onMessage(call, serviceName, method);
        callHandler(call, newCallback);
      } catch (err: any) {
        interceptor.onError(err, call, callback);
      }
    };
  }

  private implementWithInterceptors(
    serviceDefinition: ServiceDefinition,
    implementation: ServerImplementation,
    serviceName: string,
    interceptors: Interceptor[]
  ) {
    const wrappedImplementation: { [key: string]: handleUnaryCall<any, any> } = {};

    for (const method in serviceDefinition) {
      let callHandler = implementation[method] as handleUnaryCall<any, any>;
      interceptors.forEach((interceptor: Interceptor) => {
        callHandler = this.wrapCallWithInterceptor(interceptor, callHandler, serviceName, method);
      });
      wrappedImplementation[method] = callHandler;
    }

    return wrappedImplementation;
  }

  public serviceWrapper(
    serviceDefinition: ServiceDefinition,
    implementation: ServerImplementation,
    serviceName: string
  ): UntypedServiceImplementation {
    return this.implementWithInterceptors(serviceDefinition, implementation, serviceName, [
      loggingInterceptor,
    ]);
  }
}

type ServiceDefinition =
  | AttachmentService
  | ChallengeService
  | ChallengeTimelineTemplateService
  | ChallengeTrackService
  | ChallengeTypeService
  | PhaseService
  | TimelineTemplateService;
type ServerImplementation =
  | AttachmentServer
  | ChallengeServer
  | ChallengeTimelineTemplateServer
  | ChallengeTrackServer
  | ChallengeTypeServer
  | PhaseServer
  | TimelineTemplateServer;

export type Interceptor = {
  onMessage: (call: ServerUnaryCall<any, any>, serviceName: string, method: string) => void;
  onSuccess: (response: any, call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => void;
  onError: (
    error: GrpcError,
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) => void;
};

export default new InterceptorWrapper();
