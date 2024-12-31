import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private api:HttpClient) {}
   
  register(data: any): Observable<any> {
    return this.api.post("/auth/signup", data);
  }

  login (data:any):Observable<any>{
    return this.api.post("/auth/login",data)
  }

  resendVerifyCode(data:any){
    return this.api.post("/auth/resend",data)
  }

  verify(data:any){
    return this.api.post("/auth/verify",data)

  }
}
