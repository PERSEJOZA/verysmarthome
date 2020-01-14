import {NgModule} from '@angular/core';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';

import {SharedModule} from '../shared/shared.module';
import {BuyFoodComponent} from './components/buy-food/buy-food.component';
import {CookbookComponent} from './components/cookbook/cookbook.component';
import {RecipeComponent} from './components/cookbook/recipe/recipe.component';
import {FoodCalendarComponent} from './components/food-calendar/food-calendar.component';
import {FoodPlannerDashboardComponent} from './components/food-planner-dashboard/food-planner-dashboard.component';
import {FoodPlannerHeaderComponent} from './components/food-planner-header/food-planner-header.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {RecipeIngredientsComponent} from './components/recipe-details/recipe-ingredients/recipe-ingredients.component';
import {RecipeStepsComponent} from './components/recipe-details/recipe-steps/recipe-steps.component';
import {RecipeTagsComponent} from './components/recipe-details/recipe-tags/recipe-tags.component';
import {FoodPlannerRoutingModule} from './food-planner-routing.module';
import {FoodPlannerComponent} from './food-planner.component';

@NgModule({
  declarations: [
    FoodPlannerComponent,
    FoodPlannerHeaderComponent,
    FoodPlannerDashboardComponent,
    CookbookComponent,
    FoodCalendarComponent,
    BuyFoodComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeIngredientsComponent,
    RecipeStepsComponent,
    RecipeTagsComponent
  ],
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    FoodPlannerRoutingModule,
    SharedModule
  ]
})
export class FoodPlannerModule {}
