const salesforceAPI = {
  getListOfAccountsAPI: (pCallback) => {
    console.log("[getListOfAccounts] Starts...");

    Visualforce.remoting.Manager.invokeAction(
      sfGlobalRemote.getListOfAccountURL,
      function (result, event) {
        console.log("[getListOfAccounts] Response", result, event);
        pCallback(result);
      },
      { escape: true }
    );
  },
};

export default salesforceAPI;
