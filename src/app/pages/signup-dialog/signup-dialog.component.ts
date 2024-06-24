import { Component } from '@angular/core';
import { SignupService } from '../services/signup service/signup.service';
import { Router } from '@angular/router'
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
import { Dialog } from '@angular/cdk/dialog';
@Component({
  selector: 'app-signup-dialog',
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
  templateUrl: './signup-dialog.component.html',
  styleUrl: './signup-dialog.component.scss'
})
export class SignupDialogComponent {
  student_library_id:string ='';
  name:string ='';
  email:string ='';
  password:string='';

  constructor(private service: SignupService, private router: Router, private dialog: Dialog){}

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
  close(){
    this.dialog.closeAll();
  }
  signIn(){
    this.router.navigate(['loginDialog']);
    this.close();
  }
}