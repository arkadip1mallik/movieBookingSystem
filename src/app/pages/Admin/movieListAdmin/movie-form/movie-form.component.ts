import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../../services/Movie Service/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink ],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent implements OnInit {
  movieForm!: FormGroup;
  isEditing = false;
  movieId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];
    this.isEditing = !!this.movieId;

    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      genre: [[''], Validators.required],
      duration: ['', Validators.required],
      releaseDate: ['', Validators.required],
      director: ['', Validators.required],
      showtimes: ['', Validators.required],
      show_start_date:['', Validators.required],
      show_end_date:['', Validators.required],
      seat_price:['', Validators.required],
    });

    if (this.isEditing) {
      this.movieService.getMovieById(this.movieId).subscribe(
        movie => this.movieForm.patchValue(movie),
        error => console.error('Error fetching movie', error)
      );
    }
  }

  saveMovie(): void {
    if (this.movieForm.invalid) {
      return;
    }

    const movieData = this.movieForm.value;

    if (this.isEditing) {
      this.movieService.updateMovie(this.movieId, movieData).subscribe(
        () => {
          alert('Movie updated successfully');
          this.router.navigate(['/admin/movies']);
        },
        error => console.error('Error updating movie', error)
      );
    } else {
      this.movieService.addMovie(movieData).subscribe(
        () => {
          alert('Movie added successfully');
          this.router.navigate(['/admin/movies']);
        },
        error => console.error('Error adding movie', error)
      );
    }
  }
}
