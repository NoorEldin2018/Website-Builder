import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  loggedIn:boolean;
  template:boolean;
  userlogin:boolean;
  usersite:boolean;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() == '/sites'||location.path() == '/editTemplate'){
       this.loggedIn=true;
      }else{
        this.loggedIn=false;
      }
     if(location.path() == '/editTemplate'){
        this.template=true;
      }else{
        this.template=false;
      }
      if(location.path() == '/sites' || location.path() == '/editTemplate'){
        this.usersite=true;
      }else{
        this.usersite=false;
      }
      if(location.path() == '/sites'||location.path() == '/editTemplate'){
        this.userlogin=false;
      }else{
        this.userlogin=true;
      }
    });
  }

  ngOnInit() {
  }

}
