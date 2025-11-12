import './globals.css';
import Sidebar from './components/Sidebar';
import { ReactNode } from 'react';
import { ThemeProvider } from './providers';

export const metadata = { title: 'ProDesk', description: 'In‑house IT ticketing mock' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex">
            <Sidebar />
            <main className="flex-1 p-6 md:p-8 space-y-6 bg-white text-slate-900 dark:bg-[#0b1220] dark:text-slate-200 transition-colors">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
