import { Component,OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { UserServiceService } from '../services/User Service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from '../services/Data Service/data-service.service';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-booking',
  standalone: true,
  imports: [RouterLink, MatMenuModule,CommonModule],
  templateUrl: './movie-booking.component.html',
  styleUrl: './movie-booking.component.scss'
})
export class MovieBookingComponent{
  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')
  message: any;
  ReadOnlyStyleGuideNotes: boolean = false;
  seat: any[] =[];
  newdata: any[] = [];

  Search: any; 
  constructor(private service: UserServiceService, private router: Router, private snackbar: MatSnackBar, private data: DataServiceService) {
    this.Search = '';
   }

  // ngOnInit() {
  //   this.data.currentMessage.subscribe(message => {
  //     this.message = message
  //   })
    
  //   this.ReadOnlyStyleGuideNotes = true;

  //   // this.payment()
  // }

  // takeData() {
  //   {
  //     if (("#Numseats").valueOf().length == 0) {
  //       this.snackbar.open('Please Number of Seats', 'End now', { duration: 1500 });
  //     }
  
  //   }
  // }

  // profile() {
  //   this.router.navigateByUrl('profile');
  // }

  // payment() {
  //   const requestObj = {
  //     movieName: this.message.result[0].movieName
  //   };
  //   this.service.moviePost('getSeatBooked', requestObj).subscribe((data: any) => {
  //     console.log("gadsgdfasd==>",data);
  //     this.newdata=data.result[0].bookedSeat;
      
  //     for (let i = 0; i < data.result[0].bookedSeat.length; i++) {
  //       this.seat = data.result[0].bookedSeat[i]
     
  //       console.log("this.seat", this.seat);
  //     }

  //     this.data.changeMessage(data);
     
  //   })

  // }



  // logout() {
  //   localStorage.clear();
  //   this.router.navigateByUrl('login');
  // }

  // home() {
  //   this.router.navigateByUrl('');
  // }

}
