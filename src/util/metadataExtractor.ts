/**
 * Metadata extractor
 */
import _ from "lodash";
import { PrizeSetTypes } from "../common/Constants";

/**
 * Get metadata entry by key
 * @param {Array} metadata the metadata array
 * @param {String} key the metadata key
 */
export const getMeta = (metadata = [], key:any) => _.find(metadata, (meta:any) => meta.name === key)

/**
 * Extract billing project
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractBillingProject (challenge:any, defaultValue:any) {
  return _.get(challenge, 'billingAccountId', _.get(challenge, 'billing.billingAccountId', _.toString(defaultValue)))
}

/**
 * Extract markup
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractMarkup (challenge:any, defaultValue:any) {
  return _.toString(_.get(challenge, 'billing.markup', defaultValue))
}

/**
 * Extract Admin Fee
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractAdminFee (challenge:any, defaultValue:any) {
  // TODO for now just return 0
  return _.toString(_.get(challenge, 0, defaultValue))
}

/**
 * Extract submission limit
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractSubmissionLimit (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'submissionLimit')
  if (!entry) return _.toString(defaultValue)
  try {
    const parsedEntryValue = JSON.parse(entry.value)
    if (parsedEntryValue.limit) {
      entry.value = parsedEntryValue.count
    } else {
      entry.value = null
    }
  } catch (e) {
    entry.value = null
  }
  return _.toString(entry.value || defaultValue)
}

/**
 * Extract spec review cost
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractSpecReviewCost (challenge:any, defaultValue:any) {
  return _.get(_.find(_.get(challenge, 'prizeSets', []), p => p.type === 'specReviewer') || {}, 'prizes[0].value', _.toString(defaultValue))
}

/**
 * Extract DR points
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractDrPoints (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'drPoints')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value || defaultValue)
}

/**
 * Extract Approval required
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractApprovalRequired (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'approvalRequired')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract Post-mortem required
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractPostMortemRequired (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'postMortemRequired')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract track late deliverables required
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractTrackLateDeliverablesRequired (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'trackLateDeliverables')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract allow stock art required
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
export function extractAllowStockArtRequired (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'allowStockArt')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract submission viewable
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractSubmissionViewable (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'submissionViewable')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract review feedback
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractReviewFeedback (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'reviewFeedback')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract environment
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractEnvironment (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'environment')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract code repo
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractCodeRepo (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'codeRepo')
  if (!entry) return _.toString(defaultValue)
  return _.toString(entry.value)
}

/**
 * Extract estimate effort hours
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractEstimateEffortHours (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'effortHoursEstimate')
  if (!entry) return _.toString(defaultValue)
  return _.toNumber(entry.value)
}

/**
 * Extract estimate effort days offshore
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractEstimateEffortOffshore (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'offshoreEfforts')
  if (!entry) return _.toString(defaultValue)
  return _.toNumber(entry.value)
}

/**
 * Extract estimate effort days Onsite
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractEstimateEffortOnsite (challenge:any, defaultValue:any) {
  const entry = getMeta(challenge.metadata, 'onsiteEfforts')
  if (!entry) return _.toString(defaultValue)
  return _.toNumber(entry.value)
}

/**
 * Extract reviewer payment
 * @param {Object} challenge the challenge object
 * @param {Any} defaultValue the default value
 */
function extractReviewerPayment (challenge:any, defaultValue:any) {
  try {
    const value = challenge?.prizeSets[PrizeSetTypes.ReviewerPayment]?.length == 1 ? challenge?.prizeSets[PrizeSetTypes.ReviewerPayment][0] : null
    if (!value) return _.toString(defaultValue)
    return _.toString(value)
  } catch (e) {
    return _.toString(defaultValue)
  }
}

export default {
  extractMarkup,
  extractAdminFee,
  extractBillingProject,
  extractSubmissionLimit,
  extractSpecReviewCost,
  extractDrPoints,
  extractApprovalRequired,
  extractPostMortemRequired,
  extractTrackLateDeliverablesRequired,
  extractAllowStockArtRequired,
  extractSubmissionViewable,
  extractReviewFeedback,
  extractEnvironment,
  extractCodeRepo,
  extractEstimateEffortHours,
  extractEstimateEffortOffshore,
  extractEstimateEffortOnsite,
  extractReviewerPayment
}
