import { Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent {
    otb = {
      key:""
    }
    constructor(){
      
    }
}