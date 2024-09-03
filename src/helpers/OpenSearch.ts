import { Client as OSClient } from "@opensearch-project/opensearch";

class OpenSearch {
  private osClient: any;
  private osHost: string | undefined;

  public useOpenSearch: boolean = process.env.OPENSEARCH === "true";

  constructor() {
    const { OS_HOST } = process.env;
    this.osHost = OS_HOST;
  }

  getOSClient() {
    if (this.osClient) {
      return this.osClient;
    }
    this.osClient = new OSClient({
      node: this.osHost,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    return this.osClient;
  }
}

export default new OpenSearch();
