import { createSlice } from "@reduxjs/toolkit";

export const accountListSlice = createSlice({
  name: "accountList",
  initialState: {
    listOfAccounts: [],
  },
  reducers: {
    setList: (state, action) => {
      state.listOfAccounts = [];
      state.listOfAccounts.push(...action.payload);
    },
    setFakeList: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.listOfAccounts = [
        {
          Id: "1233",
          Name: "Account 1",
        },
        {
          Id: "2",
          Name: "Account 2",
        },
      ];
    },
    cleanListOfAccounts: (state) => {
      state.listOfAccounts = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, setFakeList, cleanListOfAccounts } =
  accountListSlice.actions;

export default accountListSlice.reducer;
