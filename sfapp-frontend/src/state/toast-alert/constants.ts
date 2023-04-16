import { IToastAlertState } from "./interfaces";

export const TOAST_ALERT_STATE_DEFAULT: IToastAlertState = {
  toastMessage: {
    messageCode: '',
    messageText: '',
  },
  showAlert: false,
};

const NAMESPACE = 'sfReact/TOAST-ALERT';

export const TOAST_ALERT_ACTIONS = {
  SHOW_ALERT: `${NAMESPACE}/SHOW_ALERT`,
  HIDE_ALERT: `${NAMESPACE}/HIDE_ALERT`,
};
