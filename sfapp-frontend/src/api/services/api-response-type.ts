export interface APIResponseType<T, K> {
  successResponse?: T;
  errorResponse?: K;
  isSuccess: boolean;
}

export interface APIResponseNoContentType<ErrorType> {
  errorResponse?: ErrorType;
  isSuccess: boolean;
}