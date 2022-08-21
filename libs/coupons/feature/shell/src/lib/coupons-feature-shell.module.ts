import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CouponsFeatureShellComponent } from './coupons-feature-shell.component';

const CouponsFeatureShellRoutes: Routes = [
  {
    path: '',
    component: CouponsFeatureShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@rvantravel/coupons/feature/generator').then(
            (module) => module.CouponsFeatureGeneratorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CouponsFeatureShellRoutes), RouterModule],
  declarations: [CouponsFeatureShellComponent],
})
export class CouponsFeatureShellModule {}
