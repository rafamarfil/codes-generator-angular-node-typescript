import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';
import { AuthDataAccessModule } from '@rvantravel/auth/data-access';
import { AuthFeatureLoginComponent } from './auth-feature-login.component';

const AuthFeatureLoginRoutes: Routes = [
  {
    path: '',
    component: AuthFeatureLoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthFeatureLoginRoutes),
    SharedRootDataAccessModule,
    AuthDataAccessModule,
  ],
  declarations: [AuthFeatureLoginComponent],
})
export class AuthFeatureLoginModule {}
