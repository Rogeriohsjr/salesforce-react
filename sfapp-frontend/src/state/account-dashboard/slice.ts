import { createSlice } from "@reduxjs/toolkit";
import { IPayloadActionType } from "../services/redux/common-action-types";
import { ACCOUNT_STATE_DEFAULT } from "./constants";
import { IAccountState } from "./interfaces";
import { IAccount } from "../../ui/1-components/account-list/interfaces";

export const accountListSlice = createSlice({
  name: "accountListSlice",
  initialState: ACCOUNT_STATE_DEFAULT,
  reducers: {
    setListOfAccountReducer: (
      state: IAccountState,
      action: IPayloadActionType<IAccount[]>
    ) => {
      state.listOfAccounts = [];
      state.listOfAccounts = action.payload;
    },
  },
});

export const { setListOfAccountReducer } = accountListSlice.actions;