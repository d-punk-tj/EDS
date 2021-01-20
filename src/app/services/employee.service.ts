import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  getEmployeeDetail(id : string){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employee/' + id);
  }
}
