'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        if (result.error) {
            setStatus('error');
            setMessage(result.error);
        } else {
            setStatus('success');
            setMessage("Message sent! I'll get back to you shortly.");
            (e.target as HTMLFormElement).reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6 w-full max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 backdrop-blur-md outline-none transition focus:border-white/30 focus:bg-white/5"
                        placeholder="John Doe"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 backdrop-blur-md outline-none transition focus:border-white/30 focus:bg-white/5"
                        placeholder="john@example.com"
                    />
                </div>
            </div>
            
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 backdrop-blur-md outline-none transition focus:border-white/30 focus:bg-white/5 resize-none"
                    placeholder="Hello! I'd like to talk about..."
                />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={status === 'loading'}
                    className={status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && <span className="text-sm text-green-400">{message}</span>}
                {status === 'error' && <span className="text-sm text-red-400">{message}</span>}
            </div>
        </form>
    );
}
