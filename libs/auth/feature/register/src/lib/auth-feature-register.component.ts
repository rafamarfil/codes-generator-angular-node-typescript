import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subject } from 'rxjs';

import { AuthDataAccessServicesAuthService } from '@rvantravel/auth/data-access';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const password = control.parent?.get('password')?.value;
    const confirmation = control.parent?.get('passwordConfirmation')?.value;
    const match = password !== confirmation;

    return (
      (control && control.dirty && match) ||
      (control && control.touched && control.invalid)
    );
  }
}

@Component({
  selector: 'rvantravel-auth-feature-register',
  templateUrl: './auth-feature-register.component.html',
  styleUrls: ['./auth-feature-register.component.scss'],
})
export class AuthFeatureRegisterComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();
  loader = false;
  destroy$ = new Subject<void>();

  constructor(
    private authService: AuthDataAccessServicesAuthService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  registerUser() {
    this.loader = true;
    this.authService
      .register(this.form.value)
      .then(() => (this.loader = false));
  }

  googleAuth() {
    this.loader = true;
    this.authService.googleAuth().then(() => (this.loader = false));
  }

  private initForm() {
    this.form = this.formBuilder.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
            ),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            this.regexValidator(new RegExp('(?=.*?[0-9])'), {
              'at-least-one-digit': true,
            }),
            this.regexValidator(new RegExp('(?=.*[a-z])'), {
              'at-least-one-lowercase': true,
            }),
            this.regexValidator(new RegExp('(?=.*[A-Z])'), {
              'at-least-one-uppercase': true,
            }),
            this.regexValidator(new RegExp('(?=.*[!@#$%^&*])'), {
              'at-least-one-special-character': true,
            }),
            this.regexValidator(new RegExp('(^.{8,}$)'), {
              'at-least-eight-characters': true,
            }),
          ],
        ],
        passwordConfirmation: ['', Validators.required],
      },
      { validator: this.checkPasswords }
    );
  }

  private checkPasswords(group: FormGroup) {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['passwordConfirmation'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

  private regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
}
