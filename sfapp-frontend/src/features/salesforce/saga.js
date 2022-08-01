import { put, takeEvery, all } from "redux-saga/effects";
import salesforceAPI from "../salesforce/salesforce-api";
import { setList } from "../salesforce/accountListSlice";

export function* getListOfAccountFromSFAsync() {
  console.log("[getListOfAccountFromSFAsync] Inside...");

  const promise = new Promise((resolve) => {
    salesforceAPI.getListOfAccountsAPI(resolve);
  });

  const { result } = yield promise;
  yield put(setList(result));
}

export function* watchGetListOfAccountAsync() {
  console.log("[watchGetListOfAccountAsync] Inside...");
  yield takeEvery("GET_ACCOUNT_LIST_ASYNC", getListOfAccountFromSFAsync);
}

export default function* rootSaga() {
  yield all([watchGetListOfAccountAsync()]);
}
