import ISalesforceErrorDTO from '../../services/dtos/salesforce-error-dto';
import { handleSalesforceRemoteActionResponse } from '../../services/salesforce-context';
import { IAccountBaseDTO } from '../dtos/account-response-dto';

export default class AccountSalesforceRemoteAction {
  public static getListOfAccount(pSuccessCallBack: (response: IAccountBaseDTO) => void, pErrorCallBack: (response: ISalesforceErrorDTO[]) => void): void {
    console.log('[AccountSalesforceRemoteAction.getListOfAccount] Starts...');
    window.Visualforce.remoting.Manager.invokeAction(
      window.sfGlobalRemote.getListOfAccountURL,
      function (result: any, event: any) {
        handleSalesforceRemoteActionResponse(result, event, pSuccessCallBack, pErrorCallBack);
      },
      { escape: false }
    );
  }

  public static deleteAccount(pAccountId: string, pSuccessCallBack: (response: unknown) => void, pErrorCallBack: (response: ISalesforceErrorDTO[]) => void): void {
    console.log('[AccountSalesforceRemoteAction.deleteAccount] Starts...');
    window.Visualforce.remoting.Manager.invokeAction(
      window.sfGlobalRemote.deleteAccountByAccountIdURL,
      pAccountId,
      function (result: any, event: any) {
        handleSalesforceRemoteActionResponse(result, event, pSuccessCallBack, pErrorCallBack);
      },
      { escape: false }
    );
  }
}
