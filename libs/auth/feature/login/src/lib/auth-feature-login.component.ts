import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

@Component({
  selector: 'rvantravel-auth-feature-login',
  templateUrl: 'auth-feature-login.component.html',
  styleUrls: ['auth-feature-login.component.scss'],
})
export class AuthFeatureLoginComponent implements OnInit {
  form!: FormGroup;
  message!: string;
  loader = false;
  static path = () => ['login'];

  constructor(
    private authService: AuthDataAccessServicesAuthService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
    this.route.queryParams.subscribe((params) => {
      const key1 = 'registered';
      const key2 = 'loggedOut';
      if (params[key1] === 'success') {
        // this.snackBar.open(
        //   'You have been successfully registered. Please Log in',
        //   '',
        //   {
        //     duration: 3000,
        //     horizontalPosition: 'right',
        //     verticalPosition: 'bottom',
        //   }
        // );
      }
      if (params[key2] === 'success') {
        // this.snackBar.open('You have been loggedout successfully', '', {
        //   duration: 3000,
        //   horizontalPosition: 'right',
        //   verticalPosition: 'bottom',
        // });
      }
    });
  }

  loginUser() {
    this.loader = true;
    this.authService.login(this.form.value);
  }

  googleAuth() {
    this.authService.googleAuth();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: [
        'paco@gmail.com',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          ),
        ],
      ],
      password: ['12345678', Validators.required],
    });
  }
}
