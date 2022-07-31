import { Component } from '@angular/core';

import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

@Component({
  selector: 'rvantravel-verify-email',
  templateUrl: './auth-feature-verify-email.component.html',
  styleUrls: ['./auth-feature-verify-email.component.scss'],
})
export class AuthFeatureVerifyEmailComponent {
  constructor(public authService: AuthDataAccessServicesAuthService) {}

  sendVerificationMail() {
    this.authService.sendVerificationMail();
  }
}
