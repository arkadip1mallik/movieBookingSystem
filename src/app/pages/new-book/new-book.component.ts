import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewBookService } from '../services/NewBook Service/new-book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent implements OnInit {
  bookingForm: FormGroup;
  showtimes: string[] = ['10:00', '13:00', '16:00', '19:00', '22:00'];
  screens: string[] = ['1', '2', '3'];

  constructor(
    private fb: FormBuilder,
    private bookingService: NewBookService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      movie_id: ['', Validators.required],
      showdate: ['', [Validators.required, this.dateValidator]],
      showtime: ['', [Validators.required, Validators.pattern(/^\d{2}:\d{2}$/)]],
      screen: ['', [Validators.required, Validators.pattern(/^[1-3]$/)]],
      seats: ['', Validators.required] 
    });
  }

  ngOnInit(): void {}

  dateValidator(control: any): { [key: string]: boolean } | null {
    const date = new Date(control.value);
    return isNaN(date.getTime()) ? { invalidDate: true } : null;
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const bookingData = this.bookingForm.value;
      bookingData.seats = bookingData.seats.split(',').map((seat: string) => seat.trim());

      this.bookingService.createBooking(bookingData).subscribe(
        response => {
          if (response.status) {
            this.snackBar.open('Booking created successfully!', 'Close', { duration: 3000 });
            this.router.navigate(['/booking-history']);
          } else {
            this.snackBar.open(response.message, 'Close', { duration: 3000 });
          }
        },
        error => {
          console.error('Error creating booking:', error);
          this.snackBar.open('Failed to create booking. Please try again.', 'Close', { duration: 3000 });
        }
      );
    }
  }
}
