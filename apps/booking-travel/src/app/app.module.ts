import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from '@rvantravel/auth';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('@rvantravel/auth').then((m) => m.AuthModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('@rvantravel/booking/feature/shell').then(
        (m) => m.BookingFeatureShellModule
      ),
  },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: 'not-found',
  // },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
