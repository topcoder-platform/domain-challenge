FROM node:18.14.1-alpine3.17 as ts-compile
WORKDIR /usr/domain-challenge
COPY yarn*.lock ./
COPY package*.json ./
COPY tsconfig*.json ./
COPY .npmrc ./
RUN yarn install --frozen-lockfile --production=false
COPY . ./
RUN yarn build:app

FROM node:18.14.1-alpine3.17 as ts-remove
WORKDIR /usr/domain-challenge
COPY --from=ts-compile /usr/domain-challenge/yarn*.lock ./
COPY --from=ts-compile /usr/domain-challenge/package*.json ./
COPY --from=ts-compile /usr/domain-challenge/dist ./
COPY --from=ts-compile /usr/domain-challenge/.npmrc ./
RUN yarn install --frozen-lockfile --production=false

FROM gcr.io/distroless/nodejs:18
WORKDIR /usr/domain-challenge
COPY --from=ts-remove /usr/domain-challenge ./
USER 1000

ENV GRPC_SERVER_PORT=50052
ENV GRPC_SERVER_HOST=localhost
ENV GRPC_ACL_SERVER_HOST=localhost
ENV GRPC_ACL_SERVER_PORT=40020
ENV GRPC_NOSQL_SERVER_HOST=localhost
ENV GRPC_NOSQL_SERVER_PORT=50052
ENV REGISTRATION_PHASE_ID=""
ENV SUBMISSION_PHASE_ID=""
ENV CHECKPOINT_SUBMISSION_PHASE_ID=""
ENV TOPCODER_API_URL=""
ENV AUTH0_AUDIENCE=""
ENV AUTH0_CLIENT_ID=""
ENV AUTH0_CLIENT_SECRET=""
ENV AUTH0_PROXY_SERVER_URL=""
ENV AUTH0_URL=""
ENV ENV=""
ENV KAFKA_ERROR_TOPIC=""

CMD ["server.js"]
