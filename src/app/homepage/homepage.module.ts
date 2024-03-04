import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LatestGeneratedComponent } from './latest-generated/latest-generated.component';
import { SliderhomeComponent } from './sliderhome/slider-home.component';
import { RoomDesignComponent } from './room-design/room-design.component';
import { DressDesignComponent } from './dress-design/dress-design.component';
import { RenderDesginDressComponent } from './render-desgin-dress/render-desgin-dress.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderhomeComponent,
    LatestGeneratedComponent,
    RoomDesignComponent,
    DressDesignComponent,
    RenderDesginDressComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule

  ]
})
export class HomepageModule { }
