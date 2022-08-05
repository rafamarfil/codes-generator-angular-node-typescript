/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as authh from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { LoginData } from '../models/login-data.interface';
import { User } from '../models/user.interface';

@Injectable()
export class AuthDataAccessServicesAuthService {
  userData: any;

  constructor(
    private auth: AngularFireAuth,
    public afs: AngularFirestore,
    public ngZone: NgZone,
    public router: Router,
    public snackBar: MatSnackBar
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  get isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user && !user.emailVerified) {
      this.snackBar.open(
        'Your email not verified yet, please check your inbox and confirm',
        'x',
        {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        }
      );
    }

    return !!(user && user.emailVerified);
  }

  login({ email, password }: LoginData) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((response: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['booking']);
        });
        this.setUserData(response.user);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          this.snackBar.open('Wrong password', 'x', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        } else if (errorCode === 'auth/user-not-found') {
          this.snackBar.open('Wrong user', 'x', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        } else {
          console.log(errorMessage);
        }
      });
  }

  googleAuth() {
    return this.auth
      .signInWithPopup(new authh.GoogleAuthProvider())
      .then((response) => {
        if (response) {
          this.ngZone.run(() => {
            this.router.navigate(['booking']);
          });
          this.setUserData(response.user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  register({ email, password }: LoginData) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        this.sendVerificationMail();
        this.setUserData(response.user);
        this.snackBar.open(`User Registered! Now, you can login`, 'x', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  logOut() {
    this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    });
  }

  forgotPassword(passwordResetEmail: string) {
    return this.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.snackBar.open(
          `Password reset email sent, check your inbox.`,
          'x',
          {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sendVerificationMail() {
    return this.auth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['auth/verify-email-address']);
      });
  }

  private setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
