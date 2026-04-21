'use client';

import { useState } from 'react';

const auditEvents = [
  {
    id: 'EVT-8829-1A4C',
    actor: 'Josephine Appiah',
    actorRole: 'Membership Officer',
    actorId: 'USR-882',
    actorInitials: 'JA',
    actorColor: '#0570de',
    title: 'Modified Profile',
    module: 'MEMBERSHIP',
    moduleClass: 'badge-blue',
    time: '10:42 AM',
    desc: 'User J. Appiah modified corporate profile details for "Global Logi..."',
    ip: '196.12.34.102',
    timestamp: 'Oct 24, 2023\n10:42:15 AM GMT',
    prevState: '{\n  "company_name": "Global Logistics Ltd",\n  "status": "Active",\n  "credit_limit": 50000\n}',
    newState: '{\n  "company_name": "Global Logistics Ltd",\n  "status": "Active",\n  "credit_limit": 75000\n}',
  },
  {
    id: 'EVT-8828-9B3F',
    actor: 'System Automated Task',
    actorRole: 'System',
    actorId: 'SYS-001',
    actorInitials: 'ST',
    actorColor: '#059669',
    title: 'Issued Invoice',
    module: 'DUES',
    moduleClass: 'badge-green',
    time: '09:15 AM',
    desc: 'System generated annual renewal invoice #INV-2023-89 for "Ape..."',
    ip: '10.0.0.1',
    timestamp: 'Oct 24, 2023\n09:15:00 AM GMT',
    prevState: null,
    newState: '{\n  "invoice_ref": "INV-2023-89",\n  "status": "issued"\n}',
  },
  {
    id: 'EVT-8827-2C5E',
    actor: 'Unidentified Actor',
    actorRole: 'Unknown',
    actorId: 'N/A',
    actorInitials: '?',
    actorColor: '#b91c1c',
    title: 'Failed Authentication',
    module: 'SECURITY',
    moduleClass: 'badge-red',
    time: '08:05 AM',
    desc: 'Multiple failed login attempts detected from IP 192.168.1.45 targe...',
    ip: '192.168.1.45',
    timestamp: 'Oct 24, 2023\n08:05:44 AM GMT',
    prevState: null,
    newState: null,
    isAlert: true,
  },
  {
    id: 'EVT-8826-7D1A',
    actor: 'E. Mensah',
    actorRole: 'System Administrator',
    actorId: 'ADM-001',
    actorInitials: 'EM',
    actorColor: '#d97706',
    title: 'Account Activated',
    module: 'ACCOUNTS',
    moduleClass: 'badge-yellow',
    time: 'Yesterday',
    desc: 'Approved and activated new member account for "Horizon Shippi..."',
    ip: '196.12.34.108',
    timestamp: 'Oct 23, 2023\n14:30:00 PM GMT',
    prevState: '{\n  "status": "pending",\n  "activated_at": null\n}',
    newState: '{\n  "status": "active",\n  "activated_at": "2023-10-23T14:30:00Z"\n}',
  },
];

const miniChartData = [40, 65, 30, 80, 55, 90, 70, 85, 60, 95, 75, 100];
const miniMax = Math.max(...miniChartData);

