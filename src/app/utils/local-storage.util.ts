// src/app/utils/local-storage.util.ts
import { Transaction } from '../models/transaction.model';

export const saveTransactionsToLocalStorage = (transactions: Transaction[]): void => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
};

export const loadTransactionsFromLocalStorage = (): Transaction[] => {
  const transactions = localStorage.getItem('transactions');
  return transactions ? JSON.parse(transactions) : [];
};