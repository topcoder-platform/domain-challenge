#!/bin/bash

set -eo pipefail

ENV=$1
ENV=`echo "$ENV" | tr '[:upper:]' '[:lower:]'`

informix_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/informix-access-layer:73812d40e5867bc6a78cf45c35c57e5a4e51cac8
dynamo_access_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/dynamo-access-layer:8b61b8a3c160b3b03eeb4aee48eb869b3c5e110c
anticorruption_layer_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/anticorruption-layer:171b4ac4334590ea93dc2014562c2ca24ef7ce70
domain_challenge_TAG=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/domain-challenge:3b50c8b5def93f677dc55bf0e854a6d47054c71f

sed -i='' "s|dynamo-access-layer:latest|$dynamo_access_layer_TAG|" docker-compose.yml

sed -i='' "s|informix-access-layer:latest|$informix_access_layer_TAG|" docker-compose.yml

sed -i='' "s|anticorruption-layer:latest|$anticorruption_layer_TAG|" docker-compose.yml

sed -i='' "s|domain-challenge:latest|$domain_challenge_TAG|" docker-compose.yml
    
if [[ "$ENV" == prod ]]; then
    sed -i='' "s|grpcserver.topcoder-dev.com|grpcserver.topcoder.com|" docker-compose.yml
fi


