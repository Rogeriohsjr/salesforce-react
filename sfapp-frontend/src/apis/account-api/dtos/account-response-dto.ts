export interface IAccountDTO {
  id: string;
  name: string;
}

export default interface IAccountBaseDTO {
  listOfAccounts: IAccountDTO[];
}
