'use client';

import Link from 'next/link';

const stats = [
  {
    label: 'Total Members',
    value: '1,284',
    delta: '+12 this month',
    deltaUp: true,
    sub: '86.2% active rate',
    color: 'var(--blue)',
    bg: 'var(--blue-light)',
  },
  {
    label: 'Dues Collected',
    value: 'GHS 248,600',
    delta: '+18% vs last quarter',
    deltaUp: true,
    sub: 'YTD Jan–Feb 2026',
    color: 'var(--green)',
    bg: 'var(--green-light)',
  },
  {
    label: 'Arrears Outstanding',
    value: 'GHS 34,200',
    delta: '177 members',
    deltaUp: false,
    sub: '13.8% in arrears',
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
  },
  {
    label: 'Net Surplus (YTD)',
    value: 'GHS 118,200',
    delta: '37.8% margin',
    deltaUp: true,
    sub: 'vs GHS 312,400 income',
    color: 'var(--purple)',
    bg: 'var(--purple-light)',
  },
];

const activity = [
  { time: '09:14', action: 'New member registered', detail: 'Kwame Asante · Full Member', type: 'member' },
  { time: '09:02', action: 'Dues payment received', detail: 'GHS 450 · Ama Boateng · MTN MoMo', type: 'payment' },
  { time: '08:47', action: 'Leave request submitted', detail: 'Kofi Mensah · 5 days · Annual Leave', type: 'hr' },
  { time: '08:31', action: 'Membership renewed', detail: 'Emmanuel Darko · 2027 renewal', type: 'member' },
  { time: '08:15', action: 'Invoice generated', detail: 'INV-2026-0847 · GHS 1,200', type: 'payment' },
  { time: '07:58', action: 'Staff record created', detail: 'Abena Frimpong · Finance dept.', type: 'hr' },
];

const activityColors: Record<string, string> = {
  member: 'var(--blue)',
  payment: 'var(--green)',
  hr: 'var(--purple)',
};

const modules = [
  {
    title: 'Membership',
    desc: 'Register members, track renewals & manage communications.',
    href: '/membership',
    stat: '1,284 members',
    color: 'var(--blue)',
    bg: 'var(--blue-light)',
    initial: 'M',
  },
  {
    title: 'Dues & Fees',
    desc: 'Automated invoicing, mobile money payments & arrears.',
    href: '/dues',
    stat: 'GHS 248,600 collected',
    color: 'var(--purple)',
    bg: 'var(--purple-light)',
    initial: 'D',
  },
  {
    title: 'Accounts',
    desc: 'Financial tracking, reporting dashboards & audit trails.',
    href: '/accounts',
    stat: '142 transactions',
    color: 'var(--green)',
    bg: 'var(--green-light)',
    initial: 'A',
  },
  {
    title: 'HR Management',
    desc: 'Staff records, leave tracking, payroll & performance.',
    href: '/hr',
    stat: '28 staff members',
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    initial: 'H',
  },
];

export default function Dashboard() {
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div>
      {/* Top bar */}
      <div className="page-topbar">
        <div>
          <span style={{ fontSize: 13, color: 'var(--gray-400)' }}>
            {today}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary">Export Report</button>
          <button className="btn btn-primary">+ Add Member</button>
        </div>
      </div>

      {/* Page title */}
      <div className="page-title-area">
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>
          Good morning, Admin
        </h1>
        <p style={{ color: 'var(--gray-500)', fontSize: 13.5, marginTop: 3 }}>
          Here&apos;s what&apos;s happening with your platform today.
        </p>
      </div>

      <div className="page-body">
        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
          {stats.map((s) => (
            <div key={s.label} className="metric-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="metric-label">{s.label}</div>
                <div className="icon-wrap" style={{ background: s.bg, color: s.color }}>
                  <div style={{ width: 14, height: 14, borderRadius: 3, background: s.color, opacity: 0.8 }} />
                </div>
              </div>
              <div className="metric-value">{s.value}</div>
              <div className="metric-delta">
                <span style={{ color: s.deltaUp ? 'var(--green)' : 'var(--amber)', fontWeight: 600 }}>
                  {s.delta}
                </span>
                {' · '}{s.sub}
              </div>
              <div className="progress" style={{ marginTop: 14 }}>
                <div style={{ width: '68%', background: s.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Main 2-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, marginBottom: 20 }}>
          {/* Module cards */}
          <div>
            <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--gray-800)' }}>Platform Modules</h2>
              <span className="badge badge-blue">4 modules</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {modules.map((mod) => (
                <Link key={mod.href} href={mod.href} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: 20, cursor: 'pointer' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = 'var(--shadow-md)';
                      el.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = '';
                      el.style.transform = '';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <div className="icon-wrap" style={{ background: mod.bg, color: mod.color, fontWeight: 700, fontSize: 13 }}>
                        {mod.initial}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--gray-900)' }}>{mod.title}</div>
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--gray-500)', lineHeight: 1.55, marginBottom: 14 }}>
                      {mod.desc}
                    </div>
                    <div style={{ fontSize: 12, color: mod.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      {mod.stat}
                      <span style={{ opacity: 0.6 }}>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div>
            <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--gray-800)' }}>Recent Activity</h2>
              <button className="btn btn-ghost btn-sm">View all</button>
            </div>
            <div className="card">
              {activity.map((a, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 12, padding: '12px 16px',
                  borderBottom: i < activity.length - 1 ? '1px solid var(--gray-100)' : 'none',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: activityColors[a.type], marginTop: 5, flexShrink: 0,
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--gray-800)', marginBottom: 2 }}>
                      {a.action}
                    </div>
                    <div className="muted" style={{ fontSize: 11.5 }}>{a.detail}</div>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--gray-400)', flexShrink: 0 }}>{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System status bar */}
        <div style={{
          background: 'var(--sidebar-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              All Systems Operational
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 3 }}>
              Secure cloud deployment · Last backup: 2 hours ago · Uptime: 99.98%
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['MTN MoMo', 'Vodafone Cash', 'AirtelTigo'].map((p) => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
