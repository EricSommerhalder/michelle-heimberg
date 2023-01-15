import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParralaxComponent } from './parallax.component';

describe('ParralaxComponent', () => {
  let component: ParralaxComponent;
  let fixture: ComponentFixture<ParralaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParralaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParralaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
