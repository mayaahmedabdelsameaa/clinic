import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceListByDoctorComponent } from './invoice-list-by-doctor/invoice-list-by-doctor.component';
import { InvoiceListByPatientComponent } from './invoice-list-by-patient/invoice-list-by-patient.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceListByDoctorComponent,
    InvoiceListByPatientComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
