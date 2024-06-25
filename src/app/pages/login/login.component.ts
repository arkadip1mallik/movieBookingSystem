import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy, signal } from '@angular/core';

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

  
  ngOnInit(): void {}

  
  close() {
    this.dialog.closeAll();
  }

 
  login(): void {
    this.authService.login(this.library_id, this.password).subscribe(
      (userData) => {
        if (userData.status) {
                  this.router.navigate(['']);
        
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
