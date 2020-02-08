import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    userName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.email]),
    pass: new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][0-9 a-z]{5,8}$/)]),
    repass: new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][0-9 a-z]{5,8}$/)]),
  });

  constructor() { }

  ngOnInit() {

  }

  get userName(){
    return this.signupForm.get("userName");
  }

  get email(){
    return this.signupForm.get("email");
  }

  get pass(){
    return this.signupForm.get("pass");
  }

  get repass(){
    return this.signupForm.get("repass");
  }

}
