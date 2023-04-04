import { Component } from '@angular/core';
import { IDoctor } from 'src/app/models/idoctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent {
  doctor!:IDoctor;
  docAppointmentes:any;
  patientInfo:any;
   constructor(public doctorService:DoctorService,public patientService:PatientService){
 
 }
 
   ngOnInit(){
     this.doctorService.getDoctorById(109).subscribe(data=>{
       this.doctor=data;
       this.docAppointmentes=data.appointments
       
     })
   }
}
