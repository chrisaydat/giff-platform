'use client';

import { useState } from 'react';
import Link from 'next/link';

const memberDetail = {
  name: 'Kofi Mensah',
  title: 'Principal Representative',
  company: 'Meridian Logistics Ltd.',
  giffId: 'GF-2018-4492',
  status: 'ACTIVE STANDING',
  tier: 'Class A Forwarder',
  joined: '14 Mar, 2018',
  balance: 'GHS 0.00',
  email: 'kmensah@meridianlogistics.com.gh',
  phone: '+233 54 123 4567',
  address: 'Tema Harbor Enclave, Block C Warehouse 14, Greater Accra',
  registeredName: 'Meridian Logistics & Freight Ltd.',
  tin: 'C0029384756',
  licensingAuthority: 'Ghana Revenue Authority (Customs)',
  operationalScope: ['Customs Brokerage', 'Sea Freight', 'Warehousing'],
  financials: [
    { ref: 'INV-2023-1102', desc: 'Annual Subscription Dues', amount: 'GHS 2,500.00', status: 'PAID' },
    { ref: 'INV-2023-0845', desc: 'Training Seminar Fee', amount: 'GHS 450.00', status: 'PAID' },
  ],
  notes: [
    {
      date: '12 Oct 2023', author: 'System Admin',
      text: 'Member successfully completed the mandatory FIATA diploma validation. Certificates have been added to the document repository.',
    },
    {
      date: '05 Sep 2023', author: 'Compliance Team',
      text: 'Requested updated Tax Clearance Certificate for the upcoming renewal cycle. Notice sent via email.',
    },
  ],
};

type TabKey = 'overview' | 'financials' | 'documents' | 'history';

