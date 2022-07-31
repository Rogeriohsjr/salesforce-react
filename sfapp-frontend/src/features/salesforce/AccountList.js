import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList, setFakeList, cleanListOfAccounts } from "./accountListSlice";
import salesforceAPI from "./salesforce-api";

export function ListAccount() {
  const listOfAccount = useSelector(
    (state) => state.accountStore.listOfAccounts
  );
  const dispatch = useDispatch();

  function getListOfAccountsLi() {
    let menuItems = [];
    if (listOfAccount == null) {
      return menuItems;
    }

    console.log("[getListOfAccountsLi]", listOfAccount);
    for (var i = 0; i < listOfAccount.length; i++) {
      menuItems.push(
        <li key={i}>{listOfAccount[i].Id + " - " + listOfAccount[i].Name}</li>
      );
    }
    return menuItems;
  }

  function callSalesforce() {
    console.log("[callSalesforce] Start...");
    salesforceAPI.getListOfAccountsAPI(callSalesforceCallBack);
  }

  function callSalesforceCallBack(pResponse) {
    console.log("[callSalesforceCallBack] Starts...", pResponse);
    dispatch(setList(pResponse.result[0]));
  }

  return (
    <div>
      <h1>List of Account</h1>
      <div>
        <button onClick={() => dispatch(cleanListOfAccounts())}>
          Clean List
        </button>
        <button onClick={() => callSalesforce()}>
          Get Account List Without Redux
        </button>
        <button onClick={() => dispatch(setFakeList())}>
          Set Fake Account List with Redux
        </button>
        <button onClick={() => dispatch({ type: "GET_ACCOUNT_LIST_ASYNC" })}>
          Get List With Redux-Saga
        </button>
        <div>
          <ul>{getListOfAccountsLi()}</ul>
        </div>
      </div>
    </div>
  );
}
