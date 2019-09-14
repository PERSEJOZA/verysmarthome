import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading = false;

  constructor() {}

  public startLoading(): void {
    this.isLoading = true;
  }

  public stopLoading(): void {
    this.isLoading = false;
  }
}
