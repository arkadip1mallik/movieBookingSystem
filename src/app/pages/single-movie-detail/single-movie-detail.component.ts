import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { movieDatas, moviesData } from '../movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BookNowComponent } from '../book-now/book-now.component';
import { BookingComponent } from '../booking/booking.component';
@Component({
  selector: 'app-single-movie-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './single-movie-detail.component.html',
  styleUrl: './single-movie-detail.component.scss'
})
export class SingleMovieDetailComponent  implements OnInit {
  movie: any; 
  upmovies:any;

  constructor(private route: ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id');
  
    this.movie = moviesData.find(movies => movies.id === id);
    this.upmovies = movieDatas.find(upmovies => upmovies.id === id);
  }
  bookNow() {
    if (this.movie) {
      const dialogRef = this.dialog.open(BookingComponent, {
        data: {
          movieId: this.movie.id,
         
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 'paymentConfirmed') {
         
        }
      });
    }
  }


}
