import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import{EmployeeServiceService} from '../employee-service.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  employee: Employee
  employeelist: Employee
  display : Boolean = false;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private employeeService: EmployeeServiceService) {
      this.employee = new Employee();    
   }

   onSubmit() {
    this.employeeService.findEmployee(this.employee).subscribe(data => {
    this.employeelist = data;
    });
    this.display = true;
  }
 
  ngOnInit() {
  }

}
