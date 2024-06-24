import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {CircularImageUploadComponent} from '../circular-image-upload/circular-image-upload.component'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CircularImageUploadComponent,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  // userProfile = {};

  // constructor(private authService: AuthService) { }

  // ngOnInit() {
  //   this.authService.userProfile$.subscribe(profile => {
  //     this.userProfile = profile;
  //   });
  //   this.authService.fetchUserProfile(); 
  // }

  // logout() {
  //   this.authService.logout();
  // }

  userProfile = {
    email: '',
    name: '',
    phone: ''
  };  // Example: Upload logic or emit the uploaded file to parent component

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
    this.userProfile.email = 'ar@gmail.com';
    this.userProfile.name = 'arka';
    this.userProfile.phone = '9876543210';
  }

  logout() {
    this.authService.logout();
  }
}
