export default class SalesforceContext {
  static isSalesforceContext = (): boolean => {
    return window.Visualforce != undefined;
  };
}
