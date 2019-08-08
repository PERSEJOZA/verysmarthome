import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/utilities/authentication.guard';

import { FoodPlannerComponent } from './food-planner/food-planner.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'food-planner',
    canActivate: [AuthenticationGuard],
    component: FoodPlannerComponent
  },
  { path: '**', redirectTo: 'food-planner' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
