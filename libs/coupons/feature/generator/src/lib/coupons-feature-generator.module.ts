import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CouponsFeatureGeneratorComponent } from './coupons-feature-generator.component';

const CouponsFeatureGeneratorRoutes: Routes = [
  {
    path: '',
    component: CouponsFeatureGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(CouponsFeatureGeneratorRoutes)],
  declarations: [CouponsFeatureGeneratorComponent],
})
export class CouponsFeatureGeneratorModule {}
