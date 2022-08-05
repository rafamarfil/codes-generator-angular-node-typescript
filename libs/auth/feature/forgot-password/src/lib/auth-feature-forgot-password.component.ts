import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

@Component({
  selector: 'rvantravel-forgot-password',
  templateUrl: './auth-feature-forgot-password.component.html',
  styleUrls: ['./auth-feature-forgot-password.component.scss'],
})
export class AuthFeatureForgotPasswordComponent implements OnInit {
  form!: FormGroup;
  loader = false;

  constructor(
    public authService: AuthDataAccessServicesAuthService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  forgotPassword() {
    this.loader = true;
    this.authService
      .forgotPassword(this.form.value.email)
      .then(() => (this.loader = false));
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          ),
        ],
      ],
    });
  }
}
