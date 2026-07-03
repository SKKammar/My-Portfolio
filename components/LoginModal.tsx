'use client';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { AdminForm } from './AdminForm';

export function LoginModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    // Add artificial delay to deter brute force
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    setLoading(false);
    
    if (error) {
      setError('Invalid credentials');
      return;
    }
    setLoggedIn(true);
  };

  if (loggedIn) return <AdminForm onClose={onClose} />;

  return (
    <div className="fixed inset-0 bg-ink/90 flex items-center justify-center z-50">
      <div className="bg-ink-card border border-ink-border p-6 w-80">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-2 p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          onKeyDown={(e) => e.key === 'Enter' && !loading && handleLogin()}
        />
        {error && <p className="text-fog text-xs mb-2">{error}</p>}
        <div className="flex gap-2">
          <button onClick={handleLogin} disabled={loading} className="flex-1 border border-ink-border py-2 font-sans text-xs disabled:opacity-50">
            {loading ? 'Authenticating...' : 'Login'}
          </button>
          <button onClick={onClose} disabled={loading} className="flex-1 border border-ink-border py-2 font-sans text-xs disabled:opacity-50">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
