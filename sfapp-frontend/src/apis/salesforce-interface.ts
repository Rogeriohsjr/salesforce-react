export interface ISalesforceResponseAPI<T, K> {
  successResponse?: T;
  errorResponse?: K;
  isSuccess: boolean;
}
