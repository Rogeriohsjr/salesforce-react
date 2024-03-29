import ISalesforceErrorDTO from '../services/dtos/salesforce-error-dto';
import LocalhostRestApi from '../localhost/localhost-rest-api';
import { APIResponseNoContentType, APIResponseType } from '../services/api-response-type';
import AccountSalesforceRemoteAction from './salesforce/account-salesforce-remote-action';
import { IAccountBaseDTO } from './dtos/account-response-dto';
import SalesforceContext from '../services/salesforce-context';
import { HandlePromiseAPI } from '../services/handle-promise-api';

export default class AccountAPI {
  public static getAllAccounts(): Promise<APIResponseType<IAccountBaseDTO, ISalesforceErrorDTO>> {
    console.log('[getAllAccounts] Starts...');
    const promise = new Promise((resolve, rejected) => {
      if (SalesforceContext.isSalesforceContext()) {
        AccountSalesforceRemoteAction.getListOfAccount(resolve, rejected);
      } else {
        let url = '/api/account';
        LocalhostRestApi.get<IAccountBaseDTO>(url, resolve, rejected);
      }
    });
    return promise.then(HandlePromiseAPI.handleSuccessResponse).catch(HandlePromiseAPI.handleErrorResponse);
  }

  public static deleteAccount(pAccountId: string): Promise<APIResponseNoContentType<ISalesforceErrorDTO>> {
    console.log('[deleteAccount] Starts...');
    const promise = new Promise((resolve, rejected) => {
      if (SalesforceContext.isSalesforceContext()) {
        AccountSalesforceRemoteAction.deleteAccount(pAccountId, resolve, rejected);
      } else {
        let url = '/api/account/' + pAccountId;
        LocalhostRestApi.delete(url, resolve, rejected);
      }
    });
    return promise.then(HandlePromiseAPI.handleSuccessResponse).catch(HandlePromiseAPI.handleErrorResponse);
  }
}
