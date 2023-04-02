import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes = [
  { path: '', component: EmployeeProfileComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'update', component: EmployeeUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
