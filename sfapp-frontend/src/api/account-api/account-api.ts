import ISalesforceErrorDTO from '../services/dtos/salesforce-error-dto';
import RestApi from '../services/rest-api';
import { APIResponseNoContentType, APIResponseType } from '../services/api-response-type';
import AccountSalesforceRemoteAction from './account-salesforce-remote-action';
import { IAccountBaseDTO } from './dtos/account-response-dto';
import SalesforceContext from '../../services/salesforce/salesforce-context';

export default class AccountAPI {
  public static getAllAccounts(): Promise<APIResponseType<IAccountBaseDTO, ISalesforceErrorDTO>> {
    console.log('[getAllAccounts] Starts...');
    const promise = new Promise((resolve, rejected) => {
      if (SalesforceContext.isSalesforceContext()) {
        AccountSalesforceRemoteAction.getListOfAccount(resolve, rejected);
      } else {
        let url = '/api/account';
        RestApi.get<IAccountBaseDTO>(url, resolve, rejected);
      }
    });

    return promise
      .then((pResponse: IAccountBaseDTO) => {
        return {
          successResponse: pResponse,
          isSuccess: true,
        };
      })
      .catch((response: ISalesforceErrorDTO) => ({
        errorResponse: response,
        isSuccess: false,
      }));
  }

  public static deleteAccount(pAccountId: string): Promise<APIResponseNoContentType<ISalesforceErrorDTO>> {
    console.log('[deleteAccount] Starts...');
    const promise = new Promise((resolve, rejected) => {
      if (SalesforceContext.isSalesforceContext()) {
        AccountSalesforceRemoteAction.deleteAccount(pAccountId, resolve, rejected);
      } else {
        let url = '/api/account/' + pAccountId;
        RestApi.delete(url, resolve, rejected);
      }
    });

    return promise
      .then(() => {
        return {
          isSuccess: true,
        };
      })
      .catch((response: ISalesforceErrorDTO[]) => ({
        errorResponse: response[0],
        isSuccess: false,
      }));
  }
}
