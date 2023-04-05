import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MedicineRoutingModule } from './medicine-routing.module';
import { MainMedicineComponent } from './main-medicine/main-medicine.component';
import { MedicineCateComponent } from './medicine-cate/medicine-cate.component';
import { OfferComponent } from './offer/offer.component';
import { SupplementComponent } from './supplement/supplement.component';
import { HerbsComponent } from './herbs/herbs.component';
import { MedicineComponent } from './medicine/medicine.component';

@NgModule({
  declarations: [MainMedicineComponent, MedicineCateComponent, OfferComponent, SupplementComponent, HerbsComponent, MedicineComponent],
  imports: [CommonModule, MedicineRoutingModule, HttpClientModule],
})
export class MedicineModule {}
