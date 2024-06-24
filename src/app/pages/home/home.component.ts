import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/Data Service/data-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    AppComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [DataServiceService],
})
export class HomeComponent {
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;
  selectedState: string = '';
  constructor(private router: Router, private service: DataServiceService) {}
  movie() {
    this.router.navigate(['/movielist']);
  }
  // ngOnInit(): void {
  //   this.onGet();
  // }
  
  // onGet(): void {
  //   this.service.getLogIn().subscribe((success) => {
  //     console.log(success);
  //   });
  // }
}
