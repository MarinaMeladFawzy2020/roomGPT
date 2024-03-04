import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressDesignComponent } from './dress-design/dress-design.component';
import { HomeComponent } from './home/home.component';
import { RoomDesignComponent } from './room-design/room-design.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'room', component: RoomDesignComponent},
  {path:'dress', component: DressDesignComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
