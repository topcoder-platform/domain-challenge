import _ from "lodash";
import axios from "axios";
import { StatusBuilder } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";

import m2m from "../helpers/MachineToMachineToken";
import { TGBillingAccounts } from "../common/Constants";

const { V3_BA_API_URL } = process.env;

export async function checkBalance(billingAccountId: number, amount: number) {
  if (amount === 0 || _.includes(TGBillingAccounts, billingAccountId)) {
    return;
  }

  let response;
  try {
    const m2mToken = await m2m.getM2MToken();

    response = await axios.get(
      `${V3_BA_API_URL}/${billingAccountId}/check-balance?amount=${amount}`,
      {
        headers: {
          Authorization: `Bearer ${m2mToken}`,
        },
      }
    );
  } catch (err: any) {
    throw new StatusBuilder()
      .withCode(Status.INTERNAL)
      .withDetails(err.response?.data?.result?.content ?? "Failed to check challenge balance")
      .build();
  }

  if (response.data.result.content != true) {
    throw new StatusBuilder()
      .withCode(Status.INVALID_ARGUMENT)
      .withDetails("Challenge amount exceeded budget")
      .build();
  }
}

export async function lockAmount(billingAccountId: number, amount: number) {
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

export async function consumeAmount(billingAccountId: number, unlockAmount: number, consumedAmount: number) {
  if ((consumedAmount === 0 && unlockAmount === 0) || _.includes(TGBillingAccounts, billingAccountId)) {
    return;
  }

  try {
    const m2mToken = await m2m.getM2MToken();

    await axios.patch(
      `${V3_BA_API_URL}/${billingAccountId}/consume-amount`,
      {
        param: {
            "unlockedAmount": unlockAmount,
            "consumedAmount": consumedAmount
        },
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
