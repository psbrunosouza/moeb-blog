import { TextFragmentComponent } from '../components/fragment/text-fragment/text-fragment.component';

export type FragmentComponentType = TextFragmentComponent;

export enum FragmentNameType {
  TEXT = 'TEXT',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
}

export interface FragmentDataMap {
  [FragmentNameType.TEXT]: string;
  [FragmentNameType.H1]: string;
  [FragmentNameType.H2]: string;
  [FragmentNameType.H3]: string;
}

export interface IFragment<T extends FragmentNameType = FragmentNameType> {
  id: string;
  type: T;
  data: FragmentDataMap[T];
  order: number;
}
