import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPassForm = new FormGroup({
    userName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email])
  });

  constructor() { }

  ngOnInit() {
  }

  get userName(){
    return this.forgetPassForm.get("userName");
  }

  get email(){
    return this.forgetPassForm.get("email");
  }

}
