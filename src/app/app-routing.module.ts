import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
//import {AuthGuardService} from './interceptor/auth.guard';
const routes: Routes = [
  {path:'home',loadChildren:()=>import('./homepage/homepage.module').then(m=>m.HomepageModule)},
  {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},

  // {path:'dashboard',component:SidebarComponent,children:[
  //   {path:'',loadChildren:()=>import('./dashboard/dashboard.module').then(module=>module.DashboardModule) }  //, canActivate:[AuthGuard]
  // ]},


  // {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'**',redirectTo:'',pathMatch:'full'},




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
