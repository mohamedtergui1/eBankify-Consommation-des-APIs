import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManageComponent } from './componenets/user-manage/user-manage.component';
import { AccountManageComponent } from './componenets/account-manage/account-manage.component';
import { TransactionManageComponent } from './componenets/transaction-manage/transaction-manage.component';
import { LoanManageComponent } from './componenets/loan-manage/loan-manage.component';

const routes: Routes = [
  {
    path:"" , component:UserManageComponent
  }
  ,
  {
    path:"accounts" , component:AccountManageComponent
  }
  ,
  {
    path:"transactions" , component:TransactionManageComponent
  }
  ,
  {
    path:"loans" , component:LoanManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
