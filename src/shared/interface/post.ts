import { PostFragment } from './post-fragment';
import { Tag } from './tag';

export interface Post {
  id: number;
  slug: string;
  title: string;
  tags: Tag[];
  fragments: PostFragment[];
  categoryId: number;
  createdAt: string;
}
