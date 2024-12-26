import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AppLogoComponent } from '../../../shared/app-logo/app-logo.component';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthServiceService } from '../../service/auth-service.service';
import RegisterInterface from '../../../inerfaces/RegisterInterface';
import {   HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    PasswordModule,
    ButtonModule,
    AppLogoComponent,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'] 
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  loading!:boolean
  errorMessage!:String
  mediumRegex: string = "^(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\\d)|(?=.*[A-Z])(?=.*\\d).{6,}$";
  strongRegex: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$";
  
  constructor(private fb: FormBuilder
    ,private api:HttpClient
    ,private authService:AuthServiceService
    ,private router:Router
              ) {
                authService.setApi(api)
              }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.strongRegex)]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], 
      monthlyIncome: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], 
      creditScore: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], 
    });
  }

  register() {
    if (this.registerForm.valid) {
      const registerData: RegisterInterface = this.registerForm.value;
      this.loading = true;

      this.authService.register(registerData).subscribe(
        response => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error( error);
          this.errorMessage = 'Registration failed. Please try again later.';
        },
        () => {
          this.loading = false;
        }
      );

    } else {
      console.log('Form is invalid');
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.register();
    } else {
      console.log('Form is invalid');
    }
  }
}
