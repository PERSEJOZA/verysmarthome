import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SpinnerComponent} from '../components/spinner/spinner.component';
import {HeaderComponent} from './components/header/header.component';
import {httpRequestErrorHandlerProvider} from './services/interceptors/http-request-error-handler.provider';
import {loaderSpinnerProvider} from './services/interceptors/loader-spinner.provider';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, MatFormFieldModule, BrowserAnimationsModule],
  providers: [loaderSpinnerProvider, httpRequestErrorHandlerProvider],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    SpinnerComponent,
    BrowserAnimationsModule,
    MatFormFieldModule
  ]
})
export class SharedModule {}
