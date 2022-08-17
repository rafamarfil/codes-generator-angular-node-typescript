import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  loginUser() {
    this.loader = true;
    this.authService.login(this.form.value).then(() => (this.loader = false));
  }

  googleAuth() {
    this.loader = true;
    this.authService.googleAuth().then(() => (this.loader = false));
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: [
        'rvantravel@gmail.com',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          ),
        ],
      ],
      password: ['78Rafalote82#', Validators.required],
    });
  }
}
