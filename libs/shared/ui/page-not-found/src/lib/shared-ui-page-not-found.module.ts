import { NgModule } from '@angular/core';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';

import { SharedUiPageNotFoundComponent } from './shared-ui-page-not-found.component';

@NgModule({
  imports: [SharedRootDataAccessModule],
  declarations: [SharedUiPageNotFoundComponent],
})
export class SharedUiPageNotFoundModule {}
