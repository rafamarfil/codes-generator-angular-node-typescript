import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
import { AuthDataAccessModule } from '@rvantravel/auth/data-access';

import { AuthFeatureRegisterComponent } from './auth-feature-register.component';

const AuthFeatureRegisterRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AuthFeatureRegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthFeatureRegisterRoutes),
    SharedRootCoreModule,
    AuthDataAccessModule,
  ],
  declarations: [AuthFeatureRegisterComponent],
})
export class AuthFeatureRegisterModule {}
