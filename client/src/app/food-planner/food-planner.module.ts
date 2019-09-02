import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { FoodPlannerRoutingModule } from './food-planner-routing.module';
import { FoodPlannerComponent } from './food-planner.component';
import { FoodPlannerHeaderComponent } from './components/food-planner-header/food-planner-header.component';

@NgModule({
  declarations: [CookbookComponent, FoodPlannerComponent, FoodPlannerHeaderComponent],
  imports: [FoodPlannerRoutingModule, SharedModule]
})
export class FoodPlannerModule { }
