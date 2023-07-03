import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import { fromUtf8 } from "@aws-sdk/util-utf8-node";
import { Challenge_Phase } from "../models/domain-layer/challenge/challenge";
import {
  ApiRequestNextWorkflowConfiguration,
  ApiRequestWorkflowPayload,
  ApiWorkflowBuilder,
} from "../helpers/ApiRequestWorkflowBuilder";

const FunctionName =
  process.env.TOPCODER_SCHEDULER_LAMBDA_ARN ??
  "arn:aws:lambda:us-east-1:811668436784:function:topcoder-scheduler-dev-schedule-task";

const buildPhaseAdvanceEndpoint = (challengeId: string) =>
  `${
    process.env.TOPCODER_API_ENDPOINT ?? "https://api.topcoder-dev.com/v5"
  }/challenges/${challengeId}/advance-phase`;

const buildAdvancePhaseWorkflowPayload = (
  endpoint: string,
  operation: "open" | "close",
  phase: string
): ApiRequestWorkflowPayload => ({
  endpoint,
  method: "POST",
  authStrategy: "Bearer ${token}", // TODO: find a better way to do this! Today it's not used and this is just a placeholder.
  body: { phase, operation },
});

const buildNextWorkflowConfiguration = (endpoint: string): ApiRequestNextWorkflowConfiguration => ({
  endpoint,
  method: "POST",
  transform: {
    "body.phase": "$.next.phases[0].name",
    "body.operation": "$.next.operation",
  },
});

export default new (class {
  #client: LambdaClient = new LambdaClient({ region: process.env.AWS_REGION });

  async schedulePhaseOperation(challengeId: string, phase: string, operation: "open" | "close") {
    const endpoint = buildPhaseAdvanceEndpoint(challengeId);
    const payload = buildAdvancePhaseWorkflowPayload(endpoint, operation, phase);
    const onSuccessWorkflowConfiguration = buildNextWorkflowConfiguration(endpoint);

    const workflowBuilder = new ApiWorkflowBuilder();
    const workflow = workflowBuilder
      .setPayload(payload)
      .setSuccess({
        workflow: ApiWorkflowBuilder.WorkflowName,
        configuration: onSuccessWorkflowConfiguration,
      })
      .build();

    const input = {
      source: "challenge",
      id: challengeId,
      key: phase.replace(" ", "-"),
      scheduledTime: new Date(Date.now() + 5000),
      workflow,
    };

    this.invokeSchedulerLambda(input);
  }

  async schedule(challengeId: string, phases: Challenge_Phase[], predecessor?: string) {
    const phasesToOpen = this.findPhasesToOpen(phases, predecessor);
    const phasesToClose = this.findPhasesToClose(phases, predecessor);

    phasesToOpen.forEach(async (phase: Challenge_Phase) => {
      const endpoint = buildPhaseAdvanceEndpoint(challengeId);
      const payload = buildAdvancePhaseWorkflowPayload(endpoint, "open", phase.name);

      const workflowBuilder = new ApiWorkflowBuilder();
      const workflow = workflowBuilder
        .setPayload(payload)
        // Intentionally leaving out success and failure workflows for now for more analysis to see if we need them
        .build();

      const input = {
        source: "challenge",
        id: challengeId,
        key: phase.name.replace(" ", "-"),
        scheduledTime: phase.scheduledStartDate!,
        workflow,
      };

      this.invokeSchedulerLambda(input);
    });

    phasesToClose.forEach(async (phase: Challenge_Phase) => {
      const endpoint = buildPhaseAdvanceEndpoint(challengeId);
      const payload = buildAdvancePhaseWorkflowPayload(endpoint, "close", phase.name);
      const onSuccessWorkflowConfiguration = buildNextWorkflowConfiguration(endpoint);

      const workflowBuilder = new ApiWorkflowBuilder();
      const workflow = workflowBuilder
        .setPayload(payload)
        .setSuccess({
          workflow: ApiWorkflowBuilder.WorkflowName,
          configuration: onSuccessWorkflowConfiguration,
        })
        .build();

      const input = {
        source: "challenge",
        id: challengeId,
        key: phase.name.replace(" ", "-"),
        scheduledTime: phase.scheduledEndDate!,
        workflow,
      };

      this.invokeSchedulerLambda(input);
    });
  }

  private invokeSchedulerLambda(input: any) {
    const invokeCommand = new InvokeCommand({
      FunctionName,
      Payload: fromUtf8(JSON.stringify(input)),
    });

    this.#client
      .send(invokeCommand)
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  private findPhasesToOpen(challengePhases: Challenge_Phase[], predecessor?: string) {
    return challengePhases.filter((phase: Challenge_Phase) => {
      if (phase.isOpen) return false;
      if (phase.scheduledStartDate === null) return false;

      const phaseNotStarted = phase.actualStartDate == null;
      const phaseNotOpen = !phase.isOpen;

      if (predecessor === null) {
        return !phase.predecessor && phaseNotStarted && phaseNotOpen;
      } else {
        return phase.predecessor === predecessor && phaseNotStarted && phaseNotOpen;
      }
    });
  }

  private findPhasesToClose(challengePhases: Challenge_Phase[], predecessor?: string) {
    const currentDate = new Date();

    return challengePhases.filter((phase: Challenge_Phase) => {
      if (!phase.isOpen) return false;
      if (phase.scheduledEndDate === null) return false;

      const scheduledEndDate = new Date(phase.scheduledEndDate!);
      const isPastScheduledEndTime = scheduledEndDate < currentDate;
      const isOpenTrue = phase.isOpen;

      if (predecessor === null) {
        return !phase.predecessor && !isPastScheduledEndTime && isOpenTrue;
      } else {
        return phase.predecessor === predecessor && !isPastScheduledEndTime && isOpenTrue;
      }
    });
  }
})();
