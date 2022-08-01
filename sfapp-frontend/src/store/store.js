import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../features/salesforce/saga";
import accountListReducer from "../features/salesforce/accountListSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    accountStore: accountListReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);