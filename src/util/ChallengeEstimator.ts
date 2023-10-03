import { Challenge_PrizeSet } from "../models/domain-layer/challenge/challenge";

type DefaultPaymentParams = {
  fixedAmount: number;
  baseCoefficient: number;
  incrementalCoefficient: number;
  prize: number;
};

type Role =
  | "PRIMARY_SCREENER"
  | "REVIEWER"
  | "ACCURACY_REVIEWER"
  | "FAILURE_REVIEWER"
  | "STRESS_REVIEWER"
  | "CHECKPOINT_SCREENER"
  | "CHECKPOINT_REVIEWER"
  | "ITERATIVE_REVIEWER";

export class ChallengeEstimator {
  private prizeSets: Challenge_PrizeSet[];
  private challengeType: { track: string; type: string };
  private defaultParams: DefaultPaymentParams;

  constructor(prizeSets: Challenge_PrizeSet[], challengeType: { track: string; type: string }) {
    this.prizeSets = prizeSets;
    this.challengeType = challengeType;
    this.defaultParams = this.computeDefaultParams();
  }

  private computeDefaultParams(): DefaultPaymentParams {
    switch (this.challengeType.track) {
      case "Development":
        switch (this.challengeType.type) {
          case "Challenge":
            return {
              fixedAmount: 0,
              baseCoefficient: 0.13,
              incrementalCoefficient: 0.05,
              prize: 0,
            };
          case "First2Finish":
            return {
              fixedAmount: 0,
              baseCoefficient: 0.02,
              incrementalCoefficient: 0.04,
              prize: 0,
            };
        }
        break;
      case "Design":
        switch (this.challengeType.type) {
          case "Challenge":
            return {
              fixedAmount: 0,
              baseCoefficient: 0.12,
              incrementalCoefficient: 0.05,
              prize: 0,
            };
          case "First2Finish":
            return {
              fixedAmount: 0,
              baseCoefficient: 0.02,
              incrementalCoefficient: 0.04,
              prize: 0,
            };
        }
        break;
    }
    return {
      fixedAmount: 0,
      baseCoefficient: 0,
      incrementalCoefficient: 0,
      prize: 0,
    };
  }

  estimateCost(estimatedReviewsRequired: number, numReviewers: number): number {
    let totalCostCents = this.getFixedCost("placement");

    const copilotPrizeCents = this.getFixedCost("copilot");
    if (copilotPrizeCents > 0) {
      totalCostCents += copilotPrizeCents;
    } else {
      totalCostCents += this.getDefaultCopilotFee();
    }

    const reviewerPrizeCents = this.getFixedCost("reviewer");
    if (reviewerPrizeCents > 0) {
      totalCostCents += reviewerPrizeCents; // Assume only one reviewer if set
    } else {
      totalCostCents += numReviewers * this.calculateReviewerPaymentCents(estimatedReviewsRequired);
    }

    console.log("Estimated cost in cents", totalCostCents);

    return totalCostCents;
  }

  private getFixedCost(type: string): number {
    const prizeSet = this.prizeSets.find((p) => p.type === type);
    return prizeSet
      ? prizeSet.prizes.reduce((sum, prize) => sum + (prize.amountInCents ?? 0), 0)
      : 0;
  }

  private calculateReviewerPaymentCents(estimatedReviewsPerReviewer: number): number {
    const placementPrizeSet = this.prizeSets.find((p) => p.type === "placement");
    if (!placementPrizeSet) throw new Error("Placement prize set not found");

    let firstPrize = placementPrizeSet.prizes[0];
    if (!firstPrize || firstPrize.type !== "USD") {
      this.defaultParams.prize = 0;
    } else this.defaultParams.prize = firstPrize.amountInCents!;

    return this.calculatePaymentAmountCents(
      this.getReviewerRole(),
      estimatedReviewsPerReviewer,
      this.defaultParams
    );
  }

  // TODO: We have multiple cases to consider here
  // TODO: Some challenges have multiple reviewers
  // TODO: Current implementation only handles Code and F2F challenges
  private getReviewerRole(): Role {
    if (this.challengeType.type === "First2Finish") return "ITERATIVE_REVIEWER";

    return "REVIEWER";
  }

  private calculatePaymentAmountCents(
    role: Role,
    submissionsCount: number,
    params: DefaultPaymentParams
  ): number {
    if (submissionsCount === 0) submissionsCount = 1;

    const paymentCents =
      params.fixedAmount * 100 +
      (params.baseCoefficient + params.incrementalCoefficient * submissionsCount) * params.prize;

    return Math.round(paymentCents);
  }

  private getDefaultCopilotFee(): number {
    switch (this.challengeType.track) {
      case "Development":
        switch (this.challengeType.type) {
          case "Challenge":
            return 60000;
          case "First2Finish":
            return 4000;
        }
        break;
      case "Design":
        switch (this.challengeType.type) {
          case "Challenge":
            return 30000;
          case "First2Finish":
            return 4000;
        }
        break;
    }
    return 0;
  }
}
