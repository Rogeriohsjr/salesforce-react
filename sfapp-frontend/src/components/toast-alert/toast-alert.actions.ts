import ISalesforceErrorDTO from '../../apis/common/dtos/salesforce-error-dto';
import { IPayloadActionType, ISimpleActionType } from '../../classes/redux/common-action-types';
import { TOAST_ALERT_ACTIONS } from './constants';

export const hideToastAlertAction = (): ISimpleActionType => ({
  type: TOAST_ALERT_ACTIONS.HIDE_ALERT,
});


export const showToastAlertAction = (pPayload: ISalesforceErrorDTO): IPayloadActionType<ISalesforceErrorDTO> => ({
  type: TOAST_ALERT_ACTIONS.SHOW_ALERT,
  payload: pPayload
});