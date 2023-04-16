

# Approach 1
It has all the files in one place separate by the Folder and Feature.

Pros:
- All files are centralized
Cons:
- All files are centralized in one place, so if we reuse the state in a different ui, that wouldn't be nice because that would be come in a spaghetti code.

Is it easy to move that after?
yes

- toast-alert
  - services
    - interfaces.ts
    - constants.ts
  - state
    - toast-alert.action.ts
    - toast-alert.saga.ts
    - toast-alert.selectors.ts
    - toast-alert.slice.ts
    - toast-alert.state.test.ts
  - ui
    - toast-alert.css
    - toast-alert.tsx
  - test
    - toast-alert.ut.ts
    - toast-alert.command.ts
    - toast-alert.cmp.cy


toast-alert
- Component/Feature - Unique component, it can be reused or not.
/ Services
- It contains classes/constants/interfaces/types/enums to help the toast alert component to be typed and to help in the logic.
/ state
- It contains the state that the toast alert uses
/ ui
- It contains only logic for the ui, it doesn't have logic for state.
/ test
- It contains all the test related to that component


# Approach 2
This approach separates the State from the UI.

- ui
  - components
    - toast-alert
      - services
        - interfaces.ts
        - constants.ts
      - ui
        - toast-alert.css
        - toast-alert.tsx
      - test
        - toast-alert.ut.ts
        - toast-alert.command.ts
        - toast-alert.cmp.cy
  - pages/apps
    - account-dashboard-page
      - store
        - account-dashboard-page.store.ts
        - account-dashboard-page.saga.ts
  - view/containers
    - account-dashboard-view


- state
  - toast-alert
      - types.ts
      - toast-alert.action.ts
      - toast-alert.saga.ts
      - toast-alert.selectors.ts
      - toast-alert.slice.ts
      - toast-alert.state.test.ts


Things to keep in mind:
- Separate of concern on these areas:
- ui
- state
- api
- services
- e2e


Why separate them?

ui:
- Easier to focus only on the UI part and how it looks like
- No heavy business logic is implemented on the UI
- Easy to test

Don't do:
- We don't call an API class from UI
Do:
- We focus only in UI
- We use actions and selectors from State
Maybe:
- We call Services calls? Not sure

state:
  - Having a state to its own folder allows us to reuse the state if that is possible. 
    In case we decide to reuse the state to build the same page but with different layout and allow users to choose which layout they want to use.
  - Might be easier to Test since this is located in one place.
  - Might be easier to change fro Redux to Thunk or to another State Management, since this is focused in one place.
  - Might help to be used in a different UI, like React Native or other UI Framework.

Don't do:
  - Don't have UI? Should we say don't call UI Component?
Do:
  - We can call API layer, to get the Data
  - We can call Service Layer to process Data
  - We can call Reducers/Actions which set the States
  

api:
- Easier to add logic only for that layer
- That domain is only for the API Domain
- We can have logic to hold different API, like Call Salesforce or Localhost or an actual server.

Don't do:
- We don't add business logic here.
- We don't add UI components all here.
Do:
- We add only callouts logics on this folder
- Mostly callouts will be by Domain


services:
  - This will have all the heavy logic or logic used many times.
  - We will have util classes and helper classes.

Don't do:
  - We don't add UI Component here
  - We don't add State here
  - We don't do api calls here
Do:
  - We add heavy Business logic here
  - We add common logics here


