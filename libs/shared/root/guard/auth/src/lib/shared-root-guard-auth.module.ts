import { NgModule } from '@angular/core';

import { AuthDataAccessModule } from '@rvantravel/auth/data-access';

@NgModule({
  imports: [AuthDataAccessModule],
})
export class SharedRootGuardAuthModule {}
