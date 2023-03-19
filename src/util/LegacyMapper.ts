import _ from "lodash";
import { PrizeSetTypes } from "../common/Constants";
import { V5_TO_V4 } from "../common/ConversionMap";
import { legacyChallengeStatusesMap } from "./constants";

class LegacyMapper {
  // To be used on challenge:update calls that change state from New -> Draft
  public mapChallengeDraftUpdateInput = (input: any) => {
    const prizeSets = this.mapPrizeSets(input.prizeSets);
    const projectInfo = this.mapProjectInfo(input, prizeSets);

    return {
      name: input.name,
      projectStatusId: legacyChallengeStatusesMap.Draft,
      ...this.mapTrackAndTypeToCategoryStudioSpecAndMmSpec(
        input.legacy.track,
        input.legacy.subTrack
      ),
      tcDirectProjectId: input.legacy?.directProjectId!,
      winnerPrizes:
        prizeSets[PrizeSetTypes.ChallengePrizes]?.map(
          (amount: number, index: number) => ({
            amount,
            place: index + 1,
            numSubmissions: 1,
            type: PrizeSetTypes.ChallengePrizes,
          })
        ) ?? [],
      phases: input.phases.map((phase: any, index: number) => ({
        phaseTypeId: this.mapPhaseNameToPhaseTypeId(phase.name),
        phaseStatusId: 1,
        fixedStartTime: index == 1 ? phase.scheduledStartDate : undefined,
        scheduledStartTime: phase.scheduledStartDate,
        scheduledEndTime: phase.scheduledEndDate,
        actualStartTime: phase.actualStartDate,
        actualEndTime: phase.actualEndDate,
        duration: phase.duration,
        phaseCriteria: this.mapPhaseCriteria(phase),
      })),
      reviewType: input.legacy?.reviewType ?? "INTERNAL",
      confidentialityType: input.legacy?.confidentialityType ?? "public",
      billingProject: input.billing?.billingAccountId!,
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
    subTrack = subTrack.replace(" ", "").toLowerCase();

    let projectCategoryId = 39; // code
    if (subTrack === "first2finish") {
      projectCategoryId = 38;
    } else if (subTrack === "marathonmatch") {
      projectCategoryId = 37;
    } else if (subTrack === "bughunt") {
      projectCategoryId = 9;
    }

    return {
      projectCategoryId,
      projectStudioSpecId: undefined, // TODO: Handle design challenges
      projectMmSpecId: undefined, // TODO: Handle mMM challenges
    };
  }

  private mapPrizeSets(
    prizeSets: { type: string; prizes: { value: number }[] }[]
  ) {
    return prizeSets.reduce((acc: { [key: string]: number[] }, prize) => {
      acc[prize.type] = prize.prizes.map((p) => p.value).sort((a, b) => b - a);

      return acc;
    }, {});
  }

  private mapProjectInfo(
    input: any,
    prizeSets: any
  ): { [key: number]: string | undefined } {
    const firstPlacePrize =
      prizeSets[PrizeSetTypes.ChallengePrizes]?.length >= 1
        ? prizeSets[PrizeSetTypes.ChallengePrizes][0]?.toString()
        : undefined;

    return {
      3: "1",
      4: "0",
      7: "1.0",
      9: "Off", // Turn Auto Pilot Off
      78: "Development", // Forum Type - value doesn't matter
      10: "Off", // Turn status notification off
      11: "Off", // Turn timeline notification off
      12: "Yes", // Public -> Yes (make it dynamic)
      13: "Yes", // Rated -> Yes (make it dynamic)
      14: "Open", // Eligibility -> Open (value doesn't matter)
      16: firstPlacePrize?.toString(),
      26: "Off", // No Digital Run
      30: "0", // No DR Points
      6: input.name,
      31: "0", // Admin Fee
      32: input.billing?.billingAccountId!.toString(),
      // Review Cost
      33:
        prizeSets[PrizeSetTypes.ReviewerPayment]?.length == 1
          ? prizeSets[PrizeSetTypes.ReviewerPayment][0]?.toString()
          : undefined,
      // Confidentiality Type
      34: input.legacy?.confidentialityType ?? "public",
      // Review Type
      79: input.legacy?.reviewType ?? "COMMUNITY",
      // Spec Review Cost
      35: undefined,
      // First Place Prize
      36: firstPlacePrize?.toString(),
      // Second Place Prize
      37:
        prizeSets[PrizeSetTypes.ChallengePrizes]?.length >= 2
          ? prizeSets[PrizeSetTypes.ChallengePrizes][1]?.toString()
          : undefined,
      // Reliability Bonus Cost
      38: undefined,
      // Checkpoint Bonus Cost
      39: undefined,
      41: "true", // Approval Required
      43: "true", // Send Winner Emails
      44: "false", // Post-mortem required (set to false - new Autopilot will handle this)
      45: "false", // Reliability bonus eligible
      46: "true", // Member Payments Eligible
      48: "true", // Track Late Deliverables
      52: "false", // Allow Stock Art
      57: "0.5", // Contest Fee Percentage
      59: "false", // Review Feedback Flag
      88: "0", // Effort Hours Estimate
      89: "0", // Estimate Efforts Days Offshore (extract from metadata)
      90: "0", // Estimate Efforts Days Onsite (extract from metadata)
    };
  }

  private mapPhaseCriteria(phase: any) {
    return {
      1: phase.name === "Review" ? 30001610 : undefined, // Scorecard ID
      2: phase.name === "Registration" ? 1 : undefined, // Registration Number
      3: phase.name === "Submission" ? 1 : undefined, // Submission Number
      4: undefined, // View Response During Appeals
      5: undefined, // Manual Screening
      6: phase.name === "Review" ? 2 : undefined, // Reviewer Number
      7: undefined, // View Reviews During Review
    };
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
}

export default new LegacyMapper();
