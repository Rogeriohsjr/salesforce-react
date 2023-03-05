import ISalesforceErrorDTO from '../common/dtos/salesforce-error-dto';
import RestApi from '../common/rest-api';
import { ISalesforceResponseAPI } from '../salesforce-interface';
import AccountSalesforceRemoteAction from './account-salesforce-remote-action';
import IAccountBaseDTO from './dtos/account-response-dto';

export default class AccountAPI {
  public static getAllAccounts(): Promise<ISalesforceResponseAPI<IAccountBaseDTO, ISalesforceErrorDTO>> {
    const promise = new Promise((resolve, rejected) => {
      if (window.Visualforce != undefined) {
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
}
