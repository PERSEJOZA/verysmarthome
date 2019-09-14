import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from '../components/spinner/spinner.component';
import { httpRequestErrorHandlerProvider } from '../services/interceptors/http-request-error-handler.provider';
import { loaderSpinnerProvider } from '../services/interceptors/loader-spinner.provider';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [loaderSpinnerProvider, httpRequestErrorHandlerProvider],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
