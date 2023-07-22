import ISalesforceErrorDTO from "./dtos/salesforce-error-dto";

export default class SalesforceContext {
  static isSalesforceContext = (): boolean => {
    return window.Visualforce != undefined;
  };
}

const handleSalesforceError = (pResult: any, pEvent: any, pErrorCallBack: (pListOfError: ISalesforceErrorDTO[]) => void): void => {
  console.error('Error Calling Salesforce.', pResult, pEvent);
  const parsed = JSON.parse(pEvent.message);
  pErrorCallBack(parsed);
};

export const handleSalesforceRemoteActionResponse = (
  pResult: any,
  pEvent: any,
  pSuccessCallBack: (pResult: any) => void,
  pErrorCallBack: (pListOfError: ISalesforceErrorDTO[]) => void
): void => {
  if (pEvent.statusCode == 200) {
    if (pSuccessCallBack == undefined) {
      // 204 - No Content, do nothing.
    } else {
      pSuccessCallBack(pResult);
    }
  } else {
    handleSalesforceError(pResult, pEvent, pErrorCallBack);
  }
};
