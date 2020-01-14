import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ErrorMessageComponent} from './components/error-message/error-message.component';
import {HttpRequestErrorHandlerInterceptor} from './services/interceptors/http-request-error-handler.interceptor';
import {LoaderSpinnerInterceptor} from './services/interceptors/loader-spinner.interceptor';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ErrorMessageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderSpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
