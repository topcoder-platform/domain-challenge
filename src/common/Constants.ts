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
  Draft: "Draft",
};

export const PhaseTypeIds = {
  Registration: 1,
  Submission: 2,
  Screening: 3,
  Review: 4,
  Appeals: 5,
  AppealsResponse: 6,
  Aggregation: 7,
  AggregationReview: 8,
  FinalFix: 9,
  FinalReview: 10,
  Approval: 11,
  PostMortem: 12,
  SpecificationSubmission: 13,
  SpecificationReview: 14,
  CheckpointSubmission: 15,
  CheckpointScreening: 16,
  CheckpointReview: 17,
  IterativeReview: 18,
};
