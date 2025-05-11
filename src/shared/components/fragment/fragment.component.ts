import {
  Component,
  input,
  Type,
  ViewChild,
  ViewContainerRef,
  inject,
  OnInit,
  InputSignal,
} from '@angular/core';
import {
  FragmentType,
  FragmentComponentType,
  FragmentDataMapTypes,
} from '../../interface/fragments/fragment';
import { ComponentRegistryService } from '../../services/component-registry.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-fragment',
  imports: [IconComponent],
  templateUrl: './fragment.component.html',
  styleUrl: './fragment.component.css',
})
export class FragmentComponent implements OnInit {
  @ViewChild('fragment', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  component = input<FragmentType>();
  id = input<number>(0);
  data = input<FragmentDataMapTypes>();
  type = input<FragmentType>(FragmentType.CONTENT_TEXT);

  private componentRegistryService = inject(ComponentRegistryService);

  ngOnInit(): void {
    const component = this.component();
    const data = this.data();
    const id = this.id();
    const type = this.type();

    if (!component || !data) {
      return;
    }

    this.loadComponent(this.componentRegistryService.getComponent(component), {
      id,
      data,
      type,
    });
  }

  loadComponent(
    fragment: Type<FragmentComponentType>,
    data: {
      id: number;
      data: FragmentDataMapTypes;
      type: FragmentType;
    }
  ) {
    if (!fragment) {
      return;
    }
    this.container.clear();

    const componentRef = this.container.createComponent(fragment);
    componentRef.setInput('data', data.data);
    componentRef.setInput('id', data.id);
    componentRef.setInput('type', data.type);
  }
}
