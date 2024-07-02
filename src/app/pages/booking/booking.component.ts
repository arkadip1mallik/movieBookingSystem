import { CommonModule } from '@angular/common';
import { Component, inject ,EventEmitter, Output, OnInit} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
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
export class BookingComponent implements OnInit{
 movieId: string ='';
  selectedDate: Date = new Date(); 
  selectedScreen:string='';
  selectedTime:string='';
  seatsSelected: string[] = [];
  totalAmount: number = 0;
 constructor(private router:Router, private paymentService: PaymentserviceService,private dialog: MatDialog,private route: ActivatedRoute){}
  onBookingConfirmed(eventData: { seats: string[], totalAmount: number, date:Date, time:string, screen:string }) {
    this.selectedDate = eventData.date;
    this.selectedTime = eventData.time;
    this.selectedScreen = eventData.screen;
    this.seatsSelected = eventData.seats;
    this.totalAmount = eventData.totalAmount;
  }
     
  proceedToPayment():void {
      this.openDialog('450ms', '450ms', this.seatsSelected, this.totalAmount,this.selectedDate,this.selectedTime,this.selectedScreen);
  }
  ngOnInit(): void {
   

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, seats: string[], totalAmount: number, date:Date, time: string, screen:string): void {
    const dialogRef = this.dialog.open(BookNowComponent, {
      width: '400px',
      data: { seats, totalAmount, date, time, screen }, 
      panelClass: 'custom-dialog-container' 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'paymentConfirmed') {
        this.router.navigate(['/bookingHist']); 
      }
    });
   
  }
}
