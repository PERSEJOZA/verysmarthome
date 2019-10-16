import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {BuyFoodComponent} from './components/buy-food/buy-food.component';
import {CookbookComponent} from './components/cookbook/cookbook.component';
import {FoodCalendarComponent} from './components/food-calendar/food-calendar.component';
import {FoodPlannerDashboardComponent} from './components/food-planner-dashboard/food-planner-dashboard.component';
import {FoodPlannerHeaderComponent} from './components/food-planner-header/food-planner-header.component';
import {FoodPlannerRoutingModule} from './food-planner-routing.module';
import {FoodPlannerComponent} from './food-planner.component';
import {RecipeComponent} from './components/cookbook/recipe/recipe.component';

@NgModule({
  declarations: [
    FoodPlannerComponent,
    FoodPlannerHeaderComponent,
    FoodPlannerDashboardComponent,
    CookbookComponent,
    FoodCalendarComponent,
    BuyFoodComponent,
    RecipeComponent
  ],
  imports: [FoodPlannerRoutingModule, SharedModule]
})
export class FoodPlannerModule {}
