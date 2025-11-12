import StatCard from './components/StatCard';
import TrendChart from './components/TrendChart';

export default async function Dashboard() {
  const stats = {
    open: 142,
    avgResolution: '2.4h',
    sla: '94.2%',
    rating: '4.8'
  };

  const recent = [
    { id: '2024-001', title: 'Email server down', priority: 'High', age: '2m ago' },
    { id: '2024-002', title: 'Password reset request', priority: 'Medium', age: '5m ago' },
    { id: '2024-003', title: 'Software installation', priority: 'Low', age: '12m ago' },
  ];

  const workload = [
    { name: 'Alex Chen', role: 'Senior Technician', count: 12 },
    { name: 'Sarah Johnson', role: 'IT Specialist', count: 8 },
    { name: 'Mike Rodriguez', role: 'Junior Technician', count: 15 },
  ];

  const system = [
    { name: 'Email Services', status: 'Operational' },
    { name: 'File Servers', status: 'Operational' },
    { name: 'VPN Gateway', status: 'Degraded' },
    { name: 'Database', status: 'Operational' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">IT Service Dashboard</h1>
        <p className="subtle">Welcome back, Alex. Here’s what’s happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Open Tickets" value={stats.open} badge="+12%" />
        <StatCard label="Avg Resolution" value={stats.avgResolution} badge="-5%" />
        <StatCard label="SLA Compliance" value={stats.sla} badge="+8%" />
        <StatCard label="User Rating" value={stats.rating} badge="+0.3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2"><TrendChart /></div>
        <div className="card">
          <div className="font-medium mb-3">Recent Tickets</div>
          <ul className="space-y-3 text-sm">
            {recent.map(r => (
              <li key={r.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <a className="text-sky-600 dark:text-sky-300 hover:underline" href={`/tickets/${r.id}`}>#TK-{r.id} {r.title}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="badge">{r.priority}</span>
                  <span className="subtle">{r.age}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="font-medium mb-3">Team Workload</div>
          <ul className="space-y-3 text-sm">
            {workload.map(w => (
              <li key={w.name} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{w.name}</div>
                  <div className="subtle">{w.role}</div>
                </div>
                <div className="text-sky-600 dark:text-sky-300">{w.count} tickets</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="font-medium mb-3">System Status</div>
          <ul className="space-y-3 text-sm">
            {system.map(s => (
              <li key={s.name} className="flex items-center justify-between">
                <div>{s.name}</div>
                <div className={
                  s.status === 'Operational' ? 'text-green-500' :
                  s.status === 'Degraded' ? 'text-yellow-500' : 'subtle'
                }>{s.status}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
