'use client';

import { useState } from 'react';

const members = [
  { id: 'GIFF-0001', name: 'Kwame Asante',     company: 'Asante Freight Ltd',      email: 'k.asante@freight.gh',    phone: '0244 123 456', status: 'Active',     tier: 'Full Member', joined: 'Jan 2019', renewal: 'Jan 2027', paid: true },
  { id: 'GIFF-0002', name: 'Ama Boateng',       company: 'Boateng Logistics',       email: 'ama@bloghana.com',        phone: '0201 987 654', status: 'Active',     tier: 'Associate',   joined: 'Mar 2021', renewal: 'Mar 2027', paid: true },
  { id: 'GIFF-0003', name: 'Emmanuel Darko',    company: 'Darko Clearing Agency',   email: 'e.darko@dca.gh',          phone: '0557 412 369', status: 'In Arrears', tier: 'Full Member', joined: 'Jun 2018', renewal: 'Jun 2026', paid: false },
  { id: 'GIFF-0004', name: 'Abena Frimpong',    company: 'Frimpong & Sons',         email: 'abena@frimpongco.gh',     phone: '0277 895 612', status: 'Active',     tier: 'Corporate',   joined: 'Sep 2020', renewal: 'Sep 2026', paid: true },
  { id: 'GIFF-0005', name: 'Kofi Mensah',       company: 'Mensah Shipping',         email: 'kofi@mship.gh',           phone: '0243 654 789', status: 'Expired',    tier: 'Associate',   joined: 'Feb 2022', renewal: 'Feb 2026', paid: false },
  { id: 'GIFF-0006', name: 'Akosua Ankrah',     company: 'Ankrah Clearing Co.',     email: 'a.ankrah@accgha.com',     phone: '0204 561 237', status: 'Active',     tier: 'Full Member', joined: 'Nov 2017', renewal: 'Nov 2026', paid: true },
  { id: 'GIFF-0007', name: 'Benjamin Tetteh',   company: 'Tetteh Cargo Services',   email: 'b.tetteh@tcs.gh',         phone: '0271 234 567', status: 'Active',     tier: 'Corporate',   joined: 'Apr 2019', renewal: 'Apr 2027', paid: true },
  { id: 'GIFF-0008', name: 'Yaa Osei',          company: 'Osei Freight Managers',   email: 'yaa.osei@ofm.gh',         phone: '0201 357 924', status: 'In Arrears', tier: 'Full Member', joined: 'Jul 2020', renewal: 'Jul 2026', paid: false },
];

const avatarColors = ['#0570de','#7c3aed','#0891b2','#065f46','#92400e'];

const statusBadge: Record<string, string> = {
  'Active':     'badge-green',
  'In Arrears': 'badge-yellow',
  'Expired':    'badge-red',
};

const tierBadge: Record<string, string> = {
  'Full Member': 'badge-blue',
  'Associate':   'badge-gray',
  'Corporate':   'badge-purple',
};

type Member = typeof members[0];

function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const colorIdx = name.charCodeAt(0) % avatarColors.length;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: avatarColors[colorIdx],
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontSize: size * 0.38, fontWeight: 700, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

function RegisterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--gray-900)' }}>Register New Member</div>
            <div style={{ fontSize: 12.5, color: 'var(--gray-500)', marginTop: 2 }}>Add a new GIFF member to the platform</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ fontSize: 18, padding: '0 6px' }}>×</button>
        </div>
        <div className="modal-body">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div className="form-group">
              <label className="label">First Name <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" placeholder="e.g. Kwame" />
            </div>
            <div className="form-group">
              <label className="label">Last Name <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" placeholder="e.g. Asante" />
            </div>
            <div className="form-group">
              <label className="label">Email Address <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" type="email" placeholder="email@company.gh" />
            </div>
            <div className="form-group">
              <label className="label">Phone Number <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" placeholder="024XXXXXXX" />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="label">Company / Organisation <span style={{ color: 'var(--red)' }}>*</span></label>
              <input className="input" placeholder="e.g. Asante Freight Ltd" />
            </div>
            <div className="form-group">
              <label className="label">Membership Tier</label>
              <select className="select">
                <option>Full Member</option>
                <option>Associate</option>
                <option>Corporate</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label">Region</label>
              <select className="select">
                <option>Greater Accra</option>
                <option>Ashanti</option>
                <option>Western</option>
                <option>Central</option>
                <option>Eastern</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onClose}>Register Member</button>
        </div>
      </div>
    </div>
  );
}

function ViewModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const fields = [
    ['Member ID', member.id],
    ['Email', member.email],
    ['Phone', member.phone],
    ['Joined', member.joined],
    ['Renewal Date', member.renewal],
    ['Dues Status', member.paid ? 'Paid' : 'Unpaid'],
  ] as const;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--gray-900)' }}>Member Profile</div>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ fontSize: 18, padding: '0 6px' }}>×</button>
        </div>
        <div className="modal-body">
          {/* Profile card */}
          <div style={{
            display: 'flex', gap: 14, padding: '16px', borderRadius: 'var(--radius)',
            background: 'var(--gray-50)', border: '1px solid var(--gray-200)', marginBottom: 20,
          }}>
            <Avatar name={member.name} size={48} />
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--gray-900)', marginBottom: 2 }}>{member.name}</div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 8 }}>{member.company}</div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span className={`badge ${tierBadge[member.tier]}`}>{member.tier}</span>
                <span className={`badge ${statusBadge[member.status]}`}>{member.status}</span>
              </div>
            </div>
          </div>

          {/* Fields */}
          {fields.map(([k, v]) => (
            <div key={k} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '9px 0', borderBottom: '1px solid var(--gray-100)',
            }}>
              <span style={{ fontSize: 13, color: 'var(--gray-500)' }}>{k}</span>
              <span style={{
                fontSize: 13, fontWeight: 500, color: k === 'Member ID' ? 'var(--gray-400)' : 'var(--gray-800)',
                fontFamily: k === 'Member ID' ? 'monospace' : 'inherit',
              }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary">Send Message</button>
          <button className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default function MembershipPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [showRegister, setShowRegister] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);

  const filtered = members.filter(m => {
    const q = search.toLowerCase();
    const matchQ = m.name.toLowerCase().includes(q) || m.company.toLowerCase().includes(q) || m.id.toLowerCase().includes(q);
    const matchF = filter === 'All' || m.status === filter;
    return matchQ && matchF;
  });

  const counts = {
    total: 1284,
    active: 1107,
    arrears: 177,
    expired: 42,
  };

  return (
    <div>
      <div className="page-title-area">
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>
          Membership Management
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--gray-500)', marginTop: 3 }}>
          Register, manage and communicate with GIFF members
        </p>
      </div>

      <div className="page-body">
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Total Members',  value: counts.total,   color: 'var(--blue)',   bg: 'var(--blue-light)' },
            { label: 'Active',         value: counts.active,  color: 'var(--green)',  bg: 'var(--green-light)' },
            { label: 'In Arrears',     value: counts.arrears, color: 'var(--amber)',  bg: 'var(--amber-light)' },
            { label: 'Expired',        value: counts.expired, color: 'var(--red)',    bg: 'var(--red-light)' },
          ].map((s) => (
            <div key={s.label} className="metric-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="icon-wrap" style={{ background: s.bg, color: s.color, width: 40, height: 40 }}>
                <div style={{ width: 12, height: 12, borderRadius: 2, background: s.color, opacity: 0.8 }} />
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', lineHeight: 1 }}>{s.value.toLocaleString()}</div>
                <div style={{ fontSize: 12, color: 'var(--gray-500)', marginTop: 3 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table card */}
        <div className="card">
          <div className="card-header">
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input
                className="input"
                style={{ width: 260 }}
                placeholder="Search name, company, ID..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <select className="select" style={{ width: 150 }} value={filter} onChange={e => setFilter(e.target.value)}>
                <option>All</option>
                <option>Active</option>
                <option>In Arrears</option>
                <option>Expired</option>
              </select>
              <select className="select" style={{ width: 150 }}>
                <option>All Tiers</option>
                <option>Full Member</option>
                <option>Associate</option>
                <option>Corporate</option>
              </select>
            </div>
            <span style={{ fontSize: 12.5, color: 'var(--gray-400)' }}>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Member ID</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Tier</th>
                  <th>Status</th>
                  <th>Renewal</th>
                  <th>Dues</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => (
                  <tr key={m.id}>
                    <td><span className="mono muted">{m.id}</span></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Avatar name={m.name} />
                        <div>
                          <div style={{ fontWeight: 500, color: 'var(--gray-900)', fontSize: 13.5 }}>{m.name}</div>
                          <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{m.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{m.company}</td>
                    <td><span className={`badge ${tierBadge[m.tier]}`}>{m.tier}</span></td>
                    <td><span className={`badge ${statusBadge[m.status]}`}>{m.status}</span></td>
                    <td className="muted">{m.renewal}</td>
                    <td>
                      <span className={`badge ${m.paid ? 'badge-green' : 'badge-red'}`}>
                        {m.paid ? 'Paid' : 'Unpaid'}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button className="btn btn-secondary btn-sm" onClick={() => setSelected(m)}>View</button>
                        <button className="btn btn-secondary btn-sm">Message</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-footer">
            <span style={{ fontSize: 12.5, color: 'var(--gray-400)' }}>
              Showing {filtered.length} of {members.length} loaded · 1,284 total members
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1, 2, 3, '…', 161].map((p, i) => (
                <button key={i} style={{
                  width: 30, height: 30, borderRadius: 'var(--radius)',
                  border: '1px solid var(--gray-200)',
                  background: p === 1 ? 'var(--blue)' : '#fff',
                  color: p === 1 ? '#fff' : 'var(--gray-600)',
                  fontSize: 12.5, cursor: 'pointer', fontWeight: p === 1 ? 600 : 400,
                }}>{p}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      {selected && <ViewModal member={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
