import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth Service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
const localData = localStorage.getItem("token");
const adminData = localStorage.getItem("admin");
const router = inject(Router);
const authService =inject(AuthService);
if(localData){
  
  return true;
}else{
  if(adminData){
    
    return true;
  }
  router.navigateByUrl("login");
  return false;
}

// if (!authService.isLoggedIn()) {
//   router.navigate(['/login']);
//   return false;
// }

// const roles = route.data as Array<string>;
// const userRole = authService.getRole();
// if (roles && userRole && roles.indexOf(userRole) === -1) {
//      router.navigate(['/']);
//   return false;
// }

return true;
};
