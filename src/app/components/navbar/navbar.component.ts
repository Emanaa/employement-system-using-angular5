import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router   } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogIn:boolean;
  isUserLogin:string;
  enableRegister:boolean;


  constructor(
    public router:Router,
    public flashMessagesService:FlashMessagesService,

  ) { }

  ngOnInit() {


  }


  



}
