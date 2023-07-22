import { IToastAlertMessage } from '../../ui/components/toast-alert/interfaces';
import { IPayloadActionType, ISimpleActionType } from '../services/redux/common-action-types';
import { TOAST_ALERT_ACTIONS } from './constants';

export const hideToastAlertAction = (): ISimpleActionType => ({
  type: TOAST_ALERT_ACTIONS.HIDE_ALERT,
});


export const showToastAlertAction = (pPayload: IToastAlertMessage): IPayloadActionType<IToastAlertMessage> => ({
  type: TOAST_ALERT_ACTIONS.SHOW_ALERT,
  payload: pPayload
});