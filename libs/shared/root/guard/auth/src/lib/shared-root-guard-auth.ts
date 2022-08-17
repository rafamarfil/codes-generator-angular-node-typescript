import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

@Injectable({
  providedIn: 'root',
})
export class SharedRootGuardAuthGuard implements CanLoad {
  constructor(
    public authService: AuthDataAccessServicesAuthService,
    public router: Router,
    private auth: AngularFireAuth
  ) {}
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState.pipe(
      map((resp) => {
        if (!resp) {
          this.router.navigate(['auth/login']);
          return false;
        }
        return true;
      })
    );
  }
}
