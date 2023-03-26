
export interface IToastAlertMessage {
  messageCode: string;
  messageText: string;
}

export interface IToastAlertState {
  showAlert: boolean;
  toastMessage: IToastAlertMessage;
}

export interface IToastAlertStateRootStore {
  alertStore: IToastAlertState;
}
