import { put, takeEvery, all } from "redux-saga/effects";
import salesforceAPI from "../salesforce/salesforce-api";
import { increment } from "./counterSlice";
import { setList } from "../salesforce/accountListSlice";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* incrementAsync() {
  console.log("[incrementAsync] Inside...");
  yield delay(3000);
  console.log("[incrementAsync] After 3 seconds...");
  yield put(increment());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  console.log("[watchIncrementAsync] Inside...");
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* getListOfAccountFromSFAsync() {
  console.log("[getListOfAccountFromSFAsync] Inside...");
  const promise = new Promise((resolve) => {
    console.log("[getListOfAccountFromSFAsync.Promise] Inside...");
    salesforceAPI.getListOfAccountsAPI(resolve);
  });

  const { result } = yield promise;
  console.log("[incrementAsync] After 3 seconds...", result);
  yield put(setList(result[0]));
}

export function* watchGetListOfAccountAsync() {
  console.log("[watchGetListOfAccountAsync] Inside...");
  yield takeEvery("GET_ACCOUNT_LIST_ASYNC", getListOfAccountFromSFAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchGetListOfAccountAsync()]);
}
