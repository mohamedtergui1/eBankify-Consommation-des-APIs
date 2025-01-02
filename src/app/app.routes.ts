import { Routes } from '@angular/router';
import { ProfileComponent } from './page/profile/profile.component';
import { authGuard } from './guards/auth.guard';
export const routes: Routes = [
    {
        path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
    }
    ,
    {
        path: "profile" , component: ProfileComponent , canActivate: [authGuard]
    }
];
