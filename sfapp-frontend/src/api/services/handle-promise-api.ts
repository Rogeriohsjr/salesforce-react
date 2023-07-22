import { APIResponseNoContentType } from "./api-response-type";
import ISalesforceErrorDTO from "./dtos/salesforce-error-dto";


export class HandlePromiseAPI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static handleSuccessResponse(pResponse: any): any {
    return {
      successResponse: pResponse,
      isSuccess: true,
    };
  }

  static handleErrorResponse(response: ISalesforceErrorDTO[]): APIResponseNoContentType<ISalesforceErrorDTO> {
    console.error('[handleErrorResponse]', response);
    return {
      errorResponse: response[0],
      isSuccess: false,
    };
  }
}