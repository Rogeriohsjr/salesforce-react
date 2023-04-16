#!/bin/bash
BGreen="\033[1;32m"
TITLECOLOR=$BGreen
NC='\033[0m' # No Color

# Deploying using Prod config or dev Config for the React
# deploy.sh sf
# deploy.sh sf:prod
deployTo=$1;

# Create a Scratch Org or Not
# deploy.sh sf:prod yes
createNewOrg=$2;

if [[ $createNewOrg == "yes" ]];
then
  echo "${TITLECOLOR}=== Creating new Scratch Org ===${NC}"
  echo "Generating new Scratch Org...."
  sfdx force:org:create -f config/project-scratch-def.json --setalias test-scr1 --durationdays 2 --setdefaultusername --json --noancestors --loglevel fatal
fi

echo "${TITLECOLOR}=== Building Frontend ===${NC}"
cd ..
cd sfapp-frontend
if [[ $deployTo == "sf:prod" ]];
then
  npm run build:prod
else
  npm run build:sf
fi

echo "${TITLECOLOR}=== Moving the Frontend to Salesforce ===${NC}"
cd ..
cd sfapp-code

echo "Resetting Static Resource - App Resource Folder..."
rm -rfv force-app/main/default/staticresources/AppResource/*

echo "Copying Latest Frontend App in App Resource Folder..."
cp -R ../sfapp-frontend/build/* force-app/main/default/staticresources/AppResource
rm -rfv force-app/main/default/staticresources/AppResource/pages/vendors-localhost/

echo "${TITLECOLOR}=== Deploying All Code to Salesforce ===${NC}"
sh sfdx force:source:push --forceoverwrite

echo "${TITLECOLOR}=== Deploying to Salesforce Finished ===${NC}"
