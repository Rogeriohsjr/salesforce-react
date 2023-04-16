import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { ROOT_SAGA } from './account-page.sagas';
import { accountListSlice } from '../../../../state/account-dashboard/account-list-view.slice';
import { toastAlertSlice } from '../../../../state/toast-alert/toast-alert.slice';

const sagaMiddleware = createSagaMiddleware();

export const accountPageStore = configureStore({
  reducer: {
    accountStore: accountListSlice.reducer,
    alertStore: toastAlertSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(ROOT_SAGA);

export default accountPageStore;
