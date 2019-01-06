import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodplannerComponent } from './foodplanner/foodplanner.component';

const routes: Routes = [
  { path: 'food-planner',
    component: FoodplannerComponent },
  { path: '',
    redirectTo: '/food-planner',
    pathMatch: 'full'
  },
  { path: '**', component: FoodplannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }