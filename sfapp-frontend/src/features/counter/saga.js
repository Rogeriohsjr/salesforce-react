import { put, takeEvery, all } from "redux-saga/effects";
import { decrement, increment } from "./counterSlice";

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

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
