import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/Movie Service/movie.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  movieForm: FormGroup; 
  movie: any = {
    id: '',
    title: '',
   
  };
  constructor(private formBuilder: FormBuilder,private router:Router,private movieService:MovieService) {
    
    this.movieForm = this.formBuilder.group({
      
    });
  }

  onSubmit() {
  
    const formData = this.movieForm.value;
   
    const id = formData.id;


    this.movieService.deleteMovie(id).subscribe(
      () => {
        console.log('Movie deleted successfully');

      },
      error => {
        console.error('Error deleting movie:', error);
      
      }
    );
  }

}
