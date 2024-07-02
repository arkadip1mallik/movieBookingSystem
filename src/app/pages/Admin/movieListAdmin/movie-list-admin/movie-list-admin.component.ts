import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../../services/Movie Service/movie.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-list-admin',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './movie-list-admin.component.html',
  styleUrl: './movie-list-admin.component.scss'
})
export class MovieListAdminComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      movies => this.movies = movies,
      error => console.error('Error fetching movies', error)
    );
    this.loadMovies();
  }
  addMovie(): void {
    this.router.navigate(['admin/movies/new']);
  }
  editMovie(id: string): void {
    this.router.navigate(['/admin/movies/edit', id]);
  }

  deleteMovie(id: string): void {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.movieService.deleteMovie(id).subscribe(
        () => {
          this.movies = this.movies.filter(movie => movie.id !== id);
        },
        error => console.error('Error deleting movie', error)
      );
    }
  }
  loadMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
