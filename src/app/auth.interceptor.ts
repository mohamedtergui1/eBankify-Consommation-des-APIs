import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {


  const token = localStorage.getItem('token');


  let clonedRequest = req;

  if (token) {
     
    clonedRequest = clonedRequest.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

 
  clonedRequest = clonedRequest.clone({
    url: `http://localhost:8080${req.url}` 
  });

  
  return next(clonedRequest);
};
