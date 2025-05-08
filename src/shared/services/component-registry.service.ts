import { Injectable, Type } from '@angular/core';
import {
  FragmentComponentType,
  FragmentType,
} from '../interface/fragments/fragment';
import { TextFragmentComponent } from '../components/fragment/text-fragment/text-fragment.component';
import { DateFragmentComponent } from '@shared/components/fragment/date-fragment/date-fragment.component';
import { TabsFragmentComponent } from '@shared/components/fragment/tabs-fragment/tabs-fragment.component';

@Injectable({ providedIn: 'root' })
export class ComponentRegistryService {
  private componentMap: Record<FragmentType, Type<FragmentComponentType>> = {
    CONTENT_TEXT: TextFragmentComponent,
    CONTENT_H1: TextFragmentComponent,
    CONTENT_H2: TextFragmentComponent,
    CONTENT_H3: TextFragmentComponent,
    CONTENT_SMALL: TextFragmentComponent,
    CONTENT_CODE: TextFragmentComponent,
    IMG: TextFragmentComponent,
    TABS: TabsFragmentComponent,
    BADGE: TextFragmentComponent,
    DATE: DateFragmentComponent,
  };

  getComponent(name: FragmentType): Type<FragmentComponentType> {
    return this.componentMap[name];
  }
}
