import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circular-image-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circular-image-upload.component.html',
  styleUrl: './circular-image-upload.component.scss'
})
export class CircularImageUploadComponent {
  @Input() imageUrl: string='';
  @Output() imageUploaded = new EventEmitter<File>();

  handleImageUpload(event: any) {
    const file: File = event.target.files[0];
    if (file) {
    
      this.imageUploaded.emit(file);
    }
  }
}
