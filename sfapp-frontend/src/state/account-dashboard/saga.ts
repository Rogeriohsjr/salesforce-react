import { call, put, takeLatest } from 'redux-saga/effects';
import AccountAPI from '../../api/account-api/account-api';
import { IAccountBaseDTO } from '../../api/account-api/dtos/account-response-dto';
import ISalesforceErrorDTO from '../../api/services/dtos/salesforce-error-dto';
import { APIResponseNoContentType, APIResponseType } from '../../api/services/api-response-type';
import { IPayloadActionType } from '../services/redux/common-action-types';
import { showToastAlertAction } from '../toast-alert/actions';
import { setListOfAccountReducer } from './slice';
import { ACCOUNT_LIST_ACTIONS } from './constants';
import { EnumToastTypes } from '../../ui/components/toast-alert/constants';

function* loadAllAccountsSaga() {
  const result: APIResponseType<IAccountBaseDTO, ISalesforceErrorDTO> = yield call(AccountAPI.getAllAccounts);

  if (result.isSuccess) {
    yield put(setListOfAccountReducer(result.successResponse.listOfAccounts));
  } else {
    yield put(showToastAlertAction({ type: EnumToastTypes.Error, messageCode: result.errorResponse.errorCode, messageText: result.errorResponse.message }));
  }
}

function* deleteAccountSaga(action: IPayloadActionType<string>) {
  const accountId = action.payload;
  const result: APIResponseNoContentType<ISalesforceErrorDTO> = yield call(AccountAPI.deleteAccount, accountId);

  if (result.isSuccess) {
    yield put(showToastAlertAction({ type: EnumToastTypes.Success, messageCode: '', messageText: 'Deleted Successfully' }));
    yield* loadAllAccountsSaga();
  } else {
    yield put(showToastAlertAction({ type: EnumToastTypes.Error, messageCode: result.errorResponse.errorCode, messageText: result.errorResponse.message }));
  }
}

export default function* rootAccountListSaga() {
  yield takeLatest(ACCOUNT_LIST_ACTIONS.GET_ALL_ACCOUNTS, loadAllAccountsSaga);
  yield takeLatest(ACCOUNT_LIST_ACTIONS.DELETE_ACCOUNT, deleteAccountSaga);
}
