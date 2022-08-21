import { Component } from '@angular/core';

import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

@Component({
  selector: 'rvantravel-coupons',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  constructor(private authService: AuthDataAccessServicesAuthService) {}

  onLogout(event: boolean) {
    if (event) {
      this.authService.logOut();
    }
  }
}
