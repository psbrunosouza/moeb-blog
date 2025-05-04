import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  client: SupabaseClient = createClient(
    environment.PUBLIC_SUPABASE_URL,
    environment.PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}
