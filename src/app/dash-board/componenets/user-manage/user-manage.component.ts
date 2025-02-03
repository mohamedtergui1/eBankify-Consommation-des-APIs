import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserServiceService } from '../../../shared/services/auth-user-service.service';
import { MangeUserService } from '../../services/mange-user.service';
import { Password } from 'primeng/password';

interface Role {
  name: string;
  value: string;
}

@Component({
  standalone: false,
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent implements OnInit {
  name: string = 'User';
  rows: any[] = [];
  columns: any[] = [];
  userForm: FormGroup;
  visible = false;
  idUpdateOrDelete: number | undefined;

  newUser = {
    name: '',
    role: '',
    email: '',
    age: '',
    monthlyIncome: null,
  };

  roles: Role[] = [
    { name: 'USER', value: 'USER' },
    { name: 'EMPLOYEE', value: 'EMPLOYEE' },
    { name: 'ADMIN', value: 'ADMIN' },
  ];

  constructor(private service: MangeUserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      monthlyIncome: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    const observer = {
      next: (response: any) => {
        this.rows = response.content;
      },
      error: (err: any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    };

    this.service.getAllUser().subscribe(observer);
  }

  onCreateUser() {
    const observer1 = {
      next: (response: any) => {
        console.log('User operation successful:', response);
        this.rows.push(response.data);
      },
      error: (err: any) => {
        console.error('Error occurred during user operation:', err);
      },
      complete: () => {
        console.log('User operation completed');
      },
    };

    const observer2 = {
      next: (response: any) => {
        this.rows.forEach((e) => {
          if (e.id === this.idUpdateOrDelete) {
            Object.assign(e, response.data); // Update the user data
          }
        });
      },
      error: (err: any) => {
        console.error('Error occurred during user operation:', err);
      },
      complete: () => {
        console.log('User operation completed');
      },
    };

    if (this.userForm.valid) {
      const newUser = this.userForm.value;

      if (this.idUpdateOrDelete) {
        this.service
          .updateUser(newUser, this.idUpdateOrDelete)
          .subscribe(observer2);
      } else {
        this.service.addUser(newUser).subscribe(observer1);
      }

      this.userForm.reset();
      this.visible = false;
    } else {
      console.error('Form is invalid');
    }
  }

  handleAdd() {
    this.idUpdateOrDelete = undefined;
    this.visible = true;
  }

  handleEdit(row: any) {
    this.idUpdateOrDelete = row.id;
    this.visible = true;

    this.userForm.patchValue({
      name: row.name,
      email: row.email,
      role: row.role,
      age: row.age,
      monthlyIncome: row.monthlyIncome,
    });
  }

  handleDelete(row: any) {
    const observer = {
      next: (response: any) => {
        console.log('User deleted successfully:', response);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (err: any) => {
        console.error('Error occurred during user deletion:', err);
      },
      complete: () => {
        console.log('User deletion completed');
      },
    };

    this.service.deleteUser(row.id).subscribe(observer);
  }
}
