import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../constant/constant';
import { CompetitionModel, Project } from '../model/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }

  createCompetition(obj:CompetitionModel){
    return this.http.post(Constant.API_URL+"competition",obj);
  }

  getCompetition():Observable<CompetitionModel[]>{
    return this.http.get<CompetitionModel[]>(Constant.API_URL+"GetAllCompetition");
  }

  getCompetitionById(id:number):Observable<CompetitionModel>{
    return this.http.get<CompetitionModel>(Constant.API_URL+"competition/"+id)
  }

  submitProject(obj:Project){
    return this.http.post(Constant.API_URL+"project",obj);
  }
}
