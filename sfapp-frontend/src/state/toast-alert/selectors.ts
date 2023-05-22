import { createSelector } from '@reduxjs/toolkit';
import { IToastAlertState, IToastAlertStateRootStore } from './interfaces';

const getSlice = (state: IToastAlertStateRootStore): IToastAlertState => state.alertStore;

export const getToastMessage = createSelector(getSlice, (slice: IToastAlertState) => slice.toastMessage);

export const isToastMessageVisible = createSelector(getSlice, (slice: IToastAlertState) => slice.showAlert);
