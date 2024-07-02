import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
const localData = localStorage.getItem("token");
const adminData = localStorage.getItem("admin");
const router = inject(Router);
if(localData){
  
  return true;
}else{
  if(adminData){
    
    return true;
  }
  router.navigateByUrl("login");
  return false;
}
};
