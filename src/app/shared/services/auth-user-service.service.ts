import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserServiceService {
  private token: string | null = null;
  private user: any;
  private authStatusSubject = new BehaviorSubject<boolean>(this.iSauthenticated());
  public authStatusListener = this.authStatusSubject.asObservable();
  
  constructor(private http: HttpClient) {
    this.getTokenFromLocalStorage();
  }

  private getTokenFromLocalStorage(): void {
  
    if (typeof localStorage !== 'undefined') {
        this.token = localStorage.getItem('token');
    }
  }

  public setToken(token:string|null){
    if(token !== null)
      localStorage.setItem("token",token)
    this.token = token
    this.authStatusSubject.next(this.iSauthenticated());
  }

  public setUser(user:any)
  {
    this.user = user
  }

  iSauthenticated(): boolean {
    return this.token !== null;
  }

  getAuthenticatedUser(): void {
    if (this.token) {
      this.http.get('/getauthenticated')
        .subscribe(user => {
          this.user = user;
        });
    }
  }
  
}
