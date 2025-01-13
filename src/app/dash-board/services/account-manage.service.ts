import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountManageService {

  constructor(private api:HttpClient) { }

  getAllAccount(){
    return this.api.get("/users/account")
  }

  addAccount(data:any){
    return this.api.get("/users/account",data)
  }

  updateAccount(data:any,id:number){
    return this.api.put("/users/account/" + id, data)
  }

  deleteAccount(id:number){
    return this.api.delete("/users/account/" + id)
  }


}
