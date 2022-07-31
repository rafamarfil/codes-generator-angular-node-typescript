import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

@Injectable()
export class SharedRootGuardAuthGuard implements CanLoad {
  constructor(
    public authService: AuthDataAccessServicesAuthService,
    public router: Router
  ) {}
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['auth/login']);
    }
    return true;
  }
}
