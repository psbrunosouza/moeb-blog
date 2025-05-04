import { inject, Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Post } from '../interface/post';
import { catchError, from, map, Observable, pipe, tap } from 'rxjs';

interface Params {
  categoryName: string;
}

@Injectable()
export class PostsService {
  private supabase = inject(SupabaseService);

  findPostBySlug(
    slug: string,
    language: string = 'en-US'
  ): Observable<Post | null> {
    return from(
      this.supabase.client
        .from('posts')
        .select(
          `
            *,
            fragments:post_fragments (
              id,
              type,
              content,
              order,
              language:languages(
                code
              )
            ),
            category:categories (name),
            posts_tags (
              tags (
                id,
                name
              )
            )
          `
        )
        .order('created_at', { ascending: false })
        .eq('slug', slug)
        .single()
    ).pipe(
      map(({ data }) => {
        if (!data) return null;

        const fragments = data?.fragments?.filter(
          (c: any) => c.language.code === language
        );

        const tags = data.posts_tags.map((posts_tags: any) => posts_tags.tags);

        return {
          ...data,
          fragments,
          tags,
        };
      })
    );
  }

  listPostsByCategory(
    params: Params,
    language: string = 'en-US'
  ): Observable<Post[] | null> {
    return from(
      this.supabase.client
        .from('posts')
        .select(
          `
        *,
        fragments:post_fragments (
          order,
          language:languages(
            code
          )
        ),
        category:categories (name),
        posts_tags (
          tags (
            id,
            name
          )
        )
      `
        )
        .eq('category.name', params.categoryName)
        .order('created_at', { ascending: false })
    ).pipe(
      map(({ data }) => {
        if (!data) return null;

        return data.map((post) => {
          return {
            ...post,
            fragments: post?.fragments?.filter(
              (c: any) => c.language.code === language
            ),
          };
        });
      })
    );
  }
}
