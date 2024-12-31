import { HttpInterceptorFn, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, tap, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environment';
import { ProgressService } from './shared/services/progress.service';
import { BehaviorSubject } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const messageService = inject(MessageService);
  const progress = inject(ProgressService);
  
  progress.start();
  
  let clonedRequest = req.clone({
    url: environment.apiBaseUrl + req.url,
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {}
  });

  return next(clonedRequest).pipe(
    tap((response: any) => {
      if (response.type === HttpEventType.DownloadProgress) {
        const percentDone = Math.round(100 * response.loaded / response.total);
        progress.updateProgress(percentDone);
      }
      if (response.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * response.loaded / response.total);
        progress.updateProgress(percentDone);
      }
      if (response?.data?.message) {
        messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.message
        });
      }
    }),
    catchError((error: HttpErrorResponse) => {
      const errorMessages = {
        401: 'Unauthorized!',
        403: 'Forbidden access',
        404: 'Resource not found',
        500: 'Server error! Please try again later.'
      };

      const route = error.status === 401 ? '/auth' : `/error${error.status}`;
      const severity = error.status === 401 ? 'warn' : 'error';

      if (errorMessages[error.status as keyof typeof errorMessages]) {
        messageService.add({
          severity,
          summary: severity === 'warn' ? 'Warning' : 'Error',
          detail: error.error.message
        });
        router.navigate([route]);
      }

      return throwError(() => error);
    }),
    finalize(() => {
      progress.stop();
    })
  );
};