import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderCustomerInfoComponent } from './header/headerCustomerInfoComponent/headerCustomerInfoComponent.component';
import { FoodplannerComponent } from './foodplanner/foodplanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCustomerInfoComponent,
    FoodplannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
