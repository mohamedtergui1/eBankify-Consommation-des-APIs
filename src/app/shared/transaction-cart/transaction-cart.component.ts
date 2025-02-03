// src/app/components/transaction-cart/transaction-cart.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transaction } from '../../models/transaction.model';
import { selectTransactions, selectTotalAmount } from '../../store/selectors/transaction.selectors';
import { AppState } from '../../store/index';
import { addTransaction, deleteTransaction, resetTransactions, loadTransactions } from '../../store/actions/transaction.actions';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { saveTransactionsToLocalStorage, loadTransactionsFromLocalStorage } from '../../utils/local-storage.util';

@Component({
  selector: 'app-transaction-cart',
  templateUrl: './transaction-cart.component.html',
  styleUrls: ['./transaction-cart.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TransactionCartComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  totalAmount$: Observable<number>;
  transactionForm!: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.transactions$ = this.store.select(selectTransactions);
    this.totalAmount$ = this.store.select(selectTotalAmount);
  }

  ngOnInit(): void {
    // Load transactions from local storage on component initialization
    const savedTransactions = loadTransactionsFromLocalStorage();
    this.store.dispatch(loadTransactions({ transactions: savedTransactions }));

    // Initialize the form
    this.transactionForm = this.fb.group({
      type: ['deposit', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      description: [''],
    });

    // Save transactions to local storage whenever the store changes
    this.transactions$.subscribe((transactions) => {
      saveTransactionsToLocalStorage(transactions);
    });
  }

  addTransaction(): void {
    if (this.transactionForm.invalid) {
      return;
    }

    const newTransaction: Transaction = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      type: this.transactionForm.value.type,
      amount: this.transactionForm.value.amount,
      date: new Date(),
      description: this.transactionForm.value.description,
    };

    this.store.dispatch(addTransaction({ transaction: newTransaction }));
    this.transactionForm.reset({ type: 'deposit', amount: 0, description: '' }); // Reset the form
  }

  removeTransaction(id: string): void {
    this.store.dispatch(deleteTransaction({ id }));
  }

  clearCart(): void {
    this.store.dispatch(resetTransactions());
  }
}