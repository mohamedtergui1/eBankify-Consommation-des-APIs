import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputOtpModule } from 'primeng/inputotp';
// Shared Components
import { AppLogoComponent } from '../shared/app-logo/app-logo.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NotAuthLayoutComponent } from '../shared/not-auth-layout/not-auth-layout.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, VerifyEmailComponent],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    AppLogoComponent,
    InputOtpModule,
    RouterModule,
    NotAuthLayoutComponent,
  ],
})
export class AuthModule {}
