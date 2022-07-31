import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingFeatureShellComponent } from './booking-feature-shell.component';

const BookingFeatureShellRoutes: Routes = [
  {
    path: '',
    component: BookingFeatureShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@rvantravel/booking/feature/flight-search').then(
            (module) => module.BookingFeatureFlightSearchModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(BookingFeatureShellRoutes), RouterModule],
  declarations: [BookingFeatureShellComponent],
})
export class BookingFeatureShellModule {}
