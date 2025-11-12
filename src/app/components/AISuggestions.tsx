'use client';
import { useEffect, useState } from 'react';

type Suggestion = { id: string; title: string; summary: string; action?: string };

export default function AISuggestions() {
  const [items, setItems] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/api/ai/suggestions');
        const j = await r.json();
        if (!r.ok) throw new Error(j.error || 'Failed to load');
        setItems(j.data || []);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="space-y-2">
      <div className="section-title">AI Assistant</div>
      {loading && <div className="subtle">Thinking…</div>}
      {error && <div className="text-rose-500 text-sm">{error}</div>}
      <ul className="space-y-2">
        {items.map((s) => (
          <li key={s.id} className="p-3 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 dark:bg-white/10 dark:text-slate-200 dark:border-white/10">
            <div className="font-medium text-sm">{s.title}</div>
            <div className="text-xs subtle mt-1">{s.summary}</div>
            {s.action && (
              <button className="mt-2 text-xs px-2 py-1 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
                {s.action}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
