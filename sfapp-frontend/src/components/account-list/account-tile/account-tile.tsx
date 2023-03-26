import React from 'react';
import { IAccountTileProps } from './interfaces';
import './account-tile.css';
import { deleteEditAccount } from '../../views/account-view/account-list.actions';
import { useDispatch } from 'react-redux';

const AccountTile = (props: IAccountTileProps): JSX.Element => {
  const dispatch = useDispatch();
  const account = props.account;

  return (
    <div className="account-tile__container">
      <div className="account-tile__title">{account.name}</div>
      <div className="account-list-of-actions">
        <button onClick={() => dispatch(deleteEditAccount(account.id))}>Delete</button>
      </div>
    </div>
  );
};

export default AccountTile;