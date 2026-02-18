'use client';

import { useState } from 'react';

const staff = [
  { id: 'STF-001', name: 'Michael Obiri-Adjei', role: 'Lead Consultant & Director', dept: 'Management',   status: 'Active',   joined: 'Jan 2022', leave: 18, leaveUsed:  5, salaryRaw: 8500, attendance: 98 },
  { id: 'STF-002', name: 'Chris Ayeh-Datey',    role: 'Full-Stack Developer',        dept: 'Technology',   status: 'Active',   joined: 'Mar 2022', leave: 18, leaveUsed:  3, salaryRaw: 7200, attendance: 100 },
  { id: 'STF-003', name: 'Clifford Ofili',       role: 'Frontend Developer',          dept: 'Technology',   status: 'Active',   joined: 'Jun 2022', leave: 18, leaveUsed:  7, salaryRaw: 6500, attendance: 96 },
  { id: 'STF-004', name: 'Basha Damba',          role: 'UI/UX Designer',              dept: 'Design',       status: 'Active',   joined: 'Jun 2022', leave: 18, leaveUsed:  2, salaryRaw: 6200, attendance: 97 },
  { id: 'STF-005', name: 'Enoch Cobbina',        role: 'Backend Developer',           dept: 'Technology',   status: 'On Leave', joined: 'Sep 2022', leave: 18, leaveUsed: 18, salaryRaw: 6800, attendance: 88 },
  { id: 'STF-006', name: 'Abena Asare',          role: 'Administrative Officer',      dept: 'Administration', status: 'Active', joined: 'Jan 2020', leave: 21, leaveUsed: 10, salaryRaw: 4200, attendance: 94 },
  { id: 'STF-007', name: 'Kwesi Andoh',          role: 'Finance Officer',             dept: 'Finance',      status: 'Active',   joined: 'Mar 2019', leave: 21, leaveUsed:  6, salaryRaw: 5100, attendance: 99 },
];

const leaveRequests = [
  { id: 'LVR-001', staff: 'Enoch Cobbina',  type: 'Annual Leave', from: '10 Feb 2026', to: '21 Feb 2026', days: 10, status: 'Approved', reason: 'Family vacation' },
  { id: 'LVR-002', staff: 'Abena Asare',    type: 'Sick Leave',   from: '15 Feb 2026', to: '17 Feb 2026', days:  3, status: 'Approved', reason: 'Medical appointment' },
  { id: 'LVR-003', staff: 'Kofi Mensah',    type: 'Annual Leave', from: '01 Mar 2026', to: '07 Mar 2026', days:  5, status: 'Pending',  reason: 'Personal travel' },
  { id: 'LVR-004', staff: 'Clifford Ofili', type: 'Study Leave',  from: '20 Mar 2026', to: '22 Mar 2026', days:  3, status: 'Pending',  reason: 'Professional certification exam' },
];

const deptColors: Record<string, string> = {
  Management:     'var(--blue)',
  Technology:     'var(--purple)',
  Design:         '#db2777',
  Administration: 'var(--amber)',
  Finance:        'var(--green)',
  Operations:     'var(--red)',
};

const deptBg: Record<string, string> = {
  Management:     'var(--blue-light)',
  Technology:     'var(--purple-light)',
  Design:         '#fce7f3',
  Administration: 'var(--amber-light)',
  Finance:        'var(--green-light)',
  Operations:     'var(--red-light)',
};

const avatarPalette = ['#0570de','#7c3aed','#db2777','#d97706','#059669'];

function Avatar({ name, dept, size = 34 }: { name: string; dept: string; size?: number }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const c = deptColors[dept] || avatarPalette[name.charCodeAt(0) % avatarPalette.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: c,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: size * 0.36, fontWeight: 700, flexShrink: 0,
    }}>{initials}</div>
  );
}

function AddStaffModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--gray-900)' }}>Add Staff Member</div>
            <div style={{ fontSize: 12.5, color: 'var(--gray-500)', marginTop: 2 }}>Create a new staff record</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ fontSize: 18, padding: '0 6px' }}>×</button>
        </div>
        <div className="modal-body">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div className="form-group">
              <label className="label">First Name <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" placeholder="First name" />
            </div>
            <div className="form-group">
              <label className="label">Last Name <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" placeholder="Last name" />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="label">Role / Job Title <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" placeholder="e.g. Administrative Officer" />
            </div>
            <div className="form-group">
              <label className="label">Department</label>
              <select className="select">
                <option>Technology</option>
                <option>Administration</option>
                <option>Finance</option>
                <option>Management</option>
                <option>Design</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label">Start Date</label>
              <input className="input" type="date" />
            </div>
            <div className="form-group">
              <label className="label">Phone</label>
              <input className="input" placeholder="024XXXXXXX" />
            </div>
            <div className="form-group">
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="staff@giff.gh" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onClose}>Add Staff Member</button>
        </div>
      </div>
    </div>
  );
}

