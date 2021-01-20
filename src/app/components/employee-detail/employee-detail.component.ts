import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { employee} from '../../models/employee.model'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  id: number | undefined;
  private sub: any;
  emp_detail : employee;


  constructor(private route: ActivatedRoute, private es: EmployeeService) {   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => { 
      this.es.getEmployeeDetail(params['id']).subscribe( (res : any) => {
        this.emp_detail = res.data;
        console.log(this.emp_detail);
      } )
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
