import { UndefinedComponent } from './components/undefined/undefined.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'user/:uuid',
    component: UserDetailsComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: '**',
    component: UndefinedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
