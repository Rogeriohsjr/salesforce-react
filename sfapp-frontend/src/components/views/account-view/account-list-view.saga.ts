import { call, put, takeLatest } from 'redux-saga/effects';
import AccountAPI from '../../../apis/account-api/account-api';
import { IAccountBaseDTO, IDeleteAccountBaseDTO } from '../../../apis/account-api/dtos/account-response-dto';
import ISalesforceErrorDTO from '../../../apis/common/dtos/salesforce-error-dto';
import { ISalesforceResponseAPI } from '../../../apis/salesforce-interface';
import { IPayloadActionType } from '../../../classes/redux/common-action-types';
import { setListOfAccountReducerAction } from './account-list-view.slice';
import { ACCOUNT_LIST_ACTIONS } from './constants';

export function* loadAllAccountsSaga() {
  const result: ISalesforceResponseAPI<IAccountBaseDTO, ISalesforceErrorDTO> = yield call(AccountAPI.getAllAccounts);

  if (result.isSuccess) {
    yield put(setListOfAccountReducerAction(result.successResponse.listOfAccounts));
  } else {
    // Error
  }
}

export function* deleteAccountSaga(action: IPayloadActionType<string>) {
  const accountId = action.payload;
  const result: ISalesforceResponseAPI<IDeleteAccountBaseDTO, ISalesforceErrorDTO> = yield call(AccountAPI.deleteAccount, accountId);

  if (result.isSuccess) {
    yield* loadAllAccountsSaga();
  } else {
    // Error
  }
}

export default function* rootAccountListSaga() {
  yield takeLatest(ACCOUNT_LIST_ACTIONS.GET_ALL_ACCOUNTS, loadAllAccountsSaga);
  yield takeLatest(ACCOUNT_LIST_ACTIONS.DELETE_ACCOUNT, deleteAccountSaga);
}
