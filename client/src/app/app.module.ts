import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SharedModule } from "./shared/shared.module";
import { ErrorMessageComponent } from "./components/error-message/error-message.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent, ErrorMessageComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
