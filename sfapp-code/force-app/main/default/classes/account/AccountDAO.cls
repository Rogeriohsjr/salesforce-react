public with sharing class AccountDAO {
  public List<Account> getListOfAllAccounts() {
    return [SELECT Id, Name FROM Account];
  }

  public void deleteAccountByAccountId(Id pAccountId) {
    this.deleteListOfAccount(
      [SELECT Id, Name FROM Account WHERE Id = :pAccountId]
    );
  }

  public void deleteListOfAccount(List<Account> pListOfAccount) {
    if (Schema.SObjectType.Account.isDeletable()) {
      new AppException()
        .thrownErrorByCodeAndMessage(
          'EPAC-01',
          'You need to have delete permission in order to delete this account'
        );
    }

    delete pListOfAccount;
  }
}
