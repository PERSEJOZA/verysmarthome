import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../authentication/authentication.module').then(
        mod => mod.AuthenticationModule
      )
  },
  {
    path: 'food-planner',
    loadChildren: () =>
      import('../food-planner/food-planner.module').then(
        mod => mod.FoodPlannerModule
      ),
    canActivate: [AuthenticationGuard]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule { }
