import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'receta/:id',
      loadChildren: () => import('./pages/recipe-information/recipe-information.module').then((m) => m.RecipeInformationModule)
    },
    {
      path: 'buscador',
      loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
