import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingFeatureFlightSearchComponent } from './booking-feature-flight-shearch.component';

const BookingFeatureFlightSearchRoutes: Routes = [
  {
    path: '',
    component: BookingFeatureFlightSearchComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(BookingFeatureFlightSearchRoutes)
  ],
  declarations: [BookingFeatureFlightSearchComponent],
})
export class BookingFeatureFlightSearchModule {}
