export interface IEmployee {
  CreateEmployee(emp: any): any;
  GetAllEmployees(): any;
  GetEmployeeById(id: number): any;
  DeleteEmployee(id: number): any;
  UpdateEmployee(emp: any);
}
