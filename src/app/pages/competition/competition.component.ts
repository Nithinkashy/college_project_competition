import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionModel } from '../../model/competition.model';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competition',
  imports: [FormsModule, DatePipe],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent implements OnInit {

  newObj:CompetitionModel = new CompetitionModel();
  competitionSrv = inject(CompetitionService);
  gridList: CompetitionModel[] = [];

  ngOnInit(){
      this.getAllCompetition();
  }

  getAllCompetition(){
    this.competitionSrv.getCompetition().subscribe({
      next:(res)=>{
          this.gridList = res;
      },
      error:()=>{
        alert("API error");
      }
    })
  }

  onSave(){
    this.competitionSrv.createCompetition(this.newObj).subscribe({next:()=>{
          alert("Competition Created Succesfully");
          this.getAllCompetition();
      },
      error:()=>{
        alert("API error");
      }
    })
  }


}
