import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const cookieStore = await cookies(); // must be awaited — Next.js 15 breaking change
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only secret, never sent to the browser
        { cookies: { get: (name) => cookieStore.get(name)?.value } }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user || user.email !== process.env.ADMIN_EMAIL) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { error } = await supabase.from('projects').insert(body);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
}