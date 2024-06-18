import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieBookingComponent } from './pages/movie-booking/movie-booking.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
   { path : 'home',
    component: HomeComponent,
   },
   {
    path : 'login',
    component : LoginComponent,
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
    path : 'seatSelect',
    component: MovieBookingComponent,
},
{
    path : 'aboutUs',
    component : AboutUsComponent,
},
{
    path : 'contact',
    component : ContactComponent,
}
    
];
