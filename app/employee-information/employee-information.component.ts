import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) {

   }

  ngOnInit() {
  }

}
