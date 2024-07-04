import { Component, Inject, EventEmitter, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BookingService } from '../services/Booking Service/booking.service';
import { AuthService } from '../services/auth Service/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from '../services/auth Service/auth.interception';
@Component({
  selector: 'app-book-now',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, CommonModule,RouterLink],
  // providers: [
  //   AuthService,
  //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  // ],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.scss',
})
export class BookNowComponent {
  selectedDate: Date;
  selectedTime: string = '';
  selectedScreen: string = '';

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BookNowComponent>,
    private bookingService: BookingService,
    private router: Router
  ) {
    console.log(data);
    this.selectedDate = this.data.date;
    this.selectedTime = this.data.time;
    this.selectedScreen = this.data.screen;
  }

  confirmBooking(): void {
    this.bookingService
      .bookSeats(
        this.data.movieId,
        this.data.date,
        this.data.time,
        this.data.screen,
        this.data.seats,
        this.data.totalAmount,
      )
      .subscribe(
        (response) => {
          console.log('Booking response:', response);
          this.router.navigate(['/bookingHist']);
          this.dialogRef.close('paymentConfirmed');
        },
        (error) => {
          console.error('Booking error:', error);
          this.dialogRef.close();
        }
      );
  }

  cancelBooking(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialog.closeAll();
  }
  booking(){
    this.router.navigate(['/bookingHist']);
    this.close();
  }

}
