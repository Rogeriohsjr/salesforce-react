import { IToastAlertMessage } from '../../ui/1-components/toast-alert/interfaces';

export interface IToastAlertState {
  showAlert: boolean;
  toastMessage: IToastAlertMessage;
}

export interface IToastAlertStateRootStore {
  alertStore: IToastAlertState;
}