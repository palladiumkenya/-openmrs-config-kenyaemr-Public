#!/bin/bash

# Clean up previous build artifacts
echo "Cleaning up previous build artifacts ..."
rm -rf openmrs-config-kenyaemr
rm -rf frontend

# Build assets
echo "Building Kenya EMR 3.x assets ..."
CWD=$(pwd)
npx --legacy-peer-deps openmrs@5.2.1-pre.1094 build \
  --build-config ./configuration/dev-build-config.json \
  --target ./frontend \
  --page-title "KenyaEMR" \
  --support-offline false

# Assemble assets
echo "Assembling assets ..."
npx --legacy-peer-deps openmrs@5.2.1-pre.1094 assemble \
  --manifest \
  --mode config \
  --config ./configuration/prod-build-config.json \
  --target ./frontend

# Copy required files
echo "Copying required files ..."
cp "${CWD}/assets/kenyaemr-login-logo.png" "${CWD}/frontend"
cp "${CWD}/assets/kenyaemr-primary-logo.svg" "${CWD}/frontend"
cp "${CWD}/assets/favicon.ico" "${CWD}/frontend"
cp "${CWD}/configuration/prod-config.json" "${CWD}/frontend"
mv "${CWD}/frontend/prod-config.json" "${CWD}/frontend/config.json"

# Exit with success status
exit 0
