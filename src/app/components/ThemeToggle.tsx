'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = (resolvedTheme || theme) === 'dark';
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
