import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Server-only client using the service role key, which bypasses RLS.
// Never import this file into anything marked 'use client'.
export async function createServerSupabaseClient() {
  const cookieStore = await cookies(); // must be awaited in current Next.js
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
      },
    }
  );
}
