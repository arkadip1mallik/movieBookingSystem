import { CommonModule } from '@angular/common';
import { Component, inject ,EventEmitter, Output} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MovieBookingV2Component } from '../movie-booking-v2/movie-booking-v2.component';
import { PaymentserviceService } from '../services/Payment Services/paymentservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BookNowComponent } from '../book-now/book-now.component';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterModule,RouterOutlet,RouterLink,CommonModule,MovieBookingV2Component],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  seatsSelected: string[] = [];
  totalAmount: number = 0;
 constructor(private router:Router, private paymentService: PaymentserviceService,private dialog: MatDialog){}
  onBookingConfirmed(eventData: { seats: string[], totalAmount: number }) {
    this.seatsSelected = eventData.seats;
    this.totalAmount = eventData.totalAmount;
  }

  proceedToPayment():void {
    
      // { queryParams: { seats: this.selectedSeats.join(','), totalPrice: this.totalPrice } }
   
      // const confirmPayment = confirm("Are you sure you want to proceed to payment?");
      // if (confirmPayment) {
        
      //   this.paymentService.processPayment(this.totalAmount)
      //     .then((paymentSuccessful: boolean) => {
      //       if (paymentSuccessful) {
           
      //         this.router.navigate(['/bookingHist']);
      //       } else {
              
      //         alert("Payment failed. Please try again later.");
      //       }
      //     })
      //     .catch(error => {
      //       console.error('Error processing payment:', error);
      //       alert("An error occurred while processing payment. Please try again later.");
      //     });
      // }

      this.openDialog('450ms','450ms');
  }
  

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(BookNowComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      
    });
    // this.confirmBooking();
  }
  //  @Output() bookingConfirmed: EventEmitter<{ seats: string[], totalAmount: number }> = new EventEmitter();
  // confirmBooking() {
   
  //   this.bookingConfirmed.emit({ seats: this.seatsSelected, totalAmount: this.totalAmount });
  // }
}