export default function HRPage() {
  const [activeTab, setActiveTab] = useState<'staff' | 'leave' | 'payroll'>('staff');
  const [showModal, setShowModal] = useState(false);

  const departments = [
    { name: 'Technology',    count: 12, color: deptColors.Technology    },
    { name: 'Administration', count: 6, color: deptColors.Administration },
    { name: 'Finance',        count: 4, color: deptColors.Finance        },
    { name: 'Management',     count: 3, color: deptColors.Management     },
    { name: 'Design',         count: 2, color: deptColors.Design         },
    { name: 'Operations',     count: 1, color: deptColors.Operations     },
  ];
  const maxCount = Math.max(...departments.map(d => d.count));

  return (
    <div>
      <div className="page-topbar">
        <div />
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary">Export</button>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Add Staff</button>
        </div>
      </div>

      <div className="page-title-area">
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>
          Human Resource Management
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--gray-500)', marginTop: 3 }}>
          Staff records, attendance, leave management &amp; payroll
        </p>
      </div>

      <div className="page-body">
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Total Staff',      value: '28',        color: 'var(--blue)',   bg: 'var(--blue-light)' },
            { label: 'Active',           value: '25',        color: 'var(--green)',  bg: 'var(--green-light)' },
            { label: 'On Leave',         value: '3',         color: 'var(--amber)',  bg: 'var(--amber-light)' },
            { label: 'Monthly Payroll',  value: 'GHS 132K',  color: 'var(--purple)', bg: 'var(--purple-light)' },
          ].map((s) => (
            <div key={s.label} className="metric-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="icon-wrap" style={{ background: s.bg, color: s.color, width: 40, height: 40 }}>
                <div style={{ width: 12, height: 12, borderRadius: 2, background: s.color, opacity: 0.8 }} />
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--gray-500)', marginTop: 3 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dept chart */}
        <div className="card" style={{ padding: 20, marginBottom: 24 }}>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--gray-800)', marginBottom: 20 }}>Staff by Department</div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 100 }}>
            {departments.map((d) => (
              <div key={d.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--gray-800)' }}>{d.count}</div>
                <div style={{
                  width: '100%', borderRadius: '4px 4px 0 0',
                  background: d.color, opacity: 0.85,
                  height: `${(d.count / maxCount) * 60}px`, minHeight: 4,
                }} />
                <div style={{ fontSize: 10.5, color: 'var(--gray-500)', textAlign: 'center' }}>{d.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ background: '#fff', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', border: '1px solid var(--gray-200)', borderBottom: 'none' }}>
          <div className="tabs" style={{ padding: '0 4px' }}>
            {[
              { key: 'staff',   label: 'Staff Records' },
              { key: 'leave',   label: 'Leave Requests' },
              { key: 'payroll', label: 'Payroll' },
            ].map((t) => (
              <button key={t.key} className={`tab${activeTab === t.key ? ' active' : ''}`}
                onClick={() => setActiveTab(t.key as typeof activeTab)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="card" style={{ borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>
          {/* Staff Records Tab */}
          {activeTab === 'staff' && (
            <>
              <div className="card-header">
                <div style={{ display: 'flex', gap: 10 }}>
                  <input className="input" style={{ width: 240 }} placeholder="Search staff..." />
                  <select className="select" style={{ width: 160 }}>
                    <option>All Departments</option>
                    <option>Technology</option>
                    <option>Administration</option>
                    <option>Finance</option>
                  </select>
                </div>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Staff ID</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Status</th>
                      <th>Leave Balance</th>
                      <th>Attendance</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map((s) => {
                      const remaining = s.leave - s.leaveUsed;
                      const pct = (remaining / s.leave) * 100;
                      const leaveColor = pct > 50 ? 'var(--green)' : pct > 20 ? 'var(--amber)' : 'var(--red)';
                      const attColor = s.attendance >= 95 ? 'var(--green)' : s.attendance >= 90 ? 'var(--amber)' : 'var(--red)';
                      return (
                        <tr key={s.id}>
                          <td><span className="mono muted">{s.id}</span></td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <Avatar name={s.name} dept={s.dept} />
                              <div>
                                <div style={{ fontWeight: 500, color: 'var(--gray-900)', fontSize: 13.5 }}>{s.name}</div>
                                <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{s.role}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span style={{
                              fontSize: 12, padding: '3px 8px', borderRadius: 5,
                              background: deptBg[s.dept] || 'var(--blue-light)',
                              color: deptColors[s.dept] || 'var(--blue)', fontWeight: 600,
                            }}>{s.dept}</span>
                          </td>
                          <td>
                            <span className={`badge ${s.status === 'Active' ? 'badge-green' : 'badge-yellow'}`}>
                              {s.status}
                            </span>
                          </td>
                          <td>
                            <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--gray-800)', marginBottom: 4 }}>
                              {remaining} of {s.leave} days
                            </div>
                            <div className="progress">
                              <div style={{ width: `${pct}%`, background: leaveColor }} />
                            </div>
                          </td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span style={{ fontSize: 13, fontWeight: 700, color: attColor, minWidth: 36 }}>
                                {s.attendance}%
                              </span>
                              <div className="progress" style={{ flex: 1 }}>
                                <div style={{ width: `${s.attendance}%`, background: attColor }} />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div style={{ display: 'flex', gap: 6 }}>
                              <button className="btn btn-secondary btn-sm">View</button>
                              <button className="btn btn-secondary btn-sm">Edit</button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Leave Tab */}
          {activeTab === 'leave' && (
            <>
              <div className="card-header">
                <span style={{ fontSize: 13, color: 'var(--gray-500)' }}>
                  4 requests · <span style={{ color: 'var(--amber)', fontWeight: 600 }}>2 pending approval</span>
                </span>
                <button className="btn btn-primary btn-sm">+ New Request</button>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Request ID</th>
                      <th>Staff Member</th>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Days</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRequests.map((req) => (
                      <tr key={req.id}>
                        <td><span className="mono muted">{req.id}</span></td>
                        <td style={{ fontWeight: 500 }}>{req.staff}</td>
                        <td className="muted">{req.type}</td>
                        <td className="muted">{req.from}</td>
                        <td className="muted">{req.to}</td>
                        <td style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{req.days}</td>
                        <td style={{ maxWidth: 180 }} className="muted">{req.reason}</td>
                        <td>
                          <span className={`badge ${req.status === 'Approved' ? 'badge-green' : 'badge-yellow'}`}>
                            {req.status}
                          </span>
                        </td>
                        <td>
                          {req.status === 'Pending' ? (
                            <div style={{ display: 'flex', gap: 6 }}>
                              <button className="btn btn-success btn-sm">Approve</button>
                              <button className="btn btn-danger btn-sm">Reject</button>
                            </div>
                          ) : (
                            <button className="btn btn-secondary btn-sm">View</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Payroll Tab */}
          {activeTab === 'payroll' && (
            <>
              <div className="card-header">
                <select className="select" style={{ width: 180 }}>
                  <option>February 2026</option>
                  <option>January 2026</option>
                  <option>December 2025</option>
                </select>
                <button className="btn btn-primary btn-sm">Run Payroll</button>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Staff</th>
                      <th>Department</th>
                      <th>Basic Salary</th>
                      <th>Allowances (+15%)</th>
                      <th>Deductions (−5.5%)</th>
                      <th>Net Pay</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.slice(0, 6).map((s) => {
                      const allowance  = Math.round(s.salaryRaw * 0.15);
                      const deductions = Math.round(s.salaryRaw * 0.055);
                      const net        = s.salaryRaw + allowance - deductions;
                      return (
                        <tr key={s.id}>
                          <td>
                            <div style={{ fontWeight: 500, color: 'var(--gray-900)', fontSize: 13.5 }}>{s.name}</div>
                            <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{s.role}</div>
                          </td>
                          <td className="muted">{s.dept}</td>
                          <td style={{ fontWeight: 600 }}>GHS {s.salaryRaw.toLocaleString()}</td>
                          <td style={{ color: 'var(--green)', fontWeight: 500 }}>+{allowance.toLocaleString()}</td>
                          <td style={{ color: 'var(--red)', fontWeight: 500 }}>−{deductions.toLocaleString()}</td>
                          <td style={{ fontWeight: 700, color: 'var(--gray-900)' }}>GHS {net.toLocaleString()}</td>
                          <td><span className="badge badge-green">Processed</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <span style={{ fontSize: 12.5, color: 'var(--gray-500)' }}>Total payroll · February 2026</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--gray-900)' }}>GHS 132,450.00</span>
              </div>
            </>
          )}
        </div>
      </div>

      {showModal && <AddStaffModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
