import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, signal } from '@angular/core';

import {

  FormsModule,
  ReactiveFormsModule,

} from '@angular/forms';

import { RouterLink } from '@angular/router';

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
 
  email:string ='';
  mobile:string= '';
  name:string ='';
  password:string='';
  confirmPassword:string='';

  constructor(private service: SignupService, private router: Router){}

  signup():void{
    const credentials ={
      name : this.name,
      email : this.email,
      mobile:this.mobile,
     password : this.password,
     confirmPassword:this.confirmPassword,
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
