
import { Routes } from '@angular/router';
import {authGuard} from '../app/pages/guard/auth.guard'
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import {MovieListAdminComponent} from './pages/Admin/movieListAdmin/movie-list-admin/movie-list-admin.component'
import {MovieFormComponent} from './pages/Admin/movieListAdmin/movie-form/movie-form.component'
import { ContactComponent } from './pages/contact/contact.component';
import { MovieBookingV2Component } from './pages/movie-booking-v2/movie-booking-v2.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';
import {AdminLoginComponent} from './pages/Admin/admin-login/admin-login.component'
import { ProfileComponent } from './pages/profile/profile.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SingleMovieDetailComponent } from './pages/single-movie-detail/single-movie-detail.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { LoginDialogComponent } from './pages/login-dialog/login-dialog.component';
import {AdmindashboardComponent} from './pages/Admin/admindashboard/admindashboard.component';
import {AddComponent} from '../app/pages/Admin/add/add.component';
import {EditComponent} from '../app/pages/Admin/edit/edit.component';
import {DeleteComponent} from '../app/pages/Admin/delete/delete.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { RequestOtpComponent } from './pages/login/request-otp/request-otp.component';
import { VerifyOtpComponent } from './pages/login/verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './pages/login/reset-password/reset-password.component';
export const routes: Routes = [
   { path : '',
    component:MovieDetailsComponent,
   },
   {
    path : 'login',
    component : LoginComponent,
    
    children:[
        {
            path:'profile',
            component:ProfileComponent
        },
      
    ]
   },
   {
     path: 'request-otp',
      component: RequestOtpComponent
     },
   {
     path: 'verify-otp',
      component: VerifyOtpComponent 
    },
   { 
    path: 'reset-password',
     component: ResetPasswordComponent 
    },
   {
    path : 'signup',
   component : SignupComponent,
},
{
    path : 'movie-list',
    component :  MovieListComponent,
},

{
    path : 'contact',
    component : ContactComponent,
},

{
    path: 'booking',
    component: BookingComponent,
    children:[
        {
            path:'confirmseat',
            component:MovieBookingV2Component,
            children:[
                {
                    path:'payment',
                    component:BookNowComponent,
                  
                }
            ]
        },
        
    ]
},

{
    path:'bookingHist',
    component:BookingHistoryComponent,
    canActivate: [authGuard] 
}, 


{    path: 'movie/:id',
     component: SingleMovieDetailComponent
},
{  path: 'upcoming/:id',
   component: UpcomingComponent
},
{
    path: 'loginDialog',
    component:LoginDialogComponent,
},
{
     path: 'adminLogin', 
     component: AdminLoginComponent 
    },
{
     path: 'admin/movies',
     component: MovieListAdminComponent ,
    canActivate: [authGuard] 
},
{ 
    path: 'admin/movies/add',
     component:AddComponent,
     canActivate: [authGuard] 
     },
{
     path: 'admin/movies/edit/:id',
     component: EditComponent,
     canActivate: [authGuard] 
     },
     {
        path: 'admin/movies/delete/:id',
        component: DeleteComponent,
        canActivate: [authGuard] 
        },
     {
        path:'adminDashboard',
        component:AdmindashboardComponent,
        canActivate: [authGuard] 
     },
     {
        path:'Books',
        component:NewBookComponent  
     }
    
];
