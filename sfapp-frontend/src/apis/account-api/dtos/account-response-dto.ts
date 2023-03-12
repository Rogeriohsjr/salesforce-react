export interface IAccountDTO {
  id: string;
  name: string;
}

export interface IAccountBaseDTO {
  listOfAccounts: IAccountDTO[];
}

export interface IDeleteAccountBaseDTO {
  isDeleted: boolean;
}