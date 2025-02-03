import { Component, OnInit } from '@angular/core';
import { AccountManageService } from '../../services/account-manage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-manage',
  standalone: false,
  templateUrl: './account-manage.component.html',
  styleUrl: './account-manage.component.scss',
})
export class AccountManageComponent implements OnInit {
  accountForm: FormGroup;
  visible: boolean = false;
  rows: any[] = [];
  idUpdateOrDelete: string | undefined;
  name: string = 'Bank Account';

  statuses = [
    { name: 'Active', value: 'ACTIVE' },
    { name: 'Inactive', value: 'INACTIVE' },
    { name: 'Blocked', value: 'BLOCKED' }
  ];

  constructor(private fb: FormBuilder , private service: AccountManageService) {
    this.accountForm = this.fb.group({
      balance: ['', [Validators.required, Validators.min(0)]],
      status: ['', Validators.required]
    });
  }

  ngOnInit() {
    const observer = {
      next: (response: any) => {
        this.rows = response.content;
        console.log(this.rows);
        
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
  handleAdd(): void {
    this.idUpdateOrDelete = undefined;
    this.accountForm.reset();
    this.visible = true;
  }

  handleEdit(row: any): void {
    this.idUpdateOrDelete = row.id;
    this.accountForm.patchValue({
      balance: row.balance,
      status: row.status
    });
    this.visible = true;
  }

  handleDelete(row: any): void {
    // Implement delete logic
  }

  onCreateAccount(): void {
    if (this.accountForm.valid) {
      console.log('Form submitted:', this.accountForm.value);
      // Handle form submission
      this.visible = false;
    }
  }
}
