import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginObj:any = {
    "email": "",
    "password": ""
  }

  http = inject(HttpClient);
  router = inject(Router);
  masterSrv = inject(MasterService)

  onLogin(){
    this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/login",this.loginObj).subscribe({
      next:(res:any)=>{
        localStorage.setItem("studentId",res.userId);
        localStorage.setItem("loggesUser",JSON.stringify(res));
        alert("User Found Successfully");
        this.router.navigateByUrl('/home');
        this.masterSrv.loggedUserId = res.userId;
      }
    })
  }
}
