import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/Movie Service/movie.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatFormField,MatLabel,ReactiveFormsModule,RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
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
  
    if (this.movie.id) {
      this.movieService.updateMovie(this.movie.id, this.movie).subscribe(response => {
        console.log('Movie updated:', response);
      });
    } else {
      console.error('Movie ID is required for update');
    }
  }
}
