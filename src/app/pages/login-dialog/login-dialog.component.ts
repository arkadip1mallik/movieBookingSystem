import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { SigninService } from '../services/signIn Service/signin.service';
import { AuthService } from '../services/auth Service/auth.service';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions,MatFormFieldModule,CommonModule,MatDialogClose,FormsModule,ReactiveFormsModule,RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  
 
  email:string='';
  password:string ='';
  loginError: string = '';
  constructor(private service: SigninService, private router: Router,private dialog: MatDialog, public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService){}

  
  signup(){
        this.router.navigate(['/signup']);
        this.close();
      }
  close(){
        this.dialog.closeAll();
      }
     
      isLoggedIn: boolean = false;
      
      login(): void {
        this.authService.login(this.email, this.password).subscribe(
          (userData) => {
            if (userData.status) {
                      this.router.navigate(['booking']);
                     this.close();
                      this.isLoggedIn = true;
                      localStorage.setItem('token', userData.token);
                this.authService.setUser(userData); 
          }},
          (error) => {
            console.error('Login failed:', error);
            
          }
        );this.close();
      }
}  