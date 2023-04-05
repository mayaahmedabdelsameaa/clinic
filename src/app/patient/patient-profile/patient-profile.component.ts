import { Component,OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { ActivatedRoute,Router } from '@angular/router';
// import { AppointmentService } from 'src/app/services/appointment.service';
// import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  id!: number;
  patient!:Patient;
  // appoint!:ApoointmentService;
  // appointments:Appointment[]=[];
  getAppointments: boolean = true;
  getPrescriptions: boolean = false;
  getPatients: boolean = false;
  getClincs: boolean = false;
  getDoctors: boolean = false;
  constructor(public patientService:PatientService,private activatedRoute:ActivatedRoute,private routes:Router/*, private appointServ:ApoointmentService*/){}
  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem("userId"));
    this.patientService.getPatient(this.id).subscribe((item:any)=>{
      this.patient =item;
      
      console.log("from inside",item);
    });
    console.log(this.id)
    // this.appointServ.getAllAppoiments().subscribe((a:any)=>{
    //   this.appointments=a;
    //   this.appointments=this.appointments.filter((a:any)=>a.patient._id==this.id);
    //   console.log("blabla",a);
    //   console.log("After",this.appointments);
    // })

  }
  logOut(){
    sessionStorage.setItem("userId","");
    this.routes.navigateByUrl("");
  }

  GetAppointments() {
    this.getAppointments = true;
    this.getPrescriptions = false;
    this.getPatients = false;
    this.getClincs = false;
    this.getDoctors = false;
  }
  GetPrescriptions() {
    this.getAppointments = this.getPatients = this.getDoctors = this.getClincs = false;
    this.getPrescriptions = true;
  }
  GetPatients() {
    this.getAppointments = this.getPrescriptions = this.getClincs  = this.getDoctors = false;
    this.getPatients = true;
  }
  GetClincs() {
    this.getAppointments = this.getDoctors = this.getPatients = this.getPrescriptions = false;
    this.getClincs = true;
  }
  GetDoctors() {
    this.getAppointments = this.getPatients = this.getPrescriptions = this.getClincs = false;
    this.getDoctors = true;
  }

  // delete(id:number){
  //   if(confirm("Are you sure you want to delete")){
  //     this.appointServ.deleteAppointment(id).subscribe((a:any)=>{
  //       this.appointments=this.appointments.filter((a:any)=>a._id!=id);
  //   })}}
  }
