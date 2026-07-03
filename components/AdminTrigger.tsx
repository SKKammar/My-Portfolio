'use client';
import { useEffect, useState } from 'react';
import { LoginModal } from './LoginModal';

const SECRET_SEQUENCE = ['s', 'a', 'n', 't', 'u'];

export function AdminTrigger() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
          currentIndex = 0;
          return;
      }

      if (e.key.toLowerCase() === SECRET_SEQUENCE[currentIndex]) {
        currentIndex++;
        if (currentIndex === SECRET_SEQUENCE.length) {
          setShowLogin(true);
          currentIndex = 0;
        }
      } else {
        currentIndex = 0;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!showLogin) return null;

  return <LoginModal onClose={() => setShowLogin(false)} />;
}
