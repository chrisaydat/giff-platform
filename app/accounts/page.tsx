'use client';

import { useState } from 'react';

const transactions = [
  { id: 'TXN-001', date: '18 Feb 2026', description: 'Annual Dues – Kwame Asante',    category: 'Membership Dues', type: 'Income',  amount:  450,   balance: 248600, ref: 'INV-2026-0847' },
  { id: 'TXN-002', date: '18 Feb 2026', description: 'Annual Dues – Ama Boateng',      category: 'Membership Dues', type: 'Income',  amount:  280,   balance: 248150, ref: 'INV-2026-0846' },
  { id: 'TXN-003', date: '17 Feb 2026', description: 'Office Supplies',                category: 'Operational',     type: 'Expense', amount: -1200,  balance: 247870, ref: 'EXP-0234' },
  { id: 'TXN-004', date: '17 Feb 2026', description: 'Annual Dues – Abena Frimpong',   category: 'Membership Dues', type: 'Income',  amount:  1200,  balance: 249070, ref: 'INV-2026-0844' },
  { id: 'TXN-005', date: '16 Feb 2026', description: 'Conference Hall Rental',         category: 'Events',          type: 'Expense', amount: -5000,  balance: 247870, ref: 'EXP-0233' },
  { id: 'TXN-006', date: '15 Feb 2026', description: 'Certificate Fees – Batch 12',   category: 'Certification',   type: 'Income',  amount:  3600,  balance: 252870, ref: 'INV-2026-0830' },
  { id: 'TXN-007', date: '14 Feb 2026', description: 'Staff Salaries – February',     category: 'Payroll',         type: 'Expense', amount: -24000, balance: 249270, ref: 'PAY-0024' },
  { id: 'TXN-008', date: '12 Feb 2026', description: 'Annual Dues – Akosua Ankrah',   category: 'Membership Dues', type: 'Income',  amount:  450,   balance: 273270, ref: 'INV-2026-0842' },
];

const incomeByCategory = [
  { category: 'Membership Dues',   amount: 186400, pct: 75, color: 'var(--blue)' },
  { category: 'Certification Fees', amount: 42600, pct: 17, color: 'var(--purple)' },
  { category: 'Event Revenue',      amount: 12800, pct:  5, color: 'var(--amber)' },
  { category: 'Other Income',       amount:  6800, pct:  3, color: 'var(--green)' },
];

const expenseByCategory = [
  { category: 'Payroll',     amount: 120000, pct: 62, color: 'var(--red)' },
  { category: 'Operational', amount:  38400, pct: 20, color: '#f97316' },
  { category: 'Events',      amount:  24000, pct: 12, color: 'var(--amber)' },
  { category: 'IT & Tech',   amount:  12000, pct:  6, color: '#06b6d4' },
];

const catColors: Record<string, string> = {
  'Membership Dues':    'var(--blue)',
  'Certification':      'var(--purple)',
  'Events':             'var(--amber)',
  'Operational':        '#f97316',
  'Payroll':            'var(--red)',
  'IT & Tech':          '#06b6d4',
};

