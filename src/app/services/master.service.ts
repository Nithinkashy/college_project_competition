import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  loggedUserId:string = "";
  loggedUserData:any = undefined;

  constructor() {
    const loggedData = localStorage.getItem("studentId");
    const loggedUserData = localStorage.getItem("loggedUser");
    if(loggedData != null){
      this.loggedUserId = loggedData;
    }
    if(loggedUserData != null){
      this.loggedUserData = JSON.parse(loggedUserData);
    }
   }
  http = inject(HttpClient);

  register(obj:any){
    return  this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/register",obj);
  }

}
