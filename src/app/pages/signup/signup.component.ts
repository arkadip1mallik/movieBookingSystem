import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { merge } from 'rxjs';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{SignupService} from '../services/signup service/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  // readonly email = new FormControl('', [Validators.required, Validators.email]);
  // readonly phoneNumber = new FormControl('', [Validators.required]);
  // readonly password = new FormControl('', [Validators.required]);
  // readonly confirmpassword = new FormControl('', [Validators.required]);
  // readonly name = new FormControl('', [Validators.required]);
  // errorMessage = signal('');

  // constructor() {
  //   merge(this.email.statusChanges, this.email.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  //   merge(this.password.statusChanges, this.password.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  //   merge(this.confirmpassword.statusChanges, this.confirmpassword.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  //   merge(this.phoneNumber.statusChanges, this.phoneNumber.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  //   merge(this.name.statusChanges, this.name.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  // }

  // updateErrorMessage(): void {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage.set('You must enter a value');
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage.set('Not a valid email');
  //   } else {
  //     this.errorMessage.set('');
  //   }
  // }

 

  // signobj: any = {
  //   email: '',
  //   name: '',
  //   'mobile number': '',
  //   password: '',
  //   'confirm password': '',
  // };
  // // //Api
  // http = inject(HttpClient);

  // onSave() {
  //   this.http
  //     .post('http://10.10.10.76/users', this.signobj)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       if (res.result) {
  //         alert('Account created successfully!!!');
  //       } else {
  //         alert(res.message);
  //       }
  //     });
  // }
  student_library_id:string ='';
  name:string ='';
  email:string ='';
  password:string='';

  constructor(private service: SignupService, private router: Router){}

  signup():void{
    const credentials ={
      student_library_id : this.student_library_id,
      name : this.name,
      email : this.email,
      password : this.password,
    };
    console.log('Credentials',credentials);
    this.service.getSignin(credentials).subscribe((success)=>{
      console.log('success', success);
      if(success.status){
        this.router.navigate(['login']);
      }
      else{
        console.log("Internal error!");
        alert("An error occured while creating user.");
      }
    })
  }
}
