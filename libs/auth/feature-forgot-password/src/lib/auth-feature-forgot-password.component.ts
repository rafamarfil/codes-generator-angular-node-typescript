import { Component, OnInit } from '@angular/core';

import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

@Component({
  selector: 'rvantravel-forgot-password',
  templateUrl: './auth-feature-forgot-password.component.html',
  styleUrls: ['./auth-feature-forgot-password.component.scss'],
})
export class AuthFeatureForgotPasswordComponent implements OnInit {
  constructor(public authService: AuthDataAccessServicesAuthService) {}

  ngOnInit() {}

  forgotPassword(email: string) {
    this.authService.forgotPassword(email);
  }
}
