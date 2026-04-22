import { executiveScopeModules, implementationPhases } from '../lib/executive-demo-data';

const metrics = [
  { label: 'Scope Streams', value: '8', note: 'Assessment through training covered' },
  { label: 'Active Members', value: '2,450', note: '+18 this month' },
  { label: 'Legacy Records', value: '12.4k', note: 'Migration inventory prepared' },
  { label: 'Staff Readiness', value: '84%', note: 'Cross-functional rollout progress' },
];

const programmeTracks = [
  {
    label: 'Assess',
    title: 'Current-State Discovery',
    body: 'Map manual workflows, validate constraints, and agree the phased transformation path before build begins.',
  },
  {
    label: 'Digitize',
    title: 'Core Institutional Workflows',
    body: 'Stand up membership, dues, accounts, HR, migration, and governance workspaces as one operating platform.',
  },
  {
    label: 'Adopt',
    title: 'Enable Staff and Members',
    body: 'Support rollout with training, support cover, auditability, and a member-facing portal that reduces service friction.',
  },
] as const;

export default function ExecutivePage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Executive Layer</div>
        <h1 className="executive-display executive-display-sm">Executive Overview</h1>
        <p className="executive-lead executive-lead-compact">
          Coordinated visibility across the full EOI scope: assessment, membership, dues, accounts, HR, migration, integrations, and staff enablement.
        </p>
      </div>

      <div className="page-body">
        <div className="executive-grid executive-grid-main-aside executive-section">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Programme Scope</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  The executive side is arranged as a delivery story, not just a menu of pages.
                </div>
              </div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 8 }}>
              {programmeTracks.map((track) => (
                <div key={track.title} className="state-row">
                  <div className="executive-overline" style={{ marginBottom: 6 }}>{track.label}</div>
                  <div className="executive-panel-title" style={{ fontSize: '1.18rem' }}>{track.title}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--gray-700)', marginTop: 8 }}>
                    {track.body}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="metric-card-dark" style={{ padding: 24 }}>
            <div className="executive-overline" style={{ color: 'rgba(255,255,255,0.55)' }}>Delivery Snapshot</div>
            <div className="executive-panel-title" style={{ color: '#fff', marginTop: 10 }}>From assessment to adoption</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', marginTop: 10 }}>
              The demo mirrors the requested scope so each executive view can be mapped directly into the proposal and slide deck.
            </p>
            <div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
              {implementationPhases.map((phase, index) => (
                <div
                  key={phase.label}
                  style={{
                    paddingTop: index === 0 ? 0 : 12,
                    borderTop: index === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="executive-overline" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>
                    {`Phase ${index + 1}`}
                  </div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>{phase.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.58)', fontSize: 12, marginTop: 2 }}>{phase.owner}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="executive-grid executive-grid-4 executive-section">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-delta">{metric.note}</div>
            </article>
          ))}
        </div>

        <div className="executive-grid executive-grid-main-aside">
          <div className="card">
            <div className="card-header">
              <span className="executive-panel-title">Scope Modules</span>
            </div>
            <div className="card-body executive-grid executive-grid-2">
              {executiveScopeModules.map((module) => (
                <a
                  key={module.title}
                  href={module.href}
                  style={{
                    padding: 18,
                    borderRadius: 12,
                    background: 'var(--surface-lowest)',
                    border: '1px solid var(--outline-variant)',
                    boxShadow: 'var(--shadow-xs)',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div className="executive-module-title">{module.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.6 }}>{module.body}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="executive-panel-title">Implementation Programme</span>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 12 }}>
              {implementationPhases.map((phase, index) => (
                <div key={phase.label} className="docket-card">
                  <div className="executive-overline" style={{ marginBottom: 6 }}>{`Phase ${index + 1}`}</div>
                  <div className="executive-panel-title" style={{ fontSize: '1.15rem' }}>{phase.label}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 3 }}>{phase.owner}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--gray-700)', marginTop: 10 }}>{phase.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
