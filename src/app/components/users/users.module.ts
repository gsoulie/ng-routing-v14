import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule,
    UsersRoutingModule
  ],
  providers: [],
  declarations: [UsersComponent]
})
export class UsersModule { }
