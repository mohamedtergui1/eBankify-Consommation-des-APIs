// src/app/store/reducers/transaction.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addTransaction, deleteTransaction, resetTransactions, loadTransactions } from '../actions/transaction.actions';
import { Transaction } from '../../models/transaction.model';

export const initialState: Transaction[] = [];

export const transactionReducer = createReducer(
  initialState,
  on(addTransaction, (state, { transaction }) => [...state, transaction]),
  on(deleteTransaction, (state, { id }) => state.filter(t => t.id !== id)),
  on(resetTransactions, () => []),
  on(loadTransactions, (state, { transactions }) => transactions) 
);