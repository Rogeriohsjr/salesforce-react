import { IPayloadActionType, ISimpleActionType } from '../../../classes/redux/common-action-types';
import { ACCOUNT_LIST_ACTIONS } from './constants';

export const getAllAccounts = (): ISimpleActionType => ({
  type: ACCOUNT_LIST_ACTIONS.GET_ALL_ACCOUNTS,
});


export const deleteEditAccount = (pPayload: string): IPayloadActionType<string> => ({
  type: ACCOUNT_LIST_ACTIONS.DELETE_ACCOUNT,
  payload: pPayload
});