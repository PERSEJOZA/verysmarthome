import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {HttpRequestErrorHandlerInterceptor} from './http-request-error-handler.interceptor';

export const httpRequestErrorHandlerProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpRequestErrorHandlerInterceptor,
  multi: true
};
