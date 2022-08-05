import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
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
    SharedRootCoreModule,
    AuthDataAccessModule,
  ],
  declarations: [AuthFeatureForgotPasswordComponent],
})
export class AuthFeatureForgotPasswordModule {}
