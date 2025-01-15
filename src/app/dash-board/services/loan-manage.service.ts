import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoanManageService {
  
  constructor(private api: HttpClient) {}

  getAllLoan() {
    return this.api.get('/users/loan');
  }

  addLoan(data: any) {
    return this.api.get('/users/Loan', data);
  }

}
