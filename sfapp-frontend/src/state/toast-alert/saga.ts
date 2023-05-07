import { put, takeLatest } from 'redux-saga/effects';
import { hideToastAlertReducer, showToastAlertReducer } from './slice';
import { IPayloadActionType } from '../services/redux/common-action-types';
import ISalesforceErrorDTO from '../../api/services/dtos/salesforce-error-dto';
import { TOAST_ALERT_ACTIONS } from './constants';

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
