import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { SomeComponent } from './some/some.component';

const routes: Routes = [
  {
    path: 'protected-route',
    component: SomeComponent,
    canActivate: [authGuard],
  },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 