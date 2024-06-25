import { CommonModule } from '@angular/common';
import { Component, inject ,EventEmitter, Output} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MovieBookingV2Component } from '../movie-booking-v2/movie-booking-v2.component';
import { PaymentserviceService } from '../services/Payment Services/paymentservice.service';
import { MatDialog } from '@angular/material/dialog';
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
  selectedDate: Date = new Date(); 
  selectedTime:string='';
  selectedScreen:string='';
 constructor(private router:Router, private paymentService: PaymentserviceService,private dialog: MatDialog){}
  onBookingConfirmed(eventData: { seats: string[], totalAmount: number, date:Date, time:string, screen:string }) {
    this.seatsSelected = eventData.seats;
    this.totalAmount = eventData.totalAmount;
    this.selectedDate = eventData.date;
    this.selectedTime = eventData.time;
    this.selectedScreen = eventData.screen;
  }

  proceedToPayment():void {
      this.openDialog('450ms', '450ms', this.seatsSelected, this.totalAmount,this.selectedDate,this.selectedTime,this.selectedScreen);
  }
  

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, seats: string[], totalAmount: number, date:Date, time: string, screen:string): void {
    const dialogRef = this.dialog.open(BookNowComponent, {
      width: '400px',
      data: { seats, totalAmount }, 
      panelClass: 'custom-dialog-container' 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'paymentConfirmed') {
        this.router.navigate(['/bookingHist']); 
      }
    });
   
  }
}
