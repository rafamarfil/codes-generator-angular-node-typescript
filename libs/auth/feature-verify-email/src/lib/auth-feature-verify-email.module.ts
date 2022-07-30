import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';
import { AuthDataAccessModule } from '@rvantravel/auth/data-access';
import { AuthFeatureVerifyEmailComponent } from './auth-feature-verify-email.component';

const AuthFeatureVerifyEmailRoutes: Routes = [
  {
    path: '',
    component: AuthFeatureVerifyEmailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthFeatureVerifyEmailRoutes),
    SharedRootDataAccessModule,
    AuthDataAccessModule,
  ],
  declarations: [AuthFeatureVerifyEmailComponent],
})
export class AuthFeatureVerifyEmailModule {}
