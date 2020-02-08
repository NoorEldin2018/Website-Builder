import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.email]),
    pass: new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][0-9 a-z]{5,8}$/)])
  });

  constructor() { }

  ngOnInit() {
  }


  get email(){
    return this.loginForm.get("email");
  }

  get pass(){
    return this.loginForm.get("pass");
  }

}
