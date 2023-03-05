import { createSlice } from "@reduxjs/toolkit";
import { IPayloadActionType } from "../../../classes/redux/common-action-types";
import { IAccount } from "../../account-list/interfaces";
import { ACCOUNT_STATE_DEFAULT } from "./constants";
import { IAccountState } from "./interfaces";

export const accountListSlice = createSlice({
  name: "accountListSlice",
  initialState: ACCOUNT_STATE_DEFAULT,
  reducers: {
    setListOfAccountReducerAction: (
      state: IAccountState,
      action: IPayloadActionType<IAccount[]>
    ) => {
      state.listOfAccounts = [];
      state.listOfAccounts = action.payload;
    },
  },
});

export const { setListOfAccountReducerAction } = accountListSlice.actions;