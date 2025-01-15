import { Component } from '@angular/core';
import { LoanManageService } from '../../services/loan-manage.service';

@Component({
  selector: 'app-loan-manage',
  standalone: false,
  templateUrl: './loan-manage.component.html',
  styleUrl: './loan-manage.component.scss'
})
export class LoanManageComponent {
  constructor(private service: LoanManageService) {}

  ngOnInit(): void {
    
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

    this.service.getAllLoan().subscribe(observer);
  }

  myData = [];

  myColumns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
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
