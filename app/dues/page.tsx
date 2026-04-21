'use client';

import { useState } from 'react';

const invoices = [
  { initials: 'AL', color: '#0570de', member: 'Alpha Logistics Ltd', ref: 'GIFF-2023-001', type: 'Annual Dues 2023', amount: '12,500.00', due: 'Jan 15, 2023', dueAlert: false, status: 'Paid', statusClass: 'badge-green' },
  { initials: 'MF', color: '#dc2626', member: 'Meridian Freight', ref: 'GIFF-2023-084', type: 'Penalty-Late Filing', amount: '2,000.00', due: 'Oct 01, 2023', dueAlert: true, status: 'Overdue', statusClass: 'badge-red' },
  { initials: 'GS', color: '#0570de', member: 'Global Shipping Inc.', ref: 'GIFF-2023-112', type: 'Training Fees (Q4)', amount: '4,500.00', due: 'Nov 30, 2023', dueAlert: false, status: 'Pending', statusClass: 'badge-blue' },
  { initials: 'TC', color: '#059669', member: 'TransCargo Lines', ref: 'GIFF-2023-045', type: 'Annual Dues 2023', amount: '12,500.00', due: 'Jan 15, 2023', dueAlert: false, status: 'Paid', statusClass: 'badge-green' },
];

type TabKey = 'all' | 'annual' | 'training' | 'penalties';
const tabs: { key: TabKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'annual', label: 'Annual Dues' },
  { key: 'training', label: 'Training Fees' },
  { key: 'penalties', label: 'Penalties' },
];

function DonutProgress({ pct }: { pct: number }) {
  return (
    <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: `conic-gradient(var(--blue) 0% ${pct}%, var(--gray-100) ${pct}% 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 46, height: 46, borderRadius: '50%',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: 'var(--gray-800)',
        }}>
          {pct}%
        </div>
      </div>
    </div>
  );
}

export default function DuesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('all');

  return (
    <>
      <div className="page-title-area">
        <div className="flex-between" style={{ alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>
              Financial Operations Center
            </h1>
            <p style={{ color: 'var(--gray-500)', fontSize: 13.5, marginTop: 4 }}>
              Comprehensive overview of institutional dues, collections, and invoicing.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 4, flexShrink: 0 }}>
            <button className="btn btn-secondary">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 2v7M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              Export Collection Report
            </button>
            <button className="btn btn-secondary">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 3h12M1 7h12M1 11h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              Send Arrears Reminders
            </button>
            <button className="btn btn-dark">
              + Generate Batch Invoices
            </button>
          </div>
        </div>
      </div>

      <div className="page-body">
        {/* 3 Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {/* Total Outstanding */}
          <div className="metric-card">
            <div className="flex-between" style={{ marginBottom: 8 }}>
              <span className="metric-label">TOTAL OUTSTANDING</span>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--gray-500)' }}>
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M1 7h14" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </div>
            </div>
            <div className="metric-value">GH¢ 1.24M</div>
            <div style={{ marginTop: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, background: 'var(--red-light)', color: 'var(--red)', padding: '2px 6px', borderRadius: 4 }}>↗ +5.2%</span>
              <span style={{ fontSize: 12, color: 'var(--gray-400)', marginLeft: 6 }}>vs last month</span>
            </div>
          </div>

          {/* Collection Rate */}
          <div className="metric-card">
            <div className="flex-between" style={{ marginBottom: 8 }}>
              <span className="metric-label">COLLECTION RATE</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--gray-300)' }}>
                <path d="M2 8a6 6 0 1 0 1-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <polyline points="2 2 2 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div>
                <div className="metric-value">82.4%</div>
                <div style={{ fontSize: 12, color: 'var(--gray-400)', marginTop: 4 }}>Target: 95.0%</div>
              </div>
              <DonutProgress pct={82} />
            </div>
          </div>

          {/* Arrears Recovery */}
          <div className="metric-card">
            <div className="flex-between" style={{ marginBottom: 8 }}>
              <span className="metric-label">ARREARS RECOVERY</span>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--green)' }}>
                  <path d="M2 13l4-4 3 3 5-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="metric-value">GH¢ 450K</div>
            <div className="progress" style={{ marginTop: 8, marginBottom: 4 }}>
              <div style={{ width: '45%', background: 'var(--gray-900)' }} />
            </div>
            <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>45% of GH¢ 1M Target</div>
          </div>
        </div>

        {/* Invoice Console */}
        <div className="card">
          <div className="card-header">
            <span style={{ fontWeight: 600, fontSize: 15 }}>Invoice Console</span>
            <div className="tab-pills">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`tab-pill${activeTab === tab.key ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>MEMBER</th>
                  <th>INVOICE TYPE</th>
                  <th>AMOUNT (GH¢)</th>
                  <th>DUE DATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.ref}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                          background: inv.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: 11, fontWeight: 700,
                        }}>
                          {inv.initials}
                        </div>
                        <div>
                          <div style={{ fontWeight: 500, fontSize: 13.5, color: 'var(--gray-900)' }}>{inv.member}</div>
                          <div className="mono muted" style={{ fontSize: 11 }}>{inv.ref}</div>
                        </div>
                      </div>
                    </td>
                    <td className="muted">{inv.type}</td>
                    <td style={{ fontWeight: 600, color: 'var(--gray-900)' }}>{inv.amount}</td>
                    <td style={{ color: inv.dueAlert ? 'var(--red)' : 'var(--gray-600)', fontWeight: inv.dueAlert ? 600 : 400 }}>
                      {inv.due}
                    </td>
                    <td><span className={`badge ${inv.statusClass}`}>{inv.status}</span></td>
                    <td>
                      <button className="btn btn-ghost btn-sm" style={{ fontSize: 16, padding: '0 8px' }}>⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <span style={{ fontSize: 12.5, color: 'var(--gray-400)' }}>Showing 1 to 4 of 248 entries</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <button className="btn btn-ghost btn-sm">‹</button>
              <button className="btn btn-secondary btn-sm" style={{ minWidth: 28 }}>1</button>
              <button className="btn btn-ghost btn-sm" style={{ minWidth: 28 }}>2</button>
              <button className="btn btn-ghost btn-sm" style={{ minWidth: 28 }}>3</button>
              <button className="btn btn-ghost btn-sm">›</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
