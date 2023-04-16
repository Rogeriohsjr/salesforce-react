import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAccounts } from '../../../state/account-dashboard/account-list.actions';
import { LIST_OF_ACCOUNTS } from '../../../state/account-dashboard/account-list.selectors';
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
      <div className="account_list__title">
        <h1>List of Account</h1>
      </div>
      <div className="account_list__actions">
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
