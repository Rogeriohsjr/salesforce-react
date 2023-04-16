global class AccountDTOProvider {
  global class AccountDTO {
    public string id;
    public string name;
  }

  global class ListOfAccountBaseDTO {
    public List<AccountDTO> listOfAccounts;
    public ListOfAccountBaseDTO() {
      this.listOfAccounts = new List<AccountDTO>();
    }
  }
}
