import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAccountsAction } from '../../../state/account-dashboard/actions';
import { selectListOfAccounts } from '../../../state/account-dashboard/selectors';
import AccountTile from './account-tile';
import './styles.css';

const ListAccount = (): JSX.Element => {
  const listOfAccount = useSelector(selectListOfAccounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccountsAction());
  }, []);

  return (
    <div className="account-list__container">
      <div className="account_list__title">
        <h1>List of Account</h1>
      </div>
      <div className="account_list__actions">
        <button onClick={() => dispatch(getAllAccountsAction())}>Refresh</button>
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
