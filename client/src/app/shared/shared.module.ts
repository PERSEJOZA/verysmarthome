import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule
  ],
  exports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, HeaderComponent
  ]
})
export class SharedModule { }
