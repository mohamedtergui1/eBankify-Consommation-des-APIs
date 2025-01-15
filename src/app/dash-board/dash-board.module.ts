import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dash-board-routing.module';
import { AuthLayoutComponent } from '../shared/auth-layout/auth-layout.component';
import { UserManageComponent } from './componenets/user-manage/user-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccountManageComponent } from './componenets/account-manage/account-manage.component';
import { TransactionManageComponent } from './componenets/transaction-manage/transaction-manage.component';
import { TableComponent } from '../shared/table/table.component';
import { LoanManageComponent } from './componenets/loan-manage/loan-manage.component';

@NgModule({
  declarations: [
    UserManageComponent,
    AccountManageComponent,
    TransactionManageComponent,
    LoanManageComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    AuthLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    TableComponent
  ],
})


export class DashBoardModule {}
