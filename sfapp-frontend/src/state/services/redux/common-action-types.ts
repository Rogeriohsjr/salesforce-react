export interface IPayloadActionType<T> {
  type: string;
  payload: T;
}

export interface ISimpleActionType {
  type: string;
}
