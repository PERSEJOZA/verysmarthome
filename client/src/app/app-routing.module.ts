import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodPlannerComponent } from './food-planner/food-planner.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from 'src/utilities/authentication.guard';

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
  { path: '**', component: FoodPlannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
