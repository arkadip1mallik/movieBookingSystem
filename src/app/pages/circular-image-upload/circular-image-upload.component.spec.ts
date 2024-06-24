import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularImageUploadComponent } from './circular-image-upload.component';

describe('CircularImageUploadComponent', () => {
  let component: CircularImageUploadComponent;
  let fixture: ComponentFixture<CircularImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularImageUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
