import _ from "lodash";
import axios from "axios";
import { StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";

import m2m from "../helpers/MachineToMachineToken";
import { ChallengeStatuses, TGBillingAccounts } from "../common/Constants";

const { V3_BA_API_URL = "https://api.topcoder-dev.com/v3/billing-accounts" } = process.env;

async function lockAmount(billingAccountId: number, dto: LockAmountDTO) {
  console.log("BA validation lock amount:", billingAccountId, dto);

  try {
    const m2mToken = await m2m.getM2MToken();

    await axios.patch(
      `${V3_BA_API_URL}/${billingAccountId}/lock-amount`,
      {
        param: dto,
      },
      {
        headers: {
          Authorization: `Bearer ${m2mToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err: any) {
    console.error(err.response?.data?.result?.content ?? "Failed to lock challenge amount");
    throw new StatusBuilder()
      .withCode(Status.INTERNAL)
      .withDetails(
        `Budget Error: Requested amount $${dto.lockAmount} exceeds available budget for Billing Account #${billingAccountId}. Please contact the Topcoder Project Manager for further assistance.`
      )
      .build();
  }
}

async function consumeAmount(billingAccountId: number, dto: ConsumeAmountDTO) {
  console.log("BA validation consume amount:", billingAccountId, dto);

  try {
    const m2mToken = await m2m.getM2MToken();

    await axios.patch(
      `${V3_BA_API_URL}/${billingAccountId}/consume-amount`,
      {
        param: dto,
      },
      {
        headers: {
          Authorization: `Bearer ${m2mToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err: any) {
    throw new StatusBuilder()
      .withCode(Status.INTERNAL)
      .withDetails(err.response?.data?.result?.content ?? "Failed to consume challenge amount")
      .build();
  }
}

interface LockAmountDTO {
  challengeId: string;
  lockAmount: number;
}
interface ConsumeAmountDTO {
  challengeId: string;
  consumeAmount: number;
  markup?: number;
}

// prettier-ignore
export async function lockConsumeAmount(baValidation: BAValidation, rollback: boolean = false): Promise<void> {
  if (!_.isNumber(baValidation.billingAccountId)) {
    console.warn("Challenge doesn't have billing account id:", baValidation);
    return;
  }
  if (_.includes(TGBillingAccounts, baValidation.billingAccountId)) {
    console.info("Ignore BA validation for Topgear account:", baValidation.billingAccountId);
    return;
  }

  console.log("BA validation:", baValidation);

  if (
    baValidation.status === ChallengeStatuses.New ||
    baValidation.status === ChallengeStatuses.Draft ||
    baValidation.status === ChallengeStatuses.Active ||
    baValidation.status === ChallengeStatuses.Approved
  ) {
    // Update lock amount
    const currAmount = baValidation.totalPrizesInCents / 100;
    const prevAmount = baValidation.prevTotalPrizesInCents / 100;

    if (currAmount !== prevAmount) {
      await lockAmount(baValidation.billingAccountId, {
        challengeId: baValidation.challengeId!,
        lockAmount: rollback ? prevAmount : currAmount,
      });
    }
  } else if (baValidation.status === ChallengeStatuses.Completed) {
    // Note an already completed challenge could still be updated with prizes
    const currAmount = baValidation.totalPrizesInCents / 100;
    const prevAmount = baValidation.prevStatus === ChallengeStatuses.Completed ? baValidation.prevTotalPrizesInCents / 100 : 0;

    if (currAmount !== prevAmount) {
      await consumeAmount(baValidation.billingAccountId, {
        challengeId: baValidation.challengeId!,
        consumeAmount: rollback ? prevAmount : currAmount,
        markup: baValidation.markup,
      });
    }
  } else if (
    baValidation.status === ChallengeStatuses.Deleted ||
    baValidation.status === ChallengeStatuses.Canceled ||
    baValidation.status === ChallengeStatuses.CancelledFailedReview ||
    baValidation.status === ChallengeStatuses.CancelledFailedScreening ||
    baValidation.status === ChallengeStatuses.CancelledZeroSubmissions ||
    baValidation.status === ChallengeStatuses.CancelledWinnerUnresponsive ||
    baValidation.status === ChallengeStatuses.CancelledClientRequest ||
    baValidation.status === ChallengeStatuses.CancelledRequirementsInfeasible ||
    baValidation.status === ChallengeStatuses.CancelledZeroRegistrations ||
    baValidation.status === ChallengeStatuses.CancelledPaymentFailed
  ) {
    // Challenge canceled, unlock previous locked amount
    const currAmount = 0;
    const prevAmount = baValidation.prevTotalPrizesInCents / 100;

    if (currAmount !== prevAmount) {
      await lockAmount(baValidation.billingAccountId, {
        challengeId: baValidation.challengeId!,
        lockAmount: rollback ? prevAmount : 0,
      });
    }
  }
}

export interface BAValidation {
  challengeId?: string;
  billingAccountId?: number;
  markup?: number;
  prevStatus?: string;
  status?: string;
  prevTotalPrizesInCents: number;
  totalPrizesInCents: number;
}
