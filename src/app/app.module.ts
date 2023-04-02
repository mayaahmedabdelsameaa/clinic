import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatterialUiModule } from 'src/app/shared/matterial-ui/matterial-ui.module';
import { NotFoundComponent } from './shared/notfound/not-found/not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { EmployeeModule } from './employee/employee.module';
import { DoctorModule } from './doctor/doctor.module';
import { ClinicModule } from './clinic/clinic.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { AppointmentModule } from './appointment/appointment.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MedicineModule } from './medicine/medicine.module';
import { PatientModule } from './patient/patient.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatterialUiModule,
    RouterModule,
    AppointmentModule,
    ClinicModule,
    DoctorModule,
    EmployeeModule,
    InvoiceModule,
    MedicineModule,
    PatientModule,
    PrescriptionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
