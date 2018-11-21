import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import {FlashMessagesModule} from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import { EmployeesComponent } from './components/employees/employees.component';
import{ EmployeeService } from './services/employee.service';


export const firebaseConfig = {
  apiKey: "AIzaSyC-fN9B8B8zqBMzoabx_yTd6ZqimHPBU4c",
  authDomain: "employeemanagement-39e8c.firebaseapp.com",
  databaseURL: "https://employeemanagement-39e8c.firebaseio.com",
  storageBucket: "employeemanagement-39e8c.appspot.com",
  messagingSenderId: "1095260332168"
};


const appRoutes: Routes=[
  {path:'',component:DashboardComponent},

  {path:'add-employee',component:AddEmployeeComponent},
  {path:'employee/:id',component:EmployeeInfoComponent},
  {path:'edit-employee/:id',component:EditEmployeeComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,

    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
