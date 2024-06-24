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
    private baseUrl = 'http://10.10.10.100/web/authentication/signin'; 
    login(library_id: string, password: string): Observable<any> {
    
      return this.http.post<any>(`${this.baseUrl}`, { library_id, password });
      
    }

    isLoggedIn(): Observable<boolean> {
      return this.isLoggedInSubject.asObservable();
    }

    // login(): void {
    //   this.isLoggedInSubject.next(true);
    // }

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
    

    //  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    // isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
    // private userProfileSubject = new BehaviorSubject<any>({});
    // userProfile$: Observable<any> = this.userProfileSubject.asObservable();

    // constructor(private http: HttpClient) { }

    // login() {
    
    //   this.isLoggedInSubject.next(true);
    // }

    // logout() {
      
    //   this.isLoggedInSubject.next(false);
    //   this.userProfileSubject.next({});
    // }

    // fetchUserProfile() {
    //   this.http.get<any>('http://10.10.10.100/profile')
    //     .subscribe(
    //       (profileData) => {
    //         this.userProfileSubject.next(profileData);
    //       },
    //       (error) => {
    //         console.error('Error fetching profile:', error);
    //       }
    //     );
    // }

    // get isLoggedIn() {
    //   return this.isLoggedInSubject.value;
    // }

    // get userProfile() {
    //   return this.userProfileSubject.value;
    // }



    isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();




  }
