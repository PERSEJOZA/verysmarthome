import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FoodPlannerRoutingModule } from "./food-planner-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FoodPlannerRoutingModule]
})
export class FoodPlannerModule {}
