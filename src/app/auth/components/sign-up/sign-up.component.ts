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
    ReactiveFormsModule 
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'] 
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;

  mediumRegex: string = "^(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\\d)|(?=.*[A-Z])(?=.*\\d).{6,}$";
  strongRegex: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.strongRegex)]]
    });
  }
  
  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
