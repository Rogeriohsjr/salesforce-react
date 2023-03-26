global with sharing class AccountController {
    @RemoteAction
    global static AccountDTOProvider.ListOfAccountBaseDTO getListOfAccount() {
        AccountDTOProvider.ListOfAccountBaseDTO baseDTO = new AccountDTOProvider.ListOfAccountBaseDTO();
        baseDTO = new AccountService().getListOfAllAccountsDTO();
        return baseDTO;
    }
}
