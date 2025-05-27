import axios, { AxiosError, AxiosResponse } from "axios";

export interface PaymentDetail {
  totalAmount: number;
  grossAmount: number;
  installmentNumber: number;
  currency: string;
  billingAccount: string;
}

export interface PaymentPayload {
  winnerId: string;
  type: string;
  origin: string;
  category: string;
  title: string;
  description: string;
  externalId: string;
  attributes?: {
    [key: string]: string | boolean | number;
  };
  details: PaymentDetail[];
}

// TODO: Move this to a processor that handles challenge completion events from Harmony
class FinanceApi {
  private static readonly BASE_URL =
    (process.env.TOPCODER_API_ENDPOINT ?? "https://api.topcoder-dev.com/v5") + "/finance";

  async createPayment(
    payload: PaymentPayload,
    token?: string,
    attempts = 0
  ): Promise<AxiosResponse<any> | void> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };

    try {
      console.log(payload.externalId, "Creating payment. Attempt", attempts, payload);
      const response = await axios.post(FinanceApi.BASE_URL + "/winnings", payload, config);
      console.log("Payment created", response.data);
      return response;
    } catch (error) {
      const status = (error as AxiosError).response?.status;
      const errorBody = (error as AxiosError).response?.data;
      console.error(payload.externalId, "Failed to create payment. Status Code", status, errorBody);
      if (attempts < 3 && status === 504) {
        console.log("Retrying payment creation");
        this.createPayment(payload, token, attempts + 1);
      } else {
        console.error("Failed to create payment after 3 attempts");
      }
    }
  }

  async getPaymentsByChallengeId(challengeId: string, token?: string): Promise<any[]> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  
    const payload = {
      externalIds: [challengeId],
    };
  
    try {
      const response = await axios.post(FinanceApi.BASE_URL + "/winnings/list", payload, config);
      return response.data.data;
    } catch (err) {
      return [];
    }
  }
  
}

export default new FinanceApi();
