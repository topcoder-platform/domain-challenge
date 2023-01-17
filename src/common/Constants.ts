export const {
  REGISTRATION_PHASE_ID,
  SUBMISSION_PHASE_ID,
  CHECKPOINT_SUBMISSION_PHASE_ID,
} = process.env;

export const CancelledPaymentFailed = "Cancelled - Payment Failed";
export const CancelledFailedScreening = "Cancelled - Failed Screening";
export const prizeSetTypes = {
  ChallengePrizes: "placement",
  CopilotPayment: "copilot",
  ReviewerPayment: "reviewer",
  CheckPoint: "checkpoint",
};
