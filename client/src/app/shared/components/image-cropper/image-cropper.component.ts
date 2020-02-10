import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ImageCroppedEvent} from 'ngx-image-cropper';

import {ErrorMessageService} from '../../../services/error-message.service';
import {SpinnerService} from '../../../services/spinner.service';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent {
  public constructor(public spinnerService: SpinnerService, private errorService: ErrorMessageService) {}
  @Input() public form: FormGroup;
  public imageChangedEvent: Event;
  public croppedImage: string;

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
    this.spinnerService.isLoading = true;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {}
  cropperReady() {
    this.spinnerService.stopLoading();
  }
  loadImageFailed() {
    this.errorService.setError('Cannot load the image');
  }

  public closeModal() {
    this.imageChangedEvent = undefined;
    this.form.patchValue({image: this.croppedImage});
    this.errorService.clearError();
    this.spinnerService.stopLoading();
  }
}
