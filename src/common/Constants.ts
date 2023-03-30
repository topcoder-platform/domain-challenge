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
  Approved: "Approved",
  Canceled: "Canceled",
  Completed: "Completed",
  Deleted: "Deleted",
  CancelledFailedReview: "Cancelled - Failed Review",
  CancelledFailedScreening: "Cancelled - Failed Screening",
  CancelledZeroSubmissions: "Cancelled - Zero Submissions",
  CancelledWinnerUnresponsive: "Cancelled - Winner Unresponsive",
  CancelledClientRequest: "Cancelled - Client Request",
  CancelledRequirementsInfeasible: "Cancelled - Requirements Infeasible",
  CancelledZeroRegistrations: "Cancelled - Zero Registrations",
  CancelledPaymentFailed: "Cancelled - Payment Failed",
};

export const LegacyChallengeStatusesMap = {
  Active: 1,
  Draft: 2,
  Deleted: 3,
  CancelledFailedReview: 4,
  CancelledFailedScreening: 5,
  CancelledZeroSubmissions: 6,
  Completed: 7,
  CancelledWinnerUnresponsive: 8,
  CancelledClientRequest: 9,
  CancelledRequirementsInfeasible: 10,
  CancelledZeroRegistrations: 11,
};

export const PhaseNameToTypeId = {
  Registration: 1,
  Submission: 2,
  Screening: 3,
  Review: 4,
  Appeals: 5,
  "Appeals Response": 6,
  Aggregation: 7,
  "Aggregation Review": 8,
  "Final Fix": 9,
  "Final Review": 10,
  Approval: 11,
  "Post-Mortem": 12,
  "Specification Submission": 13,
  "Specification Review": 14,
  "Checkpoint Submission": 15,
  "Checkpoint Screening": 16,
  "Checkpoint Review": 17,
  "Iterative Review": 18,
};

export const PhaseNames = {
  Registration: "Registration",
  Submission: "Submission",
  Screening: "Screening",
  Review: "Review",
  Appeals: "Appeals",
  AppealsResponse: "Appeals Response",
  Aggregation: "Aggregation",
  AggregationReview: "Aggregation Review",
  FinalFix: "Final Fix",
  FinalReview: "Final Review",
  Approval: "Approval",
  PostMortem: "Post-Mortem",
  SpecificationSubmission: "Specification Submission",
  SpecificationReview: "Specification Review",
  CheckpointSubmission: "Checkpoint Submission",
  CheckpointScreening: "Checkpoint Screening",
  CheckpointReview: "Checkpoint Review",
  IterativeReview: "Iterative Review",
};

export const PhaseCriteriaIdToName = {
  1: "Scorecard",
  2: "Number of Registrants",
  3: "Number of Submissions",
  4: "View Response During Appeals",
  6: "Number of Reviewers",
};

export const TGBillingAccounts = [80000062, 80002800];
