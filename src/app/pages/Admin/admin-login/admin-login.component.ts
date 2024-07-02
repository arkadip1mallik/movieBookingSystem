import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth Service/auth.service';
import { SigninService } from '../../services/signIn Service/signin.service';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService, private router: Router,private service: SigninService,) {}

  adminLogin(): void {
    this.authService.adminLogin(this.email, this.password).subscribe(
      (userData) => {
        console.log('success', userData);
        if (userData.status) {
          this.router.navigate(['adminDashboard']);
                  this.isLoggedIn = true;
                  localStorage.setItem('admin', userData.token);
            this.authService.setUser(userData); 
      }else{
        localStorage.clear();
     
        this.errorMessage = 'Invalid credentials';
        alert("An error has occured please check the fields or else connection problem.");
      
      }
    },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed';
      }
    );
  }
  logout(): void {
    localStorage.removeItem('admin');
    
  }
}
