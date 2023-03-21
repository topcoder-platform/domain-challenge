import { Client as ESClient } from "@opensearch-project/opensearch";
import elasticsearch from "elasticsearch";
import AWS from "aws-sdk";

class ElasticSearch {
  private esClient: any;
  private esHost: string | undefined;

  public useOpenSearch: boolean = process.env.OPENSEARCH === "true";

  constructor() {
    const { ES_HOST } = process.env;
    this.esHost = ES_HOST;
  }

  getESClient() {
    if (this.esClient) {
      return this.esClient;
    }
    if (this.useOpenSearch) {
      if (/.*amazonaws.*/.test(this.esHost!)) {
        AWS.config.update({
          region: "us-east-1",
          credentials: new AWS.EnvironmentCredentials("AWS"),
        });
        this.esClient = new elasticsearch.Client({
          apiVersion: "6.8",
          hosts: this.esHost!,
          connectionClass: require("http-aws-es"), // eslint-disable-line global-require
        });
      } else {
        this.esClient = new elasticsearch.Client({
          apiVersion: "6.8",
          hosts: this.esHost!,
        });
      }
    } else {
      this.esClient = new ESClient({
        node: this.esHost,
        ssl: {
          rejectUnauthorized: false,
        },
      });
    }
    return this.esClient;
  }
}

export default new ElasticSearch();
