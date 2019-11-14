import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Loginmodel} from '../loginmodel';
import{EmployeeServiceService} from '../employee-service.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginmodel: Loginmodel;
  alert: Boolean = false;

  constructor( 
    private route: ActivatedRoute,
    private employeeService: EmployeeServiceService,
    private loginservice: AuthenticationService,
    private router: Router,) 
  { 
    this.loginmodel = new Loginmodel();
  }
  ngOnInit() {
  }
  onSubmit(){
    this.employeeService.validateLogin(this.loginmodel).subscribe(data=> {
      if(data){
        this.loginservice.authenticate(this.loginmodel.username);
        this.router.navigate(['/employeeInfomation']);
      }
      else{
        this.loginservice.authenticate(null);
        this.alert = true;
      }
      });
  }
}
