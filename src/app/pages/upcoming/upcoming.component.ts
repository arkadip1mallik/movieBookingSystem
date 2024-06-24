import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { movieDatas } from '../movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent implements OnInit {
  upmovies:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id');
  
  
    this.upmovies = movieDatas.find(upmovies => upmovies.id === id);
  }

}
