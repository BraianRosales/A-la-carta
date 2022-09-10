import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./protected/protected.module').then((m) => m.ProtectedModule)
  },
  {
    path: '**',
    redirectTo: 'notFound',
    pathMatch: 'full'
  },
  {
    path: 'notFound',
    loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
