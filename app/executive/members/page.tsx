import { memberRegistry, renewalQueue } from '../../lib/executive-demo-data';

export default function ExecutiveMembersPage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Membership</div>
        <h1 className="executive-display executive-display-sm">Membership Management</h1>
        <p className="executive-lead executive-lead-compact">
          Review applications, renewals, member standing, compliance status, and approval decisions in one workspace.
        </p>
      </div>

      <div className="page-body">
        <div className="executive-grid executive-grid-4 executive-section">
          <article className="metric-card">
            <div className="metric-label">Active Members</div>
            <div className="metric-value">2,450</div>
            <div className="metric-delta">Institutional records in good standing.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Renewals in Review</div>
            <div className="metric-value">64</div>
            <div className="metric-delta">Awaiting compliance verification or dues action.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">New Applications</div>
            <div className="metric-value">11</div>
            <div className="metric-delta">Pending screening and board recommendation.</div>
          </article>
          <article className="metric-card-dark">
            <div className="metric-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Standing Alerts</div>
            <div className="metric-value" style={{ color: '#fff' }}>9</div>
            <div className="metric-delta" style={{ color: '#fbbf24' }}>Members require immediate compliance or dues intervention.</div>
          </article>
        </div>

        <div className="executive-grid executive-grid-main-aside executive-section">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Renewal Review Queue</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Officer-facing queue for document checks, dues validation, and approval actions.
                </div>
              </div>
              <button type="button" className="btn btn-secondary">Export Queue</button>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 12 }}>
              {renewalQueue.map((entry) => (
                <div key={entry.reference} className="docket-card">
                  <div className="flex-between" style={{ gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <div>
                      <div className="strong">{entry.member}</div>
                      <div className="mono muted" style={{ marginTop: 3 }}>{entry.reference}</div>
                    </div>
                    <span className={`badge ${entry.standingClass}`}>{entry.standing}</span>
                  </div>
                  <p className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>{entry.blocker}</p>
                  <div className="flex-between" style={{ marginTop: 12, gap: 12, flexWrap: 'wrap' }}>
                    <span className="muted" style={{ fontSize: 12 }}>Due {entry.dueDate}</span>
                    <div className="flex-end">
                      <button type="button" className="btn btn-ghost btn-sm">Request Update</button>
                      <button type="button" className="btn btn-primary btn-sm">Open Review</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <div className="executive-panel-title">Approval Controls</div>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="state-row">
                <div className="field-label">Standing Logic</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                  Member status is calculated from dues position, compliance archive, and approval history.
                </p>
              </div>
              <div className="state-row">
                <div className="field-label">Renewal Workflow</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                  Officers can route records from review to approved, flagged, or suspended without leaving the queue.
                </p>
              </div>
              <div className="state-row">
                <div className="field-label">Member Search</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                  The full registry supports lookups by member ID, organization, class, standing, and renewal reference.
                </p>
              </div>
              <div className="flex-end" style={{ justifyContent: 'flex-start', marginTop: 4 }}>
                <button type="button" className="btn btn-dark">Create New Application</button>
              </div>
            </div>
          </article>
        </div>

        <article className="card">
          <div className="card-header">
            <div>
              <div className="executive-panel-title">Member Registry</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                Registry view combining standing, dues position, and compliance coverage.
              </div>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Tier</th>
                  <th>Standing</th>
                  <th>Dues Status</th>
                  <th>Compliance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {memberRegistry.map((member) => (
                  <tr key={member.member}>
                    <td className="strong">{member.member}</td>
                    <td>{member.tier}</td>
                    <td><span className={`badge ${member.standingClass}`}>{member.standing}</span></td>
                    <td><span className={`badge ${member.duesClass}`}>{member.dues}</span></td>
                    <td>{member.compliance}</td>
                    <td>
                      <button type="button" className="btn btn-ghost btn-sm">Open File</button>
                    </td>
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
