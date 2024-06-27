  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';
  import { HttpClient } from '@angular/common/http';
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private userData = new BehaviorSubject<any>(null);
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://10.10.10.136/api/login'; 
    login(email: string, password: string): Observable<any> {
    
      return this.http.post<any>(`${this.baseUrl}`, { email, password });
      
    }

    isLoggedIn(): Observable<boolean> {
      return this.isLoggedInSubject.asObservable();
    }

  

    logout(): void {
     
      this.userData.next(null);
      this.isLoggedInSubject.next(false);
    }
    getUserData(): Observable<any> {
      return this.userData.asObservable();
    }
  
    setUser(userData: any): void {
      this.userData.next(userData);
      this.isLoggedInSubject.next(true);
    }
    

    



    isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();




  }
