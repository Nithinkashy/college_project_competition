import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRegister } from '../../model/model';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerObj:IRegister = {
    "fullName": "",
    "email": "",
    "password": "",
    "collegeName": "",
    "role": ""
  }

  http = inject(HttpClient);
  MasterSrv = inject(MasterService);

  onRegister(){
    this.MasterSrv.register(this.registerObj).subscribe((res:any)=>{
      alert("Student Registered Successfully");
    })
  }
}
