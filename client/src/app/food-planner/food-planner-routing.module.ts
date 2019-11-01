import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BuyFoodComponent} from './components/buy-food/buy-food.component';
import {CookbookComponent} from './components/cookbook/cookbook.component';
import {FoodCalendarComponent} from './components/food-calendar/food-calendar.component';
import {FoodPlannerDashboardComponent} from './components/food-planner-dashboard/food-planner-dashboard.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {FoodPlannerComponent} from './food-planner.component';
import {RecipeResolver} from './resolvers/recipe.resolver';
import {RecipesResolver} from './resolvers/recipes.resolver';

const routes: Routes = [
  {
    path: '',
    component: FoodPlannerComponent,
    children: [
      {
        path: '',
        component: FoodPlannerDashboardComponent
      },
      {
        path: 'cookbook',
        component: CookbookComponent,
        resolve: {
          recipes: RecipesResolver
        }
      },
      {
        path: 'recipes/:id',
        component: RecipeDetailsComponent,
        resolve: {
          recipe: RecipeResolver
        }
      },
      {
        path: 'planning',
        component: FoodCalendarComponent
      },
      {
        path: 'shopping',
        component: BuyFoodComponent
      }
    ]
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
export class FoodPlannerRoutingModule {}
