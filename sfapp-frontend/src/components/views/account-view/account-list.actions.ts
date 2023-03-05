import { ISimpleActionType } from '../../../classes/redux/common-action-types';
import { ACCOUNT_LIST_ACTIONS } from './constants';

export const getAllAccounts = (): ISimpleActionType => ({
  type: ACCOUNT_LIST_ACTIONS.GET_ALL_ACCOUNTS,
});

