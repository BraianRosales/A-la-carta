import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeInformationComponent } from './recipe-information.component';
import { Routes, RouterModule } from '@angular/router';

  const routes: Routes = [
    {
      path: '',
      component: RecipeInformationComponent
    }
  ]

@NgModule({
  declarations: [
    RecipeInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecipeInformationModule { }
