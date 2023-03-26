global with sharing class AccountController {
  @RemoteAction
  global static AccountDTOProvider.ListOfAccountBaseDTO getListOfAccount() {
    AccountDTOProvider.ListOfAccountBaseDTO baseDTO = new AccountDTOProvider.ListOfAccountBaseDTO();
    try {
      baseDTO = new AccountService().getListOfAllAccountsDTO();
    } catch (AppException ex) {
      new AppErrorResponse().addAppException(ex).thrownErrorOnRemoteAction();
    } catch (Exception ex) {
      new AppErrorResponse()
        .addGeneralException('[GEAC01]', ex)
        .thrownErrorOnRemoteAction();
    }
    return baseDTO;
  }

  @RemoteAction
  global static void deleteAccountByAccountId(String pAccountId) {
    try {
      new AccountService().deleteAccountByAccountId(pAccountId);
    } catch (AppException ex) {
      new AppErrorResponse().addAppException(ex).thrownErrorOnRemoteAction();
    } catch (Exception ex) {
      new AppErrorResponse()
        .addGeneralException('[GEAC01]', ex)
        .thrownErrorOnRemoteAction();
    }
  }
}
