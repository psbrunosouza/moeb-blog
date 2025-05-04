import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPostHeaderComponent } from './post-header.component';

describe('HeaderComponent', () => {
  let component: AppPostHeaderComponent;
  let fixture: ComponentFixture<AppPostHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPostHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppPostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
