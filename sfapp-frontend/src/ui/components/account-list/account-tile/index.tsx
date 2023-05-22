import React from 'react';
import { IAccountTileProps } from './interfaces';
import './styles.css';
import { deleteEditAccountAction } from '../../../../state/account-dashboard/actions';
import { useDispatch } from 'react-redux';

const AccountTile = (props: IAccountTileProps): JSX.Element => {
  const dispatch = useDispatch();
  const account = props.account;

  return (
    <div className="account-tile__container">
      <div className="account-tile__title">{account.name}</div>
      <div className="account-list-of-actions">
        <button onClick={() => dispatch(deleteEditAccountAction(account.id))}>Delete</button>
      </div>
    </div>
  );
};

export default AccountTile;
