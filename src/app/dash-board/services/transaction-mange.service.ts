import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TransactionMangeService {
  constructor(private api: HttpClient) {}

  getAllTransaction() {
    return this.api.get('/users/transaction');
  }

  addTransaction(data: any) {
    return this.api.get('/users/transaction', data);
  }
}
