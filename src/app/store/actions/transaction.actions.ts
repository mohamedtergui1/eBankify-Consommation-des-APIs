import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../models/transaction.model';

export const addTransaction = createAction(
  '[Transaction] Add Transaction',
  props<{ transaction: Transaction }>()
);

export const updateTransaction = createAction(
  '[Transaction] Update Transaction',
  props<{ transaction: Transaction }>()
);

export const deleteTransaction = createAction(
  '[Transaction] Delete Transaction',
  props<{ id: string }>()
);

export const resetTransactions = createAction(
  '[Transaction] Reset Transactions'
);

export const loadTransactions = createAction(
    '[Transaction] Load Transactions',
    props<{ transactions: Transaction[] }>()
  );