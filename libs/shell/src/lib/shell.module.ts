import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
import {
  SharedRootGuardAuthGuard,
  SharedRootGuardAuthModule,
} from '@rvantravel/shared/root/guard/auth';
import { SharedUiNavbarModule } from '@rvantravel/shared/ui/navbar';
import { SharedRootInterceptorsModule } from '@rvantravel/shared/root/interceptors';

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
    path: 'dashboard',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'coupons',
        pathMatch: 'full',
      },
      {
        path: 'coupons',
        loadChildren: () =>
          import('@rvantravel/coupons/feature/shell').then(
            (m) => m.CouponsFeatureShellModule
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
    HttpClientModule,
    SharedRootGuardAuthModule,
    SharedRootInterceptorsModule,
    SharedRootCoreModule,
    SharedUiNavbarModule,
  ],
  declarations: [ShellComponent],
  providers: [],
})
export class ShellModule {}
