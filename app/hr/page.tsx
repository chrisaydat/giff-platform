'use client';

import { useState } from 'react';

const statCards = [
  { label: 'STAFF COUNT', value: '248', delta: '+3 since last quarter', deltaColor: 'var(--green)' },
  { label: 'DEPARTMENTS', value: '12', delta: 'Across 4 regional offices', deltaColor: 'var(--gray-500)' },
  { label: 'STAFF ON LEAVE', value: '14', delta: '5 pending approvals', deltaColor: 'var(--amber)' },
  { label: 'ATTENDANCE RATE', value: '96.4%', delta: 'Monthly rolling average', deltaColor: 'var(--gray-500)' },
];

const workspaceItems = [
  { iconType: 'edit', label: 'Annual Leave Request', sub: 'Submitted by E. Mensah (Accounts) • 14 Days', badge: 'Pending Review', badgeClass: 'badge-yellow' },
  { iconType: 'doc', label: 'Q3 Performance Reviews', sub: '32 reviews remaining • Deadline in 5 days', badge: 'In Progress', badgeClass: 'badge-blue' },
];

const payrollStatus = [
  { label: 'Data Verification', done: true },
  { label: 'Leave Deductions', done: true },
  { label: 'Executive Sign-off', done: false, badge: 'AWAITING', badgeClass: 'badge-yellow' },
];

const directoryStaff = [
  { initials: 'KD', color: '#0570de', name: 'Kwame Dankwa', id: 'GIFF-0842', role: 'Registrar', dept: 'Executive Office', status: 'Active', statusClass: 'badge-green' },
  { initials: 'AA', color: '#059669', name: 'Abena Asare', id: 'GIFF-1093', role: 'Senior Accountant', dept: 'Finance', status: 'Active', statusClass: 'badge-green' },
  { initials: 'SO', color: '#d97706', name: 'Samuel Osei', id: 'GIFF-1104', role: 'Admin Officer', dept: 'Operations', status: 'On Leave', statusClass: 'badge-yellow' },
  { initials: 'MT', color: '#7c3aed', name: 'Mary Tetteh', id: 'GIFF-1255', role: 'HR Coordinator', dept: 'Human Resources', status: 'Active', statusClass: 'badge-green' },
];

