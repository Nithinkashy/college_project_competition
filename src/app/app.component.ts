import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from './services/master.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'college_project_competetion';

  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogout(){
    localStorage.removeItem('studentId');
    localStorage.removeItem('loggedUser');
    this.masterSrv.loggedUserId = '';
    this.masterSrv.loggedUserData = '';
    this.router.navigateByUrl('/home');
  }
}
