import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, switchMap } from 'rxjs';
// import { DialogConfirmLogoutComponent } from '../dialog-confirm-logout/dialog-confirm-logout.component';
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
     // width: '400px',
     // heigh
     
   });

   return dialogRef.afterClosed().pipe(
     map(result => !!result)
   );
 }
  

  getSignin(body:any): Observable<any>{
    console.log(body);
    return this.http.post(
      'http://10.10.10.100/web/authentication/signin',
      body
    );
  }
}
