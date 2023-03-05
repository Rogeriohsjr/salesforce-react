import { IAccount } from "../../account-list/interfaces";

export interface IAccountState {
  listOfAccounts: IAccount[];
}

export interface IAccountRootStore {
  accountStore: IAccountState;
}
