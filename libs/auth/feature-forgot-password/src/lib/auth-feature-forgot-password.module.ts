import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';
import { AuthDataAccessModule } from '@rvantravel/auth/data-access';

import { AuthFeatureForgotPasswordComponent } from './auth-feature-forgot-password.component';

const AuthFeatureForgotPasswordRoutes: Routes = [
  {
    path: '',
    component: AuthFeatureForgotPasswordComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthFeatureForgotPasswordRoutes),
    SharedRootDataAccessModule,
    AuthDataAccessModule,
  ],
  declarations: [AuthFeatureForgotPasswordComponent],
})
export class AuthFeatureForgotPasswordModule {}