export default function AuditPage() {
  const [selectedEventId, setSelectedEventId] = useState('EVT-8829-1A4C');
  const [showPanel, setShowPanel] = useState(true);

  const selectedEvent = auditEvents.find((e) => e.id === selectedEventId) ?? auditEvents[0];

  return (
    <>
      <div className="page-title-area">
        <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>
          Traceability Console
        </h1>
        <p style={{ color: 'var(--gray-500)', fontSize: 13.5, marginTop: 4 }}>
          A comprehensive, immutable record of systemic operations, policy modifications, and user access across the digital estate.
        </p>
      </div>

      <div className="page-body">
        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {/* Card 1: Total Events + mini sparkline */}
          <div className="metric-card">
            <span className="metric-label">TOTAL EVENTS (24H)</span>
            <div className="metric-value" style={{ marginBottom: 8 }}>1,492</div>
            {/* Mini sparkline */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 28, marginBottom: 8 }}>
              {miniChartData.map((v, i) => (
                <div
                  key={i}
                  style={{
                    width: 4, borderRadius: '2px 2px 0 0',
                    height: `${(v / miniMax) * 28}px`,
                    background: i === miniChartData.length - 1 ? 'var(--blue)' : 'rgba(5,112,222,0.25)',
                  }}
                />
              ))}
            </div>
            <div className="metric-delta" style={{ color: 'var(--green)', fontWeight: 500 }}>↗ +12% from previous cycle</div>
          </div>

          {/* Card 2: Active Modules */}
          <div className="metric-card">
            <span className="metric-label" style={{ marginBottom: 10, display: 'block' }}>ACTIVE MODULES</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              <span className="badge badge-blue">Membership (45%)</span>
              <span className="badge badge-green">Dues (30%)</span>
              <span className="badge badge-purple">Authentication (25%)</span>
            </div>
            {/* Segmented progress bar */}
            <div className="progress" style={{ height: 6 }}>
              <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ width: '45%', background: 'var(--blue)', borderRadius: '99px 0 0 99px' }} />
                <div style={{ width: '30%', background: 'var(--green)' }} />
                <div style={{ width: '25%', background: 'var(--purple)', borderRadius: '0 99px 99px 0' }} />
              </div>
            </div>
          </div>

          {/* Card 3: Critical (dark) */}
          <div className="metric-card-dark">
            <div className="flex-between" style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                CRITICAL INTERVENTIONS
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L1.5 13h13L8 2z" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="8" y1="7" x2="8" y2="9.5" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="8" cy="11" r=".6" fill="#f59e0b"/>
              </svg>
            </div>
            <div style={{ fontSize: 42, fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 10 }}>03</div>
            <a href="#" style={{ fontSize: 12.5, color: '#f59e0b', textDecoration: 'none', fontWeight: 500 }}>
              Review requires immediate action →
            </a>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <button className="filter-btn">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M1 5h12M5 1v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            Past 7 Days
          </button>
          <button className="filter-btn">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 4h10M4 7h6M6 10h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            Filter by Module
          </button>
          <select className="select" style={{ width: 150, height: 32, fontSize: 12.5 }}>
            <option>Severity: All</option>
            <option>Critical</option>
            <option>Warning</option>
            <option>Info</option>
          </select>
          <a href="#" style={{ marginLeft: 'auto', fontSize: 12.5, color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>
            ↓ Export Log (CSV)
          </a>
        </div>

        {/* Event List + Inspection Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: showPanel ? '1fr 380px' : '1fr', gap: 20 }}>
          {/* Event List */}
          <div className="card" style={{ overflow: 'hidden' }}>
            {auditEvents.map((event) => (
              <div
                key={event.id}
                className={`event-row${selectedEventId === event.id ? ' active' : ''}`}
                onClick={() => { setSelectedEventId(event.id); setShowPanel(true); }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  {/* Actor avatar */}
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                    background: event.actorColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 11, fontWeight: 700, marginTop: 1,
                  }}>
                    {event.actorInitials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 3 }}>
                      <span style={{ fontWeight: 600, fontSize: 13.5, color: event.isAlert ? 'var(--red)' : 'var(--gray-900)' }}>
                        {event.title}
                      </span>
                      <span className={`badge ${event.moduleClass}`}>{event.module}</span>
                      <span style={{ fontSize: 12, color: 'var(--gray-400)', marginLeft: 'auto' }}>{event.time}</span>
                    </div>
                    <p style={{ fontSize: 12.5, color: 'var(--gray-500)', lineHeight: 1.4, marginBottom: 4 }}>{event.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%', background: event.actorColor,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontSize: 8, fontWeight: 700, flexShrink: 0,
                      }}>
                        {event.actorInitials}
                      </div>
                      <span style={{ fontSize: 11.5, color: 'var(--gray-400)' }}>By {event.actor} ({event.actorId})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Event Inspection Panel */}
          {showPanel && selectedEvent && (
            <div className="card">
              <div className="card-header">
                <span style={{ fontWeight: 600, fontSize: 15 }}>Event Inspection</span>
                <button className="btn btn-ghost btn-sm" onClick={() => setShowPanel(false)} style={{ padding: '0 6px' }}>✕</button>
              </div>
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Event ID */}
                <div>
                  <div className="section-label" style={{ marginBottom: 4 }}>EVENT ID</div>
                  <span className="mono" style={{ fontSize: 13, color: 'var(--gray-800)', background: 'var(--gray-100)', padding: '3px 8px', borderRadius: 4 }}>
                    {selectedEvent.id}
                  </span>
                </div>

                {/* Timestamp + IP */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <div className="section-label" style={{ marginBottom: 4 }}>TIMESTAMP</div>
                    <div style={{ fontSize: 12.5, color: 'var(--gray-700)', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{selectedEvent.timestamp}</div>
                  </div>
                  <div>
                    <div className="section-label" style={{ marginBottom: 4 }}>IP ADDRESS</div>
                    <div className="mono" style={{ fontSize: 12.5, color: 'var(--gray-700)' }}>{selectedEvent.ip}</div>
                  </div>
                </div>

                {/* Initiating Actor */}
                <div>
                  <div className="section-label" style={{ marginBottom: 8 }}>INITIATING ACTOR</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                      background: selectedEvent.actorColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: 12, fontWeight: 700,
                    }}>
                      {selectedEvent.actorInitials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13.5, color: 'var(--gray-900)' }}>{selectedEvent.actor}</div>
                      <div style={{ fontSize: 12, color: 'var(--gray-500)' }}>{selectedEvent.actorRole} ({selectedEvent.actorId})</div>
                    </div>
                  </div>
                </div>

                {/* State Mutation Record */}
                <div>
                  <div className="section-label" style={{ marginBottom: 8 }}>STATE MUTATION RECORD</div>
                  <div style={{ marginBottom: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gray-500)', marginBottom: 4 }}>Previous State</div>
                    {selectedEvent.prevState ? (
                      <div className="code-block">{selectedEvent.prevState}</div>
                    ) : (
                      <div style={{ fontSize: 12.5, color: 'var(--gray-400)', fontStyle: 'italic' }}>N/A — initial action</div>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--gray-500)', marginBottom: 4 }}>New State</div>
                    {selectedEvent.newState ? (
                      <div className="code-block">{selectedEvent.newState}</div>
                    ) : (
                      <div style={{ fontSize: 12.5, color: 'var(--gray-400)', fontStyle: 'italic' }}>N/A — no state change</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
