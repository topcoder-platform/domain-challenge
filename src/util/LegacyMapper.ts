import _ from "lodash";
import { ChallengeStatuses, PhaseTypeIds, PrizeSetTypes } from "../common/Constants";
import { V4_SUBTRACKS, V5_TO_V4 } from "../common/ConversionMap";
import {
  Challenge_Phase,
  Challenge_PrizeSet,
  CreateChallengeInput,
  UpdateChallengeInput_UpdateInput,
} from "../models/domain-layer/challenge/challenge";
import { legacyChallengeStatusesMap } from "./constants";
import {
  CreateChallengeInput as LegacyChallengeCreateInput,
  UpdateChallengeInput as LegacyChallengeUpdateInput,
  Phase as LegacyPhase,
  Prize,
} from "@topcoder-framework/domain-acl";
import { getRequest } from "../api/v5Api";
import m2mToken from "../helpers/MachineToMachineToken";

class LegacyMapper {
  // To be used on challenge:update calls that change state from New -> Draft
  public mapChallengeDraftUpdateInput = async (
    input: CreateChallengeInput
  ): Promise<LegacyChallengeCreateInput> => {
    const prizeSets = this.mapPrizeSets(input.prizeSets);
    const projectInfo = this.mapProjectInfo(input, prizeSets, input.legacy?.subTrack!);

    return {
      name: input.name,
      projectStatusId: legacyChallengeStatusesMap.Draft,
      ...this.mapTrackAndTypeToCategoryStudioSpecAndMmSpec(
        input.legacy!.track!,
        input.legacy!.subTrack!
      ),
      groups: await this.mapGroupIds(input.groups),
      tcDirectProjectId: input.legacy?.directProjectId!,
      winnerPrizes: this.mapWinnerPrizes(prizeSets),
      phases: this.mapPhases(input.legacy!.subTrack!, input.phases),
      reviewType: input.legacy?.reviewType ?? "INTERNAL",
      confidentialityType: input.legacy?.confidentialityType ?? "public",
      projectInfo,
    };
  };

  public mapChallengeUpdateInput = async (
    legacyId: number,
    subTrack: string,
    input: UpdateChallengeInput_UpdateInput
  ): Promise<LegacyChallengeUpdateInput> => {
    // prettier-ignore
    const prizeSets = input.prizeSetUpdate != null ? this.mapPrizeSets(input.prizeSetUpdate.prizeSets) : null;
    const projectInfo = this.mapProjectInfoForUpdate(input, prizeSets);

    return {
      projectId: legacyId,
      projectStatusId: this.mapProjectStatus(input.status),
      prizeUpdate:
        prizeSets == null
          ? undefined
          : {
              winnerPrizes: this.mapWinnerPrizes(prizeSets),
            },
      // prettier-ignore
      phaseUpdate: input.phaseUpdate != null ? { phases: this.mapPhases(subTrack, input.phaseUpdate.phases) } : undefined,
      // prettier-ignore
      groupUpdate: input.groupUpdate != null ? { groups: await this.mapGroupIds(input.groupUpdate.groups) } : undefined,
      termUpdate: input.termUpdate != null ? { terms: input.termUpdate.terms } : undefined,
      projectInfo,
    };
  };

  public mapTrackAndType(trackId: string, typeId: string, tags: string[]) {
    return V5_TO_V4[trackId][typeId](tags);
  }

  private mapTrackAndTypeToCategoryStudioSpecAndMmSpec(
    track: string, // TODO: Properly map studio challenges
    subTrack: string
  ): {
    projectCategoryId: number;
    projectStudioSpecId: number | undefined;
    projectMmSpecId: number | undefined;
  } {
    let projectCategoryId = 39; // V4_SUBTRACKS.CODE

    if (subTrack === V4_SUBTRACKS.FIRST_2_FINISH) projectCategoryId = 38;
    if (subTrack === V4_SUBTRACKS.MARATHON_MATCH) projectCategoryId = 37;
    // prettier-ignore
    if (subTrack === V4_SUBTRACKS.DEVELOP_MARATHON_MATCH) projectCategoryId = 37;
    if (subTrack === V4_SUBTRACKS.BUG_HUNT) projectCategoryId = 9;
    if (subTrack === V4_SUBTRACKS.DESIGN_FIRST_2_FINISH) projectCategoryId = 40;
    if (subTrack === V4_SUBTRACKS.WEB_DESIGNS) projectCategoryId = 17;

    return {
      projectCategoryId,
      projectStudioSpecId: undefined, // TODO: Handle design challenges
      projectMmSpecId: undefined, // TODO: Handle mMM challenges
    };
  }

