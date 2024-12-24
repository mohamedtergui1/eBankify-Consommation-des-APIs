import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppLogoComponent } from '../../../shared/app-logo/app-logo.component';
 

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule,PasswordModule,ButtonModule,AppLogoComponent  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrected from styleUrl to styleUrls
})



export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
  mediumRegex: string = "^(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\\d)|(?=.*[A-Z])(?=.*\\d).{6,}$";
  strongRegex: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$";

 
}
