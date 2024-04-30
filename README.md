# Domain Challenge

This is a simple gRPC service that implements the [Domain Layer: Challenge](https://github.com/topcoder-platform/plat-interface-definition/tree/main/domain-layer/challenge) interface. Domain Challenge is responsible for _syncronously_ keeping Informix and v5 Data Stores (Challenge DynamoDB Tables) in sync. 

All CRUD operations performed in the Challenge API requires a gRPC call to domain challenge. The following is an outline of the events the follow

1. domain challenge uses [dynamo-access-layer](https://github.com/topcoder-platform/dynamo-access-layer) to update the relevant dynamodb tables
2. domain challenge maps the incoming input to necessary legacy object format required to keep the challenge(project) in legacy in sync
3. domain challenge uses [anticorruption-layer](https://github.com/topcoder-platform/anticorruption-layer) to update Informix

All CRUD operations performed in the legacy system that need to kept in sync in V5 make a syncronous call to [anticorruption-layer](https://github.com/topcoder-platform/anticorruption-layer) which results in a syncronous call to domain-challenge. domain challenge then updates relevant v5 data stores.

This ensures both data stores are kept in sync regardless of where the operation happens. In addition domain challenge is responsible for the following operations
1. locking & unlocking budget
2. generating payment records using [topcoder wallet api] (http://github.com/topcoder-platform/wallet)

# Local Setup

## Dependencies

1. NodeJS 18+
2. Yarn 1.22+
3. Typescript 5+
4. dynamo-access-layer
5. anticorruption-layer

## Required Environment Variables

The following environment variables are required. Placing a .env file in the root of the project will automatically load these variables.
```env
ENV=local

GRPC_SERVER_HOST="localhost"
GRPC_SERVER_PORT=8888

GRPC_NOSQL_SERVER_HOST="localhost"
GRPC_NOSQL_SERVER_PORT=50052

GRPC_ACL_SERVER_HOST=localhost
GRPC_ACL_SERVER_PORT=40020

REGISTRATION_PHASE_ID=
SUBMISSION_PHASE_ID=
CHECKPOINT_SUBMISSION_PHASE_ID=

AUTH_SECRET=
AUTH0_AUDIENCE=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_PROXY_SERVER_URL=
AUTH0_URL=

V4_CHALLENGE_API_URL=https://api.topcoder-dev.com/v4/challenges
V4_TECHNOLOGIES_API_URL=https://api.topcoder-dev.com/v4/technologies
V4_PLATFORMS_API_URL=https://api.topcoder-dev.com/v4/platforms
V3_BA_API_URL=https://api.topcoder-dev.com/v3/billing-accounts

TOPCODER_API_URL=https://api.topcoder-dev.com/v5

ES_HOST=https://admin:admin@localhost:9200/
ES_INDEX=challenge
ES_REFRESH=true

KAFKA_ERROR_TOPIC="local.error.topic"

AWS_REGION=us-east-1
```

## Local Development

1. Install dependencies. `domain-challenge` uses topcoder-framework which is published in AWS CodeArtifact. To ensure all dependencies are correctly downloaded log into aws codeartifact first

```bash
aws codeartifact login --tool npm --repository topcoder-framework --domain topcoder --domain-owner 409275337247 --region us-east-1 --namespace @topcoder-framework
yarn i
```

_Note: A valid AWS session is required for the above command to work. Ensure that you have the correct aws environment variables set_


2. Start the gRPC server

```bash
yarn start
```

## Deployment instructions

The primary branch of this repo is the `main` branch. Opening a pull request to the main branch will kick off building a docker image. Check [CircleCI](https://app.circleci.com/pipelines/github/topcoder-platform/domain-challenge/717/workflows/76185a2f-9a99-4006-9fb4-71568a30fe57/jobs/744), specifically the Publish docker iamge to get the image tag. Use the tag for deploying to dev environment - see the branch deploy/dev, buildimage.sh.

After the PR is merged, follow the same steps.  For production deploys use `deploy/prod` branch