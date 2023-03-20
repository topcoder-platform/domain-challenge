export const {
  REGISTRATION_PHASE_ID,
  SUBMISSION_PHASE_ID,
  CHECKPOINT_SUBMISSION_PHASE_ID,
  ES_INDEX,
  ES_REFRESH,
} = process.env;

export const CancelledPaymentFailed = "Cancelled - Payment Failed";
export const CancelledFailedScreening = "Cancelled - Failed Screening";
export const PrizeSetTypes = {
  ChallengePrizes: "placement",
  CopilotPayment: "copilot",
  ReviewerPayment: "reviewer",
  CheckPoint: "checkpoint",
};
export const PrizeTypeIds = {
  Contest: 15,
  Checkpoint: 14,
};

export const PaymentTypeIds = {
  Copilot: 15,
};

export const ProjectPaymentTypeIds = {
  Copilot: 4,
};

export const ResourceRoleTypes = {
  IterativeReviewer: 21,
  Copilot: 14,
};

export const ProjectInfoIds = {
  CopilotPayment: 49,
};

export const ResourceInfoIds = {
  CopilotPayment: 7,
};

export const ChallengeStatuses = {
  New: "New",
  Active: "Active",
};
