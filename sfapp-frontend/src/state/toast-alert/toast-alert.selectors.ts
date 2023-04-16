import { createSelector } from '@reduxjs/toolkit';
import { IToastAlertStateRootStore, IToastAlertState } from '../services/interfaces';

const getSlice = (state: IToastAlertStateRootStore): IToastAlertState => state.alertStore;

export const TOAST_MESSAGE = createSelector(getSlice, (slice: IToastAlertState) => slice.toastMessage);

export const SHOW_TOAST_MESSAGE = createSelector(getSlice, (slice: IToastAlertState) => slice.showAlert);
