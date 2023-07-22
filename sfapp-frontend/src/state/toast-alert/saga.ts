import { put, takeLatest } from 'redux-saga/effects';
import { hideToastAlertReducer, showToastAlertReducer } from './slice';
import { IPayloadActionType } from '../services/redux/common-action-types';
import { TOAST_ALERT_ACTIONS } from './constants';
import { IToastAlertMessage } from '../../ui/components/toast-alert/interfaces';

function* showToastAlertSaga(action: IPayloadActionType<IToastAlertMessage>) {
  yield put(showToastAlertReducer(action.payload));
}

function* hideToastAlertSaga() {
  yield put(hideToastAlertReducer());
}

export default function* rootToastAlertSaga() {
  yield takeLatest(TOAST_ALERT_ACTIONS.SHOW_ALERT, showToastAlertSaga);
  yield takeLatest(TOAST_ALERT_ACTIONS.HIDE_ALERT, hideToastAlertSaga);
}
