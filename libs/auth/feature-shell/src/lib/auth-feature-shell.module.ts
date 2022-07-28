import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';

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
          import('@rvantravel/auth/feature-login').then(
            (m) => m.AuthFeatureLoginModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('@rvantravel/auth/feature-register').then(
            (m) => m.AuthFeatureRegisterModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthFeatureShellRoutes),
    SharedRootDataAccessModule,
  ],
  declarations: [AuthFeatureShellComponent],
})
export class AuthFeatureShellModule {}
