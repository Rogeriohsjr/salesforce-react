import { IToastAlertMessage } from '../../ui/components/toast-alert/interfaces';

export interface IToastAlertState {
  showAlert: boolean;
  toastMessage: IToastAlertMessage;
}

export interface IToastAlertStateRootStore {
  alertStore: IToastAlertState;
}