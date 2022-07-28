import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ShellRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@rvantravel/auth/feature-shell').then(
        (m) => m.AuthFeatureShellModule
      ),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('@rvantravel/booking/feature/shell').then(
        (m) => m.BookingFeatureShellModule
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('@rvantravel/shared/ui/page-not-found').then(
        (m) => m.SharedUiPageNotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ShellRoutes)],
})
export class ShellModule {}
