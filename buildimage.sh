#!/bin/bash
set -eo pipefail
ENV=$1
ENV=`echo "$ENV" | tr '[:upper:]' '[:lower:]'`

informix_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/informix-access-layer:3972ecbd20828ef5c3c311625e8b85ae63e9e9b2
dynamo_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/dynamo-access-layer:870ed8d78e8548d3cfa805a5648a58c23b017d6b
anticorruption_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/anticorruption-layer:90da592f5f01b3563660b242a844dc768fefd336
domain_challenge_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/domain-challenge:5b70769c367001f9bd80dc0f8d40d91c02facc4a

sed -i='' "s|dynamo-access-layer:latest|$dynamo_access_layer_TAG|" docker-compose.yml

sed -i='' "s|informix-access-layer:latest|$informix_access_layer_TAG|" docker-compose.yml

sed -i='' "s|anticorruption-layer:latest|$anticorruption_layer_TAG|" docker-compose.yml

sed -i='' "s|domain-challenge:latest|$domain_challenge_TAG|" docker-compose.yml
    
if [[ "$ENV" == prod ]]; then
    sed -i='' "s|grpcserver.topcoder-dev.com|grpcserver.topcoder.com|" docker-compose.yml
fi


