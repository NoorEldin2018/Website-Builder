import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';



export const routes: Routes = [
  { path: '', component: SignUpComponent }, // default route of the module
  { path: 'login', component: SignInComponent },
  { path: 'forget-password', component: ForgetPasswordComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class RegistritionRoutingModule { }
