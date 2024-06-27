
import { Routes } from '@angular/router';

import { AuthGuard } from '../../src/app/pages/services/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';


import { ContactComponent } from './pages/contact/contact.component';
import { MovieBookingV2Component } from './pages/movie-booking-v2/movie-booking-v2.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SingleMovieDetailComponent } from './pages/single-movie-detail/single-movie-detail.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { LoginDialogComponent } from './pages/login-dialog/login-dialog.component';

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
    canActivate: [AuthGuard] 
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

    
];
