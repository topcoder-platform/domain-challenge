/**
 * constants
 */
import metadataExtractor from "./metadataExtractor";

const scorecardQuestionMapping: any = {
  30002212: [
    {
      questionId: 30007531,
      description:
        "Does the submission sufficiently satisfy the requirements as described in the provided specification?",
    },
    {
      questionId: 30007533,
      description: "How would you rate the work ethic of this submitter?",
    },
    {
      questionId: 30007532,
      description: "How would you rate the quality of this submitters work?",
    },
  ],
};

const PhaseStatusTypes = {
  Scheduled: 1,
  Open: 2,
  Closed: 3,
};

const prizeTypesIds = {
  Contest: 15,
  Checkpoint: 14,
};

const supportedMetadata: any = {
  32: {
    method: metadataExtractor.extractBillingProject,
    defaultValue: null,
    description: "Billing Project",
  },
  31: {
    method: metadataExtractor.extractAdminFee,
    defaultValue: 0,
    description: "Admin Fee",
  },
  30: {
    method: metadataExtractor.extractDrPoints,
    defaultValue: 0,
    description: "DR points",
  },
  57: {
    method: metadataExtractor.extractMarkup,
    defaultValue: 0,
    description: "Markup",
  },
  35: {
    method: metadataExtractor.extractSpecReviewCost,
    defaultValue: null,
    description: "Spec review cost",
  },
  41: {
    method: metadataExtractor.extractApprovalRequired,
    defaultValue: true,
    description: "Approval Required",
  },
  44: {
    method: metadataExtractor.extractPostMortemRequired,
    defaultValue: true,
    description: "Post-Mortem Required",
  },
  48: {
    method: metadataExtractor.extractTrackLateDeliverablesRequired,
    defaultValue: true,
    description: "Track Late Deliverables",
  },
  51: {
    method: metadataExtractor.extractSubmissionLimit,
    defaultValue: null,
    description: "Maximum submissions",
  },
  52: {
    method: metadataExtractor.extractAllowStockArtRequired,
    defaultValue: false,
    description: "Allow Stock Art",
  },
  53: {
    method: metadataExtractor.extractSubmissionViewable,
    defaultValue: false,
    description: "Viewable Submissions Flag",
  },
  59: {
    method: metadataExtractor.extractReviewFeedback,
    defaultValue: false,
    description: "Review Feedback Flag",
  },
  84: {
    method: metadataExtractor.extractEnvironment,
    defaultValue: null,
    description: "Environment",
  },
  85: {
    method: metadataExtractor.extractCodeRepo,
    defaultValue: null,
    description: "Code repo",
  },
  88: {
    method: metadataExtractor.extractEstimateEffortHours,
    defaultValue: 0,
    description: "Effort Hours Estimate",
  },
  89: {
    method: metadataExtractor.extractEstimateEffortOffshore,
    defaultValue: 0,
    description: "Estimate Effort Days offshore",
  },
  90: {
    method: metadataExtractor.extractEstimateEffortOnsite,
    defaultValue: 0,
    description: "Estimate Effort Days Onsite",
  },
  33: {
    method: metadataExtractor.extractReviewerPayment,
    defaultValue: null,
    description: "Reviewer Payment",
  },
};

const STUDIO_CATEGORY_TYPES = [
  16, // Banners/Icons
  17, // Web designs
  18, // wireframes
  20, // logo design
  21, // print/presentation
  30, // widget or mobile screen design
  31, // front-end flash
  32, // application front-end design
  34, // studio other
  22, // idea generation
  40, // design f2f
];

export default {
  PhaseStatusTypes,
  prizeTypesIds,
  supportedMetadata,
  scorecardQuestionMapping,
  STUDIO_CATEGORY_TYPES,
};
