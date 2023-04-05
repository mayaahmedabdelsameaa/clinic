import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMedicineComponent } from './main-medicine/main-medicine.component';
import { SupplementComponent } from './supplement/supplement.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HerbsComponent } from './herbs/herbs.component';

const routes: Routes = [
  {
    path: '',
    component: MainMedicineComponent,
    children: [
      { path: 'supplement', component: SupplementComponent },
      { path: 'medicineCate', component: MedicineComponent },
      { path: 'herbs', component: HerbsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineRoutingModule {}
