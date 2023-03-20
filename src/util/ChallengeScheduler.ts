import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import { fromUtf8 } from "@aws-sdk/util-utf8-node";

export interface IChallengeScheduler {
  action: "schedule" | "remove";
  challengeId: string;
  phases: {
    name: string;
    scheduledStartDate?: string;
    scheduledEndDate?: string;
  }[];
}

export default new (class {
  #client: LambdaClient = new LambdaClient({ region: process.env.AWS_REGION });

  async schedule(challenge: IChallengeScheduler) {
    const invokeCommand = new InvokeCommand({
      FunctionName: process.env.CHALLENGE_SCHEDULER_LAMBDA_ARN,
      Payload: fromUtf8(JSON.stringify(challenge)),
    });

    try {
      await this.#client.send(invokeCommand);
    } catch (error) {
      console.error(error);
    }
  }
})();
