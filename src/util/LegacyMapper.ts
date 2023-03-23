import _ from "lodash";
import { PrizeSetTypes } from "../common/Constants";
import { V4_SUBTRACKS, V5_TO_V4 } from "../common/ConversionMap";
import { Challenge_Phase } from "../models/domain-layer/challenge/challenge";
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
      phases: this.mapPhases(input.legacy.subTrack, input.phases),
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
    let projectCategoryId = 39; // V4_SUBTRACKS.CODE

    if (subTrack === V4_SUBTRACKS.FIRST_2_FINISH) projectCategoryId = 38;
    if (subTrack === V4_SUBTRACKS.MARATHON_MATCH) projectCategoryId = 37;
    // prettier-ignore
    if (subTrack === V4_SUBTRACKS.DEVELOP_MARATHON_MATCH) projectCategoryId = 37;
    if (subTrack === V4_SUBTRACKS.BUG_HUNT) projectCategoryId = 9;
    if (subTrack === V4_SUBTRACKS.DESIGN_FIRST_2_FINISH) projectCategoryId = 40;
    if (subTrack === V4_SUBTRACKS.WEB_DESIGNS) projectCategoryId = 17;
    /*
      project_category_id,project_type_id,name
      1,1,Design
      2,1,Development
      3,1,Security
      4,1,Process
      5,1,Testing Competition
      6,2,Specification
      7,2,Architecture
      8,2,Component Production
      9,2,Bug Hunt
      10,2,Deployment
      11,2,Security
      12,2,Process
      13,2,Test Suites
      14,2,Assembly Competition
      15,2,Legacy
      16,3,Banners/Icons
      17,3,Web Design
      18,3,Wireframes
      19,2,UI Prototype Competition
      20,3,Logo Design
      21,3,Print/Presentation
      23,2,Conceptualization
      24,2,RIA Build Competition
      25,2,RIA Component Competition
      26,2,Test Scenarios
      27,2,Spec Review
      28,4,Generic Scorecards
      29,2,Copilot Posting
      35,2,Content Creation
      30,3,Widget or Mobile Screen Design
      31,3,Front-End Flash
      32,3,Application Front-End Design
      34,3,Studio Other
      22,3,Idea Generation
      36,2,Reporting
      37,2,Marathon Match
      38,2,First2Finish
      39,2,Code
      40,3,Design First2Finish
    */

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
      9: "On", // Turn Auto Pilot Off
      78: "Development", // Forum Type - value doesn't matter
      10: "On", // Turn status notification off
      11: "On", // Turn timeline notification off
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

  // prettier-ignore
  public mapPhases(subTrack: string, phases: Challenge_Phase[]) {
    return phases.map((phase: Challenge_Phase, index: number) => ({
      phaseTypeId: this.mapPhaseNameToPhaseTypeId(phase.name),
      phaseStatusId: phase.isOpen ? 2 : phase.actualEndDate ? 3 : 1,
      fixedStartTime: !phase.predecessor ? undefined : phase.scheduledStartDate!,
      scheduledStartTime: phase.scheduledStartDate!,
      scheduledEndTime: phase.scheduledEndDate!,
      actualStartTime: !phase.actualStartDate ? undefined : phase.actualStartDate,
      actualEndTime: !phase.actualEndDate ? undefined : phase.actualEndDate,
      duration: phase.duration * 1000,
      phaseCriteria: this.mapPhaseCriteria(subTrack, phase),
    }));
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


    return {
      1: this.mapScorecard(subTrack, phase.name), // Scorecard ID
      2: phase.name === "Registration" ? '1' : undefined, // Registration Number
      3: phase.name === "Submission" ? submissionPhaseConstraint?.value.toString() ?? // if we have a submission phase constraint use it
        reviewPhaseConstraint?.value != null ? '1' : undefined // otherwise if we have a review phase constraint use 1
        : undefined,
      4: undefined, // View Response During Appeals
      5: undefined, // Manual Screening
      6:
        phase.name === "Review" ? reviewPhaseConstraint?.value.toString() ?? '2' : undefined, // Reviewer Number
      '7': undefined, // View Reviews During Review
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

  // prettier-ignore
  private mapScorecard(subTrack: string, phase: string): string | undefined {
    const isNonProd = process.env.ENV != "prod";

    // TODO: Update scorecard ids for all subtracks and check for dev environment

    let scorecard = undefined;

    // F2F
    if (subTrack === V4_SUBTRACKS.FIRST_2_FINISH) scorecard = isNonProd ? 30002160 : 30002160; // missing dev scorecard
    if (subTrack === V4_SUBTRACKS.DESIGN_FIRST_2_FINISH) scorecard = isNonProd ? 30001610 : 30001101; // missing dev scorecard

    // QA
    if (subTrack === V4_SUBTRACKS.BUG_HUNT) {
      if (phase === "Review") scorecard = isNonProd ? 30001610 : 30001220; // missing dev scorecard
      if (phase === "Specification Review") scorecard = isNonProd ? 30001610 : 30001120; // missing dev scorecard
    }

    // DS
    if (subTrack === V4_SUBTRACKS.DEVELOP_MARATHON_MATCH) scorecard = isNonProd ? 30001610 : 30002133; // missing dev scorecard
    if (subTrack === V4_SUBTRACKS.MARATHON_MATCH) scorecard = isNonProd ? 30001610 : 30002133; // missing dev scorecard

    // DESIGN
    if (subTrack === V4_SUBTRACKS.WEB_DESIGNS) {
      if (phase === "Specification Review") scorecard = isNonProd ? 30001610 : 30001040; // missing dev scorecard
      if (phase === "Checkpoint Screening") scorecard = isNonProd ? 30001610 : 30001364; // missing dev scorecard
      if (phase === "Checkpoint Review") scorecard = isNonProd ? 30001610 : 30001004; // missing dev scorecard
      if (phase === "Screening") scorecard = isNonProd ? 30001610 : 30001363; // missing dev scorecard
      if (phase === "Review") scorecard = isNonProd ? 30001610 : 30001031; // missing dev scorecard
      if (phase === "Approval") scorecard = isNonProd ? 30001610 : 30000720; // missing dev scorecard
    }

    if (subTrack === V4_SUBTRACKS.CODE) scorecard = isNonProd ? 30002133 : 30002133; // missing dev scorecard

    return scorecard ? scorecard.toString() : undefined;
  }
}

export default new LegacyMapper();
