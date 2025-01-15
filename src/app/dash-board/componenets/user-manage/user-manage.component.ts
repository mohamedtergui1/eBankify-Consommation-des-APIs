import { Component, OnInit } from '@angular/core';

import { InputData } from '../../../shared/modal/modal.component';

import { MangeUserService } from '../../services/mange-user.service';

interface User {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

@Component({
  standalone: false,
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent implements OnInit {
  users: User[] = [];
  myData: User[] = [];
  visible: boolean = false;

  constructor(private service: MangeUserService) {}

  ngOnInit() {
    this.service.getAllUser().subscribe({
      next: (data: any) => {
        console.log(data);
        this.users = data.content;
        this.myData = data.content;
      },
      error: (err: any) => {
        console.error('Error fetching users:', err);
      },
      complete: () => {
        console.log('User fetching completed');
      },
    });
  }

  onModalCallback() {}

  onUpdate(data: number) {}
  onDelete(data: number) {}

  myColumns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
  ];

  editRow(row: any) {
    console.log('Edit row:', row);
  }

  deleteRow(row: any) {
    console.log('Delete row:', row);
  }

  addRow() {
    this.visible = true;
    console.log('Modal visibility set to:', this.visible);
  }

  handleCustomAction(event: any) {
    console.log('Custom action:', event);
  }

  
}
