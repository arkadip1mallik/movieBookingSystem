import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  getSignup(body:any): Observable<any>{
    return this.http.post(
      'http://10.10.10.139/api/users',
      body
    );
  }

}
