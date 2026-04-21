'use client';

import { useState } from 'react';

const kpiCards = [
  {
    label: 'TOTAL ACTIVE MEMBERS',
    value: '2,450',
    delta: '+12 this quarter',
    deltaColor: 'var(--green)',
    iconBg: 'var(--blue-light)',
    iconColor: 'var(--blue)',
  },
  {
    label: 'DUES COLLECTED (YTD)',
    value: 'GHS 1.2M',
    delta: '85% of target',
    deltaColor: 'var(--blue)',
    iconBg: 'var(--green-light)',
    iconColor: 'var(--green)',
  },
  {
    label: 'OUTSTANDING ARREARS',
    value: 'GHS 450k',
    delta: 'Action required on 42 accounts',
    deltaColor: 'var(--red)',
    iconBg: 'var(--red-light)',
    iconColor: 'var(--red)',
    alert: true,
  },
  {
    label: 'UPCOMING RENEWALS',
    value: '120',
    delta: 'Due in next 30 days',
    deltaColor: 'var(--amber)',
    iconBg: 'var(--amber-light)',
    iconColor: 'var(--amber)',
  },
];

const revenueData = [
  { month: 'Jan', value: 90000 },
  { month: 'Feb', value: 130000 },
  { month: 'Mar', value: 100000 },
  { month: 'Apr', value: 260000, highlight: true },
  { month: 'May', value: 155000 },
  { month: 'Jun', value: 210000 },
  { month: 'Jul', value: 175000 },
  { month: 'Aug', value: 225000 },
  { month: 'Sep', value: 290000 },
];

const docketItems = [
  {
    title: 'Audit Exception Review',
    badge: 'Urgent',
    badgeClass: 'badge-red',
    desc: 'Tema Port branch flagged for procedural discrepancy in Q3 filings.',
    actions: [{ label: 'Dismiss', style: 'secondary' }, { label: 'Review', style: 'primary' }],
  },
  {
    title: 'Corporate Onboarding',
    badge: 'Pending',
    badgeClass: 'badge-yellow',
    desc: "Final sign-off required for 'Apex Logistics Ltd' membership application.",
    actions: [{ label: 'View Docs', style: 'secondary' }, { label: 'Approve', style: 'primary' }],
  },
  {
    title: 'License Renewals',
    badge: 'Routine',
    badgeClass: 'badge-gray',
    desc: 'Batch approval for 12 individual broker licenses expiring this week.',
    actions: [],
  },
];

const activityLog = [
  {
    iconChar: '✓',
    iconBg: '#10b981',
    title: 'New Corporate Member Admitted',
    time: '2 hours ago',
    desc: 'Global Freight Masters LLC has completed onboarding and paid initial dues (GHS 25,000).',
  },
  {
    iconChar: '↑',
    iconBg: 'var(--blue)',
    title: 'Significant Arrears Recovered',
    time: 'Yesterday, 14:30',
    desc: 'GHS 45,000 recovered from pending accounts in the Takoradi district following issued notices.',
  },
  {
    iconChar: '!',
    iconBg: 'var(--red)',
    title: 'Disciplinary Action Logged',
    time: 'Oct 22, 2023',
    desc: 'Ethics committee submitted findings regarding complaint #2023-04A. Pending executive review.',
  },
];

