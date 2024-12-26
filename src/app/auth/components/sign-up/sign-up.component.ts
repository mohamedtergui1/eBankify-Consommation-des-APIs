import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import RegisterInterface from '../../../inerfaces/RegisterInterface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  loading!: boolean;
  errorMessage!: string;
  mediumRegex: string = "^(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\\d)|(?=.*[A-Z])(?=.*\\d).{6,}$";
  strongRegex: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$";

  constructor(
    private fb: FormBuilder,
    private api: HttpClient,
    private authService: AuthServiceService,
    private router: Router
  ) {
    authService.setApi(api);
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

      const observer = {
        next: (v: any) => {
          console.log('Registration successful', v);
          this.router.navigate(['auth/login']);
        },
        error: (e: any) => {
          console.error(e);
          this.errorMessage = 'Registration failed. Please try again later.';
        },
        complete: () => {
          console.info('Registration complete');
          this.loading = false;
        }
      };

      console.log(registerData);
      this.authService.register(registerData).subscribe(observer);
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
