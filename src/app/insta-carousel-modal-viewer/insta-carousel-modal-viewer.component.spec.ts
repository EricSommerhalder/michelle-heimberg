import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaCarouselModalViewerComponent } from './insta-carousel-modal-viewer.component';

describe('InstaCarouselModalViewerComponent', () => {
  let component: InstaCarouselModalViewerComponent;
  let fixture: ComponentFixture<InstaCarouselModalViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaCarouselModalViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaCarouselModalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
