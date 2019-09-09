import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BuyFoodComponent } from "./components/buy-food/buy-food.component";
import { CookbookComponent } from "./components/cookbook/cookbook.component";
import { FoodCalendarComponent } from "./components/food-calendar/food-calendar.component";
import { FoodPlannerDashboardComponent } from "./components/food-planner-dashboard/food-planner-dashboard.component";
import { FoodPlannerComponent } from "./food-planner.component";

const routes: Routes = [
  {
    path: "",
    component: FoodPlannerComponent,
    children: [
      {
        path: "",
        component: FoodPlannerDashboardComponent
      },
      {
        path: "cookbook",
        component: CookbookComponent
      },
      {
        path: "planning",
        component: FoodCalendarComponent
      },
      {
        path: "shopping",
        component: BuyFoodComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodPlannerRoutingModule {}
