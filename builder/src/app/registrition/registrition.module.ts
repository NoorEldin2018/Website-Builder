import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RegistritionRoutingModule } from './registrition-routing.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
    RegistritionRoutingModule
  ],
  exports:[
    SignUpComponent,
    SignInComponent
  ]
})
export class RegistritionModule { }
