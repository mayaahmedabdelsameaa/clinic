import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListByClinicComponent } from './doctor-list-by-clinic/doctor-list-by-clinic.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


@NgModule({
  declarations: [
    DoctorScheduleComponent,
    DoctorListComponent,
    DoctorAddComponent,
    DoctorUpdateComponent,
    DoctorDetailsComponent,
    DoctorListByClinicComponent,
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
