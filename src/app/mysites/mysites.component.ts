import { Component, OnInit } from '@angular/core';
import {CheckloginService} from '../checklogin.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mysites',
  templateUrl: './mysites.component.html',
  styleUrls: ['./mysites.component.scss']
})
export class MysitesComponent implements OnInit {
  loggedIn:boolean=true;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() == '/sites'){
       this.loggedIn=true;
      }else{
        this.loggedIn=false;
        
      }
    });
  }

  ngOnInit() {
  }

}
