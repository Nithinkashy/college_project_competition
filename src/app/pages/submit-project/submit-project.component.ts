import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompetitionModel, Project } from '../../model/competition.model';
import { CompetitionService } from '../../services/competition.service';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-submit-project',
  imports: [DatePipe,FormsModule],
  templateUrl: './submit-project.component.html',
  styleUrl: './submit-project.component.css'
})
export class SubmitProjectComponent{

  currentCompetitionId:number = 0;
  competitionSrv = inject(CompetitionService);
  competitionData:CompetitionModel = new CompetitionModel();
  projectObj:Project = new Project();
  masterSrv = inject(MasterService);

  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((result:any)=>{
      this.currentCompetitionId = result.id;
      this.getcompetitionById();
    })
  }

  submitProject(){
    this.projectObj.userId = Number(this.masterSrv.loggedUserId);
    this.projectObj.competitionId = this.currentCompetitionId;
    this.competitionSrv.submitProject(this.projectObj).subscribe({
      next:(res)=>{
        alert("Project submitted successfully");
      },error(err) {
        alert(err);
      },
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
