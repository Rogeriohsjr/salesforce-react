import React from 'react';
import ListAccount from '../../1-components/account-list';
import AlertError from '../../1-components/toast-alert';

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
