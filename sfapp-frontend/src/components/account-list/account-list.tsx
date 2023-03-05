import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAccounts } from "../views/account-view/account-list.actions";
import { LIST_OF_ACCOUNTS } from "../views/account-view/account-list.selectors";

const ListAccount = () : JSX.Element => {
  const listOfAccount = useSelector(LIST_OF_ACCOUNTS);
  const dispatch = useDispatch();

  function getListOfAccountsLi() {
    let menuItems = [];
    if (listOfAccount == null) {
      return menuItems;
    }
    for (var i = 0; i < listOfAccount.length; i++) {
      menuItems.push(
        <li key={i}>{listOfAccount[i].id + " - " + listOfAccount[i].name}</li>
      );
    }
    return menuItems;
  }

  return (
    <div>
      <h1>List of Account</h1>
      <div>
        <button onClick={() => dispatch(getAllAccounts())}>
          Get List With Redux-Saga
        </button>
        <div>
          <ul>{getListOfAccountsLi()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ListAccount;
