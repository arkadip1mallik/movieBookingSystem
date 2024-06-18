import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule,
    HomeComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class AppComponent {
  title = 'moviebookingsystem';
  selectedState: string = '';

  stateList: Array<any> = [
    {
      name: 'Tripura',
      value: 'Agartala',
    },
    {
      name: 'Test',
      value: 'Test',
    },
    {
      name: 'Test@',
      value: 'Test@',
    },
  ];

  constructor(private router: Router) {
    this.selectedState = 'Test@'

  }

  handleSelection(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', this.selectedState);
  }

  onChangeState(): void {
    if (this.selectedState === 'Agartala') {
      this.router.navigate(['movie-list']) 
      
    }
      
  }
}
