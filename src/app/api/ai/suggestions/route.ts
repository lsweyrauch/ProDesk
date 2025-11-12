import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { id: 's1', title: '3 tickets match KB: Email Timeout', summary: 'Suggest sending KB‑102: SMTP diagnostics. Affects HQ & Remote.', action: 'View suggestions' },
    { id: 's2', title: 'SLA at risk: 2 Critical tickets', summary: 'DB‑Server‑01 & VPN Gateway. Recommend escalation.' },
    { id: 's3', title: 'Duplicate detection', summary: '5 printer offline reports map to MFD‑03. Consider merging.' },
  ];
  return NextResponse.json({ data });
}
