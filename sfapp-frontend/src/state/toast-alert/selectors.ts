import { createSelector } from '@reduxjs/toolkit';
import { IToastAlertState, IToastAlertStateRootStore } from './interfaces';

const getSlice = (state: IToastAlertStateRootStore): IToastAlertState => state.alertStore;

export const selectToastMessage = createSelector(getSlice, (slice: IToastAlertState) => slice.toastMessage);

export const selectIsToastMessageVisible = createSelector(getSlice, (slice: IToastAlertState) => slice.showAlert);
