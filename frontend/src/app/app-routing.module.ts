import { UndefinedComponent } from './components/undefined/undefined.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { UserResolver } from './resolver/user.resolver';
import { UserdetailComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'user/:uuid',
    component: UserdetailComponent,
    resolve: { resolvedResponse: UserResolver }

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
