public with sharing class AccountDAO {
    public List<Account> getListOfAllAccounts(){
        return [SELECT Id, Name FROM Account];
    }

    public List<Account> deleteAccount(){
        return [SELECT Id, Name FROM Account];
    }

    public void deleteListOfAccount(List<Account> pListOfAccount){
        delete pListOfAccount;
    }
}