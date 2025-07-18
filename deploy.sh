#!/usr/bin/env sh
set -e

npm run build

# The following lines for Git operations (git init, git add, git commit, git push)
# are NOT needed here if you are using GitHub Actions for deployment.
# GitHub Actions will handle the building and pushing of the 'dist' folder
# to the 'gh-pages' branch automatically via the deploy.yml workflow.

# If you only need this script to perform a local build, then 'npm run build' is sufficient.
# You can optionally keep the 'cd dist' and 'cd -' if you have other local steps
# that rely on being in the 'dist' directory, but for a simple build trigger, they are not strictly necessary.
# However, for clarity and to ensure the build completes before the script exits,
# just 'npm run build' is often enough for a local "deploy" script if GitHub Actions handles the rest.