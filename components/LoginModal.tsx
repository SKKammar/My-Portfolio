'use client';
import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { AdminForm } from './AdminForm';

const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // anon key here — browser-safe
);

export function LoginModal({ onClose }: { onClose: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) { setError(error.message); return; }
        setLoggedIn(true);
    };

    if (loggedIn) return <AdminForm onClose={onClose} />;

    return (
        <div className="fixed inset-0 bg-ink/90 flex items-center justify-center z-50">
            <div className="bg-ink-card border border-ink-border p-6 w-80">
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                       className="w-full mb-2 p-2 bg-ink border border-ink-border text-paper font-sans text-sm" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"
                       className="w-full mb-2 p-2 bg-ink border border-ink-border text-paper font-sans text-sm" />
                {error && <p className="text-fog text-xs mb-2">{error}</p>}
                <div className="flex gap-2">
                    <button onClick={handleLogin} className="flex-1 border border-ink-border py-2 font-sans text-xs">Login</button>
                    <button onClick={onClose} className="flex-1 border border-ink-border py-2 font-sans text-xs">Cancel</button>
                </div>
            </div>
        </div>
    );
}