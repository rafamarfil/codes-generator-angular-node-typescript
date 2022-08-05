import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';

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
    SharedRootCoreModule,
  ],
  declarations: [SharedUiPageNotFoundComponent],
})
export class SharedUiPageNotFoundModule {}
