import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth Service/auth.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss'
})
export class VerifyOtpComponent implements OnInit {
  email: string = '';
  otp: string = '';

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  verifyOtp(): void {
    this.authService.verifyOtp(this.email, this.otp).subscribe(
      response => {
        
        this.router.navigate(['/reset-password'], { queryParams: { email: this.email, otp: this.otp } });
      },
      error => {
        console.error('Error verifying OTP:', error);
      }
    );
  }
}
