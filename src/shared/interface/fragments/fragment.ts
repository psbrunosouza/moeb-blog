import { DateFragmentComponent } from '@shared/components/fragment/date-fragment/date-fragment.component';
import { TextFragmentComponent } from '../../components/fragment/text-fragment/text-fragment.component';
import { BadgeFragment } from './badge-fragment';
import { TabsFragmentComponent } from '@shared/components/fragment/tabs-fragment/tabs-fragment.component';
import { TabFragment } from './tabs-fragment';

export type FragmentComponentType =
  | TextFragmentComponent
  | DateFragmentComponent
  | TabsFragmentComponent;

export enum FragmentType {
  CONTENT_TEXT = 'CONTENT_TEXT',
  CONTENT_H1 = 'CONTENT_H1',
  CONTENT_H2 = 'CONTENT_H2',
  CONTENT_H3 = 'CONTENT_H3',
  CONTENT_SMALL = 'CONTENT_SMALL',
  CONTENT_CODE = 'CONTENT_CODE',
  IMG = 'IMG',
  TABS = 'TABS',
  BADGE = 'BADGE',
  DATE = 'DATE',
}

export interface FragmentDataMap {
  [FragmentType.CONTENT_TEXT]: string;
  [FragmentType.CONTENT_H1]: string;
  [FragmentType.CONTENT_H2]: string;
  [FragmentType.CONTENT_H3]: string;
  [FragmentType.CONTENT_SMALL]: string;
  [FragmentType.CONTENT_CODE]: string;
  [FragmentType.IMG]: string;
  [FragmentType.TABS]: TabFragment[];
  [FragmentType.BADGE]: BadgeFragment;
  [FragmentType.DATE]: Date;
}

export type FragmentDataMapTypes = FragmentDataMap[keyof FragmentDataMap];

export interface IFragment<T extends FragmentType = FragmentType> {
  id: string;
  type: T;
  data: FragmentValue<T>;
  order: number;
}

export interface FragmentValue<T extends FragmentType = FragmentType> {
  value: FragmentDataMap[T];
}
