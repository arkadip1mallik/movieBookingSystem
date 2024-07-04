import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewBookService {
  private bookingUrl = 'http://10.10.10.139/api/booking';

  constructor(private http: HttpClient) { }

  createBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(this.bookingUrl, bookingData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
