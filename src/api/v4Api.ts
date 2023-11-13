const { V4_TECHNOLOGIES_API_URL, V4_PLATFORMS_API_URL } = process.env;

import _ from "lodash";
import axios from "axios";

import {
  CancelledFailedScreening,
  CancelledPaymentFailed,
  CHECKPOINT_SUBMISSION_PHASE_ID,
  PrizeSetTypes,
  REGISTRATION_PHASE_ID,
  SUBMISSION_PHASE_ID,
} from "../common/Constants";

import { V5_TO_V4 } from "../common/ConversionMap";

// TODO: Create RPC calls in anticorruption-layer
class V4Api {
  public getLegacyTrackInformation(trackId: string, typeId: string, tags: string[]) {
    return V5_TO_V4[trackId][typeId](tags);
  }

  /**
   * Construct DTO from challenge:create payload.
   * @param {Object} payload the challenge:create payload
   * @param {String} m2mToken the m2m token
   * @returns the DTO for saving a draft contest.(refer SaveDraftContestDTO in ap-challenge-microservice)
   */
  public async getV4ChallengePayload(payload: any, m2mToken: string) {
    try {
      const projectId = payload.legacy.directProjectId;
      const legacyTrackInfo = this.getLegacyTrackInformation(
        payload.trackId,
        payload.typeId,
        payload.tags
      );
      const data: any = {
        ...legacyTrackInfo,
        name: payload.name,
        reviewType: _.get(payload, "legacy.reviewType", "INTERNAL"),
        projectId,
        status:
          payload.status === CancelledPaymentFailed ? CancelledFailedScreening : payload.status,
        billingAccountId: null,
        forumId: null,
        copilotId: null,
        confidentialityType: null,
        submissionGuidelines: "Please read above",
        submissionVisibility: true,
        milestoneId: 1,
        detailedRequirements: payload.description,
      };

      if (payload.billingAccountId) {
        data.billingAccountId = payload.billingAccountId;
      }

      if (_.get(payload, "legacy.forumId")) {
        data.forumId = payload.legacy.forumId;
      }
      if (payload.copilotId) {
        data.copilotId = payload.copilotId;
      }
      data.confidentialityType = _.get(payload, "legacy.confidentialityType", "public");

      if (payload.privateDescription) {
        data.detailedRequirements += "\n\r";
        data.detailedRequirements += "V5 Challenge - Additional Details: " + payload.id;
      }

      const SECONDS_TO_MILLIS = 1000;
      if (payload.phases) {
        const registrationPhase = _.find(payload.phases, (p) => {
          return p.phaseId == REGISTRATION_PHASE_ID;
        });
        const submissionPhase = _.find(payload.phases, (p) => p.phaseId == SUBMISSION_PHASE_ID);
        const startDate = payload.startDate ? new Date(payload.startDate) : new Date();

        data.registrationStartsAt = startDate.toISOString();
        data.registrationEndsAt = new Date(
          startDate.getTime() + (registrationPhase || submissionPhase).duration * SECONDS_TO_MILLIS
        ).toISOString();
        data.registrationDuration =
          (registrationPhase || submissionPhase).duration * SECONDS_TO_MILLIS;
        data.submissionEndsAt = new Date(
          startDate.getTime() + submissionPhase.duration * SECONDS_TO_MILLIS
        ).toISOString();
        data.submissionDuration = submissionPhase.duration * SECONDS_TO_MILLIS;

        // Only Design can have checkpoint phase and checkpoint prizes
        const checkpointPhase = _.find(
          payload.phases,
          (p) => p.phaseId === CHECKPOINT_SUBMISSION_PHASE_ID
        );
        if (checkpointPhase) {
          data.checkpointSubmissionStartsAt = startDate.toISOString();
          data.checkpointSubmissionEndsAt = new Date(
            startDate.getTime() + checkpointPhase.duration * SECONDS_TO_MILLIS
          ).toISOString();
          data.checkpointSubmissionDuration = checkpointPhase.duration * SECONDS_TO_MILLIS;
        } else {
          data.checkpointSubmissionStartsAt = null;
          data.checkpointSubmissionEndsAt = null;
          data.checkpointSubmissionDuration = null;
        }
      }
      if (payload.prizeSets) {
        // Only Design can have checkpoint phase and checkpoint prizes
        const checkpointPrize = _.find(payload.prizeSets, {
          type: PrizeSetTypes.CheckPoint,
        });
        if (checkpointPrize) {
          // checkpoint prize are the same for each checkpoint submission winner
          data.numberOfCheckpointPrizes = checkpointPrize.prizes.length;
          data.checkpointPrize = checkpointPrize.prizes[0].value;
        } else {
          data.numberOfCheckpointPrizes = 0;
          data.checkpointPrize = 0;
        }

        // prize type can be Challenge prizes
        const challengePrizes = _.find(payload.prizeSets, {
          type: PrizeSetTypes.ChallengePrizes,
        });
        if (!challengePrizes) {
          throw new Error("Challenge prize information is invalid.");
        }
        data.prizes = _.map(challengePrizes.prizes, "value").sort((a, b) => b - a);
      }
      if (payload.tags) {
        const techResult = await this.getTechnologies(m2mToken);
        data.technologies = _.filter(techResult.result.content, (e) =>
          payload.tags.includes(e.name)
        );

        if (data.technologies.length < 1) {
          data.technologies = _.filter(techResult.result.content, (e) => e.name === "Other");
        }

        const platResult = await this.getPlatforms(m2mToken);
        data.platforms = _.filter(platResult.result.content, (e) => payload.tags.includes(e.name));

        if (data.platforms.length < 1) {
          data.platforms = _.filter(platResult.result.content, (e) => e.name === "Other");
        }
      }

      if (payload.metadata && payload.metadata.length > 0) {
        const fileTypes = _.find(payload.metadata, (meta) => meta.name === "fileTypes");
        if (fileTypes) {
          if (_.isArray(fileTypes.value)) {
            data.fileTypes = fileTypes.value;
          } else {
            try {
              data.fileTypes = JSON.parse(fileTypes.value);
            } catch (e) {
              data.fileTypes = [];
            }
          }
        }
      }

      return data;
    } catch (err: unknown) {
      console.log("Something went wrong", err);
      // Debugging
      if (err instanceof Error) {
        // extract error message from V5 API
        const message = _.get(err, "response.body.message");
        throw new Error(message);
      } else {
        throw err;
      }
    }
  }

  async getTechnologies(m2mToken: string): Promise<{ result: { content: { name: string }[] } }> {
    const response = await axios.get(V4_TECHNOLOGIES_API_URL!, {
      headers: {
        Authorization: `Bearer ${m2mToken}`,
      },
    });

    return response.data;
  }

  async getPlatforms(m2mToken: string): Promise<{ result: { content: { name: string }[] } }> {
    const response = await axios.get(V4_PLATFORMS_API_URL!, {
      headers: {
        Authorization: `Bearer ${m2mToken}`,
      },
    });

    return response.data;
  }
}

export default new V4Api();