  private mapPrizeSets(prizeSets: Challenge_PrizeSet[]) {
    return prizeSets.reduce((acc: { [key: string]: number[] }, prize) => {
      acc[prize.type] = (acc[prize.type] ?? [])
        .concat(prize.prizes.map((p) => p.amountInCents!))
        .sort((a, b) => b - a);
      return acc;
    }, {});
  }

  private mapWinnerPrizes(prizeSets: { [key: string]: number[] }): Prize[] {
    // prettier-ignore
    const prizeSetTypes = [PrizeSetTypes.ChallengePrizes, PrizeSetTypes.CheckPoint, PrizeSetTypes.CopilotPayment, PrizeSetTypes.ReviewerPayment];

    return prizeSetTypes.reduce((acc: Prize[], type: string) => {
      if (prizeSets[type] != null) {
        acc.push(
          ...prizeSets[type].map((amountInCents: number, index: number) => ({
            amountInCents,
            place: index + 1,
            numSubmissions: 1,
            type,
          }))
        );
      }
      return acc;
    }, []);
  }

  private mapProjectInfo(
    input: CreateChallengeInput,
    prizeSets: any,
    subTrack: string
  ): { [key: number]: string } {
    const firstPlacePrize =
      prizeSets[PrizeSetTypes.ChallengePrizes]?.length >= 1
        ? prizeSets[PrizeSetTypes.ChallengePrizes][0]?.toString()
        : undefined;

    const map = {
      3: "1",
      4: "0",
      7: "1.0",
      9: "On", // Turn Auto Pilot Off
      78: "Development", // Forum Type - value doesn't matter
      10: "On", // Turn status notification off
      11: "On", // Turn timeline notification off
      12: "Yes", // Public -> Yes (make it dynamic)
      13: "Yes", // Rated -> Yes (make it dynamic)
      14: "Open", // Eligibility -> Open (value doesn't matter)
      16: firstPlacePrize != null ? (firstPlacePrize / 100).toString() : undefined,
      26: "Off", // No Digital Run
      28:
        [
          V4_SUBTRACKS.FIRST_2_FINISH,
          V4_SUBTRACKS.DESIGN_FIRST_2_FINISH,
          V4_SUBTRACKS.MARATHON_MATCH,
        ].indexOf(subTrack) != -1
          ? "true"
          : "false", // Allow multiple submissions
      30: "0", // No DR Points
      6: input.name,
      31: "0", // Admin Fee
      32: input.billing?.billingAccountId!.toString(),
      // Review Cost
      33:
        prizeSets[PrizeSetTypes.ReviewerPayment]?.length == 1
          ? (prizeSets[PrizeSetTypes.ReviewerPayment][0] / 100).toString()
          : undefined,
      // Confidentiality Type
      34: input.legacy?.confidentialityType ?? "public",
      // Review Type
      79: input.legacy?.reviewType ?? "COMMUNITY",
      // Spec Review Cost
      35: undefined,
      // First Place Prize
      36: firstPlacePrize != null ? (firstPlacePrize / 100).toString() : undefined,
      // Second Place Prize
      37:
        prizeSets[PrizeSetTypes.ChallengePrizes]?.length >= 2
          ? (prizeSets[PrizeSetTypes.ChallengePrizes][1] / 100).toString()
          : undefined,
      // Reliability Bonus Cost
      38: undefined,
      // Checkpoint Bonus Cost
      39: undefined,
      41: "true", // Approval Required
      43: "true", // Send Winner Emails
      44:
        input.metadata.find((m) => m.name == "postMortemRequired")?.value == "false"
          ? "false"
          : "true" ?? "true", // Post-mortem required (set to false - new Autopilot will handle this)
      45: "false", // Reliability bonus eligible
      46: "true", // Member Payments Eligible
      48: "true", // Track Late Deliverables
      52: "false", // Allow Stock Art
      57: "0.5", // Contest Fee Percentage
      59: "false", // Review Feedback Flag
      88: input.metadata.find((m) => m.name == "effortHoursEstimate")?.value ?? undefined, // Effort Hours Estimate
      89: input.metadata.find((m) => m.name == "offshoreEfforts")?.value ?? undefined, // Estimate Efforts Days Offshore (extract from metadata)
      90: input.metadata.find((m) => m.name == "onsiteEfforts")?.value ?? undefined, // Estimate Efforts Days Onsite (extract from metadata)
    };

    return Object.fromEntries(Object.entries(map).filter(([_, v]) => v !== undefined)) as {
      [key: number]: string;
    };
  }

