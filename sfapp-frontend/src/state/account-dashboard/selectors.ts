import { createSelector } from '@reduxjs/toolkit';
import { IAccountRootStore, IAccountState } from './interfaces';

const getSlice = (state: IAccountRootStore): IAccountState => state.accountStore;

export const selectListOfAccounts = createSelector(getSlice, (slice: IAccountState) => slice.listOfAccounts);
