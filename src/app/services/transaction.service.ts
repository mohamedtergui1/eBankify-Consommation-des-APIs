
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  validateTransaction(transaction: Transaction): boolean {
    return transaction.amount > 0 && ['deposit', 'withdrawal', 'transfer'].includes(transaction.type);
  }
}