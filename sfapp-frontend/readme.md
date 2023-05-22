
# React Folder

The intention of this folder/project:
1. Holds all the React files and App
2. Each Visualforce Page in our SF we will be its own App in React
3. We should be able to easily test and build react components, without the need to deploy to salesforce every time.


# Tech Stack

React, this is the framework that we are using to build our component.

Typescript, we use typescript instead of pure javascript, so we have type in mostly of our app code.

Redux, this is our state management

Redux-Saga, this helps us to organize our code into UI, Business Logic(State, API)

MirageJs, this help us to develop in localhost and test into localhost, it helps on mock the API layer that we will do with Salesforce.


# Folder Structure


Basic Standards I try to follow:
- Keep the UI and State separate
- Keep the API and Business Logic separate


Flow of the Components

UI -> State -> API -> SF or Mirage(Mock API)

React Component -> Redux/Redux-Saga -> Typescript Code API -> SF or Mirage


## Root Folder

state
- Contains all the States files that we use, it contains the Redux Reducer, Action, Selector and Sagas

ui
- Contains all the components that we build using react
- This is only the UI logic, we should not have Business Logic, API Logic here.
-- How do we know if it is a business logic or the component logic?

api
-  we should only api logic here
- This would do a callout to miragejs or salesforce or to something else

services
- The service folder on the root means that the files inside are shared with the ui or state
- This is more to where the logic will be, we can have a service into api because we might have a logic for the api where we want to centralize.
- We can also have a service for state, because multiple state reuses the same logic

## State folder

This folder should have all the states that we have for the app, if those state is basically handled by a management state. Internal component state doesn't need to be here.

### Domain state folder

This folder will have all the domain state files, a domain would be like, account dashboard, contacts dashboard, account management, etc..

### UI state folder
This folder will have all the ui state, which means a state that is only for the ui, example, image an error message popup, it does needs a state because any state can actually call that popup if an error happens, and that will never do any callout(api call) or it is a domain, this is a general ui and the state is managed only for that ui to show or hide.

Can a component have a Domain state and UI state?
TBD/Research - I think it can but I think it will be more code than necessary.

### Reducer(Slice), Selector, Action, Saga

For the Domain and UI state folders we will have a file for Reducer, Selector, Action and Saga.
I am also following the pattern to NOT add the name of the component into the file, the folder will tell which component is that.

Think of the flow like:

Component calls Action -> calls Saga -> calls Reducer -> updates State

Component calls Selector -> gets State

We will go over the sequence but backward(Reducer, Saga, Action).

**Reducer(slice.ts)**
- We should have no logic here, the Reducer should set the state and that is it.
- Reducer should be very dummy, so it is easier to read

Name convention:
- In reducer section, we use verb + Domain Action + Reducer(getListOfAccountsReducer, deleteAccountReducer, refreshAccountReducer)
- In initial state, we use a constant to set that which should be all SNAKE_UPPER_CASE
- We always export the Reducers using Toolkit

Do:
- Reducer does set our initial state
- Reducer does Update/Set/Change its own state

Do not:
- Reducer should not call another reducer layer
- Reducer should not call saga layer
- Reducer should not call component layer
- Reducer should not call API layer
- Reducer should not call an Action Layer

**Saga**
- It is where the business logic is and where we call the api and the reducer, that is the "service" of the component.
- Sagas can communicate with each other using actions.

Name convention:
- We do not have export in the saga function only in rootSaga
- We set as function* all the sagas
- We set using camelCase
- We use verb + Domain Action + Saga(getListOfAccountsSaga, deleteAccountSaga, refreshAccountSaga)

Do:
- Saga can call API layer
- Saga can call Reducer Layer that belongs to the saga domain(I believe it is one to one)
- Saga can call a Action Layer that it is not its own(Communicate with another Saga)

Do not:
- Saga should not call another Saga that is not its own
- Saga should not call another Reducer that it is not its own
- 

**Action**
- It is very dummy and simple, we use that for the react component/ui to call any action/logic to state and reducer.

Name convention:
- We have an export
- We set as const
- We set using camelCase
- We use verb + Domain Action(getListOfAccounts, deleteAccount, refreshAccount)

Do:
- Action can receive the payload
- Action has always a type, that type is linked with Saga

Do not:
- Actions does not have any logic


**Selectors**

- The purpose of a selector is to get information that is on the Storage(State)
- That could be simple or complex because we can apply logic to filter or parse specific records from the state

Name convention:
- We have an export
- We set as const
- We set using camelCase
- We use verb + Domain (getListOfAccounts, deleteAccount, refreshAccount)
- We also use question like "is" "has" "should" (isPopupVisible, hasSelectedItem)

Do:
- We call the State from the Storage
- We can have parameter into the method in selectors

Do not:
- We do not call storage/state from other domain/ui that doesn't belong to the folder


**Constants**

The purpose of this file is to keep our the constants that we will have for the State.

Name convention:
- We have export in the constants that we need to
- We use SNAKE_UPPER_CASE(TOAST_ALERT_ACTIONS, TOAST_ALERT_STATE_DEFAULT)


**Interfaces**

The purpose of this file is to centralize all the Interfaces that we use for that domain.

Name convention:
- We use I + Pascal_Case, I as Interface(IAlertToastState, IAlertToastProps)

