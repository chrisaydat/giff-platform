import { governanceControls, integrationConnectors, interfaceContracts } from '../../lib/executive-demo-data';

export default function ExecutiveIntegrationsPage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Connectivity</div>
        <h1 className="executive-display executive-display-sm">Integrations & Governance</h1>
        <p className="executive-lead executive-lead-compact">
          Manage external connectors, verification services, secure data exchange, and governance controls across the platform.
        </p>
      </div>

      <div className="page-body">
        <div className="executive-grid executive-grid-4 executive-section">
          <article className="metric-card">
            <div className="metric-label">Connected Services</div>
            <div className="metric-value">4</div>
            <div className="metric-delta">Payments, notifications, verification, and accounting.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Sync Reliability</div>
            <div className="metric-value">99.2%</div>
            <div className="metric-delta">Monitored across scheduled and event-driven connectors.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Governance Rules</div>
            <div className="metric-value">12</div>
            <div className="metric-delta">Access, retention, and outbound approval policies.</div>
          </article>
          <article className="metric-card-dark">
            <div className="metric-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Security Posture</div>
            <div className="metric-value" style={{ color: '#fff' }}>Controlled</div>
            <div className="metric-delta" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Data exchange is role-gated, logged, and auditable.
            </div>
          </article>
        </div>

        <div className="executive-grid executive-grid-main-aside executive-section">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Connected Services</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Integrations required to support billing, communication, exports, and verification.
                </div>
              </div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 12 }}>
              {integrationConnectors.map((connector) => (
                <div key={connector.name} className="docket-card">
                  <div className="flex-between" style={{ gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                    <div className="strong">{connector.name}</div>
                    <span className={`badge ${connector.statusClass}`}>{connector.status}</span>
                  </div>
                  <p className="muted" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{connector.purpose}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <div className="executive-panel-title">Governance Controls</div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 14 }}>
              {governanceControls.map((control) => (
                <div key={control.title} className="state-row">
                  <div className="field-label">{control.title}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65 }}>{control.note}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="card">
          <div className="card-header">
            <div>
              <div className="executive-panel-title">Interface Contracts</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                Explicit integration boundaries for secure data handling and operational accountability.
              </div>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Integration</th>
                  <th>Data Exchanged</th>
                  <th>Cadence</th>
                  <th>Security Control</th>
                </tr>
              </thead>
              <tbody>
                {interfaceContracts.map((contract) => (
                  <tr key={contract.integration}>
                    <td className="strong">{contract.integration}</td>
                    <td>{contract.data}</td>
                    <td>{contract.cadence}</td>
                    <td>{contract.control}</td>
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
