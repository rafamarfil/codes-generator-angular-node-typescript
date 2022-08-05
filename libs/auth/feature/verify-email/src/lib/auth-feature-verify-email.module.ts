import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
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
    SharedRootCoreModule,
    AuthDataAccessModule,
  ],
  declarations: [AuthFeatureVerifyEmailComponent],
})
export class AuthFeatureVerifyEmailModule {}
