import { ReactNode } from 'react';

export default function StatCard({ label, value, badge, icon }: { label: string; value: string | number; badge?: string; icon?: ReactNode; }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="text-sm subtle">{label}</div>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {icon && <div className="mt-3 opacity-70">{icon}</div>}
    </div>
  );
}
