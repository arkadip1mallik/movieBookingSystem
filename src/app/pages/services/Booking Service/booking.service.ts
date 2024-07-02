import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://10.10.10.139/api/booking'; 
  constructor(private http: HttpClient) {}

  bookSeats(movieId: string, date: string, time: string, screen: string,seats: string[], totalAmount: number ): Observable<any> {
    const bookingDetails = {
     
      movieId,
      date,
      time,
      screen,
      seats,
      totalAmount,
    };
    return this.http.post<any>(this.apiUrl, bookingDetails);
  }
  getPaidSeats(movieId: string, date: string, time: string, screen: string): Observable<any> {
    const url = `${this.apiUrl}/paidSeats?movieId=${movieId}&date=${date}&time=${time}&screen=${screen}`;
    return this.http.get<any>(url);
  }
  
}
