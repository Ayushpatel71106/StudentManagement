import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {

  Employees;
  constructor(@Inject(DOCUMENT) private _document: any, private  _empService:EmployeeService) {}


  ngOnInit(): void {

    this._empService.GetAllEmployees().subscribe(e=>{
      console.log(e)
    })

    this._empService.GetAllEmployees().subscribe((res: any) => {
      console.log(res);
      this.Employees = res;
    });
  }
}
