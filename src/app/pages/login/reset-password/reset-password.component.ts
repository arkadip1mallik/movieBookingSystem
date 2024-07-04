import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth Service/auth.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  email: string = '';
  otp: string = '';
  newPassword: string = '';

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.otp = params['otp'];
    });
  }

  resetPassword(): void {
    this.authService.resetPassword(this.email, this.otp, this.newPassword).subscribe(
      response => {
       
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error resetting password:', error);
      }
    );
  }
}
