import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../employee';
import{EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]

  constructor(private employeeService: EmployeeServiceService,
    private route: ActivatedRoute, 
    private router: Router) { 
  }

  ngOnInit() {
    this.employeeService.listAll().subscribe(data => {
      this.employees = data;
    });
  }

  onDelete(employeeId: string){
    this.employeeService.deleteEmployee(employeeId).subscribe(result =>  this.gotoEmployeeList());
  }

  gotoEmployeeList(){
   // this.router.navigate(['/employeeList']);
   this.ngOnInit();
  }
}
