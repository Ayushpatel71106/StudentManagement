import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../../../shared/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  Mygroup: FormGroup;
  constructor(
    private _employee: EmployeeService,
    private _toast: ToastrService,
    private _router: Router
  ) {
    this.Mygroup = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      salary: new FormControl(""),
    });
  }

  ngOnInit(): void {}

  submit() {
    // console.log(this.fgroup.value);
    let employee = this.Mygroup.value;
    this._employee.CreateEmployee(employee).subscribe((response) => {
      // console.log(response);
      this._toast
        .success("Employee", "Employee Created successfully !", {
          easeTime: 1000,
          progressBar: true,
          positionClass: "toast-top-center",
          timeOut: 5000,
        })
        .onHidden.subscribe((e) => {
          this._router.navigate(["base/manage-employee"]);
        });
    });
  }
}
