:bell: This Project is not a Production ready code.
# :rocket: React with Salesforce
The goals of this project are:
- Implement React with Salesforce.
- Implement React to be available on Lightning Experience(LEX) and Classic.
- Implement the React with Redux and Redux-Saga.
- Implement CRUD for Account(Create, Read, Update and Delete Accounts).

### :construction: Pending Items
1. Add CRUD
2. Add MirageJS for localhost
3. Add Unit Test

## :iphone: Tech Stack

### Frontend
1. Visualforce Page
2. React
3. Redux
4. Redux-Saga

### Backend
1. Salesforce Apex

### More info
- This project is deploying to Salesforce using Development Mode.
- Apex code is not following any pattern, it is very basic.
- Ideally, I would implement with Typescript, but this is only a prove of concept to make it work with React, Redux, Redux-Saga and LEX and Classic.

# Project Structure

### sfapp-code Folder
This folder contains the Salesforce code, this project is using sfdx.
- Create your scratch org when you are in this folder.
- After you create Scratch Org, use the sh deploy.sh to push all the code to your org.
-- deploy.sh basically gets the frontend and the backend and deploy to current sfdx org.
- 

### sfapp-frontend Folder
This folder contains the React code, this project is a normal react project. To run the react in localhost type: npm run serve.


### How it works
Basically, we have a Visualforce Page(MyAppVisualForcePage.page), which has a controller with Remote Action to get the Accounts. This Vfp is our container that we will inject React, which is done through exporting the React static resource into vsf page. The Static Resource has all the React build files.
Our React Build always build one static bundle. We don't generate random names, because we need the bundle with the same name to be referenced into the Visualforce page.