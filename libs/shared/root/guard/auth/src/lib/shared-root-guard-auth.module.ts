import { NgModule } from '@angular/core';

import { SharedRootGuardAuthGuard } from './shared-root-guard-auth';
import { AuthDataAccessModule } from '@rvantravel/auth/data-access';

@NgModule({
  imports: [AuthDataAccessModule],
  providers: [SharedRootGuardAuthGuard],
})
export class SharedRootGuardAuthModule {}
