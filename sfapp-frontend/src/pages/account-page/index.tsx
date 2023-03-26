import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import AccountListView from '../../components/views/account-view/account-list-view';
import accountPageStore from './store/account-page.store';
import './index.css';

import { makeServer } from '../../apis/localhost/server';

if (process.env.MIRAGE_ON === 'YES') {
  makeServer({ environment: 'development' });
}

window.fsReact = {};
window.fsReact.addMainPage = function (pContainer: HTMLDivElement) {
  const root = createRoot(pContainer);
  root.render(
    <Provider store={accountPageStore}>
      <AccountListView />
    </Provider>
  );
};
