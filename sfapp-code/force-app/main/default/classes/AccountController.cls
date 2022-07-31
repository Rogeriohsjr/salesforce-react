global with sharing class AccountController {
    public AccountController() {
    }

    @RemoteAction
    global static List<Account> getListOfAccount() {
        List<Account> listOfAccount = [SELECT Id, Name FROM Account];
        return listOfAccount;
    }
}
