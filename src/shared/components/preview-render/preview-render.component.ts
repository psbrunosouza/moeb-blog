import { Component, input, ViewChild, ViewContainerRef } from '@angular/core';
import { InterpolationExampleComponent } from './interpolation-example/interpolation-example.component';

enum PREVIEW_TYPES {
  INTERPOLATION = 'INTERPOLATION',
}

const COMPONENT_LIST = {
  [PREVIEW_TYPES.INTERPOLATION]: InterpolationExampleComponent,
};

@Component({
  selector: 'app-preview-render',
  imports: [],
  templateUrl: './preview-render.component.html',
  styleUrl: './preview-render.component.css',
})
export class PreviewRenderComponent {
  @ViewChild('fragment', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  component = input.required<PREVIEW_TYPES | string>();

  ngOnInit(): void {
    if (!this.component) {
      return;
    }

    this.loadComponent(COMPONENT_LIST[this.component() as PREVIEW_TYPES]);
  }
  loadComponent(fragment: any) {
    if (!fragment) {
      return;
    }
    this.container.clear();
    this.container.createComponent(fragment);
  }
}
