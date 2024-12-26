import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private api!: HttpClient


  constructor() { }
  setApi(api: HttpClient) {
    this.api = api
  }

  register(data: any): Observable<any> {
    return this.api.post("/auth/signup", {data});
  }

  login (data:any):Observable<any>{
    return this.api.post("/auth/login",data)
  }
}
