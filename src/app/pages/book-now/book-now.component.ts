import { Component, inject ,EventEmitter, Output} from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-book-now',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.scss'
})
export class BookNowComponent {
  constructor(private dialog: MatDialog){}
  openPayment(){
    this.openDialog('450ms','450ms');
  }
  seatsSelected: string[] = [];
  totalAmount: number = 0;
close(){
  this.dialog.closeAll();
}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PaymentComponent, {
      width: '800px',
      enterAnimationDuration,
      exitAnimationDuration,
     
        }); 
        // this.confirmBooking();
  
} 
// @Output() bookingConfirmed: EventEmitter<{ seats: string[], totalAmount: number }> = new EventEmitter();
// confirmBooking() {
 
//   this.bookingConfirmed.emit({ seats: this.seatsSelected, totalAmount: this.totalAmount });
// }
}