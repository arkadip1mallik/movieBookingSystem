import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { movieDatas, moviesData } from '../movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id');
  
    this.movie = moviesData.find(movies => movies.id === id);
    this.upmovies = movieDatas.find(upmovies => upmovies.id === id);
  }

}
