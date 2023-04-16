import { createSlice } from '@reduxjs/toolkit';
import { IToastAlertState } from './interfaces';
import { TOAST_ALERT_STATE_DEFAULT } from './constants';
import { IPayloadActionType } from '../services/redux/common-action-types';
import ISalesforceErrorDTO from '../../api/services/dtos/salesforce-error-dto';

export const toastAlertSlice = createSlice({
  name: 'toastAlertSlice',
  initialState: TOAST_ALERT_STATE_DEFAULT,
  reducers: {
    showToastAlertReducer: (state: IToastAlertState, action: IPayloadActionType<ISalesforceErrorDTO>) => {
      state.showAlert = true;
      state.toastMessage = {
        messageCode: action.payload.errorCode,
        messageText: action.payload.message,
      };
    },
    hideToastAlertReducer: (state: IToastAlertState) => {
      state.showAlert = false;
    }
  },
});

export const { showToastAlertReducer, hideToastAlertReducer } = toastAlertSlice.actions;
