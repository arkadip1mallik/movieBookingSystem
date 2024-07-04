import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy, signal } from '@angular/core';

import {
 
  FormsModule,
  ReactiveFormsModule,
 
} from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { DataServiceService } from '../services/Data Service/data-service.service';
import { SigninService } from '../services/signIn Service/signin.service';
import { AuthService } from '../services/auth Service/auth.service';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
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
  
  Email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  loginError: string = '';
  constructor(
    private service: SigninService,
    private router: Router,
    private authService: AuthService,
    private dialog: Dialog,
    private snackBar: MatSnackBar,
  ) {}

  

  ngOnInit(): void {}

  
  close() {
    this.dialog.closeAll();
  }

 
  login(): void {
    this.authService.login(this.Email, this.password).subscribe(
      (userData) => {
        console.log('success', userData);
        if (userData.status) {
                  this.router.navigate(['']);
                  this.isLoggedIn = true;
                  localStorage.setItem('token', userData.token);
            this.authService.setUser(userData); 
      }else{
        localStorage.clear();
     
        console.log("Internal error!");
        alert("An error has occured please check the fields or else connection problem.");
      
      }
    },
      (error) => {
        console.error('Login failed:', error);
        
      }
    );
  }
  // login(): void {
  //   this.authService.login(this.Email, this.password).subscribe();
  // }
  logout(): void {
    localStorage.removeItem('token');
    
  }
  
}
