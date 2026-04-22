import { readinessRows, supportDeskRows, trainingTracks } from '../../lib/executive-demo-data';

const maintenanceWindows = [
  'Weekly platform health review and open-ticket triage',
  'Monthly release notes and staff refresher briefing',
  'Quarterly access review, backup validation, and policy sign-off',
] as const;

export default function ExecutiveTrainingPage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Adoption</div>
        <h1 className="executive-display executive-display-sm">Training & Support</h1>
        <p className="executive-lead executive-lead-compact">
          Prepare GIFF staff for rollout with structured onboarding, help workflows, ongoing support, and maintenance cover.
        </p>
      </div>

      <div className="page-body">
        <div className="executive-grid executive-grid-4 executive-section">
          <article className="metric-card">
            <div className="metric-label">Staff Prepared</div>
            <div className="metric-value">76</div>
            <div className="metric-delta">Named users enrolled into role-based onboarding tracks.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Next Sessions</div>
            <div className="metric-value">5</div>
            <div className="metric-delta">Training sessions queued over the next two weeks.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Support Tickets</div>
            <div className="metric-value">11</div>
            <div className="metric-delta">Issues routed through the rollout help desk.</div>
          </article>
          <article className="metric-card-dark">
            <div className="metric-label" style={{ color: 'rgba(255,255,255,0.45)' }}>SLA Attainment</div>
            <div className="metric-value" style={{ color: '#fff' }}>96%</div>
            <div className="metric-delta" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Ongoing maintenance support after go-live remains within agreed service levels.
            </div>
          </article>
        </div>

        <div className="executive-grid executive-grid-main-aside executive-section">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Training Tracks</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Role-based enablement for GIFF staff and administrators.
                </div>
              </div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 12 }}>
              {trainingTracks.map((track) => (
                <div key={track.audience} className="docket-card">
                  <div className="flex-between" style={{ gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                    <div className="strong">{track.audience}</div>
                    <span className={`badge ${track.statusClass}`}>{track.status}</span>
                  </div>
                  <p className="muted" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{track.module}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <div className="executive-panel-title">Maintenance Services</div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 12 }}>
              {maintenanceWindows.map((window) => (
                <div key={window} className="state-row">
                  <p style={{ fontSize: 13.5, lineHeight: 1.65 }}>{window}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="executive-grid executive-grid-2">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Department Readiness</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Training readiness before rollout and handover.
                </div>
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Readiness</th>
                    <th>Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {readinessRows.map((row) => (
                    <tr key={row.team}>
                      <td className="strong">{row.team}</td>
                      <td>{row.readiness}</td>
                      <td>{row.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Support Desk</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Post-training support and maintenance queue for GIFF teams.
                </div>
              </div>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Owner</th>
                    <th>Issue</th>
                    <th>SLA</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {supportDeskRows.map((ticket) => (
                    <tr key={ticket.ticket}>
                      <td className="mono">{ticket.ticket}</td>
                      <td>{ticket.owner}</td>
                      <td>{ticket.issue}</td>
                      <td>{ticket.sla}</td>
                      <td><span className={`badge ${ticket.statusClass}`}>{ticket.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
