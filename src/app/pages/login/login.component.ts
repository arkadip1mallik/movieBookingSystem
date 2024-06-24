import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { DataServiceService } from '../services/Data Service/data-service.service';
import { SigninService } from '../services/signIn Service/signin.service';
import { AuthService } from '../services/auth.service';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    RouterModule,
    RouterOutlet,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [DataServiceService],
})
export class LoginComponent implements OnInit {
  // readonly email = new FormControl('', [Validators.required, Validators.email]);
  // readonly password = new FormControl('', [Validators.required]);
  // errorMessage = signal('');

  // constructor(private router: Router,private service: DataServiceService) {
  //   merge(this.email.statusChanges, this.email.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  //     merge(this.password.statusChanges, this.password.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  // }

  // updateErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.errorMessage.set('You must enter a value');
  //   } else if (this.email.hasError('email')) {
  //     this.errorMessage.set('Not a valid email');
  //   } else {
  //     this.errorMessage.set('');
  //   }}

  //  movieList():void{
  //   if(this.email === this.email && this.password === this.password){
  //   this.router.navigate(['movie-list'])
  //   }
  //  }
  // book(){
  //   this.router.navigate(['booking']);
  // }
  // ngOnInit(): void {
  //   this.onGet();
  // }

  // onGet(): void {
  //   this.service.getLogIn().subscribe((success) => {
  //     console.log(success);
  //   });
  // }
  library_id: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  loginError: string = '';
  constructor(
    private service: SigninService,
    private router: Router,
    private authService: AuthService,
    private dialog: Dialog
  ) {}

  // signin():void{
  //   const credentials ={
  //     library_id : this.library_id,
  //     password : this.password,
  //   };
  //   console.log('Credentials',credentials);
  //   this.service.getSignin(credentials).subscribe((success)=>{
  //     console.log('success', success);
  //     if(success.status){
  //       this.router.navigate(['details']);
  //     }
  //     else{
  //       console.log("Internal error!");
  //       alert("An error occured while creating user.");
  //     }
  //   })
  // }

  ngOnInit(): void {}

  // login() {
  //   this.authService.isLoggedIn();
  //   this.router.navigate(['details']);
  //   this.close();
  // }
  close() {
    this.dialog.closeAll();
  }

  // login(): void {
  //   this.authService.login(this.library_id, this.password).subscribe(
  //     (response) => {
  //       if (response.status) {
  //         this.router.navigate(['details']);

  //         this.isLoggedIn = true;
  //         localStorage.setItem('token', response.token);
  //       } else {
  //         this.isLoggedIn = false;
  //         this.loginError = 'Invalid credentials. Please try again.';
  //       }
  //     },
  //     (error) => {
  //       console.error('Error logging in:', error);
  //       this.isLoggedIn = false;
  //       this.loginError = 'Something went wrong. Please try again later.';
  //     }
  //   );
  // }
  login(): void {
    this.authService.login(this.library_id, this.password).subscribe(
      (userData) => {
        if (userData.status) {
                  this.router.navigate(['details']);
        
                  this.isLoggedIn = true;
                  localStorage.setItem('token', userData.token);
            this.authService.setUser(userData); 
      }},
      (error) => {
        console.error('Login failed:', error);
        
      }
    );
  }
}
