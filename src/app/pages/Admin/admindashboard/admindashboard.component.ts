import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin Service/admin.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth Service/auth.service';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatSidenavContainer,MatSidenav,MatSidenavContent,MatListModule,RouterOutlet,RouterLink],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})
export class AdmindashboardComponent implements OnInit {
  movieForm: FormGroup;
  movies: any[] = [];
  editMode = false;
  currentMovieId: number | null = null;

  constructor(private fb: FormBuilder, private adminService: AdminService,private http:HttpClient, private authService:AuthService) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  ngOnInit(): void {
    this.loadMovies();
    // this.loadData();
  }

  // loadData(): void {
  //   // const token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
  //   this.http.get<any>(`${"http://10.10.10.10.139/api/login"}`, { headers }).subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  loadMovies(): void {
    this.adminService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  onSubmit(): void {
    if (this.movieForm.invalid) return;

    const movieData = this.movieForm.value;
    if (this.editMode && this.currentMovieId !== null) {
      this.adminService.updateMovie(this.currentMovieId, movieData).subscribe(() => {
        this.loadMovies();
        this.resetForm();
      });
    } else {
      this.adminService.addMovie(movieData).subscribe(() => {
        this.loadMovies();
        this.resetForm();
      });
    }
  }

  onEdit(movie: any): void {
    this.editMode = true;
    this.currentMovieId = movie.id;
    this.movieForm.patchValue(movie);
  }

  onDelete(id: number): void {
    this.adminService.deleteMovie(id).subscribe(() => {
      this.loadMovies();
    });
  }

  resetForm(): void {
    this.movieForm.reset();
    this.editMode = false;
    this.currentMovieId = null;
  }
}
