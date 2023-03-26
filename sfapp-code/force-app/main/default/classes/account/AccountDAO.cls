public with sharing class AccountDAO {
    public List<Account> getListOfAllAccounts(){
        return [SELECT Id, Name FROM Account];
    }

    public void deleteAccountByAccountId(Id pAccountId){
        this.deleteListOfAccount([SELECT Id, Name FROM Account where Id = :pAccountId]);
    }

    public void deleteListOfAccount(List<Account> pListOfAccount){
        delete pListOfAccount;
    }
}