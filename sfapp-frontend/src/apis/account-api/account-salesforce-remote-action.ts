import ISalesforceErrorDTO from '../common/dtos/salesforce-error-dto';
import { IAccountBaseDTO, IDeleteAccountBaseDTO } from './dtos/account-response-dto';

export default class AccountSalesforceRemoteAction {
  public static getListOfAccount(pSuccessCallBack: (response: IAccountBaseDTO) => void, pErrorCallBack: (response: ISalesforceErrorDTO) => void): void {
    window.Visualforce.remoting.Manager.invokeAction(
      window.sfGlobalRemote.getListOfAccountURL,
      function (result: any, event: any) {
        if (event.statusCode == 200) {
          pSuccessCallBack(result);
        } else {
          console.error('Error Calling Salesforce.', event, result);
          pErrorCallBack(event);
        }
      },
      { escape: false }
    );
  }

  public static deleteAccount(
    pAccountId: string,
    pSuccessCallBack: (response: IDeleteAccountBaseDTO) => void,
    pErrorCallBack: (response: ISalesforceErrorDTO) => void
  ): void {
    window.Visualforce.remoting.Manager.invokeAction(
      window.sfGlobalRemote.deleteAccountURL,
      pAccountId,
      function (result: any, event: any) {
        if (event.statusCode == 200) {
          pSuccessCallBack(result);
        } else {
          console.error('Error Calling Salesforce.', event, result);
          pErrorCallBack(event);
        }
      },
      { escape: false }
    );
  }
}
