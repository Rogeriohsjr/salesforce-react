import { createSlice } from '@reduxjs/toolkit';
import { IToastAlertState } from './interfaces';
import { TOAST_ALERT_STATE_DEFAULT } from './constants';
import { IPayloadActionType } from '../services/redux/common-action-types';
import { IToastAlertMessage } from '../../ui/components/toast-alert/interfaces';

export const toastAlertSlice = createSlice({
  name: 'toastAlertSlice',
  initialState: TOAST_ALERT_STATE_DEFAULT,
  reducers: {
    showToastAlertReducer: (state: IToastAlertState, action: IPayloadActionType<IToastAlertMessage>) => {
      state.showAlert = true;
      state.toastMessage = action.payload
    },
    hideToastAlertReducer: (state: IToastAlertState) => {
      state.showAlert = false;
    }
  },
});

export const { showToastAlertReducer, hideToastAlertReducer } = toastAlertSlice.actions;
