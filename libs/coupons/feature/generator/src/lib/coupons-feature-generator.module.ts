import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedRootCoreModule } from '@rvantravel/shared/root/core';
import { CouponsDataAccessModule } from '@rvantravel/coupons/data-access';
import { CouponsFeatureGeneratorComponent } from './coupons-feature-generator.component';

const CouponsFeatureGeneratorRoutes: Routes = [
  {
    path: '',
    component: CouponsFeatureGeneratorComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(CouponsFeatureGeneratorRoutes),
    SharedRootCoreModule,
    CouponsDataAccessModule,
  ],
  declarations: [CouponsFeatureGeneratorComponent],
})
export class CouponsFeatureGeneratorModule {}
