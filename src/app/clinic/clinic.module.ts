import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicRoutingModule } from './clinic-routing.module';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicAddComponent } from './clinic-add/clinic-add.component';
import { ClinicUpdateComponent } from './clinic-update/clinic-update.component';


@NgModule({
  declarations: [
    ClinicListComponent,
    ClinicAddComponent,
    ClinicUpdateComponent
  ],
  imports: [
    CommonModule,
    ClinicRoutingModule
  ]
})
export class ClinicModule { }
