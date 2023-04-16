import { all, fork } from 'redux-saga/effects';
import rootAccountListSaga from '../../../../state/account-dashboard/account-list-view.saga';
import rootToastAlertSaga from '../../../../state/toast-alert/toast-alert.saga';

const SAGAS = {
  rootAccountListSaga,
  rootToastAlertSaga
};

export const ROOT_SAGA = function* () {
  yield all([...Object.values(SAGAS)].map(fork));
};
