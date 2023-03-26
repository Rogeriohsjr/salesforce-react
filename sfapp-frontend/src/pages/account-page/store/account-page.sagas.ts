import { all, fork } from 'redux-saga/effects';
import rootAccountListSaga from '../../../components/views/account-view/account-list-view.saga';

const SAGAS = {
  rootAccountListSaga,
};

export const ROOT_SAGA = function* () {
  yield all([...Object.values(SAGAS)].map(fork));
};
