const governancePolicies = [
  { title: 'Access Review Window', value: 'Quarterly', note: 'Next review opens on 1 Jul 2026.' },
  { title: 'Regional Escalation SLA', value: '48 Hours', note: 'Applies to audit and finance exceptions.' },
  { title: 'Executive Digest Delivery', value: 'Weekdays 08:00 GMT', note: 'Sent to council and secretariat leads.' },
];

export default function ExecutiveSettingsPage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Governance</div>
        <h1 className="executive-display executive-display-sm">Executive Settings</h1>
        <p className="executive-lead executive-lead-compact">
          Governance controls, escalation rules, and notification policy for the executive operating layer.
        </p>
      </div>

      <div className="page-body">
        <div className="card">
          <div className="card-header">
            <span className="executive-panel-title">Governance Controls</span>
          </div>
          <div className="card-body" style={{ display: 'grid', gap: 16 }}>
            {governancePolicies.map((policy) => (
              <div key={policy.title} style={{ padding: 16, borderRadius: 12, background: '#fff', border: '1px solid var(--gray-200)' }}>
                <div className="executive-overline" style={{ marginBottom: 6 }}>
                  {policy.title}
                </div>
                <div className="executive-value">{policy.value}</div>
                <p style={{ fontSize: 13, color: 'var(--gray-500)' }}>{policy.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
