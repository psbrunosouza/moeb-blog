import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsFragmentComponent } from './tabs-fragment.component';

describe('TabsFragmentComponent', () => {
  let component: TabsFragmentComponent;
  let fixture: ComponentFixture<TabsFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
