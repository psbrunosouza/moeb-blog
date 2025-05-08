import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { PostsService } from '@shared/services/posts.service';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'angular',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'angular/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const postService = inject(PostsService);
      const posts = await firstValueFrom(postService.list());
      return posts.map((post) => {
        return {
          slug: post.slug,
        };
      });
    },
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },
];
