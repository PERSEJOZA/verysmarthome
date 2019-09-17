import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ErrorMessageService} from '../error-message.service';

@Injectable()
export class HttpRequestErrorHandlerInterceptor implements HttpInterceptor {
  public constructor(private errorMessage: ErrorMessageService) {}
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: ErrorEvent) => {
        this.errorMessage.setError(error.message);
        throw error.error;
      }),
      tap(event => {
        if (event instanceof HttpResponse && !!event.ok) {
          this.errorMessage.clearError();
        } else {
          this.errorMessage.setError(JSON.stringify(event));
        }
      }),
    );
  }
}
