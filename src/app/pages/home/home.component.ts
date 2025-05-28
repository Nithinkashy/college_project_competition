import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompetitionModel } from '../../model/competition.model';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-home',
  imports: [DatePipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  competitionSrv = inject(CompetitionService);
  gridList:CompetitionModel[] =[];
  ngOnInit(): void {
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
}
