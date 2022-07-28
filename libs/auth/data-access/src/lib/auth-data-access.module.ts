import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthDataAccessServicesAuthService } from './services/auth-data-access-services-auth.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthDataAccessServicesAuthService],
})
export class AuthDataAccessModule {}
