import { Component, OnInit } from '@angular/core';
import { AccountManageService } from '../../services/account-manage.service';

import { InputData } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-account-manage',
  standalone: false,
  templateUrl: './account-manage.component.html',
  styleUrl: './account-manage.component.scss',
})
export class AccountManageComponent implements OnInit {
  myData = [];
  isModalVisible = false

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
    
    const observer = {
        next: (response: any) => {
            console.log('Account deleted successfully:', response);
            // Optionally, you can refresh the data or update the UI here
        },
        error: (err: any) => {
            console.error('Error occurred while deleting account:', err);
        },
        complete: () => {
            console.log('Delete request completed');
        },
    };

    this.service.deleteAccount(row.id).subscribe(observer);
  }

  addRow() {
    console.log('Add row:');
  }

  handleCustomAction(event: any) {
    console.log('Custom action:', event);
  }


 
}
