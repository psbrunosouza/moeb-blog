import { FragmentNameType } from './fragment';

export interface PostFragment {
  id: number;
  content: string;
  type: FragmentNameType;
  order: number;
  postId: number;
  languageId: number;
  createdAt: string;
}
