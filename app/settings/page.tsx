'use client';

import { useState } from 'react';

type TabKey = 'general' | 'financial' | 'roles' | 'security';

const roles = [
  { icon: 'shield', name: 'Super Administrator', count: 4, caps: ['Global System', 'Audit Logs'], status: 'Active', statusClass: 'badge-green' },
  { icon: 'ledger', name: 'Financial Officer', count: 12, caps: ['Dues & Ledger', 'Invoicing'], status: 'Active', statusClass: 'badge-green' },
  { icon: 'members', name: 'Membership Director', count: 8, caps: ['Member Approvals', 'Directories'], status: 'Active', statusClass: 'badge-green' },
  { icon: 'doc', name: 'Regional Clerk', count: 45, caps: ['Local Data Entry', 'Read-Only'], status: 'Restricted', statusClass: 'badge-yellow' },
];

function RoleIcon({ type }: { type: string }) {
  const style = { width: 32, height: 32, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 as const };
  if (type === 'shield') return (
    <div style={{ ...style, background: 'var(--blue-light)' }}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M8 2L3 4.5v5C3 12.5 5.7 14.8 8 15.5c2.3-.7 5-3 5-6v-5L8 2z" stroke="var(--blue)" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M6 8l1.5 1.5L10 6.5" stroke="var(--blue)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
  if (type === 'ledger') return (
    <div style={{ ...style, background: 'var(--green-light)' }}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M2 12l3-4 3 2 3-5 3 3" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14h12" stroke="var(--green)" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    </div>
  );
  if (type === 'members') return (
    <div style={{ ...style, background: 'var(--purple-light)' }}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="5" r="2.5" fill="var(--purple)" opacity=".9"/>
        <path d="M1 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="var(--purple)" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="12" cy="5" r="2" fill="var(--purple)" opacity=".5"/>
        <path d="M11 13c0-1.5.8-2.8 2-3.5" stroke="var(--purple)" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
      </svg>
    </div>
  );
  return (
    <div style={{ ...style, background: 'var(--gray-100)' }}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="1" width="12" height="14" rx="2" stroke="var(--gray-500)" strokeWidth="1.4"/>
        <path d="M5 5h6M5 8h6M5 11h4" stroke="var(--gray-500)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

const paramCards = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1 7h14" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="5" cy="11" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Late Fee Structuring',
    desc: 'Penalty rate applied to overdue member dues accounts.',
    value: '5.0%',
    chips: ['Net 30'],
    bg: 'var(--blue-light)', color: 'var(--blue)',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'Notification Triggers',
    desc: 'Automated reminders dispatched before renewal deadlines.',
    value: null,
    chips: ['30 Days', '7 Days'],
    bg: 'var(--amber-light)', color: 'var(--amber)',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Regional Definitions',
    desc: 'Operational zones and regional office assignments.',
    value: null,
    chips: ['6 Active Zones'],
    avatars: ['T', 'K', 'A'],
    bg: 'var(--green-light)', color: 'var(--green)',
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('roles');
  const [twoFactorOn, setTwoFactorOn] = useState(true);

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'general', label: 'General Settings' },
    { key: 'financial', label: 'Financial Parameters' },
    { key: 'roles', label: 'Roles & Permissions' },
    { key: 'security', label: 'Security Integrations' },
  ];

  return (
    <div>
      <div className="page-title-area">
        <h1 className="serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--on-surface)', letterSpacing: '-0.02em' }}>
          System Administration
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--on-surface-variant)', marginTop: 3 }}>
          Configure access controls, operational parameters, and security policies
        </p>
      </div>

      <div className="page-body">
        {/* Tab bar */}
        <div className="tabs" style={{ marginBottom: 24 }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`tab${activeTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>

          {/* Left panel */}
          <div>
            {(activeTab === 'roles' || activeTab === 'general' || activeTab === 'financial' || activeTab === 'security') && (
              <>
                {/* Access Hierarchies */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <h2 className="section-heading" style={{ margin: 0 }}>Access Hierarchies</h2>
                  <button className="btn btn-dark btn-sm">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    Create New Role
                  </button>
                </div>
                <p style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginBottom: 16, marginTop: -8 }}>
                  Manage permission sets and personnel assignments across the platform.
                </p>

                <div className="card-surface" style={{ marginBottom: 32, overflow: 'hidden' }}>
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>Role Designation</th>
                          <th>Active Personnel</th>
                          <th>Core Capabilities</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {roles.map((r) => (
                          <tr key={r.name}>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <RoleIcon type={r.icon} />
                                <span style={{ fontWeight: 500, fontSize: 13.5, color: 'var(--on-surface)' }}>{r.name}</span>
                              </div>
                            </td>
                            <td>
                              <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)' }}>{r.count}</span>
                              <span style={{ fontSize: 12, color: 'var(--on-surface-variant)', marginLeft: 4 }}>users</span>
                            </td>
                            <td>
                              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                {r.caps.map((c) => (
                                  <span key={c} className="pill-tag" style={{ fontSize: 11 }}>{c}</span>
                                ))}
                              </div>
                            </td>
                            <td><span className={`badge ${r.statusClass}`}>{r.status}</span></td>
                            <td>
                              <button className="btn btn-ghost btn-sm">Edit</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Operational Parameters */}
                <h2 className="section-heading">Operational Parameters</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {paramCards.map((p) => (
                    <div key={p.title} className="card-surface" style={{ padding: '16px' }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: p.bg, color: p.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 12,
                      }}>
                        {p.icon}
                      </div>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 4 }}>{p.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--on-surface-variant)', lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</div>
                      {p.value && (
                        <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--on-surface)', marginBottom: 8 }}>{p.value}</div>
                      )}
                      {p.avatars && (
                        <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                          {p.avatars.map((a) => (
                            <div key={a} style={{
                              width: 24, height: 24, borderRadius: '50%',
                              background: 'var(--primary)', color: '#fff',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 10, fontWeight: 700,
                            }}>{a}</div>
                          ))}
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {p.chips.map((c) => (
                          <span key={c} className="pill-tag" style={{ fontSize: 11 }}>{c}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right panel: Security Integrity */}
          <div className="card-surface">
            <div style={{ padding: '16px 18px 12px' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 2 }}>Security Integrity</div>
              <div style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>Environment Status</div>
            </div>

            <div style={{ height: 1, background: 'var(--outline-variant)' }} />

            {/* Infrastructure row */}
            <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--on-surface)', marginBottom: 2 }}>Core Infrastructure</div>
                <div style={{ fontSize: 11.5, color: 'var(--on-surface-variant)', fontFamily: 'monospace' }}>Build Version 4.1.0-RC2</div>
              </div>
              <span className="badge badge-success" style={{ flexShrink: 0 }}>Up to date</span>
            </div>

            <div style={{ height: 1, background: 'var(--outline-variant)' }} />

            {/* 2FA toggle */}
            <div style={{ padding: '14px 18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--on-surface)' }}>Two-Factor Auth</div>
                <div
                  onClick={() => setTwoFactorOn(!twoFactorOn)}
                  style={{
                    width: 40, height: 22, borderRadius: 11, cursor: 'pointer',
                    background: twoFactorOn ? 'var(--primary)' : 'var(--gray-300)',
                    position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 3, width: 16, height: 16, borderRadius: '50%',
                    background: '#fff', transition: 'left 0.2s ease',
                    left: twoFactorOn ? 21 : 3,
                  }} />
                </div>
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--on-surface-variant)' }}>Global Enforcement Policy</div>
            </div>

            <div style={{ height: 1, background: 'var(--outline-variant)' }} />

            {/* Login anomalies */}
            <div style={{ padding: '14px 18px' }}>
              <div style={{
                padding: '12px 14px',
                background: 'var(--amber-light)',
                borderRadius: 6,
                border: '1px solid rgba(146,82,12,0.15)',
                marginBottom: 12,
              }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--amber)', marginBottom: 4 }}>Recent Login Anomalies</div>
                <div style={{ fontSize: 12, color: 'var(--amber)', lineHeight: 1.5 }}>
                  2 attempts blocked in the last 24 hours from unrecognised IP addresses.
                </div>
              </div>
            </div>

            <div style={{ height: 1, background: 'var(--outline-variant)' }} />

            {/* Audit trail link */}
            <div style={{ padding: '14px 18px' }}>
              <a
                href="/audit"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 500, color: 'var(--blue)', textDecoration: 'none',
                }}
              >
                Review Audit Trail
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
