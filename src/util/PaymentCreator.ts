import axios, { AxiosResponse } from "axios";

export interface PaymentDetail {
  totalAmount: number;
  grossAmount: number;
  installmentNumber: number;
  currency: string;
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
    [key: string]: string;
  };
  details: PaymentDetail[];
}

// TODO: Move this to a processor that handles challenge completion events from Harmony
class PaymentCreator {
  private static readonly BASE_URL =
    process.env.PAYMENTS_API_URL ?? "https://api.topcoder-dev.com/v5/payments";

  async createPayment(payload: PaymentPayload, token?: string): Promise<AxiosResponse<any>> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };

    try {
      console.log("Creating payment", payload);
      const response = await axios.post(PaymentCreator.BASE_URL + "/winnings", payload, config);
      return response;
    } catch (error) {
      console.error("Failed to create payment", error);
      throw error;
    }
  }
}

export default new PaymentCreator();
