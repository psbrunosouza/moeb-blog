import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFragmentComponent } from './date-fragment.component';

describe('DateFragmentComponent', () => {
  let component: DateFragmentComponent;
  let fixture: ComponentFixture<DateFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
