# Deploying


1 Create a Default Scratch Org

1.1. CMD + Shift + P > SFDX: Create Default Scratch Org

2 Once you have a scratch org we can deploy to code to that

2.1. Run the command below in your terminal

2.1.1. bash deploy.sh sf yes

3 Once the deployment is finished

3.1. Open the Scratch Org

3.2. Go to Setup > Visualforce Page

3.3. Look for MyAppVisualforcePage and click on Preview


### How the compile works

We will open the sfapp-frontend folder then we will build the react app which inside of the react will create the visualforce page javascript and css, once the compile is done, 
We will copy those files into the staticresource in sfapp-code project
Then we will deploy to salesforce the whole sfapp-code project, which sfdx will zip the staticresource and deploy that to Salesforce


## Puzzle Pieces

MyAppVisualForcePage

This visualforce page is responsible for:
1. Host the react app bundle, it is basically the container in sf for our app.
2. Share the Remote Actions to the window.GlobalRemoteActions.

AccountController

This is a normal controller that is liked with the Visualforce Page. There is nothing special on this controller, but we follow some patterns to return an error code so the react has a standard away to handle the error code.

AppResource

This is where we will have our javascript files, this will have the react app bundle and the styles.
The js and css will be added here after we build the react and we run the deploy.sh, the build in react will create the files, and the deploy.sh will move the files from the react project to sfapp-code project into the AppResource.
We split the vendors-react in one folder so if we have another account-dashboard we don't need to add into Static Resource, in other words, we don't need to duplicate the vendor into Static Resource.

Attention:
- Remember that static resource has a limit of 5 MB, if you are reaching this limit, take these approach:

1. Check why the static resource is getting too big, sometimes you are duplicating vendors in each domain bundle, like Account-Dashboard and Contact-Dashboard, they should have only its code and not duplicate library, the outside library should be in react-vendors or you can create another one.
2. If your app is really big, perhaps you can take the approach of creating a static resource folder only for the Vendors or only for each Domain or Visualforce Page. I would suggest you go to that path only if you have done the step 1 homework which is to check why your static resource is big.