export default function MemberDetailPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  return (
    <div>
      <div className="page-title-area">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/membership">Membership</Link>
          <span className="breadcrumb-sep">›</span>
          <span>Corporate Roster</span>
          <span className="breadcrumb-sep">›</span>
          <span>Meridian Logistics</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <h1 className="serif" style={{ fontSize: 34, fontWeight: 700, color: 'var(--on-surface)', lineHeight: 1.1 }}>
              {memberDetail.name}
            </h1>
            <p style={{ fontSize: 13.5, color: 'var(--on-surface-variant)', marginTop: 4 }}>
              {memberDetail.title} · {memberDetail.company}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0, paddingTop: 4 }}>
            <button className="btn btn-secondary">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M2 3h12v10H2zM2 3l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Message Member
            </button>
            <button className="btn" style={{ background: '#fff3cd', color: '#92520c', border: '1px solid rgba(146,82,12,0.2)' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              Issue Demand Notice
            </button>
            <button className="btn btn-dark">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Approve Renewal
            </button>
          </div>
        </div>
      </div>

      <div className="page-body">
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 24 }}>

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div className="card-surface">
              {/* Profile photo placeholder */}
              <div style={{
                height: 140, background: 'var(--surface-low)', borderRadius: '6px 6px 0 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary) 0%, #0570de 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 22, fontWeight: 700,
                }}>KM</div>
              </div>

              {/* Status + name */}
              <div style={{ padding: '16px 20px 8px', textAlign: 'center' }}>
                <span className="badge badge-success" style={{ marginBottom: 10, display: 'inline-flex' }}>
                  {memberDetail.status}
                </span>
                <div className="serif" style={{ fontSize: 18, fontWeight: 700, color: 'var(--on-surface)', marginBottom: 2 }}>
                  {memberDetail.name}
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--on-surface-variant)' }}>{memberDetail.company}</div>
              </div>

              {/* Info rows */}
              <div style={{ padding: '8px 20px 16px' }}>
                {[
                  ['Corporate Tier', memberDetail.tier],
                  ['Member ID', memberDetail.giffId],
                  ['Joined Date', memberDetail.joined],
                  ['Account Balance', memberDetail.balance],
                ].map(([k, v]) => (
                  <div key={k} style={{
                    display: 'grid', gridTemplateColumns: '130px 1fr',
                    padding: '8px 0', borderBottom: '1px solid var(--outline-variant)',
                    alignItems: 'center',
                  }}>
                    <span className="field-label" style={{ marginBottom: 0 }}>{k}</span>
                    <span style={{
                      fontSize: k === 'Member ID' ? 12 : 13,
                      fontWeight: 500, color: 'var(--on-surface)',
                      fontFamily: k === 'Member ID' ? 'monospace' : 'inherit',
                    }}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--outline-variant)', margin: '0 0 12px' }} />

              {/* Contact */}
              <div style={{ padding: '0 20px 20px' }}>
                <div className="field-label" style={{ marginBottom: 10 }}>Primary Contact</div>
                {[
                  { icon: '✉', label: memberDetail.email },
                  { icon: '☎', label: memberDetail.phone },
                  { icon: '⌖', label: memberDetail.address },
                ].map((row) => (
                  <div key={row.label} style={{
                    display: 'flex', gap: 10, padding: '7px 0',
                    borderBottom: '1px solid var(--outline-variant)', alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: 13, color: 'var(--on-surface-variant)', flexShrink: 0, width: 18 }}>{row.icon}</span>
                    <span style={{ fontSize: 12.5, color: 'var(--on-surface)', lineHeight: 1.4 }}>{row.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="card-surface" style={{ overflow: 'hidden' }}>
            {/* Tabs */}
            <div className="tabs" style={{ padding: '0 20px' }}>
              {(['overview', 'financials', 'documents', 'history'] as TabKey[]).map((t) => (
                <button
                  key={t}
                  className={`tab${activeTab === t ? ' active' : ''}`}
                  onClick={() => setActiveTab(t)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {t}
                </button>
              ))}
            </div>

            <div style={{ padding: '20px 24px' }}>
              {activeTab === 'overview' && (
                <>
                  <div className="section-heading">Corporate Entity Details</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 28 }}>
                    {[
                      ['Registered Name', memberDetail.registeredName],
                      ['TIN / Reg No.', memberDetail.tin],
                      ['Licensing Authority', memberDetail.licensingAuthority],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <div className="field-label">{k}</div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--on-surface)', lineHeight: 1.4 }}>{v}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="field-label" style={{ marginBottom: 8 }}>Operational Scope</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {memberDetail.operationalScope.map((s) => (
                        <span key={s} className="pill-tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 28 }}>
                    {/* Recent Financials */}
                    <div className="card-surface">
                      <div style={{ padding: '14px 16px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)' }}>Recent Financials</span>
                        <a href="#" style={{ fontSize: 12, color: 'var(--blue)', textDecoration: 'none' }}>View All →</a>
                      </div>
                      <div style={{ padding: '0 16px 16px' }}>
                        {memberDetail.financials.map((f) => (
                          <div key={f.ref} style={{
                            padding: '9px 0', borderBottom: '1px solid var(--outline-variant)',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8,
                          }}>
                            <div>
                              <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--on-surface-variant)', marginBottom: 2 }}>{f.ref}</div>
                              <div style={{ fontSize: 12.5, color: 'var(--on-surface)' }}>{f.desc}</div>
                            </div>
                            <div style={{ textAlign: 'right', flexShrink: 0 }}>
                              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 3 }}>{f.amount}</div>
                              <span className="badge badge-success" style={{ fontSize: 10 }}>{f.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Executive Notes */}
                    <div className="card-surface">
                      <div style={{ padding: '14px 16px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)' }}>Executive Notes</span>
                        <button className="btn btn-ghost btn-sm" style={{ fontSize: 16, padding: '0 6px' }}>✎</button>
                      </div>
                      <div style={{ padding: '0 16px 16px' }}>
                        {memberDetail.notes.map((n, i) => (
                          <div key={i} style={{
                            padding: '9px 0',
                            borderBottom: i < memberDetail.notes.length - 1 ? '1px solid var(--outline-variant)' : 'none',
                          }}>
                            <div style={{ display: 'flex', gap: 6, marginBottom: 4, alignItems: 'center' }}>
                              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--on-surface-variant)' }}>{n.date}</span>
                              <span style={{ fontSize: 10, color: 'var(--outline-variant)' }}>·</span>
                              <span style={{ fontSize: 11, color: 'var(--on-surface-variant)' }}>{n.author}</span>
                            </div>
                            <p style={{ fontSize: 12.5, color: 'var(--on-surface)', lineHeight: 1.5 }}>{n.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'financials' && (
                <div style={{ padding: '20px 0', color: 'var(--on-surface-variant)', fontSize: 13.5 }}>
                  Full financials view coming soon.
                </div>
              )}
              {activeTab === 'documents' && (
                <div style={{ padding: '20px 0', color: 'var(--on-surface-variant)', fontSize: 13.5 }}>
                  Document repository coming soon.
                </div>
              )}
              {activeTab === 'history' && (
                <div style={{ padding: '20px 0', color: 'var(--on-surface-variant)', fontSize: 13.5 }}>
                  Activity history coming soon.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
