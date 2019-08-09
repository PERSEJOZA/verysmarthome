import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FoodPlannerRoutingModule } from './food-planner-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [FoodPlannerRoutingModule, SharedModule]
})
export class FoodPlannerModule { }
