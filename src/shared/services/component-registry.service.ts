import { Injectable, Type } from '@angular/core';
import { FragmentComponentType, FragmentNameType } from '../interface/fragment';
import { TextFragmentComponent } from '../components/fragment/text-fragment/text-fragment.component';

@Injectable({ providedIn: 'root' })
export class ComponentRegistryService {
  private componentMap: Record<FragmentNameType, Type<FragmentComponentType>> =
    {
      TEXT: TextFragmentComponent,
      H1: TextFragmentComponent,
      H2: TextFragmentComponent,
      H3: TextFragmentComponent,
    };

  getComponent(name: FragmentNameType): Type<FragmentComponentType> {
    return this.componentMap[name];
  }
}
