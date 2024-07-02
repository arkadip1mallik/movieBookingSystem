import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { AuthService } from './pages/services/auth Service/auth.service';
import { ProfileComponent } from './pages/profile/profile.component';

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
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ProfileComponent,
   
    
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
  showProfileDetails = false;
  constructor(private router: Router,public authService: AuthService) {
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
    this.router.navigateByUrl('login');
  }

  showProfileSection: boolean = false;
  profileImageUrl: string = ''; 

  toggleProfileSection() {
    this.showProfileSection = !this.showProfileSection;
  }
  
}
