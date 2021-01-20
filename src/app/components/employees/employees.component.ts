import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { employee} from '../../models/employee.model'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public displayedColumns = ['id', 'employee_name', 'employee_salary', 'employee_age', 'Details'];
  public dataSource = new MatTableDataSource<employee>();


  constructor(private es : EmployeeService, private router : Router) {
    this.es.getEmployees().subscribe( (res : any) => {
      if(res.status == "success"){
        this.dataSource.data = res.data as employee[];
      }
    })
   }

  ngOnInit(): void {
    
  }

  redirectToDetails(id :string){
    console.log(id);
    this.router.navigate(['employeeDetail/' + id]);
  }

}
