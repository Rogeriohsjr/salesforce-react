import { createSelector } from '@reduxjs/toolkit';
import { IAccountRootStore, IAccountState } from './interfaces';

const getSlice = (state: IAccountRootStore): IAccountState => state.accountStore;

export const LIST_OF_ACCOUNTS = createSelector(getSlice, (slice: IAccountState) => slice.listOfAccounts);
