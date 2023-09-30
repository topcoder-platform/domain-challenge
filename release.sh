#!/bin/sh

# Ensure we have the required environment variables
if [ -z "$GH_TOKEN" ]; then
    echo "ERROR: GH_TOKEN environment variable is not set."
    exit 1
fi

if [ -z "$NPM_TOKEN" ]; then
    echo "WARNING: NPM_TOKEN environment variable is not set. Will not publish to npm."
fi

# Detect current branch
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)

if [ "$CURRENT_BRANCH" = "main" ]; then
    # On main branch: Do a standard release
    npx semantic-release
else
    # On feature branches: Dry run to see next version and changes (won't actually publish)
    npx semantic-release --dry-run
fi
