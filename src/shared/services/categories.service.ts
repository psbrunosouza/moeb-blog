import { Injectable, inject } from '@angular/core';
import { Post } from '../interface/post';
import { SupabaseService } from './supabase.service';
import { Category } from '../interface/category';

@Injectable()
export class CategoriesService {
  private supabase = inject(SupabaseService);

  async listCategories(): Promise<Category[] | null> {
    const { data, error } = await this.supabase.client
      .from('categories')
      .select('*');
    return data;
  }
}
