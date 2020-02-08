import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './registrition/sign-up/sign-up.component';
import { SignInComponent } from './registrition/sign-in/sign-in.component';


const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  // {path:"register",component:SignUpComponent},
  // {path:"login",component:SignInComponent},
  {path: 'register',loadChildren: './registrition/registrition.module#RegistritionModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
