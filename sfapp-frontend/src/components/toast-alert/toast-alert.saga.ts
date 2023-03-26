import { call, put, takeLatest } from 'redux-saga/effects';
import ISalesforceErrorDTO from '../../apis/common/dtos/salesforce-error-dto';
import { IPayloadActionType } from '../../classes/redux/common-action-types';
import { TOAST_ALERT_ACTIONS } from './constants';
import { hideToastAlertReducer, showToastAlertReducer } from './toast-alert.slice';

export function* showToastAlertSaga(action: IPayloadActionType<ISalesforceErrorDTO>) {
  yield put(showToastAlertReducer(action.payload));
}

export function* hideToastAlertSaga() {
  yield put(hideToastAlertReducer());
}

export default function* rootToastAlertSaga() {
  yield takeLatest(TOAST_ALERT_ACTIONS.SHOW_ALERT, showToastAlertSaga);
  yield takeLatest(TOAST_ALERT_ACTIONS.HIDE_ALERT, hideToastAlertSaga);
}
