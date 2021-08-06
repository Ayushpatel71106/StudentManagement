import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BASE_URL } from "../../utils/base-url";
import { Endpoint } from "../../utils/endpoint";
import { IEmployee } from "./IEmployee";
import { AuthenticationService } from "./authentication.service";
@Injectable({
  providedIn: "root",
})
export class EmployeeService implements IEmployee {
  constructor(private _http: HttpClient, private _autho:AuthenticationService) {}

  CreateEmployee(emp: any) {
    return this._http.post(`${BASE_URL}${Endpoint.EMPLOYEE}`, emp);
  }
  GetAllEmployees() {
    // let token=this._autho.GetSavedUser();
    // token=token!=null?token.token:null;
    // const httpheaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // })
    return this._http.get(`${BASE_URL}${Endpoint.EMPLOYEE}`);
  }
  GetEmployeeById(id: number) {
    return this._http.get(`${BASE_URL}${Endpoint.EMPLOYEE}/${id}`);
  }
  DeleteEmployee(id: number) {
    return this._http.delete(`${BASE_URL}${Endpoint.EMPLOYEE}/${id}`);
  }
  UpdateEmployee(emp: any) {
    return this._http.put(`${BASE_URL}${Endpoint.EMPLOYEE}`, emp);
  }
}
