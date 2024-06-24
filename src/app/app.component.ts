import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import {SigninService} from '../app/pages/services/signIn Service/signin.service'
import { AuthService } from './pages/services/auth.service';
import { ProfileComponent } from './pages/profile/profile.component';
import {CircularImageUploadComponent} from '../app/pages/circular-image-upload/circular-image-upload.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule,
    HomeComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ProfileComponent,
    CircularImageUploadComponent
    
  ],
})
export class AppComponent {
  title = 'moviebookingsystem';
  selectedState: string = '';

  stateList: Array<any> = [ 
    {
      name: 'Tripura',
      value: 'Agartala',
    },
    {
      name: 'Test',
      value: 'Test',
    },
    {
      name: 'Test@',
      value: 'Test@',
    },
  ];

  constructor(private router: Router,private authService: AuthService) {
    this.selectedState = 'Test@'

  }

  handleSelection(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', this.selectedState);
  }

  onChangeState(): void {
    if (this.selectedState === 'Agartala') {
      this.router.navigate(['/movie-list']) 
      
    }
      
  }
  // logout(){
  //   this.SigninService.logout().subscribe(result =>{
  //     if(result){
  //       console.log('User logged out successfully');
  //     }
  //   });
  // }

  // myAccount(){
  //   if(this.Signin)
  // }
  isLoggedIn = false;
  showProfileDropdown = false;

  userProfile = {
    email: 'ar@gmail.com',
    name: 'arka',
    phone: '9876543210'
  };

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authService.logout();
    this.showProfileDropdown = false;
  }

  showProfileSection: boolean = false;
  profileImageUrl: string = ''; 

  toggleProfileSection() {
    this.showProfileSection = !this.showProfileSection;
  }
  
}
