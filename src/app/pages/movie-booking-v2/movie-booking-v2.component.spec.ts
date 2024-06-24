import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBookingV2Component } from './movie-booking-v2.component';

describe('MovieBookingV2Component', () => {
  let component: MovieBookingV2Component;
  let fixture: ComponentFixture<MovieBookingV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieBookingV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
