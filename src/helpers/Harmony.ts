import _ from "lodash";
import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

import { EVENT_ORIGINATOR } from "../common/Constants";

const FunctionName =
  process.env.HARMONY_LAMBDA_FUNCTION ??
  "arn:aws:lambda:us-east-1:811668436784:function:harmony-api-dev-processMessage";

const harmonyClient = new LambdaClient({ region: process.env.AWS_REGION, maxAttempts: 2 });

/**
 * Send event to Harmony.
 * @param eventType The event type
 * @param payloadType The payload type
 * @param payload The event payload
 * @param billingAccountId The billing account id
 */
export async function sendHarmonyEvent(eventType: string, payloadType: string, payload: object, billingAccountId?: number) {
  const event = {
    publisher: EVENT_ORIGINATOR,
    timestamp: new Date().getTime(),
    eventType,
    payloadType,
    payload,
    billingAccountId,
  };

  const invokeCommand = new InvokeCommand({
    FunctionName,
    InvocationType: "RequestResponse",
    Payload: JSON.stringify(event),
    LogType: "None"
  });

  const result = await harmonyClient.send(invokeCommand);

  if (result.FunctionError) {
    console.error(
      "Failed to send Harmony event",
      result.FunctionError,
      result.Payload?.transformToString()
    );
    throw new Error(result.FunctionError);
  }
}
