import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./components/standalone/parent/routes').then(mod => mod.STANDALONE_ROUTES)
    //loadComponent: () => import('./components/standalone/parent/parent.component').then(m => m.ParentComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
