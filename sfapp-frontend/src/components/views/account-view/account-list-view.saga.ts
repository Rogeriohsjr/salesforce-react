import { call, put, takeLatest } from 'redux-saga/effects';
import AccountAPI from '../../../apis/account-api/account-api';
import IAccountBaseDTO from '../../../apis/account-api/dtos/account-response-dto';
import ISalesforceErrorDTO from '../../../apis/common/dtos/salesforce-error-dto';
import { ISalesforceResponseAPI } from '../../../apis/salesforce-interface';
import { setListOfAccountReducerAction } from './account-list-view.slice';
import { ACCOUNT_LIST_ACTIONS } from './constants';

export function* showSaga() {
  const result: ISalesforceResponseAPI<IAccountBaseDTO, ISalesforceErrorDTO> = yield call(AccountAPI.getAllAccounts);

  if (result.isSuccess) {
    // Success
    yield put(setListOfAccountReducerAction(result.successResponse.listOfAccounts));
  } else {
    // Error
  }
}

export default function* rootAccountListSaga() {
  yield takeLatest(ACCOUNT_LIST_ACTIONS.GET_ALL_ACCOUNTS, showSaga);
}
