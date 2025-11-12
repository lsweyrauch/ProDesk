'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', new: 22, resolved: 19 },
  { name: 'Tue', new: 33, resolved: 28 },
  { name: 'Wed', new: 27, resolved: 26 },
  { name: 'Thu', new: 41, resolved: 37 },
  { name: 'Fri', new: 20, resolved: 21 },
  { name: 'Sat', new: 12, resolved: 10 },
  { name: 'Sun', new: 9, resolved: 8 },
];

export default function TrendChart() {
  return (
    <div className="card h-80">
      <div className="mb-3 font-medium">Ticket Volume Trends</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeOpacity={0.1} />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip contentStyle={{ background: '#0f172a', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)' }} />
          <Line type="monotone" dataKey="new" stroke="#38bdf8" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
