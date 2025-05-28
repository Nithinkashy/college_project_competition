import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionModel } from '../../model/competition.model';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-submit-project',
  imports: [],
  templateUrl: './submit-project.component.html',
  styleUrl: './submit-project.component.css'
})
export class SubmitProjectComponent{

  currentCompetitionId:number = 0;
  competitionSrv = inject(CompetitionService);
  competitionData:CompetitionModel = new CompetitionModel();

  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((result:any)=>{
      this.currentCompetitionId = result.id;
      this.getcompetitionById();
    })
  }

  getcompetitionById(){
    this.competitionSrv.getCompetitionById(this.currentCompetitionId).subscribe({
      next:(res:any)=>{
        this.competitionData = res;
      }
    })
  }
}
