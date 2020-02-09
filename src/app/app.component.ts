import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-builder';
  loggedIn:boolean;
  route: string;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      console.log(location.path());
      console.log(this.loggedIn);
      if(location.path() == '/sites'){
       this.loggedIn=true;
       console.log(this.loggedIn)
      }else{
        this.loggedIn=false;
        console.log(this.loggedIn)
      }
    });
  }



  
}
