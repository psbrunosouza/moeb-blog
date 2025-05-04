import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextFragmentComponent } from './text-fragment.component';

describe('TextComponent', () => {
  let component: TextFragmentComponent;
  let fixture: ComponentFixture<TextFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFragmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
