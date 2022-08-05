import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';

import { AuthFeatureShellComponent } from './auth-feature-shell.component';

const AuthFeatureShellRoutes: Routes = [
  {
    path: '',
    component: AuthFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@rvantravel/auth/feature/login').then(
            (m) => m.AuthFeatureLoginModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('@rvantravel/auth/feature/register').then(
            (m) => m.AuthFeatureRegisterModule
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('@rvantravel/auth/feature/forgot-password').then(
            (m) => m.AuthFeatureForgotPasswordModule
          ),
      },
      {
        path: 'verify-email-address',
        loadChildren: () =>
          import('@rvantravel/auth/feature/verify-email').then(
            (m) => m.AuthFeatureVerifyEmailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthFeatureShellRoutes),
    SharedRootCoreModule,
  ],
  declarations: [AuthFeatureShellComponent],
})
export class AuthFeatureShellModule {}