  private mapProjectInfoForUpdate(
    input: UpdateChallengeInput_UpdateInput,
    prizeSets: any
  ): { [key: number]: string } {
    let effortsEstimate = {};

    const metadata = input.metadataUpdate != null ? input.metadataUpdate.metadata : undefined;
    if (metadata != null) {
      effortsEstimate = {
        88: metadata.find((m) => m.name == "effortHoursEstimate")?.value.toString() ?? undefined, // Effort Hours Estimate
        89: metadata.find((m) => m.name == "offshoreEfforts")?.value.toString() ?? undefined, // Estimate Efforts Days Offshore (extract from metadata)
        90: metadata.find((m) => m.name == "onsiteEfforts")?.value.toString() ?? undefined, // Estimate Efforts Days Onsite (extract from metadata)
      };
    }

    let projectInfo: { [key: number]: string } = {};

    if (input.name != null) {
      projectInfo = {
        6: input.name,
      };
    }
    if (input.billing?.billingAccountId != null) {
      projectInfo[32] = input.billing?.billingAccountId!.toString();
    }

    const map = {
      ...projectInfo,
      ...effortsEstimate,
    };

    return Object.fromEntries(Object.entries(map).filter(([_, v]) => v !== undefined)) as {
      [key: number]: string;
    };
  }

  // prettier-ignore
  public mapPhases(subTrack: string, phases: Challenge_Phase[]) {
    return phases.map((phase: Challenge_Phase, index: number) => {
      return LegacyPhase.fromJSON({
        phaseTypeId: this.mapPhaseNameToPhaseTypeId(phase.name),
        phaseStatusId: phase.isOpen ? 2 : phase.actualEndDate ? 3 : 1,
        fixedStartTime: _.isUndefined(phase.predecessor) ? phase.scheduledStartDate : undefined,
        scheduledStartTime: phase.scheduledStartDate,
        scheduledEndTime: phase.scheduledEndDate,
        actualStartTime: phase.actualStartDate,
        actualEndTime: phase.actualEndDate,
        duration: phase.duration * 1000,
        phaseCriteria: this.mapPhaseCriteria(subTrack, phase),
      })
    });
  }

  // prettier-ignore
  private mapPhaseCriteria(subTrack: string, phase: Challenge_Phase): { [key: number]: string | undefined } {
    const reviewPhaseConstraint = phase.constraints?.find(
      (constraint: { name: string; value: number }) =>
        constraint.name === "Number of Reviewers"
    );

    const submissionPhaseConstraint = phase.constraints?.find(
      (constraint: { name: string; value: number }) => constraint.name === "Number of Submissions"
    );


    const map = {
      1: this.mapScorecard(subTrack, this.mapPhaseNameToPhaseTypeId(phase.name)), // Scorecard ID
      2: phase.name === "Registration" ? '1' : undefined, // Registration Number
      3: phase.name === "Submission" ? submissionPhaseConstraint?.value.toString() ?? // if we have a submission phase constraint use it
        reviewPhaseConstraint?.value != null ? '1' : undefined // otherwise if we have a review phase constraint use 1
        : undefined,
      4: undefined, // View Response During Appeals
      5: undefined, // Manual Screening
      6:
        phase.name === "Review" ? reviewPhaseConstraint?.value.toString() ?? '2' : phase.name === "Iterative Review" ? '1' : undefined, // Reviewer Number
      '7': undefined, // View Reviews During Review
    };

    return Object.fromEntries(Object.entries(map).filter(([_, v]) => v !== undefined)) as { [key: number]: string };
  }

