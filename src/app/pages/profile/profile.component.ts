import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth Service/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  userProfile = {
    email: '',
    name: '',
    phone: ''
  }; 

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
