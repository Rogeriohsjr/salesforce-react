import { call, put, takeLatest } from 'redux-saga/effects';
import AccountAPI from '../../api/account-api/account-api';
import { IAccountBaseDTO } from '../../api/account-api/dtos/account-response-dto';
import ISalesforceErrorDTO from '../../api/services/dtos/salesforce-error-dto';
import { APIResponseNoContentType, APIResponseType } from '../../api/services/api-response-type';
import { IPayloadActionType } from '../services/redux/common-action-types';
import { showToastAlertAction } from '../toast-alert/toast-alert.actions';
import { setListOfAccountReducer } from './account-list-view.slice';
import { ACCOUNT_LIST_ACTIONS } from './constants';

export function* loadAllAccountsSaga() {
  const result: APIResponseType<IAccountBaseDTO, ISalesforceErrorDTO> = yield call(AccountAPI.getAllAccounts);

  if (result.isSuccess) {
    yield put(setListOfAccountReducer(result.successResponse.listOfAccounts));
  } else {
    yield put(showToastAlertAction(result.errorResponse));
  }
}

export function* deleteAccountSaga(action: IPayloadActionType<string>) {
  const accountId = action.payload;
  const result: APIResponseNoContentType<ISalesforceErrorDTO> = yield call(AccountAPI.deleteAccount, accountId);

  if (result.isSuccess) {
    yield* loadAllAccountsSaga();
  } else {
    yield put(showToastAlertAction(result.errorResponse));
  }
}

export default function* rootAccountListSaga() {
  yield takeLatest(ACCOUNT_LIST_ACTIONS.GET_ALL_ACCOUNTS, loadAllAccountsSaga);
  yield takeLatest(ACCOUNT_LIST_ACTIONS.DELETE_ACCOUNT, deleteAccountSaga);
}
