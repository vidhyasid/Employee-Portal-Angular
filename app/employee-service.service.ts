import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import {Loginmodel} from './loginmodel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private employeeListUrl: string;
  private searchEmployeeUrl: string;
  private loginUrl: string;
  private addEmployeeUrl: string;
  private deleteEmployeeUrl: string;
  constructor(private http: HttpClient) { 
    this.employeeListUrl = 'http://localhost:8080/getEmployeeList';
    this.searchEmployeeUrl = 'http://localhost:8080/getEmployee';
    this.loginUrl = 'http://localhost:8080/login';
    this.addEmployeeUrl = 'http://localhost:8080/addEmployee';
    this.deleteEmployeeUrl = 'http://localhost:8080/deleteEmployee';
  }

  public listAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeListUrl);
  }

  public findEmployee(employee: Employee) : Observable<Employee>  {
    const options = { params: new HttpParams().set("employeeId",employee.employeeId) };
    return this.http.get<Employee>(this.searchEmployeeUrl, options);
  }

  public validateLogin(loginmodel: Loginmodel) : Observable<Boolean>{
    const options = { params: new HttpParams().set("username",loginmodel.username).set("password",loginmodel.password) };
    return this.http.get<Boolean>(this.loginUrl, options);
  }

  public addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.addEmployeeUrl, employee);
  }

  public deleteEmployee(employeeId: String) {
    return this.http.post<String>(this.deleteEmployeeUrl, employeeId);
  }
}
