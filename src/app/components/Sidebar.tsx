'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Ticket, LayoutDashboard, BookOpen, Boxes, BarChart3 } from 'lucide-react';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';
import AISuggestions from './AISuggestions';

const NavItem = ({ href, icon: Icon, label }: any) => {
  const pathname = usePathname();
  const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
  return (
    <Link href={href} className={clsx(
      'flex items-center gap-3 px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10',
      active && 'bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white')}>
      <Icon size={18} /> <span>{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-72 flex-col gap-4 bg-white border-r border-slate-200 p-4 dark:bg-slate-950/60 dark:border-white/10">
      <div className="px-2 py-1 text-lg font-semibold">⚡ ProDesk</div>
      <nav className="space-y-1">
        <NavItem href="/" icon={LayoutDashboard} label="Dashboard" />
        <NavItem href="/tickets" icon={Ticket} label="Tickets" />
        <NavItem href="/assets" icon={Boxes} label="Assets" />
        <NavItem href="/knowledge" icon={BookOpen} label="Knowledge Base" />
        <NavItem href="/reports" icon={BarChart3} label="Reports" />
      </nav>

      <div className="card">
        <AISuggestions />
      </div>

      <ThemeToggle />

      <div className="text-xs subtle">Logged in as <span className="dark:text-slate-200 text-slate-900">Alex Chen</span></div>
    </aside>
  );
}
