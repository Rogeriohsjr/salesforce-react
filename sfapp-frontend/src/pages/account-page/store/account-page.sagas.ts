import { all, fork } from 'redux-saga/effects';
import rootToastAlertSaga from '../../../components/toast-alert/toast-alert.saga';
import rootAccountListSaga from '../../../components/views/account-view/account-list-view.saga';

const SAGAS = {
  rootAccountListSaga,
  rootToastAlertSaga
};

export const ROOT_SAGA = function* () {
  yield all([...Object.values(SAGAS)].map(fork));
};
