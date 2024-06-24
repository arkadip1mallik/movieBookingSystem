import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators} from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { DataServiceService } from '../services/Data Service/data-service.service';
import { SigninService } from '../services/signIn Service/signin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions,MatFormFieldModule,CommonModule,MatDialogClose,FormsModule,ReactiveFormsModule,RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  
  // readonly email = new FormControl('', [Validators.required, Validators.email]);
  // readonly password = new FormControl('', [Validators.required]);
  // errorMessage = signal('');

  // constructor(private router: Router,private dialog: MatDialog,private service: DataServiceService,public dialogRef: MatDialogRef<LoginDialogComponent>) {
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

  //   signup(){
  //     this.router.navigate(['/signup']);
  //     this.close();
  //   }
  //   close(){
  //     this.dialog.closeAll();
  //   }

  library_id:string='';
  password:string ='';
  loginError: string = '';
  constructor(private service: SigninService, private router: Router,private dialog: MatDialog, public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService){}

  // signin():void{
  //   const credentials ={
  //     library_id : this.library_id,
  //     password : this.password,
  //   };
  //   console.log('Credentials',credentials);
  //   this.service.getSignin(credentials).subscribe((success)=>{
  //     console.log('success', success);
  //     if(success.status){
  //       this.router.navigate(['booking']);
  //       this.close();
  //     }
  //     else{
  //       console.log("Internal error!");
  //       alert("An error occured while creating user.");
  //     }
  //   })
  // }
  signup(){
        this.router.navigate(['/signup']);
        this.close();
      }
  close(){
        this.dialog.closeAll();
      }
      // signUp(){
      //   this.router.navigate(['signupDialog']);
      //   this.close();
      // }
      isLoggedIn: boolean = false;
      
      login(): void {
        this.authService.login(this.library_id, this.password).subscribe(
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
        );
      }
}  