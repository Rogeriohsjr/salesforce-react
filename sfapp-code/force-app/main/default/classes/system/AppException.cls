public with sharing class AppException extends Exception {
  public static final string CODE_SEPARATOR = '@CodeSeparator@';

  public void thrownErrorByCodeAndMessage(string pCode, string pMessage) {
    throw new AppException(pCode + CODE_SEPARATOR + pMessage);
  }

  public class AppSystemException extends Exception {
  }
}
