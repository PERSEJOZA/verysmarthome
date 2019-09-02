import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CookbookComponent } from './components/cookbook/cookbook.component';
import { FoodPlannerComponent } from './food-planner.component';

const routes: Routes = [
  {
    path: '',
    component: FoodPlannerComponent,
    children: [{
      path: 'cookbook',
      component: CookbookComponent
    },
    {
      path: 'planning',
      component: CookbookComponent
    },
    {
      path: 'shopping',
      component: CookbookComponent
    }]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodPlannerRoutingModule { }
