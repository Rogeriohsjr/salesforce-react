import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { accountListSlice } from '../../../components/views/account-view/account-list-view.slice';
import { ROOT_SAGA } from './account-page.sagas';

const sagaMiddleware = createSagaMiddleware();

export const accountPageStore = configureStore({
  reducer: {
    accountStore: accountListSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(ROOT_SAGA);

export default accountPageStore;
