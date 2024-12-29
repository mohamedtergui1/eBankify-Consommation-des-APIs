import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false
  errorMessage: string = ""
  constructor(private fb: FormBuilder
    , private authSr: AuthServiceService
    ,
    private router: Router
    ,private api:HttpClient
  ) {

       

   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {

      const loginData: any = this.loginForm.value;
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

      console.log(loginData);
      this.authSr.login(loginData).subscribe(observer);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
