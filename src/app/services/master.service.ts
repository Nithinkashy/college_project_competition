import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  loggedUserId:string = "";
  constructor() {
    const loggedData = localStorage.getItem("studentId");
    if(loggedData != null){
      this.loggedUserId = loggedData;
    }
   }
  http = inject(HttpClient);

  register(obj:any){
    return  this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/register",obj);
  }

}
