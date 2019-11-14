import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeServiceService } from './employee-service.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthenticationService } from './authentication.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeInformationComponent,
    EmployeeListComponent,
    SearchEmployeeComponent,
    AddEmployeeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'employeeInfomation', component: EmployeeInformationComponent },
      { path: 'employeeList', component: EmployeeListComponent },
      { path: 'employeeSearch', component: SearchEmployeeComponent },
      { path: 'addEmployee', component: AddEmployeeComponent },
      { path: 'logout', component: LogoutComponent },
    ]),
  ],
  providers: [EmployeeServiceService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
