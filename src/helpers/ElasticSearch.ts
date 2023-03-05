import { Client as ESClient } from "@opensearch-project/opensearch"

class ElasticSearch {
    private esClient: any;
    private esHost: string | undefined;

    constructor() {
        const { ES_HOST } = process.env;
        this.esHost = ES_HOST
    }

    getESClient() {
        if (this.esClient) {
            return this.esClient;
        }
        this.esClient = new ESClient({
            node: this.esHost,
            ssl: {
                rejectUnauthorized: false,
            },
        });
        return this.esClient;
    }
}

export default new ElasticSearch();
