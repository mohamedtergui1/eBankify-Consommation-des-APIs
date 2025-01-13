import { Component, OnInit } from '@angular/core';
import { AccountManageService } from '../../services/account-manage.service';

@Component({
  selector: 'app-account-manage',
  standalone:false,
  templateUrl: './account-manage.component.html',
  styleUrl: './account-manage.component.scss'
})
export class AccountManageComponent implements OnInit {
  accounts:any = []
  constructor(private service:AccountManageService){



  }
  ngOnInit(){
    const observer =  {
      next: (response:any) => {
        console.log(response);
        this.accounts = response.content
      },
      error: (err:any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      }
    }
    this.service.getAllAccount().subscribe(observer);
  }

  onUpdate(data:number){

  }

  onDelete(id:number){
    const observer =  {
      next: (response:any) => {
        console.log(response);
   
      },
      error: (err:any) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      }
    }
    this.service.deleteAccount(id).subscribe(observer);
  }
} 
