import _ from "lodash";
import axios from "axios";
import { StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";

import m2m from "../helpers/MachineToMachineToken";
import { ChallengeStatuses, TGBillingAccounts } from "../common/Constants";

const { V3_BA_API_URL } = process.env;

async function lockAmount(billingAccountId: number, amount: number) {
  if (amount === 0 || _.includes(TGBillingAccounts, billingAccountId)) {
    return;
  }

  try {
    const m2mToken = await m2m.getM2MToken();

    await axios.patch(
      `${V3_BA_API_URL}/${billingAccountId}/lock-amount`,
      {
        param: amount,
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
      .withDetails(err.response?.data?.result?.content ?? "Failed to lock challenge amount")
      .build();
  }
}

async function consumeAmount(billingAccountId: number, dto: ConsumedAmountDTO) {
  // prettier-ignore
  if ((dto.consumedAmount === 0 && dto.unlockedAmount === 0) || _.includes(TGBillingAccounts, billingAccountId)) {
    return;
  }

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

interface ConsumedAmountDTO {
  challengeId: string;
  markup?: number;
  consumedAmount: number;
  unlockedAmount: number;
}

// prettier-ignore
export async function lockConsumeAmount(baValidation: BAValidation, rollback: boolean = false): Promise<void> {
  console.log("Update BA validation:", baValidation);
  if (!_.isNumber(baValidation.billingAccountId)) {
    return;
  }

  if (
    baValidation.status === baValidation.prevStatus ||
    baValidation.status === ChallengeStatuses.New ||
    baValidation.status === ChallengeStatuses.Draft ||
    baValidation.status === ChallengeStatuses.Active ||
    baValidation.status === ChallengeStatuses.Approved
  ) {
    // Update lock amount by increase the delta amount
    const amount = (baValidation.totalPrizesInCents - baValidation.prevTotalPrizesInCents) / 100;

    await lockAmount(baValidation.billingAccountId, rollback ? -amount : amount);
  } else if (baValidation.status === ChallengeStatuses.Completed) {
    // Challenge completed, unlock previous locked amount, and increase consumed amount
    const lockedAmount = baValidation.prevTotalPrizesInCents / 100;
    const consumedAmount = baValidation.totalPrizesInCents / 100;

    const dto: ConsumedAmountDTO = {
      challengeId: baValidation.challengeId!,
      markup: baValidation.markup,
      consumedAmount: rollback ? -consumedAmount : consumedAmount,
      unlockedAmount: rollback ? -lockedAmount : lockedAmount,
    };
    await consumeAmount(baValidation.billingAccountId, dto);
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
    const lockedAmount = baValidation.prevTotalPrizesInCents / 100;

    await lockAmount(baValidation.billingAccountId, rollback ? lockedAmount : -lockedAmount);
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
