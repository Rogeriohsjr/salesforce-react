import React from 'react';
import ListAccount from '../../account-list/account-list';
import AlertError from '../../toast-alert/toast-alert';

const AccountListView = (): JSX.Element => {
  return (
    <div>
      <h2>React App for Salesforce</h2>
      <AlertError />
      <ListAccount />
    </div>
  );
};

export default AccountListView;
