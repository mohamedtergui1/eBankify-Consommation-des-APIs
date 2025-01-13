import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MangeUserService {

  constructor(private api:HttpClient) { 
   
  }

  getAllUser(){
    return this.api.get("/admins/users")
  }

  addUser(data:any){
    return this.api.get("/admins/users",data)
  }

  updateUser(data:any,id:number){
    return this.api.put("/admins/users/" + id, data)
  }

  deleteUser(id:number){
    return this.api.delete("/admins/users/" + id)
  }

  
}
