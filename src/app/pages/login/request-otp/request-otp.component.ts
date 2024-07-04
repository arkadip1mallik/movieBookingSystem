import { Component } from '@angular/core';
import { AuthService } from '../../services/auth Service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-otp',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './request-otp.component.html',
  styleUrl: './request-otp.component.scss'
})
export class RequestOtpComponent {
  email: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  requestOtp(): void {
    this.authService.requestOtp(this.email).subscribe(
      response => {
        this.router.navigate(['/verify-otp'], { queryParams: { email: this.email } });
      },
      error => {
        console.error('Error requesting OTP:', error);
      }
    );
  }
}
