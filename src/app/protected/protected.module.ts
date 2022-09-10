import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeModule } from './pages/home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    HomeModule
  ]
})
export class ProtectedModule { }
