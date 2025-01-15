import { Component, OnInit } from '@angular/core';
import { AccountManageService } from '../../services/account-manage.service';

@Component({
  selector: 'app-account-manage',
  standalone: false,
  templateUrl: './account-manage.component.html',
  styleUrl: './account-manage.component.scss',
})
export class AccountManageComponent implements OnInit {
  myData = [];

  constructor(private service: AccountManageService) {}

  ngOnInit() {
    const observer = {
      next: (response: any) => {
        this.myData = response.content;
        console.log(this.myData);
        
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    };
    this.service.getAllAccount().subscribe(observer);
  }

  onUpdate(data: number) {}

  onDelete(id: number) {
    const observer = {
      next: (response: any) => {
        console.log(response);
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    };
    this.service.deleteAccount(id).subscribe(observer);
  }

  myColumns = [
    { field: 'id', header: 'ID' },
    { field: 'balance', header: 'Balance' },
  ];

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
