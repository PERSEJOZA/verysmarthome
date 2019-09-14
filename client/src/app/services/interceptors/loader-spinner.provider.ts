import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderSpinnerInterceptor } from './loader-spinner.interceptor';

export const loaderSpinnerProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderSpinnerInterceptor,
  multi: true,
};
