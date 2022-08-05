import { NgModule } from '@angular/core';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
import { SharedUiNavbarComponent } from './shared-ui-navbar.component';

@NgModule({
  imports: [SharedRootCoreModule],
  declarations: [SharedUiNavbarComponent],
  exports: [SharedUiNavbarComponent],
})
export class SharedUiNavbarModule {}
