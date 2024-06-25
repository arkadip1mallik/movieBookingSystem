import { CommonModule } from '@angular/common';
import { Component, model,ChangeDetectionStrategy,EventEmitter, Output,OnInit } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-movie-booking-v2',
  standalone: true,
  imports: [ MatSelectModule, MatInputModule,CommonModule,MatCheckboxModule,FormsModule,LoginDialogComponent],
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
  dateSlots: string[] = ['2024-06-25', '2024-06-26', '2024-06-27','2024-06-28','2024-06-29','2024-06-30']; 
  timeSlots: string[] = ['10:00 AM', '1:00 PM', '4:00 PM','7:00 PM']
  selectedScreen: string = '';
  screens: string[] = ['Screen 1', 'Screen 2', 'Screen 3'];

  seatToggling(rowId:string,column:number){
    const Seat = `${rowId}${column}`;
    const index = this.seatsSelected.indexOf(Seat);
    if(index>-1){
      this.seatsSelected.splice(index,1);
      this.totalAmount -=this.perSeatPrice;
    }else{
      this.seatsSelected.push(Seat);
      this.totalAmount += this.perSeatPrice;
    }

  }

  ngOnInit(): void {
  }
  constructor(private authService: AuthService, private snackBar: MatSnackBar,  private dialog: MatDialog,) { 
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

    this.authService.isLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
       
        this.bookingConfirmed.emit({
          seats: this.seatsSelected,
          totalAmount: this.totalAmount,
          date: new Date(this.selectedDateSlot),
          time: this.selectedTimeSlot,
          screen: this.selectedScreen
        });
      } else {
        
        this.openLoginDialog();
        
      }
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
  }

