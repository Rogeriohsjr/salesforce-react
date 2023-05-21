import React from 'react';
import ListAccount from '../../components/account-list';
import AlertError from '../../components/toast-alert';

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