  private mapPhaseNameToPhaseTypeId(name: string) {
    if (name == "Registration") {
      return 1;
    }
    if (name == "Submission") {
      return 2;
    }
    if (name == "Screening") {
      return 3;
    }
    if (name == "Review") {
      return 4;
    }
    if (name == "Appeals") {
      return 5;
    }
    if (name == "Appeals Response") {
      return 6;
    }
    if (name == "Aggregation") {
      return 7;
    }
    if (name == "Aggregation Review") {
      return 8;
    }
    if (name == "Final Fix") {
      return 9;
    }
    if (name == "Final Review") {
      return 10;
    }
    if (name == "Approval") {
      return 11;
    }
    if (name == "Post-Mortem") {
      return 12;
    }
    if (name == "Specification Submission") {
      return 13;
    }
    if (name == "Specification Review") {
      return 14;
    }
    if (name == "Checkpoint Submission") {
      return 15;
    }
    if (name == "Checkpoint Screening") {
      return 16;
    }
    if (name == "Checkpoint Review") {
      return 17;
    }
    if (name == "Iterative Review") {
      return 18;
    }
  }

  // prettier-ignore
  private mapScorecard(subTrack: string, phaseTypeId: number | undefined): string | undefined {
    const isNonProd = process.env.ENV != "prod";

    // TODO: Update scorecard ids for all subtracks and check for dev environment

    let scorecard = undefined;

    if (
      subTrack === V4_SUBTRACKS.FIRST_2_FINISH &&
      phaseTypeId === PhaseTypeIds.IterativeReview
    ) {
      scorecard = isNonProd ? 30001551 : 30002160;
    } else if (
      subTrack === V4_SUBTRACKS.DESIGN_FIRST_2_FINISH &&
      phaseTypeId === PhaseTypeIds.Review
    ) {
      scorecard = isNonProd ? 30001610 : 30001101;
    } else if (subTrack === V4_SUBTRACKS.BUG_HUNT) {
      if (phaseTypeId === PhaseTypeIds.Review) {
        scorecard = isNonProd ? 30001610 : 30001220;
      } else if (phaseTypeId === PhaseTypeIds.SpecificationReview) {
        scorecard = isNonProd ? 30001610 : 30001120;
      }
    } else if (
      subTrack === V4_SUBTRACKS.DEVELOP_MARATHON_MATCH &&
      phaseTypeId === PhaseTypeIds.Review
    ) {
      scorecard = isNonProd ? 30001610 : 30002133;
    } else if (
      subTrack === V4_SUBTRACKS.MARATHON_MATCH &&
      phaseTypeId === PhaseTypeIds.Review
    ) {
      scorecard = isNonProd ? 30001610 : 30002133;
    } else if (subTrack === V4_SUBTRACKS.WEB_DESIGNS) {
      if (phaseTypeId === PhaseTypeIds.SpecificationReview) {
        scorecard = isNonProd ? 30001610 : 30001040;
      } else if (phaseTypeId === PhaseTypeIds.CheckpointScreening) {
        scorecard = isNonProd ? 30001610 : 30001364;
      } else if (phaseTypeId === PhaseTypeIds.CheckpointReview) {
        scorecard = isNonProd ? 30001610 : 30001004;
      } else if (phaseTypeId === PhaseTypeIds.Screening) {
        scorecard = isNonProd ? 30001610 : 30001363;
      } else if (phaseTypeId === PhaseTypeIds.Review) {
        scorecard = isNonProd ? 30001610 : 30001031;
      } else if (phaseTypeId === PhaseTypeIds.Approval) {
        scorecard = isNonProd ? 30001610 : 30000720;
      }
    } else if (
      subTrack === V4_SUBTRACKS.CODE &&
      phaseTypeId === PhaseTypeIds.Review
    ) {
      scorecard = isNonProd ? 30002133 : 30002133;
    }

    return scorecard ? scorecard.toString() : undefined;
  }

  private mapProjectStatus(status: string | undefined): number | undefined {
    if (status == null) return undefined;

    if (status === ChallengeStatuses.Draft) {
      return legacyChallengeStatusesMap.Draft;
    }
    if (status === ChallengeStatuses.Active) {
      return legacyChallengeStatusesMap.Active;
    }
    if (status.toLowerCase().indexOf("cancel") !== -1) {
      return legacyChallengeStatusesMap.Cancelled;
    }
  }

  private async mapGroupIds(groups: string[]): Promise<number[]> {
    const oldGroupIds: number[] = [];

    const token = await m2mToken.getM2MToken();
    for (const groupId of groups) {
      const group = await getRequest(`${process.env.TOPCODER_API_URL}/groups/${groupId}`, token);
      if (group != null && !group.oldId) {
        oldGroupIds.push(group.oldId);
      }
    }

    return oldGroupIds;
  }
}

export default new LegacyMapper();
