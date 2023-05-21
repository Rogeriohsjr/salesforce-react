:bell: This Project is not a Production ready code.
# :rocket: React with Salesforce
The goals of this project is to be a boiler plate for a Project in Salesforce that  uses React, Redux, Redux Toolkit, Redux-Saga and Typescript.
We also will have a pipeline and Cypress Component and E2E Test.

This should work on:

1. The App should work in Classic and Lightning.
2. The App should NOT ask or reuse Access Token from the User.
3. The App should be in Salesforce and feel like the user is inside of SF.


### :construction: Pending Items
1. Add CRUD
3. Add Component Test
4. Add E2E Test

## :iphone: Tech Stack

### Frontend
1. Visualforce Page
2. React
3. Redux
4. Redux-Saga
5. Typescript
6. CSS
7. Webpack
8. MirageJS

### Backend
1. Salesforce Apex

### More info
- This project is deploying to Salesforce using Development Mode.

# Project Structure

### sfapp-code Folder
This folder contains the Salesforce code, this is the main folder which will contains all the code that we need to make the visualforce page in salesforce to work.

Take a look in the README inside of this folder to know how to deploy to Salesforce.

### sfapp-frontend Folder
This folder contains the React code, this project is a normal react project. To run the react in localhost type: npm run serve.

Take a look in the README inside of this folder to know how to run and test and development.

### How it works
Basically, we have a Visualforce Page(MyAppVisualForcePage.page), which has a controller with Remote Action to get the Accounts. This Vfp is our container that we will inject React, which is done through exporting the React static resource into vsf page. The Static Resource has all the React build files.
Our React Build always build one static bundle. We don't generate random names, because we need the bundle with the same name to be referenced into the Visualforce page.

Take a look into the Readme for each file for more info.