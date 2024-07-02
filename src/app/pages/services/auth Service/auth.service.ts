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
    private baseUrl = 'http://10.10.10.139/api/login'; 
    login(email: string, password: string): Observable<any> {
    
      return this.http.post<any>(`${this.baseUrl}`, { email, password });
      
    }

    isLoggedIn(): Observable<boolean> {
      return this.isLoggedInSubject.asObservable();
    }

    adminLogin(email: string, password: string): Observable<any> {
    
      const body = { email, password };
      return this.http.post<any>(`${'http://10.10.10.139/api/login'}`, body);
    }
    isAdminLoggedIn(): Observable<boolean> {
      return this.isLoggedInSubject.asObservable();
    }
    private userProfile: any = {};
    userlogin(credentials: any): Observable<any> {
     
      return new Observable(observer => {
        setTimeout(() => {
          this.isLoggedInSubject.next(true);
          this.userProfile = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890'
          };
          observer.next(this.userProfile);
          observer.complete();
        }, 1000);
      });
    }
  
   
  
    getUserProfile(): any {
      return this.userProfile;
    }
    logout(): void {
     localStorage.clear();
      this.userData.next(null);
      this.isLoggedInSubject.next(false);
      this.isAdminSubject.next(false);
      this.userProfile = {};
    }
    getUserData(): Observable<any> {
      return this.userData.asObservable();
    }
  
    setUser(userData: any): void {
      this.userData.next(userData);
      this.isLoggedInSubject.next(true);
    }
    
    // getMovies(): Observable<any> {
    //   return this.http.get<any>(this.apiUrl);
    // }
  
    addMovie(movie: any): Observable<any> {
      return this.http.post<any>(`${'http://10.10.10.139/api/add_movie'}`, movie);
    }
  
    updateMovie(id: string, movie: any): Observable<any> {
      return this.http.put<any>(`${'http://10.10.10.139/api/edit_movie'}/${id}`, movie);
    }
  
    deleteMovie(id: string): Observable<any> {
      return this.http.delete<any>(`${'http://10.10.10.139/api/del_movie'}/${id}`);
    }
    



    isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();


    private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();

  loginAsAdmin() {
    this.isAdminSubject.next(true);
  }


  isLoggedInAsAdmin(): boolean {
    return this.isAdminSubject.value;
  }


  }
