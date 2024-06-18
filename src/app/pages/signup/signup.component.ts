import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {merge} from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule,RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly phoneNumber = new FormControl('', [Validators.required]);
  readonly password = new FormControl('', [Validators.required]);
  readonly confirmpassword = new FormControl('', [Validators.required]);
  readonly name = new FormControl('', [Validators.required]);
  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
      merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateerrorMessage());
      merge(this.confirmpassword.statusChanges, this.confirmpassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateerrormessage());
      merge(this.phoneNumber.statusChanges, this.phoneNumber.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateerrormessage());
      merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatEerrormessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }}
    updateerrorMessage() {
    if (this.password.hasError('required')) {
      this.errorMessage.set('You must enter a value that consists of alphabet, number, special character @,#,$');
    } else if (this.password.hasError('password')) {
      this.errorMessage.set('Not a valid password');
    } else if(this.password === this.confirmpassword){
      this.errorMessage.set('');
    }
  }
  updateerrormessage() {
    if (this.phoneNumber.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.phoneNumber.hasError('phoneNumber')) {
      this.errorMessage.set('Not a valid number');
    } else {
      this.errorMessage.set('');
    }
  }
  updatEerrormessage() {
    if (this.name.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.name.hasError('name')) {
      this.errorMessage.set('Not a valid name format');
    } else {
      this.errorMessage.set('');
    }
  }
}
