'use client';

import { useState } from 'react';

const invoices = [
  { id: 'INV-2026-0847', member: 'Kwame Asante',    company: 'Asante Freight Ltd',    amount: 450,  type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Paid',    method: 'MTN MoMo' },
  { id: 'INV-2026-0846', member: 'Ama Boateng',      company: 'Boateng Logistics',     amount: 280,  type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Paid',    method: 'Vodafone Cash' },
  { id: 'INV-2026-0845', member: 'Emmanuel Darko',   company: 'Darko Clearing Agency', amount: 450,  type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Overdue', method: '—' },
  { id: 'INV-2026-0844', member: 'Abena Frimpong',   company: 'Frimpong & Sons',       amount: 1200, type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Paid',    method: 'AirtelTigo' },
  { id: 'INV-2026-0843', member: 'Kofi Mensah',      company: 'Mensah Shipping',       amount: 280,  type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Overdue', method: '—' },
  { id: 'INV-2026-0842', member: 'Akosua Ankrah',    company: 'Ankrah Clearing Co.',   amount: 450,  type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Paid',    method: 'MTN MoMo' },
  { id: 'INV-2026-0841', member: 'Benjamin Tetteh',  company: 'Tetteh Cargo Services', amount: 1200, type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Pending', method: '—' },
  { id: 'INV-2026-0840', member: 'Yaa Osei',         company: 'Osei Freight Managers', amount: 450,  type: 'Annual Dues', issued: '01 Jan 2026', due: '31 Jan 2026', status: 'Overdue', method: '—' },
];

const statusBadge: Record<string, string> = {
  'Paid':    'badge-green',
  'Overdue': 'badge-red',
  'Pending': 'badge-yellow',
};

const methodColor: Record<string, string> = {
  'MTN MoMo':      '#d97706',
  'Vodafone Cash': 'var(--red)',
  'AirtelTigo':    'var(--blue)',
};

const providers = [
  { name: 'MTN MoMo',       share: 52, txns: 641, color: '#d97706', sharePct: '52%' },
  { name: 'Vodafone Cash',  share: 28, txns: 345, color: '#dc2626', sharePct: '28%' },
  { name: 'AirtelTigo Money', share: 20, txns: 247, color: 'var(--blue)', sharePct: '20%' },
];

function PaymentModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [network, setNetwork] = useState('');

  const stepLabels = ['Member', 'Amount', 'Payment', 'Confirm'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ width: 500 }} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--gray-900)' }}>Collect Payment</div>
            <div style={{ fontSize: 12.5, color: 'var(--gray-500)', marginTop: 2 }}>Step {step} of 4</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ fontSize: 18, padding: '0 6px' }}>×</button>
        </div>

        <div className="modal-body">
          {/* Step indicators */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
            {stepLabels.map((label, i) => {
              const idx = i + 1;
              const done = step > idx;
              const active = step === idx;
              return (
                <div key={label} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? 1 : 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: done || active ? 'var(--blue)' : 'var(--gray-100)',
                      color: done || active ? '#fff' : 'var(--gray-400)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700,
                    }}>
                      {done ? '✓' : idx}
                    </div>
                    <div style={{ fontSize: 10.5, color: active ? 'var(--blue)' : 'var(--gray-400)', marginTop: 4, fontWeight: active ? 600 : 400 }}>
                      {label}
                    </div>
                  </div>
                  {i < 3 && (
                    <div style={{ flex: 1, height: 1, background: done ? 'var(--blue)' : 'var(--gray-200)', margin: '0 8px', marginBottom: 18 }} />
                  )}
                </div>
              );
            })}
          </div>

          {step === 1 && (
            <div>
              <div className="form-group" style={{ marginBottom: 14 }}>
                <label className="label">Search Member</label>
                <input className="input" placeholder="Name or Member ID..." />
              </div>
              <div style={{ border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                {['Kwame Asante — GIFF-0001', 'Emmanuel Darko — GIFF-0003', 'Yaa Osei — GIFF-0008'].map((m, i, arr) => (
                  <div key={m} onClick={() => setStep(2)} style={{
                    padding: '11px 14px', cursor: 'pointer', fontSize: 13,
                    color: 'var(--gray-700)', fontWeight: 500,
                    borderBottom: i < arr.length - 1 ? '1px solid var(--gray-100)' : 'none',
                    transition: 'background 0.08s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--gray-50)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = ''}
                  >{m}</div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={{ padding: 14, background: 'var(--blue-light)', border: '1px solid var(--blue-border)', borderRadius: 'var(--radius)', marginBottom: 16 }}>
                <div style={{ fontWeight: 600, color: 'var(--gray-900)', fontSize: 13.5 }}>Emmanuel Darko</div>
                <div style={{ fontSize: 12.5, color: 'var(--gray-500)', marginTop: 2 }}>Darko Clearing Agency · GIFF-0003</div>
                <div style={{ marginTop: 8 }}><span className="badge badge-red">Annual Dues Overdue</span></div>
              </div>
              <div className="form-group" style={{ marginBottom: 14 }}>
                <label className="label">Amount (GHS)</label>
                <input className="input" defaultValue="450.00" />
              </div>
              <div className="form-group">
                <label className="label">Payment Type</label>
                <select className="select">
                  <option>Annual Dues 2026</option>
                  <option>Processing Fee</option>
                  <option>Certificate Fee</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button className="btn btn-secondary" onClick={() => setStep(1)} style={{ flex: 1 }}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(3)} style={{ flex: 1 }}>Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="form-group" style={{ marginBottom: 16 }}>
                <label className="label" style={{ marginBottom: 10 }}>Select Payment Network</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[
                    { name: 'MTN MoMo', color: '#d97706' },
                    { name: 'Vodafone Cash', color: '#dc2626' },
                    { name: 'AirtelTigo', color: 'var(--blue)' },
                  ].map(n => (
                    <button key={n.name} onClick={() => setNetwork(n.name)} style={{
                      flex: 1, padding: '12px 8px', borderRadius: 'var(--radius)',
                      border: `2px solid ${network === n.name ? n.color : 'var(--gray-200)'}`,
                      background: network === n.name ? n.color + '10' : '#fff',
                      cursor: 'pointer', fontSize: 12, fontWeight: 600,
                      color: network === n.name ? n.color : 'var(--gray-600)',
                      transition: 'all 0.1s',
                    }}>{n.name}</button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label className="label">Mobile Money Number</label>
                <input className="input" placeholder="024XXXXXXX" />
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button className="btn btn-secondary" onClick={() => setStep(2)} style={{ flex: 1 }}>Back</button>
                <button className="btn btn-primary" onClick={() => setStep(4)} style={{ flex: 1 }}>Send Prompt</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22 }}>
                ✓
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--gray-900)', marginBottom: 6 }}>Payment Successful</div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 20 }}>
                GHS 450 received from Emmanuel Darko via {network || 'MTN MoMo'}
              </div>
              <div style={{ border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: 20, textAlign: 'left' }}>
                {[
                  ['Receipt #', 'RCP-2026-001842'],
                  ['Amount', 'GHS 450.00'],
                  ['Member', 'Emmanuel Darko'],
                  ['Reference', 'Annual Dues 2026'],
                  ['Date', new Date().toLocaleDateString('en-GB')],
                ].map(([k, v], i, arr) => (
                  <div key={k} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '10px 14px', fontSize: 13,
                    borderBottom: i < arr.length - 1 ? '1px solid var(--gray-100)' : 'none',
                  }}>
                    <span style={{ color: 'var(--gray-500)' }}>{k}</span>
                    <span style={{ fontWeight: 500, color: 'var(--gray-800)', fontFamily: k === 'Receipt #' ? 'monospace' : 'inherit' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="btn btn-secondary" style={{ flex: 1 }}>Print Receipt</button>
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={onClose}>Done</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DuesPage() {
  const [activeTab, setActiveTab] = useState<'invoices' | 'history' | 'arrears'>('invoices');
  const [showPayModal, setShowPayModal] = useState(false);

  return (
    <div>
      <div className="page-topbar">
        <div />
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary">Export</button>
          <button className="btn btn-primary" onClick={() => setShowPayModal(true)}>+ Collect Payment</button>
        </div>
      </div>

      <div className="page-title-area">
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>
          Dues & Fees Administration
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--gray-500)', marginTop: 3 }}>
          Automated invoicing, mobile money payments &amp; arrears tracking
        </p>
      </div>

      <div className="page-body">
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Total Collected',  value: 'GHS 248,600', delta: 'YTD 2026',          up: true,  color: 'var(--green)',  bg: 'var(--green-light)' },
            { label: 'Outstanding',      value: 'GHS 34,200',  delta: '177 invoices',       up: false, color: 'var(--amber)',  bg: 'var(--amber-light)' },
            { label: 'Overdue',          value: 'GHS 12,800',  delta: '42 invoices',        up: false, color: 'var(--red)',    bg: 'var(--red-light)' },
            { label: 'Collection Rate',  value: '87.6%',       delta: '+5.6% vs last year', up: true,  color: 'var(--blue)',   bg: 'var(--blue-light)' },
          ].map((s) => (
            <div key={s.label} className="metric-card">
              <div className="metric-label">{s.label}</div>
              <div className="metric-value" style={{ fontSize: 22 }}>{s.value}</div>
              <div className="metric-delta">
                <span style={{ color: s.up ? 'var(--green)' : 'var(--amber)', fontWeight: 600 }}>{s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Provider status */}
        <div className="card" style={{ marginBottom: 24, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--gray-800)' }}>Mobile Money Integration</span>
            <span className="badge badge-green">All Active</span>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {providers.map((p) => (
              <div key={p.name} style={{
                flex: 1, padding: 16, background: 'var(--gray-50)',
                border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-800)' }}>{p.name}</span>
                  <span className="badge badge-green">Active</span>
                </div>
                <div style={{ display: 'flex', gap: 20, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: p.color }}>{p.sharePct}</div>
                    <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>Share</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--gray-800)' }}>{p.txns.toLocaleString()}</div>
                    <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>Transactions</div>
                  </div>
                </div>
                <div className="progress">
                  <div style={{ width: `${p.share}%`, background: p.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs + table */}
        <div style={{ background: '#fff', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', border: '1px solid var(--gray-200)', borderBottom: 'none' }}>
          <div className="tabs" style={{ padding: '0 4px' }}>
            {[
              { key: 'invoices', label: 'Invoices' },
              { key: 'history',  label: 'Payment History' },
              { key: 'arrears',  label: 'Arrears' },
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
              <input className="input" style={{ width: 260 }} placeholder="Search invoices..." />
              <select className="select" style={{ width: 150 }}>
                <option>All Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Overdue</option>
              </select>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Invoice #</th>
                  <th>Member</th>
                  <th>Amount (GHS)</th>
                  <th>Type</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Method</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id}>
                    <td><span className="mono muted">{inv.id}</span></td>
                    <td>
                      <div style={{ fontWeight: 500, color: 'var(--gray-900)', fontSize: 13.5 }}>{inv.member}</div>
                      <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{inv.company}</div>
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--gray-900)' }}>{inv.amount.toLocaleString()}</td>
                    <td className="muted">{inv.type}</td>
                    <td style={{ color: inv.status === 'Overdue' ? 'var(--red)' : 'var(--gray-600)', fontWeight: inv.status === 'Overdue' ? 600 : 400 }}>
                      {inv.due}
                    </td>
                    <td><span className={`badge ${statusBadge[inv.status]}`}>{inv.status}</span></td>
                    <td>
                      {inv.method !== '—' ? (
                        <span style={{ fontSize: 12, fontWeight: 600, color: methodColor[inv.method] || 'var(--gray-600)' }}>{inv.method}</span>
                      ) : (
                        <span style={{ color: 'var(--gray-300)' }}>—</span>
                      )}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {inv.status !== 'Paid' && (
                          <button className="btn btn-primary btn-sm" onClick={() => setShowPayModal(true)}>Collect</button>
                        )}
                        <button className="btn btn-secondary btn-sm">View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-footer">
            <span style={{ fontSize: 12.5, color: 'var(--gray-400)' }}>Showing {invoices.length} of 1,284 invoices</span>
            <button className="btn btn-secondary btn-sm">Load more</button>
          </div>
        </div>
      </div>

      {showPayModal && <PaymentModal onClose={() => setShowPayModal(false)} />}
    </div>
  );
}
