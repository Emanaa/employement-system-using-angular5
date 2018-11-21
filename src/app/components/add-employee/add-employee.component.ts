import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Employee';
import { FlashMessagesService } from "angular2-flash-messages";
import {Router} from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

employee:Employee={

  firstName :"",
  lastName :"",
  email :"",
  country :"",
  city :"",
  phone :0,
  salary :0

};

disableSalary:boolean=false;

  constructor(public fashMessagesService : FlashMessagesService,
     public router:Router ,
     public employeeService:EmployeeService
    ) { }

  ngOnInit() {
  
  }


  mySubmit({value,valid}:{value:Employee,valid:boolean}){

    if(this.disableSalary){
      value.salary=0;
    }



if (!valid) {
  this.fashMessagesService.show('Please write correct info',{cssClass:'alert-danger',timeout:6000});
  this.router.navigate(['add-employee']);
 // console.log("not correct data");
}else{
  this.employeeService.addEmployee(value);
  this.fashMessagesService.show('Thanks new employee added successfully !',{cssClass:'alert-success',timeout:6000});
  this.router.navigate(['/']);
 // console.log(this.employee);
}
  }

}
