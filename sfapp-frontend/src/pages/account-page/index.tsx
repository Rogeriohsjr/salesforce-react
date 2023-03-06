import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { makeServer } from '../../apis/localhost/server';
import AccountListView from '../../components/views/account-view/account-list-view';
import accountPageStore from './store/account-page.store';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={accountPageStore}>
    <AccountListView />
  </Provider>
);
