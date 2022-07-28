import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootDataAccessModule } from '@rvantravel/shared/root/data-access';

import { SharedUiPageNotFoundComponent } from './shared-ui-page-not-found.component';

const SharedUiPageNotFoundRoutes: Routes = [
  {
    path: '',
    component: SharedUiPageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(SharedUiPageNotFoundRoutes),
    SharedRootDataAccessModule,
  ],
  declarations: [SharedUiPageNotFoundComponent],
})
export class SharedUiPageNotFoundModule {}
