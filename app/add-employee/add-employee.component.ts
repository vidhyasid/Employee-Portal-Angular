import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee
  alert: Boolean = false;
  constructor(private employeeService: EmployeeServiceService) {
    this.employee = new Employee(); 
   }
   onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(result =>  this.alert = true);
  }
  ngOnInit() {
  }
}
