import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent},

  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(e=>e.EmployeeModule)
  },

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
