import { Component, OnInit } from '@angular/core';
import { MangeUserService } from '../../services/mange-user.service';

@Component({
  standalone: false,
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.scss',
})
export class UserManageComponent implements OnInit {
  users!: any[];
  isModalVisible: boolean = true;

  constructor(private service: MangeUserService) {}

  ngOnInit() {
    const observer = {
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
    };
    this.service.getAllUser().subscribe(observer);
  }

  onModalCallback() {}
  showDialog() {
    this.isModalVisible = true;
  }
  onUpdate(data: number) {}
  onDelete(data: number) {}

  myData = [];

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
    console.log('Add row:');
  }

  handleCustomAction(event: any) {
    console.log('Custom action:', event);
  }
}
