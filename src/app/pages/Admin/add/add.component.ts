import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/Movie Service/movie.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormField,MatLabel,RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  movieForm: any; 
  constructor(private formBuilder: FormBuilder,private router:Router,private movieService:MovieService) {
   
    this.movieForm = this.formBuilder.group({
       
    });
}


onSubmit() {
   
    console.log('Form submitted!');
    if (this.movieForm.invalid) {
      return;
    }

    const movieData = this.movieForm.value;

  
      this.movieService.addMovie(movieData).subscribe(
        () => {
          alert('Movie added successfully');
          this.router.navigate(['/adminDashboard']);
        },
        error => console.error('Error adding movie', error)
      );
    
  
}
}
