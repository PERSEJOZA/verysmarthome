import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderCustomerInfoComponent } from './header/headerCustomerInfoComponent/headerCustomerInfoComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
