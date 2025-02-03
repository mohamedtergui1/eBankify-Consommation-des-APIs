// src/app/store/index.ts
import { Transaction } from '../models/transaction.model';

export interface AppState {
  transactions: Transaction[]; 
}