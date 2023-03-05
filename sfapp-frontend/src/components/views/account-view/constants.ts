import { IAccountState } from "./interfaces";

export const ACCOUNT_STATE_DEFAULT: IAccountState = {
  listOfAccounts: [],
};


const NAMESPACE = 'sfReact/ACCOUNT-LIST';

export const ACCOUNT_LIST_ACTIONS = {
  GET_ALL_ACCOUNTS: `${NAMESPACE}/GET_ALL_ACCOUNTS`,
};
