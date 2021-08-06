import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddEmployeeComponent } from '../employees/add-employee/add-employee.component';
import { ManageEmployeeComponent } from '../employees/manage-employee/manage-employee.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),

  ],
  declarations: [
    DashboardComponent,
    // AddEmployeeComponent,
    // ManageEmployeeComponent
   ],

})
export class DashboardModule { }