function EditIcon() {
  return (
    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--blue)' }}>
        <path d="M11 2l3 3-9 9H2v-3l9-9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DocIcon() {
  return (
    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--gray-500)' }}>
        <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--gray-400)', flexShrink: 0 }}>
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function HRPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Workforce</div>
        <h1 className="executive-display executive-display-sm">Workforce Operations</h1>
        <p className="executive-lead executive-lead-compact">
          Manage institutional staffing, coordinate departmental resources, and review administrative actions.
        </p>
      </div>

      <div className="page-body">
        {/* 4 Stat Cards */}
        <div className="executive-grid executive-grid-4 executive-section">
          {statCards.map((card) => (
            <div key={card.label} className="metric-card">
              <span className="metric-label">{card.label}</span>
              <div className="metric-value">{card.value}</div>
              <div className="metric-delta" style={{ color: card.deltaColor }}>{card.delta}</div>
            </div>
          ))}
        </div>

        {/* Action Center + Payroll */}
        <div className="executive-grid executive-grid-main-aside executive-section">
          {/* Action Center + HR Workspace in one card */}
          <div className="card">
            <div className="card-body">
              <div className="executive-panel-title" style={{ marginBottom: 14 }}>Action Center</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button
                  className="btn btn-dark"
                  style={{ justifyContent: 'flex-start', height: 38, width: '100%' }}
                  onClick={() => setShowAddModal(true)}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <circle cx="6" cy="5" r="2.5" fill="currentColor" opacity=".9"/>
                    <path d="M1 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M12 8v6M9 11h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  Add New Staff Member
                </button>
                <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', height: 38, width: '100%' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="2" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M5 1v3M11 1v3M1 7h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  Approve Leave
                </button>
                <button className="btn btn-secondary" style={{ justifyContent: 'flex-start', height: 38, width: '100%' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M5 5h6M5 8h6M5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  Generate Payroll Report
                </button>
              </div>
            </div>
            <div className="divider" />
            <div style={{ padding: '14px 20px 8px' }}>
              <div className="executive-panel-title" style={{ marginBottom: 4 }}>HR Workspace</div>
            </div>
            {workspaceItems.map((item) => (
              <div key={item.label} className="workspace-item">
                {item.iconType === 'edit' ? <EditIcon /> : <DocIcon />}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500, fontSize: 13.5, color: 'var(--gray-900)' }}>{item.label}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>{item.sub}</div>
                </div>
                <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                <ChevronRight />
              </div>
            ))}
          </div>

          {/* Payroll Readiness */}
          <div className="card">
            <div className="card-header">
              <span className="executive-panel-title">Payroll Readiness Status</span>
            </div>
            <div className="card-body">
              {payrollStatus.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '11px 0',
                    borderBottom: i < payrollStatus.length - 1 ? '1px solid var(--gray-100)' : 'none',
                  }}
                >
                  <span style={{ fontSize: 13, color: 'var(--gray-700)' }}>{item.label}</span>
                  {item.done ? (
                    <span style={{ color: 'var(--green)', fontSize: 16, fontWeight: 700, lineHeight: 1 }}>✓</span>
                  ) : (
                    <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                  )}
                </div>
              ))}
              <div style={{
                marginTop: 16, padding: '12px 14px',
                background: 'var(--blue-light)', borderRadius: 'var(--radius)',
                border: '1px solid var(--blue-border)',
                fontSize: 12.5, color: 'var(--blue)', lineHeight: 1.6,
                display: 'flex', gap: 8,
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M8 5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="8" cy="11" r=".7" fill="currentColor"/>
                </svg>
                <span>Payroll processing window opens on the 24th. Ensure all departmental adjustments are submitted prior.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Directory */}
        <div className="card">
          <div className="card-header">
            <div className="executive-panel-title">Institutional Directory</div>
            <a href="#" style={{ fontSize: 13, color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>
              View Full Registry →
            </a>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>NAME &amp; IDENTIFICATION</th>
                  <th>ROLE</th>
                  <th>DEPARTMENT</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {directoryStaff.map((s) => (
                  <tr key={s.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                          background: s.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: 11, fontWeight: 700,
                        }}>
                          {s.initials}
                        </div>
                        <div>
                          <div style={{ fontWeight: 500, fontSize: 13.5, color: 'var(--gray-900)' }}>{s.name}</div>
                          <div className="mono muted" style={{ fontSize: 11 }}>ID: {s.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="muted">{s.role}</td>
                    <td className="muted">{s.dept}</td>
                    <td><span className={`badge ${s.statusClass}`}>{s.status}</span></td>
                    <td>
                      <button className="btn btn-ghost btn-sm" style={{ fontSize: 16, padding: '0 8px' }}>⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Staff Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="executive-panel-title">Add New Staff Member</span>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowAddModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="executive-grid executive-grid-modal">
                <div className="form-group">
                  <label className="label">First Name</label>
                  <input className="input" placeholder="e.g. Kofi" />
                </div>
                <div className="form-group">
                  <label className="label">Last Name</label>
                  <input className="input" placeholder="e.g. Mensah" />
                </div>
                <div className="form-group">
                  <label className="label">Role</label>
                  <input className="input" placeholder="e.g. Finance Officer" />
                </div>
                <div className="form-group">
                  <label className="label">Department</label>
                  <select className="select">
                    <option>Finance</option>
                    <option>Operations</option>
                    <option>Human Resources</option>
                    <option>Executive Office</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={() => setShowAddModal(false)}>Add Member</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
