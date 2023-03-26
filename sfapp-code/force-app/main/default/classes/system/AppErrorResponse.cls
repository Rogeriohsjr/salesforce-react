public with sharing class AppErrorResponse {
  private List<SalesforceErrorDTO> listOfSalesforceErrors;

  public AppErrorResponse() {
    this.listOfSalesforceErrors = new List<SalesforceErrorDTO>();
  }

  public AppErrorResponse addGeneralException(
    string pErroCode,
    Exception pGeneralException
  ) {
    string exceptionErrorMessage = pGeneralException.getMessage();

    SalesforceErrorDTO error = new SalesforceErrorDTO(
      pErroCode,
      exceptionErrorMessage
    );

    this.listOfSalesforceErrors.add(error);

    return this;
  }

  public AppErrorResponse addAppException(AppException pAppException) {
    string exceptionErrorMessage = pAppException.getMessage();

    SalesforceErrorDTO error = new SalesforceErrorDTO(
      exceptionErrorMessage.substringBefore(AppException.CODE_SEPARATOR),
      exceptionErrorMessage.substringAfter(AppException.CODE_SEPARATOR)
    );
    this.listOfSalesforceErrors.add(error);

    return this;
  }

  /**
   * This method should be used inside of Remote Action methods.
   * @exception This exception makes the message attribute in the RemoteAction response to be the message that we are sending in the Constructor.
   */
  public void thrownErrorOnRemoteAction() {
    string errorMessageAsJSON = JSON.Serialize(this.listOfSalesforceErrors);
    throw new AppException.AppSystemException(errorMessageAsJSON);
  }

  // Creating this class because it looks like more a Salesforce Class, so on the response we will support our error and salesforce error.
  // More Info: https://salesforce.stackexchange.com/a/161430
  public class SalesforceErrorDTO {
    public string errorCode { get; set; }
    public string message { get; set; }

    public SalesforceErrorDTO(string pErrorCode, string pErrorMessage) {
      this.errorCode = pErrorCode;
      this.message = pErrorMessage;
    }
  }
}
