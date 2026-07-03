import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Privileged client — service role key, bypasses RLS. Only use this for
// the auth-gated admin writes in app/api/projects/route.ts.
// Never import this file into anything marked 'use client'.
export async function createServerSupabaseClient() {
  const cookieStore = await cookies(); // must be awaited in current Next.js
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options) => {
          cookieStore.set(name, value, options);
        },
        remove: (name: string, options) => {
          cookieStore.set(name, '', { ...options, maxAge: 0 });
        },
      },
    }
  );
}

// Public client — anon key, respects RLS. Use this for anything that
// just reads data (e.g. the homepage project list), so a bug in the
// admin auth check isn't the only thing standing between the public
// and the service-role key's full DB access.
export async function createPublicSupabaseClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options) => {
          cookieStore.set(name, value, options);
        },
        remove: (name: string, options) => {
          cookieStore.set(name, '', { ...options, maxAge: 0 });
        },
      },
    }
  );
}
