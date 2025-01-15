import { Component, OnInit } from '@angular/core';
import { TransactionMangeService } from '../../services/transaction-mange.service';

@Component({
  selector: 'app-transaction-manage',
  standalone: false,
  templateUrl: './transaction-manage.component.html',
  styleUrl: './transaction-manage.component.scss',
})
export class TransactionManageComponent implements OnInit {
  
  constructor(private service: TransactionMangeService) {}

  myData = [];

  myColumns = [
    { field: 'id', header: 'ID' },
    { field: 'type', header: 'TYPE' },
    { field: 'amount', header: 'AMOUNT' },
    { field: 'status', header: 'STATUS' },
    { field: 'sender', header: 'SENDER' },
    { field: 'receiver', header: 'RECEIVER' },
  ];

  ngOnInit(): void {
    const observer = {
      next: (response: any) => {
        this.myData = response.map((e:any) => {
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

  
  
  editRow(row: any) {
    console.log('Edit row:', row);
  }

  deleteRow(row: any) {
    console.log('Delete row:', row);
  }

  addRow() {
    console.log('Add row:');
  }

  handleCustomAction(event: any) {
    console.log('Custom action:', event);
  }
}
