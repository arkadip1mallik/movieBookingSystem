import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://10.10.10.136/api/booking';  

  constructor(private http: HttpClient) { }

  bookSeats(seats: string[], date: string, time: string, screen: string, totalAmount: number): Observable<any> {
    const bookingDetails = {
      seats,
      date,
      time,
      screen,
      totalAmount
    };
    return this.http.post(`${this.apiUrl}`, bookingDetails);
  }

  
}
