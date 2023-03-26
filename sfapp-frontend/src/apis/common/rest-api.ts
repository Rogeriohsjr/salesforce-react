import ISalesforceErrorDTO from "./dtos/salesforce-error-dto";

export default class RestApi {
  public static get<T>(
    pEndpoint: string,
    pSuccessCallBack: (response: T) => void,
    pErrorCallBack: (response: ISalesforceErrorDTO) => void
  ): void {
    // We will call function
    fetch(pEndpoint, {
      method: "get",
    })
      .then((response) => {
        return this.handleResponse<T>(response);
      })
      .then((response) => {
        pSuccessCallBack(response);
        return response;
      })
      .catch((error) => {
        console.error("[get] Error unexpected: ", pEndpoint, error);
        pErrorCallBack(error);
      });
  }

  public static post<T>(
    pEndpoint: string,
    pBody: any,
    pSuccessCallBack: (response: T) => void,
    pErrorCallBack: (response: ISalesforceErrorDTO) => void
  ): void {
    // We will call function
    fetch(pEndpoint, {
      method: "post",
      body: JSON.stringify(pBody),
    })
      .then((response) => {
        return this.handleResponse<T>(response);
      })
      .then((response) => {
        pSuccessCallBack(response);
        return response;
      })
      .catch((error) => {
        console.error("[post] Error unexpected: ", pEndpoint, error);
        pErrorCallBack(error);
      });
  }

  public static delete<T>(
    pEndpoint: string,
    pSuccessCallBack: (response: T) => void,
    pErrorCallBack: (response: ISalesforceErrorDTO) => void
  ): void {
    // We will call function
    fetch(pEndpoint, {
      method: "delete",
    })
      .then((response) => {
        return this.handleResponse<T>(response);
      })
      .then((response) => {
        pSuccessCallBack(response);
        return response;
      })
      .catch((error) => {
        console.error("[delete] Error unexpected: ", pEndpoint, error);
        pErrorCallBack(error);
      });
  }

  public static handleResponse<T>(response: any): T {
    if (!response.ok) {
      console.error(response);
      throw new Error("Network response was not ok");
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error(response);
      throw new TypeError(
        "Oops, we haven't got JSON! Content[" + contentType + "]"
      );
    }
    return response.json();
  }
}
