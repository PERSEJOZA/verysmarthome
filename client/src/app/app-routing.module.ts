import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./shared-module/components/login/login.component";
import { AuthenticationGuard } from "./shared-module/guards/authentication.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "food-planner",
    loadChildren: () =>
      import("./food-planner/food-planner.module").then(
        mod => mod.FoodPlannerModule
      ),
    canLoad: [AuthenticationGuard]
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
