'use client';
import { useRef, useState } from 'react';
import { LoginModal } from './LoginModal';

export function AdminTrigger() {
  const [clicks, setClicks] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next === 3) {
      setShowLogin(true);
      setClicks(0);
    }
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setClicks(0), 2000);
  };

  return (
    <>
      <button onClick={handleClick} className="opacity-50 hover:opacity-100 transition font-sans text-xs">
        © 2026 Santosh K Kammar
      </button>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
