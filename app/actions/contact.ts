'use server';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'All fields are required.' };
    }

    try {
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Deliberately using anon key, relying on RLS insert-only policy on messages
            {
                cookies: {
                    getAll() {
                        return cookieStore.getAll();
                    },
                    setAll(cookiesToSet) {
                        try {
                            cookiesToSet.forEach(({ name, value, options }) =>
                                cookieStore.set(name, value, options)
                            );
                        } catch {
                            // Ignored
                        }
                    },
                },
            }
        );

        const { error } = await supabase
            .from('messages')
            .insert([{ name, email, message }]);

        if (error) {
            console.error('Supabase insert error:', error);
            return { error: 'Failed to send message. Please try again.' };
        }

        return { success: true };
    } catch (err) {
        console.error('Action error:', err);
        return { error: 'An unexpected error occurred.' };
    }
}
