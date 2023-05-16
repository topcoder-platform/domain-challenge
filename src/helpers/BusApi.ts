const {
  AUTH0_URL,
  AUTH0_AUDIENCE,
  TOKEN_CACHE_TIME,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  TOPCODER_API_URL,
  KAFKA_ERROR_TOPIC,
  AUTH0_PROXY_SERVER_URL,
} = process.env;

import _ from "lodash";
const busApi = require("topcoder-bus-api-wrapper");
import { EVENT_MIME_TYPE, EVENT_ORIGINATOR } from "../common/Constants";

class BusApi {
  busApiClient: any;

  constructor() {
    if (KAFKA_ERROR_TOPIC != null || TOPCODER_API_URL == null) {
      this.busApiClient = busApi({
        AUTH0_URL,
        AUTH0_AUDIENCE,
        TOKEN_CACHE_TIME,
        AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET,
        BUSAPI_URL: TOPCODER_API_URL,
        KAFKA_ERROR_TOPIC,
        AUTH0_PROXY_SERVER_URL,
      });
    }
  }

  async postBusEvent(topic: String, payload: any): Promise<void> {
    if (this.busApiClient == null) {
      console.warn("Bus API client is not initialized");
      return;
    }
    const message = {
      topic,
      originator: EVENT_ORIGINATOR,
      timestamp: new Date().toISOString(),
      "mime-type": EVENT_MIME_TYPE,
      payload,
    };
    await this.busApiClient.postEvent(message);
  }
}

export default new BusApi();
