import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  error: string;

  constructor() { }

  public clearError(): void {
    this.error = undefined;
  }

  public setError(error: any): void {
    this.error = error;
  }
}
