#!/bin/bash

set -eo pipefail

ENV=$1
ENV=`echo "$ENV" | tr '[:upper:]' '[:lower:]'`

informix_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/informix-access-layer:b3d3389f204e8f5fe1aa25b81e71d37aa982ffe7
dynamo_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/dynamo-access-layer:9818e01a468eb0ba6e20bd6e7f0ca0b160358283
anticorruption_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/anticorruption-layer:de7c5286c593663297ebc088a7b24da9a0c4a3c8
domain_challenge_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/domain-challenge:912c7e32f7ef9e994ecec8b1b277f39000edbd8a

sed -i='' "s|dynamo-access-layer:latest|$dynamo_access_layer_TAG|" docker-compose.yml

sed -i='' "s|informix-access-layer:latest|$informix_access_layer_TAG|" docker-compose.yml

sed -i='' "s|anticorruption-layer:latest|$anticorruption_layer_TAG|" docker-compose.yml

sed -i='' "s|domain-challenge:latest|$domain_challenge_TAG|" docker-compose.yml
    
if [[ "$ENV" == prod ]]; then
    sed -i='' "s|grpcserver.topcoder-dev.com|grpcserver.topcoder.com|" docker-compose.yml
fi



