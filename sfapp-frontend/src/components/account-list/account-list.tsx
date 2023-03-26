import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAccounts } from '../views/account-view/account-list.actions';
import { LIST_OF_ACCOUNTS } from '../views/account-view/account-list.selectors';
import AccountTile from './account-tile/account-tile';
import './account-list.css';

const ListAccount = (): JSX.Element => {
  const listOfAccount = useSelector(LIST_OF_ACCOUNTS);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccounts());
  }, []);

  return (
    <div className="account-list__container">
      <h1>List of Account</h1>
      <div>
        <button onClick={() => dispatch(getAllAccounts())}>Refresh</button>
      </div>
      <div className="account-list__list-of-tiles">
        {listOfAccount.map((fiAccount) => (
          <AccountTile account={fiAccount} key={fiAccount.id} />
        ))}
      </div>
    </div>
  );
};

export default ListAccount;