export default function AccountsPage() {
  const [activeTab, setActiveTab] = useState<'transactions' | 'reports' | 'audit'>('transactions');

  const totalIncome  = transactions.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const totalExpense = Math.abs(transactions.filter(t => t.amount < 0).reduce((s, t) => s + t.amount, 0));

  return (
    <div>
      <div className="page-topbar">
        <div />
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary">Export Report</button>
          <button className="btn btn-primary">+ Record Transaction</button>
        </div>
      </div>

      <div className="page-title-area">
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>
          Accounts Management
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--gray-500)', marginTop: 3 }}>
          Financial tracking, reporting dashboards &amp; audit trails
        </p>
      </div>

      <div className="page-body">
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Total Balance',       value: 'GHS 248,600', delta: '+8.3% vs last month', color: 'var(--blue)',   bg: 'var(--blue-light)' },
            { label: 'Total Income (YTD)',  value: 'GHS 312,400', delta: 'Jan – Feb 2026',       color: 'var(--green)',  bg: 'var(--green-light)' },
            { label: 'Total Expenses (YTD)', value: 'GHS 194,200', delta: 'Jan – Feb 2026',      color: 'var(--red)',    bg: 'var(--red-light)' },
            { label: 'Net Surplus',         value: 'GHS 118,200', delta: '37.8% margin',         color: 'var(--purple)', bg: 'var(--purple-light)' },
          ].map((s) => (
            <div key={s.label} className="metric-card">
              <div className="metric-label">{s.label}</div>
              <div className="metric-value" style={{ fontSize: 21 }}>{s.value}</div>
              <div className="metric-delta">
                <span style={{ color: s.color, fontWeight: 600 }}>{s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Category breakdowns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--gray-800)', marginBottom: 4 }}>Income by Category</div>
            <div style={{ fontSize: 12.5, color: 'var(--gray-400)', marginBottom: 18 }}>Total · GHS 248,600</div>
            {incomeByCategory.map((item) => (
              <div key={item.category} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: 'var(--gray-700)' }}>{item.category}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-800)' }}>
                    GHS {item.amount.toLocaleString()} <span style={{ color: 'var(--gray-400)', fontWeight: 400 }}>({item.pct}%)</span>
                  </span>
                </div>
                <div className="progress">
                  <div style={{ width: `${item.pct}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--gray-800)', marginBottom: 4 }}>Expenses by Category</div>
            <div style={{ fontSize: 12.5, color: 'var(--gray-400)', marginBottom: 18 }}>Total · GHS 194,200</div>
            {expenseByCategory.map((item) => (
              <div key={item.category} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: 'var(--gray-700)' }}>{item.category}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-800)' }}>
                    GHS {item.amount.toLocaleString()} <span style={{ color: 'var(--gray-400)', fontWeight: 400 }}>({item.pct}%)</span>
                  </span>
                </div>
                <div className="progress">
                  <div style={{ width: `${item.pct}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ background: '#fff', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', border: '1px solid var(--gray-200)', borderBottom: 'none' }}>
          <div className="tabs" style={{ padding: '0 4px' }}>
            {[
              { key: 'transactions', label: 'Transactions' },
              { key: 'reports',      label: 'Reports' },
              { key: 'audit',        label: 'Audit Trail' },
            ].map((t) => (
              <button key={t.key} className={`tab${activeTab === t.key ? ' active' : ''}`}
                onClick={() => setActiveTab(t.key as typeof activeTab)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="card" style={{ borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>
          <div className="card-header">
            <div style={{ display: 'flex', gap: 10 }}>
              <input className="input" style={{ width: 260 }} placeholder="Search transactions..." />
              <select className="select" style={{ width: 140 }}>
                <option>All Types</option>
                <option>Income</option>
                <option>Expense</option>
              </select>
              <select className="select" style={{ width: 160 }}>
                <option>All Categories</option>
                <option>Membership Dues</option>
                <option>Payroll</option>
                <option>Operational</option>
              </select>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>TXN ID</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Amount (GHS)</th>
                  <th>Balance</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id}>
                    <td><span className="mono muted">{t.id}</span></td>
                    <td className="muted">{t.date}</td>
                    <td style={{ fontWeight: 500 }}>{t.description}</td>
                    <td>
                      <span style={{
                        fontSize: 12, padding: '3px 8px', borderRadius: 5,
                        background: (catColors[t.category] || 'var(--blue)') + '18',
                        color: catColors[t.category] || 'var(--blue)',
                        fontWeight: 600,
                      }}>
                        {t.category}
                      </span>
                    </td>
                    <td><span className={`badge ${t.type === 'Income' ? 'badge-green' : 'badge-red'}`}>{t.type}</span></td>
                    <td style={{ fontWeight: 700, color: t.amount > 0 ? 'var(--green)' : 'var(--red)' }}>
                      {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString()}
                    </td>
                    <td style={{ fontWeight: 500, color: 'var(--gray-700)' }}>{t.balance.toLocaleString()}</td>
                    <td><span className="mono muted" style={{ fontSize: 11 }}>{t.ref}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-footer">
            <span style={{ fontSize: 12.5, color: 'var(--gray-400)' }}>Showing {transactions.length} of 142 transactions</span>
            <div style={{ display: 'flex', gap: 20 }}>
              <span style={{ fontSize: 12.5, color: 'var(--green)', fontWeight: 600 }}>
                Income: GHS {totalIncome.toLocaleString()}
              </span>
              <span style={{ fontSize: 12.5, color: 'var(--red)', fontWeight: 600 }}>
                Expenses: GHS {totalExpense.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
