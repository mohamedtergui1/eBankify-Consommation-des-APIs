import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserServiceService {
  private token: string | null = null;
  private user: any;
  
  constructor(private http: HttpClient) {
    this.getTokenFromLocalStorage();
  }

  private getTokenFromLocalStorage(): void {
    this.token = localStorage.getItem('token');
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
