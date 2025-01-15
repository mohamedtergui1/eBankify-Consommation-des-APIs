import { Routes } from '@angular/router';
import { ProfileComponent } from './page/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './page/home/home.component';
import { Error404Component } from './page/error/error404/error404.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dash-board/dash-board.module').then((m) => m.DashBoardModule)
    ,
    canActivate: [authGuard]
  },
  {
    path: '**',
    component: Error404Component,
  },
];
