import { CanActivateFn } from '@angular/router';
import { AuthUserServiceService } from '../shared/services/auth-user-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authservice: AuthUserServiceService = inject(AuthUserServiceService);

  return authservice.iSauthenticated(); 
};
