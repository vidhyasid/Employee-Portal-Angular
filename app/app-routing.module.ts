import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employeeInfomation', component: EmployeeInformationComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'employeeSearch', component: SearchEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
