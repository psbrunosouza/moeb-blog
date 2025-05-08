import { FragmentType } from './fragments/fragment';

export interface PostFragment {
  id: number;
  content: string;
  type: FragmentType;
  order: number;
  postId: number;
  languageId: number;
  createdAt: string;
}
