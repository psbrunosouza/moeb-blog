import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewRenderComponent } from './preview-render.component';

describe('PreviewRenderComponent', () => {
  let component: PreviewRenderComponent;
  let fixture: ComponentFixture<PreviewRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
