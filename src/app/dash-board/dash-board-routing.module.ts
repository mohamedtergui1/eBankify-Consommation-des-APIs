import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManageComponent } from './componenets/user-manage/user-manage.component';
import { AccountManageComponent } from './componenets/account-manage/account-manage.component';

const routes: Routes = [
  {
    path:"" , component:UserManageComponent
  }
  ,
  {
    path:"accounts" , component:AccountManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
