import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  getSignin(body:any): Observable<any>{
    console.log(body);
    return this.http.post(
      'http://10.10.10.100/web/managestudents/addstudent',
      body
    );
  }

}
