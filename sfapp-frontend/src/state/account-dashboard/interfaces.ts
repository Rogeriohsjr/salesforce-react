import { IAccount } from "../../ui/1-components/account-list/interfaces";

export interface IAccountState {
  listOfAccounts: IAccount[];
}

export interface IAccountRootStore {
  accountStore: IAccountState;
}
