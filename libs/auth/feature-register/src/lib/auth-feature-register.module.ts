import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';
import { AuthFeatureRegisterComponent } from './auth-feature-register.component';

const AuthFeatureRegisterRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AuthFeatureRegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(AuthFeatureRegisterRoutes),
    SharedRootDataAccessModule,
  ],
  declarations: [AuthFeatureRegisterComponent],
})
export class AuthFeatureRegisterModule {}
