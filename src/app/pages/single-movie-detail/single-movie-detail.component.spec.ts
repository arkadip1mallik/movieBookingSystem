import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieDetailComponent } from './single-movie-detail.component';

describe('SingleMovieDetailComponent', () => {
  let component: SingleMovieDetailComponent;
  let fixture: ComponentFixture<SingleMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMovieDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
