import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ImageCropperModule} from 'ngx-image-cropper';

import {HeaderComponent} from './components/header/header.component';
import {ImageCropperComponent} from './components/image-cropper/image-cropper.component';
import {SpinnerComponent} from './components/spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, ImageCropperComponent, SpinnerComponent],
  imports: [ImageCropperModule, CommonModule, ReactiveFormsModule],
  exports: [HeaderComponent, ImageCropperComponent, SpinnerComponent, CommonModule, ReactiveFormsModule]
})
export class SharedModule {}
