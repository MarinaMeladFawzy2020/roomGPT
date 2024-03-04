import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
   
    ]
})
export class AuthModule { }
