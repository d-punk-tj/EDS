import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent,  },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
  { path: 'employeeDetail/:id', component: EmployeeDetailComponent, canActivate: [AuthGuard] }

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
