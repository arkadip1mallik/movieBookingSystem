import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, switchMap } from 'rxjs';
import { DialogLogoutComponent } from "../../dialog-logout/dialog-logout.component";


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private _isLoggedIn: boolean = false;
  constructor(private dialog: MatDialog,private http: HttpClient) {}
 login(){
   this._isLoggedIn = true;
 }
 adminLogin(){
  this._isLoggedIn = true;
}
 logout(): Observable<boolean> {
   return this.openConfirmation().pipe(
     switchMap(result => {
       if(result){
         this._isLoggedIn = false;
       }
       return [result];
     })
   );
 }



 getIsLoggedIn(): boolean {
   return this._isLoggedIn;
 }

 private openConfirmation(): Observable<boolean> {
   const dialogRef = this.dialog.open(DialogLogoutComponent, {
     
   });

   return dialogRef.afterClosed().pipe(
     map(result => !!result)
   );
 }
  

  getSignin(body:any): Observable<any>{
  
    return this.http.post(
      'http://10.10.10.139/api/login',
      body
    );
  }
  getAdminSignin(body:any): Observable<any>{
  
    return this.http.post(
      'http://10.10.10.139/api/admin_login',
      body
    );
  }
}
