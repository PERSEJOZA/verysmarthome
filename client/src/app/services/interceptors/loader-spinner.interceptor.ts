import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {SpinnerService} from '../spinner.service';

@Injectable()
export class LoaderSpinnerInterceptor implements HttpInterceptor {
  private numberOfRequests = 0;

  public constructor(private spinnerService: SpinnerService) {}
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    this.numberOfRequests++;
    this.spinnerService.startLoading();

    return next.handle(req).pipe(
      finalize(() => {
        this.numberOfRequests--;
        if (this.numberOfRequests === 0) {
          this.spinnerService.stopLoading();
        }
      }),
    );
  }
}
