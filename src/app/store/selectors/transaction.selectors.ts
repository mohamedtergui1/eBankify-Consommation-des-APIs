
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../index';
import { Transaction } from '../../models/transaction.model'; 


export const selectTransactionState = createFeatureSelector<AppState, Transaction[]>('transactions');


export const selectTransactions = createSelector(
  selectTransactionState,
  (transactions) => transactions
);

export const selectTotalAmount = createSelector(
  selectTransactions,
  (transactions) => transactions.reduce((total, t) => total + t.amount, 0)
);