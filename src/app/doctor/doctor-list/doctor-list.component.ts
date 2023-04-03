import { Component } from '@angular/core';
import { DoctorService } from '../Services/doctor.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  doctors:any=[];
  faCoffee = faCoffee;
  constructor(public doctorService:DoctorService){
  
  }
  // ngOnInit(){
  //   this.doctorService.getAllDoctors().subscribe(data=>{
  //     console.log(data);
  //      this.doctors=data;
  //      this.doctors=this.doctors[0].data[0];
  //     console.log(this.doctors);
      
  //   })
  // }
}
