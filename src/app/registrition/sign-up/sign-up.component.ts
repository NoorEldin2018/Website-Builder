import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl,FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../helpers/must-match.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm:FormGroup;
 

  constructor(public _fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this._fb.group({
      userName:["",[Validators.required]],
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.pattern(/^[A-Z][0-9 a-z]{5,8}$/)]],
      confirmPassword: ["",[Validators.required,Validators.pattern(/^[A-Z][0-9 a-z]{5,8}$/)]],
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  signup(){

  }

  get userName(){
    return this.signupForm.get("userName");
  }

  get email(){
    return this.signupForm.get("email");
  }

  get password(){
    return this.signupForm.get("password");
  }

  get confirmPassword(){
    return this.signupForm.get("confirmPassword");
  }

}
