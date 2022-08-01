import { NgModule } from '@angular/core';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';
import { SharedUiNavbarComponent } from './shared-ui-navbar.component';

@NgModule({
  imports: [SharedRootDataAccessModule],
  declarations: [SharedUiNavbarComponent],
  exports: [SharedUiNavbarComponent],
})
export class SharedUiNavbarModule {}
