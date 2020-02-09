import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import{Router} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm:FormGroup;

  constructor(public _router:Router,public _fb:FormBuilder) { }
  login(){
    this._router.navigate(["/categories"]);
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.pattern(/^[A-Z][0-9 a-z]{5,8}$/)]],
    });
  }


  get email(){
    return this.loginForm.get("email");
  }

  get password(){
    return this.loginForm.get("password");
  }

}
