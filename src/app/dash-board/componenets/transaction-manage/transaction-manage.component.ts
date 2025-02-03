import { Component, OnInit } from '@angular/core';
import { TransactionMangeService } from '../../services/transaction-mange.service';


 export interface Transaction {
  id: number;
  type: string;
  amount: number;
  status: string;
  sender: {
    id: string;
    balance: number | null;
    status: string | null;
    user: any | null; // Adjust type as necessary
  };
  receiver: {
    id: string;
    balance: number | null;
    status: string | null;
    user: any | null; // Adjust type as necessary
  };
}

@Component({
  selector: 'app-transaction-manage',
  standalone: false,
  templateUrl: './transaction-manage.component.html',
  styleUrl: './transaction-manage.component.scss',
}
)

export class TransactionManageComponent implements OnInit {
  
  constructor(private service: TransactionMangeService) {}

  rows:any = []

  ngOnInit(): void {
    const observer = {
      next: (response:any) => {
        this.rows = response.map((e:any) => {
          e.receiver = e.receiver.id;
          e.sender = e.sender.id;
          return e
        });
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    };

    this.service.getAllTransaction().subscribe(observer);
  }

  handleAdd() {
    // Logic to add a new transaction
    console.log('Add transaction');
  }

  handleEdit(row: any) {
    // Logic to edit the selected transaction
    console.log('Edit transaction', row);
  }

  handleDelete(row: any) {
    // Logic to delete the selected transaction
    console.log('Delete transaction', row);
  }
  
   
}
