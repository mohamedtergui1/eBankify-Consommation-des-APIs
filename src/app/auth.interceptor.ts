import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  console.log("test");
  let clonedRequest = req;
  
  if (token) {
    clonedRequest = clonedRequest.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
  if (!/^http[s]?:\/\//.test(req.url)) {
    clonedRequest = clonedRequest.clone({
      url: environment.apiBaseUrl + req.url,
    });
  }
  
  return next(clonedRequest).pipe(
    catchError(error => {
      // Handle any errors here
      console.error('Request error:', error);
      return throwError(() => error);
    })
  );
};