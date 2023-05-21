import { IAccount } from "../../ui/components/account-list/interfaces";

export interface IAccountState {
  listOfAccounts: IAccount[];
}

export interface IAccountRootStore {
  accountStore: IAccountState;
}
