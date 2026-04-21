'use client';

const revenueGrowthData = [
  { month: 'Jan', current: 480000, historical: 350000 },
  { month: 'Feb', current: 520000, historical: 390000 },
  { month: 'Mar', current: 610000, historical: 420000 },
  { month: 'Apr', current: 580000, historical: 460000 },
  { month: 'May', current: 690000, historical: 490000 },
  { month: 'Jun', current: 300500, historical: 510000 },
];

const reconciliationAccounts = [
  { icon: 'bank', name: 'Main Operations Account', status: 'Synced', statusClass: 'badge-green', lastSync: 'Last synced: 2h ago' },
  { icon: 'bank', name: 'Development Fund', status: 'Pending', statusClass: 'badge-yellow', lastSync: 'Last synced: 1d ago' },
  { icon: 'card', name: 'Corporate Cards', status: 'Action', statusClass: 'badge-red', lastSync: 'Requires manual review' },
];

const transactions = [
  { date: 'Oct 24, 2023', desc: 'Annual Membership Dues Batch', ref: 'REF-2023-8901', account: 'Main Operations', category: 'Revenue', categoryClass: 'badge-green', amount: '+125,000.00', positive: true },
  { date: 'Oct 23, 2023', desc: 'IT Infrastructure Upgrade', ref: 'INV-SYS-442', account: 'Development Fund', category: 'Capital Exp.', categoryClass: 'badge-blue', amount: '-45,200.00', positive: false },
  { date: 'Oct 21, 2023', desc: 'Q3 Legal Retainer', ref: 'REF-LEG-099', account: 'Main Operations', category: 'Professional Svcs', categoryClass: 'badge-purple', amount: '-15,000.00', positive: false },
  { date: 'Oct 20, 2023', desc: 'Training Seminar Registrations', ref: 'STRIPE-BATCH-88', account: 'Main Operations', category: 'Revenue', categoryClass: 'badge-green', amount: '+8,500.00', positive: true },
];

const maxGrowth = Math.max(...revenueGrowthData.flatMap((d) => [d.current, d.historical]));

function BankIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="6" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M8 1L1 6h14L8 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M4 9v3M8 9v3M12 9v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="5" cy="11" r="1" fill="currentColor"/>
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export default function AccountsPage() {
  return (
    <>
      <div className="page-title-area">
        <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>
          Financial Overview
        </h1>
        <p style={{ color: 'var(--gray-500)', fontSize: 13.5, marginTop: 4 }}>
          Consolidated strategic metrics, reconciliation status, and recent ledger activity for the current fiscal quarter.
        </p>
      </div>

      <div className="page-body">
        {/* 3 Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {/* Card 1: dark */}
          <div className="metric-card-dark">
            <div className="flex-between" style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                CONSOLIDATED NET BALANCE
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.4 }}>
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.3"/>
                <path d="M1 7h14" stroke="white" strokeWidth="1.3"/>
              </svg>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 6 }}>
              GH¢ 4,250,000.00
            </div>
            <div style={{ fontSize: 12, color: '#4ade80', fontWeight: 500, marginBottom: 10 }}>
              ↗ +12.4% vs last quarter
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Operating Reserve Status</span>
              <span style={{ fontSize: 11, fontWeight: 600, background: 'rgba(16,185,129,0.15)', color: '#34d399', padding: '2px 8px', borderRadius: 4 }}>Optimal</span>
            </div>
          </div>

          {/* Card 2: progress */}
          <div className="metric-card">
            <div className="flex-between" style={{ marginBottom: 8 }}>
              <span className="metric-label">YTD REVENUE REALIZED</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--gray-300)' }}>
                <path d="M2 12l3-4 3 2 3-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="metric-value">GH¢ 3,180,500.00</div>
            <div style={{ fontSize: 12, color: 'var(--gray-400)', marginTop: 4, marginBottom: 8 }}>
              Target: GH¢ 4,000,000.00
            </div>
            <div style={{ fontSize: 11, color: 'var(--gray-500)', marginBottom: 4 }}>Progress against budget: 79.5%</div>
            <div className="progress">
              <div style={{ width: '79.5%', background: 'var(--blue)' }} />
            </div>
          </div>

          {/* Card 3: breakdown */}
          <div className="metric-card">
            <div className="flex-between" style={{ marginBottom: 8 }}>
              <span className="metric-label">YTD EXPENDITURES</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--gray-300)' }}>
                <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M5 8h6M5 11h4M5 5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="metric-value">GH¢ 1,420,100.00</div>
            <div style={{ fontSize: 12, color: 'var(--green)', fontWeight: 500, marginTop: 4, marginBottom: 10 }}>↘ -2.1% under budget</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--gray-600)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block', flexShrink: 0 }} />
                Operations <span style={{ marginLeft: 'auto', fontWeight: 600 }}>45%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--gray-600)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--purple)', display: 'inline-block', flexShrink: 0 }} />
                Capital Projects <span style={{ marginLeft: 'auto', fontWeight: 600 }}>30%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart + Reconciliation */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20, marginBottom: 24 }}>
          {/* Revenue Growth & Recovery */}
          <div className="card">
            <div className="card-header">
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Revenue Growth &amp; Recovery</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>Monthly progression vs historic average</div>
              </div>
              <a href="#" style={{ fontSize: 13, color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>Full Report →</a>
            </div>
            <div className="card-body">
              {/* Legend */}
              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--gray-500)' }}>
                  <span style={{ width: 12, height: 12, borderRadius: 2, background: 'var(--gray-900)', display: 'inline-block' }} />
                  Current Period
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--gray-500)' }}>
                  <span style={{ width: 12, height: 12, borderRadius: 2, background: 'var(--gray-300)', display: 'inline-block' }} />
                  Historical
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 0 }}>
                {/* Y-axis */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 22, paddingTop: 2 }}>
                  {['4M', '3M', '2M', '1M', '0'].map((l) => (
                    <span key={l} style={{ fontSize: 10, color: 'var(--gray-400)', textAlign: 'right', paddingRight: 8, lineHeight: 1 }}>{l}</span>
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 160, borderBottom: '1px solid var(--gray-100)' }}>
                    {revenueGrowthData.map((d) => (
                      <div key={d.month} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 3, height: '100%' }}>
                        <div style={{
                          flex: 1, height: `${(d.current / maxGrowth) * 100}%`,
                          background: 'var(--gray-900)', borderRadius: '3px 3px 0 0',
                        }} />
                        <div style={{
                          flex: 1, height: `${(d.historical / maxGrowth) * 100}%`,
                          background: 'var(--gray-300)', borderRadius: '3px 3px 0 0',
                        }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                    {revenueGrowthData.map((d) => (
                      <div key={d.month} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: 'var(--gray-400)' }}>{d.month}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reconciliation Center */}
          <div className="card">
            <div className="card-header">
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--blue)' }}>
                    <path d="M2 8a6 6 0 1 0 1-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <polyline points="2 2 2 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Reconciliation Center
                </div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>Status of integrated institutional accounts</div>
              </div>
            </div>
            <div className="card-body" style={{ paddingTop: 8, paddingBottom: 0 }}>
              {reconciliationAccounts.map((acct) => (
                <div key={acct.name} className="recon-row">
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                    background: 'var(--gray-100)', color: 'var(--gray-500)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {acct.icon === 'bank' ? <BankIcon /> : <CardIcon />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--gray-900)' }}>{acct.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--gray-400)', marginTop: 1 }}>{acct.lastSync}</div>
                  </div>
                  <span className={`badge ${acct.statusClass}`}>{acct.status}</span>
                </div>
              ))}
              <div style={{ padding: '16px 0 4px' }}>
                <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Force Manual Sync
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card">
          <div className="card-header">
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Recent Transactions</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>General ledger activity across all reconciled accounts</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="btn btn-ghost btn-sm"><FilterIcon /></button>
              <button className="btn btn-ghost btn-sm"><DownloadIcon /></button>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>REFERENCE / DESCRIPTION</th>
                  <th>ACCOUNT</th>
                  <th>CATEGORY</th>
                  <th style={{ textAlign: 'right' }}>AMOUNT (GH¢)</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.ref}>
                    <td className="muted" style={{ whiteSpace: 'nowrap' }}>{tx.date}</td>
                    <td>
                      <div style={{ fontWeight: 500, fontSize: 13.5, color: 'var(--gray-900)' }}>{tx.desc}</div>
                      <div className="mono muted" style={{ fontSize: 11, marginTop: 2 }}>{tx.ref}</div>
                    </td>
                    <td className="muted">{tx.account}</td>
                    <td><span className={`badge ${tx.categoryClass}`}>{tx.category}</span></td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: tx.positive ? 'var(--green)' : 'var(--red)', whiteSpace: 'nowrap' }}>
                      {tx.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
