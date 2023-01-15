import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaCarouselViewerComponent } from './insta-carousel-viewer.component';

describe('InstaCarouselViewerComponent', () => {
  let component: InstaCarouselViewerComponent;
  let fixture: ComponentFixture<InstaCarouselViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaCarouselViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaCarouselViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
