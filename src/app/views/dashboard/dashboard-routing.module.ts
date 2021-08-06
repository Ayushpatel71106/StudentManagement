import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from '../employees/add-employee/add-employee.component';
import { ManageEmployeeComponent } from '../employees/manage-employee/manage-employee.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
     },
    // children:[
    //   {path:"add-employee",component:AddEmployeeComponent},
    //   {path:"manage-employee",component:ManageEmployeeComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
