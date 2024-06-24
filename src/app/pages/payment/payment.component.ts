import { Component, signal,EventEmitter, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-payment',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButton, MatDatepickerModule, MatInputModule, MatFormFieldModule, RouterLink,  MatIconModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent){
    this.hide.set(!this.hide);
    event.stopPropagation();

  }

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');

  constructor(private dialog: MatDialog){
    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if(this.email.hasError('required')) {
      this.errorMessage.set('You must a value');

    } else if (this.email.hasError('email')){
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  seatsSelected: string[] = [];
  totalAmount:number = 150;


 getTotal():void {
  this.confirmBooking();
 } 
    @Output() bookingConfirmed: EventEmitter<{ seats: string[], totalAmount: number }> = new EventEmitter();
  confirmBooking() {
   
    this.bookingConfirmed.emit({ seats: this.seatsSelected, totalAmount: this.totalAmount });
  }
 
close(){
  this.dialog.closeAll();
}
}