const yLabels = ['400k', '300k', '200k', '100k', '0'];

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState('2023');

  return (
    <>
      {/* Page title */}
      <div className="page-title-area">
        <div className="flex-between">
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>
              Executive Overview
            </h1>
            <p style={{ color: 'var(--gray-500)', fontSize: 13.5, marginTop: 4 }}>
              Real-time intelligence for the Ghana Institute of Freight Forwarders.
            </p>
          </div>
          <span style={{ fontSize: 12, color: 'var(--gray-400)', flexShrink: 0 }}>
            As of Oct 24, 2023, 08:45 GMT
          </span>
        </div>
      </div>

      <div className="page-body">
        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {kpiCards.map((card) => (
            <div
              key={card.label}
              className="metric-card"
              style={card.alert ? { borderLeft: '3px solid var(--red)' } : {}}
            >
              <div className="flex-between" style={{ alignItems: 'flex-start' }}>
                <span className="metric-label">{card.label}</span>
                <div className="icon-wrap" style={{ background: card.iconBg, color: card.iconColor, width: 32, height: 32 }}>
                  {card.label.includes('MEMBERS') && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
                      <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
                      <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
                      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
                    </svg>
                  )}
                  {card.label.includes('DUES') && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                  )}
                  {card.label.includes('ARREARS') && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L1.5 13h13L8 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="8" y1="8" x2="8" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      <circle cx="8" cy="11.5" r=".6" fill="currentColor"/>
                    </svg>
                  )}
                  {card.label.includes('RENEWALS') && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8a6 6 0 1 0 1-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      <polyline points="2 2 2 6 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <div className="metric-value">{card.value}</div>
              <div className="metric-delta" style={{ color: card.deltaColor, fontWeight: 500 }}>
                {card.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Velocity + Priority Docket */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20, marginBottom: 24 }}>
          {/* Revenue Velocity */}
          <div className="card">
            <div className="card-header">
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Revenue Velocity</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>Monthly collection trends across all regional districts.</div>
              </div>
              <select
                className="select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                style={{ width: 90, height: 28, fontSize: 12 }}
              >
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 0 }}>
                {/* Y-axis labels */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 22, paddingTop: 2 }}>
                  {yLabels.map((l) => (
                    <span key={l} style={{ fontSize: 10, color: 'var(--gray-400)', textAlign: 'right', paddingRight: 8, lineHeight: 1 }}>{l}</span>
                  ))}
                </div>
                {/* Bars */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 160, borderBottom: '1px solid var(--gray-100)' }}>
                    {revenueData.map((d) => (
                      <div key={d.month} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', height: '100%' }}>
                        <div
                          style={{
                            width: '100%',
                            height: `${(d.value / 400000) * 100}%`,
                            background: d.highlight ? 'var(--gray-900)' : 'var(--gray-200)',
                            borderRadius: '3px 3px 0 0',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Month labels */}
                  <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                    {revenueData.map((d) => (
                      <div key={d.month} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: 'var(--gray-400)' }}>{d.month}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Priority Docket */}
          <div className="card">
            <div className="card-header">
              <span style={{ fontWeight: 600, fontSize: 15 }}>Priority Docket</span>
              <span className="badge badge-gray">3</span>
            </div>
            <div className="card-body">
              {docketItems.map((item) => (
                <div key={item.title} className="docket-card">
                  <div className="flex-between" style={{ marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--gray-900)' }}>{item.title}</span>
                    <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                  </div>
                  <p style={{ fontSize: 12.5, color: 'var(--gray-500)', lineHeight: 1.5, marginBottom: item.actions.length ? 10 : 0 }}>
                    {item.desc}
                  </p>
                  {item.actions.length > 0 && (
                    <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                      {item.actions.map((action) => (
                        <button
                          key={action.label}
                          className={`btn btn-sm ${action.style === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institutional Activity Log */}
        <div className="card">
          <div className="card-header">
            <div style={{ fontWeight: 600, fontSize: 15 }}>Institutional Activity Log</div>
            <a href="#" style={{ fontSize: 13, color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>
              View Full Ledger →
            </a>
          </div>
          <div className="card-body" style={{ paddingTop: 4, paddingBottom: 4 }}>
            {activityLog.map((item) => (
              <div key={item.title} className="activity-log-row">
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: item.iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 14, fontWeight: 700,
                }}>
                  {item.iconChar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 3, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: 13.5, color: 'var(--gray-900)' }}>{item.title}</span>
                    <span style={{ fontSize: 12, color: 'var(--gray-400)' }}>{item.time}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
