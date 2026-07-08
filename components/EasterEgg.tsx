'use client';

import { useEffect } from 'react';

export function EasterEgg() {
  useEffect(() => {
    console.log(
      '%c"The bottom is a great place to start." — Unknown',
      'color: #3b82f6; font-size: 16px; font-style: italic; font-weight: bold; padding: 10px;'
    );
    console.log("Glad you're checking under the hood. Let's build something great together.");
  }, []);

  return null;
}
