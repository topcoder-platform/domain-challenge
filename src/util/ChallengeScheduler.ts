import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import { fromUtf8 } from "@aws-sdk/util-utf8-node";
import WorkflowBuilder from "../helpers/WorkflowBuilder";
import { Challenge_Phase } from "../models/domain-layer/challenge/challenge";

const FunctionName =
  process.env.TOPCODER_SCHEDULER_LAMBDA_ARN ??
  "arn:aws:lambda:us-east-1:811668436784:function:topcoder-scheduler-dev-schedule-task";

export default new (class {
  #client: LambdaClient = new LambdaClient({ region: process.env.AWS_REGION });

  async schedule(challengeId: string, phases: Challenge_Phase[], predecessor?: string) {
    const phasesToOpen = this.findPhasesToOpen(phases, predecessor);
    const phasesToClose = this.findPhasesToClose(phases, predecessor);

    phasesToOpen.forEach(async (phase: Challenge_Phase) => {
      const workflowBuilder = new WorkflowBuilder();
      const workflow = workflowBuilder
        .setName("invokeEndpoint")
        .setPayload({
          endpoint: `${
            process.env.TOPCODER_API_ENDPOINT ?? "https://api.topcoder-dev.com/v5/challenges"
          }/challenges/${challengeId}/advance-phase`,
          method: "POST",
          phase: phase.name,
          operation: "open",
          authStrategy: "",
        })
        .setSuccess({ action: "Complete" })
        .setFailure({ action: "Complete" })
        .build();

      const input = {
        source: "challenge",
        id: challengeId,
        key: phase.name,
        scheduledTime: phase.scheduledStartDate!,
        workflow,
      };

      this.invokeSchedulerLambda(input);
    });

    phasesToClose.forEach(async (phase: Challenge_Phase) => {
      const workflowBuilder = new WorkflowBuilder();
      const workflow = workflowBuilder
        .setName("invokeEndpoint")
        .setPayload({
          endpoint: `${
            process.env.TOPCODER_API_ENDPOINT ?? "https://api.topcoder-dev.com/v5/challenges"
          }/challenges/${challengeId}/advance-phase`,
          method: "POST",
          phase: phase.name,
          operation: "close",
          authStrategy: "",
        })
        .setSuccess({ action: "Complete" })
        .setFailure({ action: "Complete" })
        .build();

      const input = {
        source: "challenge",
        id: challengeId,
        key: phase.name,
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
    const currentDate = new Date();

    return challengePhases.filter((phase: Challenge_Phase) => {
      if (phase.isOpen) return false;
      if (phase.scheduledStartDate === null) return false;

      const scheduledStartDate = new Date(phase.scheduledStartDate!);
      const hasFutureStartDate = scheduledStartDate > currentDate;
      const isOpenFalse = !phase.isOpen;

      if (predecessor === null) {
        return !phase.predecessor && hasFutureStartDate && isOpenFalse;
      } else {
        return phase.predecessor === predecessor && hasFutureStartDate && isOpenFalse;
      }
    });
  }

  private findPhasesToClose(challengePhases: Challenge_Phase[], predecessor?: string) {
    const currentDate = new Date();

    return challengePhases.filter((phase: Challenge_Phase) => {
      if (!phase.isOpen) return false;
      if (phase.scheduledEndDate === null) return false;

      const scheduledEndDate = new Date(phase.scheduledEndDate!);
      const hasPastEndDate = scheduledEndDate < currentDate;
      const isOpenTrue = phase.isOpen;

      if (predecessor === null) {
        return !phase.predecessor && hasPastEndDate && isOpenTrue;
      } else {
        return phase.predecessor === predecessor && hasPastEndDate && isOpenTrue;
      }
    });
  }
})();
