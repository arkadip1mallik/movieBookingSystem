import { CommonModule } from '@angular/common';
import { Component, model,ChangeDetectionStrategy,EventEmitter, Output,OnInit } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth Service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookingService } from '../services/Booking Service/booking.service';


@Component({
  selector: 'app-movie-booking-v2',
  standalone: true,
  imports: [ MatSelectModule, MatInputModule,CommonModule,MatCheckboxModule,FormsModule,LoginDialogComponent,RouterLink],
   changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-booking-v2.component.html',
  styleUrl: './movie-booking-v2.component.scss',
})
export class MovieBookingV2Component implements OnInit {
  rowId:string[] = ['A','B','C','D','E','F','G','H'];
  column:number[]=[1,2,3,4,5,6,7,8,9,10];
  seatsSelected:string[]=[];
  perSeatPrice: number = 150;
  totalAmount: number = 0;
  selectedDateSlot: string = '';
  selectedTimeSlot: string = '';
  dateSlots: string[] = ['2024-07-03', '2024-07-04', '2024-07-05','2024-07-06','2024-07-07','2024-07-08']; 
  timeSlots: string[] = ['11:00 AM', '2:00 PM', '5:00 PM','8:00 PM']
  selectedScreen: string = '';
  screens: string[] = ['Screen 1', 'Screen 2', 'Screen 3'];
  paidSeats: string[] = ['A1','A2', 'B2','B3', 'C3','C4','A5','A6','B8','B9','D5','D6','E10','E9','F7','F8','G1','G2','G3','G4','H6','H7'];
  paymentCompleted: boolean = false;
  movieId: string = ''; 
  // seatToggling(rowId:string,column:number){
  //   const Seat = `${rowId}${column}`;
  //   const index = this.seatsSelected.indexOf(Seat);
  //   if (this.paidSeats.includes(Seat)) {
  //     return;
  //   }
  //   if(index>-1){
  //     this.seatsSelected.splice(index,1);
  //     this.totalAmount -=this.perSeatPrice;
  //   }else{
  //     this.seatsSelected.push(Seat);
  //     this.totalAmount += this.perSeatPrice;
  //   }

  // }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.seats && state.date && state.time && state.screen) {
      this.seatsSelected = state.seats;
      this.selectedDateSlot = state.date;
      this.selectedTimeSlot = state.time;
      this.selectedScreen = state.screen;
    }

    if (this.selectedDateSlot && this.selectedTimeSlot && this.selectedScreen) {
      this.fetchPaidSeats();
    }
  }

  fetchPaidSeats() {
    this.bookingService.getPaidSeats(this.movieId, this.selectedDateSlot, this.selectedTimeSlot, this.selectedScreen)
      .subscribe((response) => {
        this.paidSeats = response.paidSeats || [];
      });
  }

  seatToggling(rowId: string, column: number) {
    const seat = `${rowId}${column}`;
    const index = this.seatsSelected.indexOf(seat);

    if (this.paidSeats.includes(seat)) {
      return;
    }

    if (index > -1) {
      this.seatsSelected.splice(index, 1);
      this.totalAmount -= this.perSeatPrice;
    } else {
      this.seatsSelected.push(seat);
      this.totalAmount += this.perSeatPrice;
    }
  }
  
  constructor(private authService: AuthService, private snackBar: MatSnackBar,  private dialog: MatDialog,private router:Router,private route: ActivatedRoute,private bookingService: BookingService) { 
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  @Output() bookingConfirmed: EventEmitter<{ seats: string[], totalAmount: number, date: Date, time: string, screen:string }> = new EventEmitter();


  confirmBooking() {
    if (!this.selectedDateSlot || !this.selectedTimeSlot || !this.selectedScreen) {
      const config = new MatSnackBarConfig();
      config.verticalPosition = 'bottom';
      this.snackBar.open('Please select date, time and screen.', 'Close', config);

      return;
    }

    const alreadyPaidSeats = this.seatsSelected.filter(seat => this.paidSeats.includes(seat));

    if (alreadyPaidSeats.length > 0) {
      const config = new MatSnackBarConfig();
      config.verticalPosition = 'bottom';
      this.snackBar.open('Some of the selected seats are already paid and cannot be modified.', 'Close', config);
      return;
    }

 
    this.simulatePayment().then(() => {
      this.paymentCompleted = true;
      this.paidSeats.push(...this.seatsSelected);

     
      this.storeBookingHistory();

    
      this.router.navigate(['/booking'], {
        state: {
          seats: this.seatsSelected,
          date: this.selectedDateSlot,
          time: this.selectedTimeSlot,
          screen: this.selectedScreen,
          totalAmount: this.totalAmount
        }
      });

    }).catch(error => {
      console.error('Payment error:', error);
    });
  }

 
  simulatePayment(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        
        resolve();
      }, 2000); 
      this.authService.isLoggedIn().subscribe((loggedIn) => {
        if (loggedIn) {
         
          this.bookingConfirmed.emit({
            
            date: new Date(this.selectedDateSlot),
            time: this.selectedTimeSlot,
            screen: this.selectedScreen,
            seats: this.seatsSelected,
            totalAmount: this.totalAmount,
          });
        } else {
          
          this.openLoginDialog();
          
        }
      });
    });



  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.authService.isLoggedIn(); 
      }
    });
  }
 

  isLoggedIn: boolean = false;

  logout(): void {
    this.authService.logout();
  }

  storeBookingHistory() {
    
    const booking = {
      movieId: this.movieId,
      date: this.selectedDateSlot,
      screen: this.selectedScreen,
      seats: this.seatsSelected,
      time: this.selectedTimeSlot,
      totalAmount: this.totalAmount,
    };
   
    localStorage.setItem('bookingHistory', JSON.stringify(booking));
  }
  }

