import { IPayloadActionType, ISimpleActionType } from '../services/redux/common-action-types';
import { ACCOUNT_LIST_ACTIONS } from './constants';

export const getAllAccountsAction = (): ISimpleActionType => ({
  type: ACCOUNT_LIST_ACTIONS.GET_ALL_ACCOUNTS,
});


export const deleteEditAccountAction = (pPayload: string): IPayloadActionType<string> => ({
  type: ACCOUNT_LIST_ACTIONS.DELETE_ACCOUNT,
  payload: pPayload
});