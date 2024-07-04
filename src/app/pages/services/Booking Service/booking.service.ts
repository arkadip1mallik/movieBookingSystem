import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://10.10.10.139/api/booking'; 
  constructor(private http: HttpClient) {}

  bookSeats(movieId: string, showdate: string, showtime: string, screen: string, seats: string[], totalAmount: number): Observable<any> {
    const bookingData = {
      movie_id: movieId,
      showdate,
      showtime,
      screen,
      seats,
      total_price: totalAmount
    };
    return this.http.post(`${this.apiUrl}`, bookingData);
  }

  getPaidSeats(movieId: string, date: string, time: string, screen: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`, {
      params: {
        movieId,
        date,
        time,
        screen
      }
    });
  }
}
