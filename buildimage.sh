#!/bin/bash

set -eo pipefail

ENV=$1
ENV=`echo "$ENV" | tr '[:upper:]' '[:lower:]'`

informix_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/informix-access-layer:28ead7341cf8057cc5d614d3686dac97aa5d77e9
dynamo_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/dynamo-access-layer:28ead7341cf8057cc5d614d3686dac97aa5d77e9
anticorruption_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/anticorruption-layer:28ead7341cf8057cc5d614d3686dac97aa5d77e9
domain_challenge_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/domain-challenge:ade07caf6c129104edaf72c94997408f2840eb16

sed -i='' "s|dynamo-access-layer:latest|$dynamo_access_layer_TAG|" docker-compose.yml

sed -i='' "s|informix-access-layer:latest|$informix_access_layer_TAG|" docker-compose.yml

sed -i='' "s|anticorruption-layer:latest|$anticorruption_layer_TAG|" docker-compose.yml

sed -i='' "s|domain-challenge:latest|$domain_challenge_TAG|" docker-compose.yml
    
if [[ "$ENV" == prod ]]; then
    sed -i='' "s|grpcserver.topcoder-dev.com|grpcserver.topcoder.com|" docker-compose.yml
fi


