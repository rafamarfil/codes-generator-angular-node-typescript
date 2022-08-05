import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
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
    SharedRootCoreModule,
    AuthDataAccessModule,
  ],
  declarations: [AuthFeatureLoginComponent],
})
export class AuthFeatureLoginModule {}
