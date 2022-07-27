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
    loadChildren: () => import('@rvantravel/auth').then((m) => m.AuthModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('@rvantravel/booking/feature/shell').then(
        (m) => m.BookingFeatureShellModule
      ),
  },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: 'not-found',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(ShellRoutes)],
})
export class ShellModule {}
