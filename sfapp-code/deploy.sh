#!/bin/bash
BGreen="\033[1;32m"
TITLECOLOR=$BGreen
NC='\033[0m' # No Color

# deploy.sh sf
# deploy.sh sf:prod
deployTo=$1;

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
