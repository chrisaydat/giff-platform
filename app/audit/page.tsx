'use client';

const auditLogs = [
  { time: '18 Feb 2026, 09:14', user: 'Admin', action: 'Member Registered', detail: 'New member Kwame Asante (GIFF-0001) added', ip: '41.203.64.12', severity: 'info' },
  { time: '18 Feb 2026, 09:02', user: 'Admin', action: 'Payment Collected', detail: 'GHS 450 received from Ama Boateng via MTN MoMo', ip: '41.203.64.12', severity: 'success' },
  { time: '18 Feb 2026, 08:47', user: 'K. Mensah', action: 'Leave Request', detail: 'Leave request submitted for 01–07 Mar 2026', ip: '154.161.12.45', severity: 'info' },
  { time: '17 Feb 2026, 15:30', user: 'Admin', action: 'Invoice Generated', detail: 'Batch invoices generated for 87 members (INV-2026-0760 to 0847)', ip: '41.203.64.12', severity: 'info' },
  { time: '17 Feb 2026, 14:12', user: 'Admin', action: 'User Login', detail: 'Successful login from IP 41.203.64.12', ip: '41.203.64.12', severity: 'info' },
  { time: '17 Feb 2026, 11:00', user: 'System', action: 'Automated Backup', detail: 'Daily database backup completed successfully', ip: 'system', severity: 'success' },
  { time: '16 Feb 2026, 16:45', user: 'Admin', action: 'Expense Recorded', detail: 'GHS 5,000 conference hall rental recorded', ip: '41.203.64.12', severity: 'info' },
  { time: '16 Feb 2026, 09:00', user: 'System', action: 'Renewal Reminders', detail: 'Automated renewal reminders sent to 43 members', ip: 'system', severity: 'success' },
];

const severityColor: Record<string, string> = {
  info: '#007aff',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
};

export default function AuditPage() {
  return (
    <div>
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '28px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>Audit Trail</h1>
            <p style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>Complete log of all system actions for accountability and transparency</p>
          </div>
          <button style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 18px', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
            📤 Export Logs
          </button>
        </div>
      </div>
      <div style={{ padding: 32 }}>
        <div style={{ background: 'white', borderRadius: 12, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #f3f4f6', display: 'flex', gap: 12 }}>
            <input style={{ border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 12px', fontSize: 14, outline: 'none', width: 280 }} placeholder="🔍  Search logs..." />
            <select style={{ border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 12px', fontSize: 14 }}>
              <option>All Actions</option>
              <option>Member Actions</option>
              <option>Payments</option>
              <option>System</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Detail</th>
                <th>IP Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log, i) => (
                <tr key={i}>
                  <td style={{ fontFamily: 'monospace', fontSize: 12, color: '#6b7280' }}>{log.time}</td>
                  <td style={{ fontWeight: 500 }}>{log.user}</td>
                  <td style={{ fontWeight: 600, color: '#111827' }}>{log.action}</td>
                  <td style={{ color: '#374151', maxWidth: 300 }}>{log.detail}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12, color: '#9ca3af' }}>{log.ip}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: severityColor[log.severity] }}></div>
                      <span style={{ fontSize: 12, color: severityColor[log.severity], fontWeight: 500, textTransform: 'capitalize' }}>
                        {log.severity}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '16px 20px', borderTop: '1px solid #f3f4f6' }}>
            <span style={{ fontSize: 13, color: '#6b7280' }}>Showing {auditLogs.length} of 1,284 log entries</span>
          </div>
        </div>
      </div>
    </div>
  );
}
