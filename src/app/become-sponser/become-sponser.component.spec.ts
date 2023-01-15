import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeSponserComponent } from './become-sponser.component';

describe('BecomeSponserComponent', () => {
  let component: BecomeSponserComponent;
  let fixture: ComponentFixture<BecomeSponserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeSponserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
