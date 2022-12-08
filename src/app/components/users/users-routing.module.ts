import { DetailComponent } from './detail/detail.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'detail',
        component: DetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UsersRoutingModule { }
