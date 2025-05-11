import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationExampleComponent } from './interpolation-example.component';

describe('InterpolationExampleComponent', () => {
  let component: InterpolationExampleComponent;
  let fixture: ComponentFixture<InterpolationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
