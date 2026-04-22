import { assessmentStreams, implementationPhases, painPointRegister } from '../../lib/executive-demo-data';

export default function ExecutiveAssessmentPage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Discovery</div>
        <h1 className="executive-display executive-display-sm">Assessment & Analysis</h1>
        <p className="executive-lead executive-lead-compact">
          Current-state review across membership, dues, accounts, and HR before build, migration, and rollout.
        </p>
      </div>

      <div className="page-body">
        <div className="executive-grid executive-grid-4 executive-section">
          <article className="metric-card">
            <div className="metric-label">Process Streams</div>
            <div className="metric-value">4</div>
            <div className="metric-delta">Membership, dues, accounts, and HR mapped.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Pain Points Logged</div>
            <div className="metric-value">18</div>
            <div className="metric-delta">Prioritized before proof-of-value configuration.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Target Automations</div>
            <div className="metric-value">12</div>
            <div className="metric-delta">Approval, billing, archive, and reporting workflows.</div>
          </article>
          <article className="metric-card-dark">
            <div className="metric-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Programme Readiness</div>
            <div className="metric-value" style={{ color: '#fff' }}>POV Ready</div>
            <div className="metric-delta" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Scope translated into phased delivery workstreams.
            </div>
          </article>
        </div>

        <div className="executive-grid executive-grid-main-aside executive-section">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Current-State Review</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Department-by-department assessment of pain points and recommended digitization actions.
                </div>
              </div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 14 }}>
              {assessmentStreams.map((stream) => (
                <div key={stream.area} className="docket-card">
                  <div className="flex-between" style={{ gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                    <div className="executive-panel-title" style={{ fontSize: '1.15rem' }}>{stream.area}</div>
                    <span className={`badge ${stream.priorityClass}`}>{stream.priority}</span>
                  </div>
                  <div className="field-label">Current State</div>
                  <p className="muted" style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{stream.currentState}</p>
                  <div className="field-label">Recommended Digitization</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--gray-800)' }}>{stream.recommendation}</p>
                  <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>{stream.issueCount}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <div className="executive-panel-title">Delivery Phases</div>
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {implementationPhases.map((phase, index) => (
                <div key={phase.label} className="state-row">
                  <div className="executive-overline" style={{ marginBottom: 6 }}>{`Phase ${index + 1}`}</div>
                  <div className="executive-panel-title" style={{ fontSize: '1.15rem' }}>{phase.label}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 3 }}>{phase.owner}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, marginTop: 8, color: 'var(--gray-700)' }}>{phase.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="card">
          <div className="card-header">
            <div>
              <div className="executive-panel-title">Pain Point Register</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                Priority issues carried forward into scope, proof-of-value, and implementation sequencing.
              </div>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Current Constraint</th>
                  <th>Proposed Solution</th>
                  <th>Expected Benefit</th>
                </tr>
              </thead>
              <tbody>
                {painPointRegister.map((entry) => (
                  <tr key={entry.area}>
                    <td className="strong">{entry.area}</td>
                    <td>{entry.problem}</td>
                    <td>{entry.solution}</td>
                    <td>{entry.value}</td>
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
