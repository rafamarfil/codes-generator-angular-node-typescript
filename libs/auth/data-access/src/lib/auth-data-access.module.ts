import { NgModule } from '@angular/core';

import { AuthDataAccessServicesAuthService } from './services/auth-data-access-services-auth.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [MatSnackBarModule],
  providers: [AuthDataAccessServicesAuthService],
})
export class AuthDataAccessModule {}
