import { createSlice } from '@reduxjs/toolkit';
import ISalesforceErrorDTO from '../../apis/common/dtos/salesforce-error-dto';
import { IPayloadActionType } from '../../classes/redux/common-action-types';
import { TOAST_ALERT_STATE_DEFAULT } from './constants';
import { IToastAlertState } from './interfaces';

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
