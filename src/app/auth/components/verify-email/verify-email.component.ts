import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  standalone : false,
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit, OnDestroy {

  otb = {
    email:"",
    verificationCode: ""
  }
  

  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
     
  }

  ngOnDestroy() {
    
  }

  startTimer() {
    
  }
  verify(){
    this.otb.email = "simotergui4@gmail.com"
    this.authService.verify(this.otb).subscribe(
      
    )
  }

  resend() {
    this.otb.email = "simotergui4@gmail.com"
    this.authService.resendVerifyCode({
      "email" : "simotergui4@gmail.com"
    }).subscribe(e=> console.log(e), (e) => console.log(e)
      
    )
  }
}