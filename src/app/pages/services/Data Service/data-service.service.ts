import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // private apiUrl = 'http://10.10.10.76';

  constructor(private http: HttpClient) {}

  // getData(): Observable<any> {
  //   return this.http.get<any[]>(${this.apiUrl/user}).pipe(
  //     catchError((error) => {
  //       console.error('Error fetching data:', error);
  //       return throwError(error);
  //     })
  //   );
  // }


  //   getLogIn(): Observable<any> {
  //   return this.http.get<any>('http://10.10.10.76/user_login',{})
  // }
}
