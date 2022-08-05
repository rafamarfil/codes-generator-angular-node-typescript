import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
import {
  SharedRootGuardAuthGuard,
  SharedRootGuardAuthModule,
} from '@rvantravel/shared/root/guard/auth';
import { SharedUiNavbarModule } from '@rvantravel/shared/ui/navbar';

import { ShellComponent } from './shell.component';

const ShellRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@rvantravel/auth/feature/shell').then(
        (m) => m.AuthFeatureShellModule
      ),
  },
  {
    path: 'booking',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full',
      },
      {
        path: 'flight-search',
        loadChildren: () =>
          import('@rvantravel/booking/feature/shell').then(
            (m) => m.BookingFeatureShellModule
          ),
        canLoad: [SharedRootGuardAuthGuard],
      },
    ],
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
  imports: [
    RouterModule.forRoot(ShellRoutes),
    SharedRootCoreModule,
    SharedRootGuardAuthModule,
    SharedUiNavbarModule,
  ],
  declarations: [ShellComponent],
})
export class ShellModule {}
