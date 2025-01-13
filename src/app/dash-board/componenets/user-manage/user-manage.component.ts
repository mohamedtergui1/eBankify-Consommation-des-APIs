import { Component, OnInit } from '@angular/core';
import { MangeUserService } from '../../services/mange-user.service';


@Component({
  standalone:false,
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.scss'
})
export class UserManageComponent implements OnInit {
  users!: any[];
  isModalVisible:boolean = true;

  constructor(private service:MangeUserService ) {}

  ngOnInit() {
     const observer = {
         next: (data: any) => {
          console.log(data)
          this.users = data.content;
         },
         error: (err: any) => {
             console.error('Error fetching users:', err);
         },
         complete: () => {
             console.log('User fetching completed');
         }
     }
    this.service.getAllUser().subscribe(observer);
  }

  onModalCallback(){

  }
  showDialog(){
    this.isModalVisible = true
  }
  onUpdate(data:number){

  }
  onDelete(data:number){

  }
}
