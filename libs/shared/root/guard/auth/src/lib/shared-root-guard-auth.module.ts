import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRootGuardAuthGuard } from './shared-root-guard-auth.guard';
import { AuthDataAccessModule } from '@rvantravel/auth/data-access';

@NgModule({
  imports: [CommonModule, AuthDataAccessModule],
  providers: [SharedRootGuardAuthGuard],
})
export class SharedRootGuardAuthModule {}
