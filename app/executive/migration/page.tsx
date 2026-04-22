import { cutoverChecklist, migrationExceptions, migrationSources } from '../../lib/executive-demo-data';

export default function ExecutiveMigrationPage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Data Migration</div>
        <h1 className="executive-display executive-display-sm">Migration & Legacy Records</h1>
        <p className="executive-lead executive-lead-compact">
          Control the transition from paper files and spreadsheets into a secure digital archive with validation and rollback discipline.
        </p>
      </div>

      <div className="page-body">
        <div className="executive-grid executive-grid-4 executive-section">
          <article className="metric-card">
            <div className="metric-label">Records Inventoried</div>
            <div className="metric-value">12.4k</div>
            <div className="metric-delta">Legacy files catalogued across all workstreams.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Migrated</div>
            <div className="metric-value">8.9k</div>
            <div className="metric-delta">Imported into controlled staging archive.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Exceptions</div>
            <div className="metric-value">37</div>
            <div className="metric-delta">Outstanding data-quality or linking issues.</div>
          </article>
          <article className="metric-card-dark">
            <div className="metric-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Cutover Readiness</div>
            <div className="metric-value" style={{ color: '#fff' }}>82%</div>
            <div className="metric-delta" style={{ color: 'rgba(255,255,255,0.65)' }}>Final validation depends on finance receipt reconciliation.</div>
          </article>
        </div>

        <div className="executive-grid executive-grid-main-aside executive-section">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Source Systems & Archives</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Legacy repositories to be indexed, cleaned, and migrated into the platform.
                </div>
              </div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 12 }}>
              {migrationSources.map((source) => (
                <div key={source.source} className="docket-card">
                  <div className="flex-between" style={{ gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                    <div className="strong">{source.source}</div>
                    <span className={`badge ${source.statusClass}`}>{source.progress}</span>
                  </div>
                  <div className="field-label">Scope</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6 }}>{source.scope}</p>
                  <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>{source.note}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <div className="executive-panel-title">Cutover Checklist</div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 10 }}>
              {cutoverChecklist.map((item) => (
                <div key={item.label} className="workspace-item" style={{ cursor: 'default' }}>
                  <span className={`badge ${item.done ? 'badge-green' : 'badge-yellow'}`}>{item.done ? 'Done' : 'Pending'}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="card">
          <div className="card-header">
            <div>
              <div className="executive-panel-title">Migration Exception Queue</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                Exceptions are isolated before import to protect integrity and auditability.
              </div>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Record</th>
                  <th>Issue</th>
                  <th>Resolution Path</th>
                </tr>
              </thead>
              <tbody>
                {migrationExceptions.map((entry) => (
                  <tr key={entry.record}>
                    <td className="strong">{entry.domain}</td>
                    <td className="mono">{entry.record}</td>
                    <td>{entry.issue}</td>
                    <td>{entry.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </>
  );
}
